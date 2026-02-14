import * as THREE from 'three';
import { SceneManager } from '@core/SceneManager';
import { InputManager } from '@core/InputManager';
import { Player } from '@gameplay/Player';
import { TrackManager } from '@gameplay/TrackManager';
import { ObstacleSpawner } from '@gameplay/ObstacleSpawner';
import { CollectibleSystem } from '@gameplay/CollectibleSystem';
import { ScoreManager } from '@gameplay/ScoreManager';
import { DifficultyManager } from '@gameplay/DifficultyManager';
import { PowerUpManager } from '@gameplay/PowerUpManager';
import { ComboSystem } from '@gameplay/ComboSystem';
import { LevelPatternManager } from '@gameplay/LevelPatternManager';
import { ZoneManager } from '@gameplay/ZoneManager';
import { Environment } from '@world/Environment';
import { ParticleSystem } from '@vfx/ParticleSystem';
import { SandTrail } from '@vfx/SandTrail';
import { ScreenShake } from '@vfx/ScreenEffects';
import { lerp } from '@utils/MathUtils';
import { audioManager } from '@core/AudioManager';
import { eventBus } from '@core/EventBus';
import type { PowerUpType } from '@gameplay/PowerUpManager';
import type { PatternSection } from '@gameplay/LevelPatternManager';

type GameState = 'menu' | 'playing' | 'gameover';

// DOM refs
const startScreen = document.getElementById('start-screen')!;
const gameOverScreen = document.getElementById('game-over')!;
const hud = document.getElementById('hud')!;
const scoreLabel = document.getElementById('score-label')!;
const hiLabel = document.getElementById('hi-label')!;
const finalScoreEl = document.getElementById('final-score')!;
const highScoreEl = document.getElementById('high-score')!;
const btnPlay = document.getElementById('btn-play')!;
const btnRestart = document.getElementById('btn-restart')!;
const btnSound = document.getElementById('btn-sound')!;
const comboDisplay = document.getElementById('combo-display')!;
const comboCountEl = document.getElementById('combo-count')!;
const comboMultiplierEl = document.getElementById('combo-multiplier')!;
const powerupBar = document.getElementById('powerup-bar')!;
const sectionAnnounce = document.getElementById('section-announce')!;
const zoneAnnounce = document.getElementById('zone-announce')!;
const zoneNameEl = document.getElementById('zone-name')!;

// Colors for VFX
const GOLD = new THREE.Color(0xffd700);
const RED = new THREE.Color(0xff4444);
const CYAN = new THREE.Color(0x44aaff);
const GREEN = new THREE.Color(0x00ffaa);

// Power-up display config
const POWERUP_ICONS: Record<PowerUpType, string> = {
  magnet: 'M',
  shield: 'S',
  multiplier: 'x2',
  megawave: 'W',
  slowmo: 'SL',
};
const POWERUP_COLORS: Record<PowerUpType, string> = {
  magnet: '#ff4444',
  shield: '#44aaff',
  multiplier: '#ffdd00',
  megawave: '#00ffaa',
  slowmo: '#cc66ff',
};
const POWERUP_LABELS: Record<PowerUpType, string> = {
  magnet: 'Iman',
  shield: 'Escudo',
  multiplier: 'x2',
  megawave: 'Mega Ola',
  slowmo: 'Slow Mo',
};

// Pattern section display names
const SECTION_NAMES: Record<string, string> = {
  rockField: 'Campo de Rocas',
  coinCorridor: 'Pasillo de Medialunas',
  slalom: 'Slalom',
  rampJump: 'Rampa!',
  bonus: 'Bonus!!',
};

export class Game {
  private sceneManager: SceneManager;
  private input: InputManager | null = null;
  private player: Player;
  private track: TrackManager;
  private obstacles: ObstacleSpawner;
  private collectibles: CollectibleSystem;
  private score: ScoreManager;
  private difficulty: DifficultyManager;
  private environment: Environment;

  // Phase 5 systems
  private powerUps: PowerUpManager;
  private combo: ComboSystem;
  private patterns: LevelPatternManager;

  // Phase 7: Zones
  private zones: ZoneManager;

  // VFX
  private collectParticles: ParticleSystem;
  private crashParticles: ParticleSystem;
  private powerUpParticles: ParticleSystem;
  private sandTrail: SandTrail;
  private screenShake: ScreenShake;

  private state: GameState = 'menu';
  private animId = 0;

  // Camera tracking
  private cameraTargetZ = 0;
  private baseFov = 60;

  // Audio: track previous player state for land/jump SFX
  private prevPlayerState: string = 'running';

  // Section announce timer
  private sectionAnnounceTimer = 0;

  // Zone announce timer
  private zoneAnnounceTimer = 0;

  constructor() {
    this.sceneManager = new SceneManager();
    this.input = new InputManager();
    this.player = new Player(this.sceneManager.scene);
    this.track = new TrackManager(this.sceneManager.scene);
    this.obstacles = new ObstacleSpawner(this.sceneManager.scene);
    this.collectibles = new CollectibleSystem(this.sceneManager.scene);
    this.score = new ScoreManager();
    this.difficulty = new DifficultyManager();
    this.environment = new Environment(this.sceneManager.scene);

    // Phase 5 systems
    this.powerUps = new PowerUpManager(this.sceneManager.scene);
    this.combo = new ComboSystem();
    this.patterns = new LevelPatternManager();

    // Phase 7: Zones
    this.zones = new ZoneManager();

    // VFX
    this.collectParticles = new ParticleSystem(this.sceneManager.scene);
    this.crashParticles = new ParticleSystem(this.sceneManager.scene);
    this.powerUpParticles = new ParticleSystem(this.sceneManager.scene);
    this.sandTrail = new SandTrail(this.sceneManager.scene);
    this.screenShake = new ScreenShake();

    // UI
    hiLabel.textContent = `HI: ${this.score.hiScore}`;
    btnPlay.addEventListener('click', () => {
      audioManager.init();
      audioManager.play('uiClick');
      this.start();
    });
    btnRestart.addEventListener('click', () => {
      audioManager.play('uiClick');
      this.start();
    });

    // Keyboard shortcut to start
    window.addEventListener('keydown', (e) => {
      if (e.code === 'Space' && this.state !== 'playing') {
        e.preventDefault();
        audioManager.init();
        audioManager.play('uiClick');
        this.start();
      }
    });

    // Sound toggle
    btnSound.addEventListener('click', () => {
      audioManager.init();
      const muted = audioManager.toggleMute();
      btnSound.textContent = muted ? '🔇' : '🔊';
    });

    // Lane switch audio
    eventBus.on('input:swipe', () => {
      if (this.state === 'playing') {
        audioManager.play('laneSwitch');
        audioManager.vibrateLaneSwitch();
      }
    });

    // Render the scene once so the player sees something behind the menu
    this.sceneManager.render();
  }

  private start(): void {
    // Reset everything
    this.player.reset();
    this.track.reset();
    this.obstacles.reset();
    this.collectibles.reset();
    this.score.reset();
    this.difficulty.reset();
    this.screenShake.reset();
    this.environment.reset();
    this.powerUps.reset();
    this.combo.reset();
    this.patterns.reset();
    this.zones.reset();
    this.obstacles.currentZone = 'chapadmalal';

    // Apply initial zone colors
    const initialColors = this.zones.getBlendedColors();
    this.environment.applyZoneColors(initialColors);
    this.track.setColors(initialColors.trackSand, initialColors.trackBase, initialColors.trackDivider, initialColors.trackEdge);

    // UI
    startScreen.classList.add('hidden');
    gameOverScreen.classList.remove('active');
    hud.classList.add('active');
    comboDisplay.classList.remove('active');
    powerupBar.innerHTML = '';
    sectionAnnounce.classList.remove('active');
    zoneAnnounce.classList.remove('active');

    this.state = 'playing';
    this.cameraTargetZ = 0;
    this.prevPlayerState = 'running';
    this.sectionAnnounceTimer = 0;
    this.zoneAnnounceTimer = 0;

    // Start music
    audioManager.startMusic();

    // Start loop
    if (this.animId) cancelAnimationFrame(this.animId);
    this.loop();
  }

  private loop = (): void => {
    if (this.state !== 'playing') return;
    this.animId = requestAnimationFrame(this.loop);

    const dt = Math.min(this.sceneManager.getDelta(), 0.05); // cap delta
    this.difficulty.update(dt);

    // Apply slow-mo power-up to effective speed
    const speedMultiplier = this.powerUps.getSpeedMultiplier();
    const speed = this.difficulty.speed * speedMultiplier;

    // Update systems
    this.player.update(dt, speed);

    // Audio: detect player state transitions
    const curState = this.player.state;
    if (curState !== this.prevPlayerState) {
      if (curState === 'jumping') audioManager.play('jump');
      if (curState === 'sliding') audioManager.play('slide');
      if (curState === 'running' && this.prevPlayerState === 'jumping') audioManager.play('land');
      this.prevPlayerState = curState;
    }

    this.track.update(this.player.posZ);
    this.obstacles.update(this.player.posZ, speed);
    this.collectibles.update(
      this.player.posZ,
      dt,
      this.powerUps.isMagnetActive(),
      this.player.mesh.position.x,
    );
    this.environment.update(this.player.posZ, dt);
    this.powerUps.update(this.player.posZ, dt);

    // Phase 7: Zone transitions
    this.updateZones(dt);

    // Level patterns
    this.updatePatterns();

    // VFX
    this.collectParticles.update(dt);
    this.crashParticles.update(dt);
    this.powerUpParticles.update(dt);
    this.sandTrail.update(
      dt,
      this.player.mesh.position.x,
      this.player.mesh.position.y,
      this.player.posZ,
      this.player.state === 'running' || this.player.state === 'sliding',
    );
    this.screenShake.update(dt);

    // Combo system
    this.combo.update(dt);
    if (this.combo.brokeThisFrame && this.combo.combo === 0) {
      audioManager.play('comboBreak');
    }

    // Calculate combined multiplier: combo * power-up
    const comboMult = this.combo.multiplier;
    const puMult = this.powerUps.getScoreMultiplier();
    const totalMult = comboMult * puMult;
    this.score.displayMultiplier = totalMult;

    // Score from distance
    this.score.addDistance(speed * dt * 0.5, totalMult);

    // Collect power-ups
    const collectedPU = this.powerUps.checkCollection(
      this.player.mesh.position.x,
      this.player.mesh.position.y,
      this.player.posZ,
    );
    if (collectedPU) {
      this.onPowerUpCollected(collectedPU);
    }

    // Collect items
    const collected = this.collectibles.checkCollection(
      this.player.mesh.position.x,
      this.player.mesh.position.y,
      this.player.posZ,
      this.powerUps.isActive('megawave'),
    );
    if (collected > 0) {
      this.score.addPoints(collected, totalMult);
      this.combo.addCollect(this.collectibles.lastCollectedCount);
      audioManager.play('collect');
      audioManager.vibrateCollect();

      // Gold sparkle effect at player position
      this.collectParticles.emit(
        this.player.mesh.position.x,
        this.player.mesh.position.y + 1,
        this.player.posZ,
        GOLD,
      );

      // Combo level-up sound
      if (this.combo.levelUpThisFrame) {
        audioManager.play('comboUp');
      }
    }

    // Collision detection (with shield / invincibility)
    if (this.checkCollisions()) {
      // Check shield first
      if (this.powerUps.useShield()) {
        audioManager.play('shieldBreak');
        this.player.setShieldVisible(false);
        this.screenShake.trigger(0.3);
        this.crashParticles.emit(
          this.player.mesh.position.x,
          this.player.mesh.position.y + 0.8,
          this.player.posZ,
          CYAN,
        );
      } else if (!this.powerUps.isInvincible()) {
        this.gameOver();
        return;
      }
    }

    // Shield visual sync
    this.player.setShieldVisible(this.powerUps.isActive('shield'));

    // Camera follow with dynamic FOV
    this.updateCamera(dt);

    // HUD updates
    this.updateHUD(dt);

    // Render
    this.sceneManager.render();
  };

  private onPowerUpCollected(type: PowerUpType): void {
    audioManager.play('powerUp');
    audioManager.vibrateCollect();

    // VFX flash
    const color = type === 'megawave' ? GREEN : type === 'shield' ? CYAN : GOLD;
    this.powerUpParticles.emit(
      this.player.mesh.position.x,
      this.player.mesh.position.y + 1,
      this.player.posZ,
      color,
    );
    this.screenShake.trigger(0.2);

    // Shield visual
    if (type === 'shield') {
      this.player.setShieldVisible(true);
    }
  }

  private updatePatterns(): void {
    const pattern = this.patterns.getPatternAt(this.player.posZ);
    if (pattern) {
      this.spawnPattern(pattern);
    }

    // Section announce timer
    if (this.sectionAnnounceTimer > 0) {
      this.sectionAnnounceTimer -= 0.016;
      if (this.sectionAnnounceTimer <= 0) {
        sectionAnnounce.classList.remove('active');
      }
    }
  }

  private spawnPattern(pattern: PatternSection): void {
    const startZ = this.patterns.getPatternStartZ();

    // Suppress random spawning during pattern zone
    this.obstacles.suppressUntil(startZ + pattern.length + 15);
    this.collectibles.suppressUntil(startZ + pattern.length + 10);

    // Spawn pattern obstacles and collectibles
    if (pattern.obstacles.length > 0) {
      this.obstacles.spawnFromPattern(pattern.obstacles, startZ);
    }
    if (pattern.collectibles.length > 0) {
      this.collectibles.spawnFromPattern(pattern.collectibles, startZ);
    }

    // Ramp: trigger a ramp jump when the player reaches the section start
    if (pattern.hasRamp) {
      // Auto-trigger ramp jump (player will jump higher)
      this.player.rampJump();
    }

    // Show section name
    const name = SECTION_NAMES[pattern.type] || pattern.type;
    sectionAnnounce.textContent = name;
    sectionAnnounce.classList.add('active');
    this.sectionAnnounceTimer = 2.0;
  }

  private updateZones(dt: number): void {
    const wasTransitioning = this.zones.isTransitioning;
    this.zones.update(this.player.posZ, dt);

    // Only apply blended colors during active transitions (not every frame when stable)
    if (this.zones.isTransitioning || this.zones.zoneChangedThisFrame || (wasTransitioning && !this.zones.isTransitioning)) {
      const colors = this.zones.getBlendedColors();
      this.environment.applyZoneColors(colors);
      this.track.setColors(colors.trackSand, colors.trackBase, colors.trackDivider, colors.trackEdge);
    }

    // When a new zone transition starts, show zone name and update spawners
    if (this.zones.zoneChangedThisFrame) {
      zoneNameEl.textContent = this.zones.newZoneName;
      zoneAnnounce.classList.remove('active');
      void zoneAnnounce.offsetWidth; // force reflow
      zoneAnnounce.classList.add('active');
      this.zoneAnnounceTimer = 3.0;

      // Update obstacle and decor zones to the NEXT zone
      const nextZone = this.zones.nextZone;
      if (nextZone) {
        this.obstacles.currentZone = nextZone.id;
        this.environment.switchDecorZone(nextZone.id);

        // Update music
        const musicCfg = this.zones.getBlendedMusicConfig();
        audioManager.setMusicConfig(musicCfg.chords, musicCfg.tempo, musicCfg.bassType);
      }
    }

    // Zone announce timer
    if (this.zoneAnnounceTimer > 0) {
      this.zoneAnnounceTimer -= dt;
      if (this.zoneAnnounceTimer <= 0) {
        zoneAnnounce.classList.remove('active');
      }
    }
  }

  private updateHUD(_dt: number): void {
    // Score
    const mult = this.score.displayMultiplier;
    if (mult > 1) {
      scoreLabel.textContent = `${this.score.score} pts (x${mult})`;
    } else {
      scoreLabel.textContent = `${this.score.score} pts`;
    }

    // Combo display
    if (this.combo.combo >= 3) {
      comboDisplay.classList.add('active');
      comboCountEl.textContent = `${this.combo.combo} combo`;
      if (this.combo.multiplier > 1) {
        comboMultiplierEl.textContent = `x${this.combo.multiplier}`;
      } else {
        comboMultiplierEl.textContent = '';
      }
      // Pulse animation on new collect
      if (this.collectibles.lastCollectedCount > 0) {
        comboDisplay.classList.remove('pulse');
        // Force reflow to restart animation
        void comboDisplay.offsetWidth;
        comboDisplay.classList.add('pulse');
      }
    } else {
      comboDisplay.classList.remove('active');
    }

    // Power-up indicators
    this.updatePowerUpBar();
  }

  private updatePowerUpBar(): void {
    const effects = this.powerUps.getActiveEffects();

    // Rebuild the bar (simple approach — could optimize with diffing)
    powerupBar.innerHTML = '';
    for (const effect of effects) {
      const div = document.createElement('div');
      div.className = 'powerup-indicator';

      const icon = document.createElement('span');
      icon.className = 'icon';
      icon.textContent = POWERUP_ICONS[effect.type];
      icon.style.color = POWERUP_COLORS[effect.type];
      div.appendChild(icon);

      const label = document.createElement('span');
      label.textContent = POWERUP_LABELS[effect.type];
      div.appendChild(label);

      // Timer bar (skip for shield which has no duration)
      if (effect.type !== 'shield') {
        const timerBar = document.createElement('div');
        timerBar.className = 'timer-bar';
        const fill = document.createElement('div');
        fill.className = 'timer-fill';
        const pct = Math.max(0, (effect.remaining / effect.duration) * 100);
        fill.style.width = `${pct}%`;
        fill.style.background = POWERUP_COLORS[effect.type];
        timerBar.appendChild(fill);
        div.appendChild(timerBar);
      }

      powerupBar.appendChild(div);
    }
  }

  private checkCollisions(): boolean {
    const nearby = this.obstacles.getActiveNear(this.player.posZ);
    if (nearby.length === 0) return false;

    const playerBox = this.player.getHitbox();

    for (const obs of nearby) {
      // Build obstacle box — use userData dimensions if available, fallback to geometry
      const om = obs.mesh;
      let halfW: number, halfH: number, halfD: number;
      if (om.userData['boxW']) {
        halfW = (om.userData['boxW'] as number) / 2;
        halfH = (om.userData['boxH'] as number) / 2;
        halfD = (om.userData['boxD'] as number) / 2;
      } else {
        const geo = om.geometry as THREE.BoxGeometry;
        const params = geo.parameters;
        halfW = params.width / 2;
        halfH = params.height / 2;
        halfD = params.depth / 2;
      }
      const ox = om.position.x;
      const oy = om.position.y;
      const oz = om.position.z;

      const obsBox = new THREE.Box3(
        new THREE.Vector3(ox - halfW, oy - halfH, oz - halfD),
        new THREE.Vector3(ox + halfW, oy + halfH, oz + halfD),
      );

      if (playerBox.intersectsBox(obsBox)) {
        // High obstacles: player can slide under
        if (obs.type === 'high' && this.player.state === 'sliding') {
          continue;
        }
        // Low obstacles: player can jump over
        if (obs.type === 'low' && this.player.mesh.position.y > 0.8) {
          continue;
        }
        return true;
      }
    }
    return false;
  }

  private updateCamera(dt: number): void {
    const cam = this.sceneManager.camera;

    // Dynamic FOV — widens as speed increases (speed rush feeling)
    const speedRatio = (this.difficulty.speed - 12) / (30 - 12);
    const targetFov = this.baseFov + speedRatio * 12; // 60 → 72
    cam.fov = lerp(cam.fov, targetFov, 2 * dt);
    cam.updateProjectionMatrix();

    // Camera follows the player's Z position smoothly
    this.cameraTargetZ = this.player.posZ;
    const camZ = lerp(cam.position.z, this.cameraTargetZ - 10, 5 * dt);
    cam.position.set(
      lerp(cam.position.x, this.player.mesh.position.x * 0.3, 3 * dt) + this.screenShake.offsetX,
      lerp(cam.position.y, 6 + this.player.mesh.position.y * 0.3, 3 * dt) + this.screenShake.offsetY,
      camZ,
    );
    cam.lookAt(
      this.player.mesh.position.x * 0.5,
      1.5 + this.player.mesh.position.y * 0.3,
      this.cameraTargetZ + 10,
    );
  }

  private gameOver(): void {
    this.state = 'gameover';
    cancelAnimationFrame(this.animId);
    this.player.die();

    // Audio: crash sound + stop music
    audioManager.play('crash');
    audioManager.vibrateCrash();
    audioManager.stopMusic();

    // Clear HUD
    comboDisplay.classList.remove('active');
    powerupBar.innerHTML = '';
    sectionAnnounce.classList.remove('active');
    zoneAnnounce.classList.remove('active');

    // VFX: crash particles + screen shake
    this.crashParticles.emit(
      this.player.mesh.position.x,
      this.player.mesh.position.y + 0.8,
      this.player.posZ,
      RED,
    );
    this.screenShake.trigger(0.6);

    // Render a few more frames for the VFX to play out
    let frames = 0;
    const crashAnim = (): void => {
      frames++;
      const dt = 0.016;
      this.crashParticles.update(dt);
      this.screenShake.update(dt);
      this.updateCamera(dt);
      this.sceneManager.render();
      if (frames < 30) requestAnimationFrame(crashAnim);
      else this.showGameOverUI();
    };
    crashAnim();
  }

  private showGameOverUI(): void {
    const isNewRecord = this.score.finalise();

    if (isNewRecord) {
      audioManager.play('highScore');
    }

    finalScoreEl.textContent = `Puntos: ${this.score.score}`;
    highScoreEl.textContent = isNewRecord
      ? `Nuevo Record! ${this.score.hiScore}`
      : `Record: ${this.score.hiScore}`;
    hiLabel.textContent = `HI: ${this.score.hiScore}`;

    hud.classList.remove('active');
    gameOverScreen.classList.add('active');
  }

  dispose(): void {
    this.input?.dispose();
    this.sceneManager.dispose();
    this.player.dispose();
    this.track.dispose();
    this.obstacles.dispose();
    this.collectibles.dispose();
    this.environment.dispose();
    this.powerUps.dispose();
    this.collectParticles.dispose();
    this.crashParticles.dispose();
    this.powerUpParticles.dispose();
    this.sandTrail.dispose();
  }
}

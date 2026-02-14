import * as THREE from 'three';
import { SceneManager } from '@core/SceneManager';
import { InputManager } from '@core/InputManager';
import { Player } from '@gameplay/Player';
import { TrackManager } from '@gameplay/TrackManager';
import { ObstacleSpawner } from '@gameplay/ObstacleSpawner';
import { CollectibleSystem } from '@gameplay/CollectibleSystem';
import { ScoreManager } from '@gameplay/ScoreManager';
import { DifficultyManager } from '@gameplay/DifficultyManager';
import { Environment } from '@world/Environment';
import { ParticleSystem } from '@vfx/ParticleSystem';
import { SandTrail } from '@vfx/SandTrail';
import { ScreenShake } from '@vfx/ScreenEffects';
import { lerp } from '@utils/MathUtils';
import { audioManager } from '@core/AudioManager';
import { eventBus } from '@core/EventBus';

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

// Colors for VFX
const GOLD = new THREE.Color(0xffd700);
const RED = new THREE.Color(0xff4444);

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

  // VFX
  private collectParticles: ParticleSystem;
  private crashParticles: ParticleSystem;
  private sandTrail: SandTrail;
  private screenShake: ScreenShake;

  private state: GameState = 'menu';
  private animId = 0;

  // Camera tracking
  private cameraTargetZ = 0;
  private baseFov = 60;

  // Audio: track previous player state for land/jump SFX
  private prevPlayerState: string = 'running';

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

    // VFX
    this.collectParticles = new ParticleSystem(this.sceneManager.scene);
    this.crashParticles = new ParticleSystem(this.sceneManager.scene);
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

    // UI
    startScreen.classList.add('hidden');
    gameOverScreen.classList.remove('active');
    hud.classList.add('active');

    this.state = 'playing';
    this.cameraTargetZ = 0;
    this.prevPlayerState = 'running';

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
    const speed = this.difficulty.speed;

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
    this.collectibles.update(this.player.posZ, dt);
    this.environment.update(this.player.posZ, dt);

    // VFX
    this.collectParticles.update(dt);
    this.crashParticles.update(dt);
    this.sandTrail.update(
      dt,
      this.player.mesh.position.x,
      this.player.mesh.position.y,
      this.player.posZ,
      this.player.state === 'running' || this.player.state === 'sliding',
    );
    this.screenShake.update(dt);

    // Score from distance
    this.score.addDistance(speed * dt * 0.5);

    // Collect items
    const collected = this.collectibles.checkCollection(
      this.player.mesh.position.x,
      this.player.mesh.position.y,
      this.player.posZ,
    );
    if (collected > 0) {
      this.score.addPoints(collected);
      audioManager.play('collect');
      audioManager.vibrateCollect();
      // Gold sparkle effect at player position
      this.collectParticles.emit(
        this.player.mesh.position.x,
        this.player.mesh.position.y + 1,
        this.player.posZ,
        GOLD,
      );
    }

    // Collision detection
    if (this.checkCollisions()) {
      this.gameOver();
      return;
    }

    // Camera follow with dynamic FOV
    this.updateCamera(dt);

    // HUD
    scoreLabel.textContent = `${this.score.score} pts`;

    // Render
    this.sceneManager.render();
  };

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
    this.collectParticles.dispose();
    this.crashParticles.dispose();
    this.sandTrail.dispose();
  }
}

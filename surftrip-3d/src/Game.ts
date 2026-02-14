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
import { lerp } from '@utils/MathUtils';

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

  private state: GameState = 'menu';
  private animId = 0;

  // Camera tracking
  private cameraTargetZ = 0;

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

    // UI
    hiLabel.textContent = `HI: ${this.score.hiScore}`;
    btnPlay.addEventListener('click', () => this.start());
    btnRestart.addEventListener('click', () => this.start());

    // Keyboard shortcut to start
    window.addEventListener('keydown', (e) => {
      if (e.code === 'Space' && this.state !== 'playing') {
        e.preventDefault();
        this.start();
      }
    });

    // Render the scene once so the player sees something behind the menu
    this.sceneManager.render();
  }

  private start(): void {
    // Reset everything
    this.player.reset();
    this.obstacles.reset();
    this.collectibles.reset();
    this.score.reset();
    this.difficulty.reset();

    // UI
    startScreen.classList.add('hidden');
    gameOverScreen.classList.remove('active');
    hud.classList.add('active');

    this.state = 'playing';
    this.cameraTargetZ = 0;

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
    this.track.update(this.player.posZ);
    this.obstacles.update(this.player.posZ, speed);
    this.collectibles.update(this.player.posZ, dt);
    this.environment.update(this.player.posZ);

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
    }

    // Collision detection
    if (this.checkCollisions()) {
      this.gameOver();
      return;
    }

    // Camera follow
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
    // Offset player hitbox to world Z
    playerBox.min.z += this.player.posZ;
    playerBox.max.z += this.player.posZ;

    for (const obs of nearby) {
      // Build obstacle box
      const om = obs.mesh;
      const geo = om.geometry as THREE.BoxGeometry;
      const params = geo.parameters;
      const halfW = params.width / 2;
      const halfH = params.height / 2;
      const halfD = params.depth / 2;
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
    // Camera follows the player's Z position smoothly
    this.cameraTargetZ = this.player.posZ;
    const camZ = lerp(cam.position.z, this.cameraTargetZ - 10, 5 * dt);
    cam.position.set(
      lerp(cam.position.x, this.player.mesh.position.x * 0.3, 3 * dt),
      lerp(cam.position.y, 6 + this.player.mesh.position.y * 0.3, 3 * dt),
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

    const isNewRecord = this.score.finalise();

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
  }
}

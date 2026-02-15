import * as THREE from 'three';
import { eventBus } from '@core/EventBus';
import { lerp, clamp } from '@utils/MathUtils';
import { getLaneX, LANE_CENTER, LANE_LEFT, LANE_RIGHT } from './LaneSystem';
import { createSurferModel, SurferAnimator } from '@world/SurferModel';
import type { SwipeDirection } from '@core/InputManager';

const GRAVITY = 25;
const JUMP_FORCE = 11;
const RAMP_JUMP_FORCE = 16; // higher jump from ramps
const LANE_SWITCH_SPEED = 12; // units per second for lane lerp
const SLIDE_DURATION = 0.8; // seconds

export type PlayerState = 'running' | 'jumping' | 'sliding' | 'dead';

export class Player {
  readonly mesh: THREE.Group;
  private laneIndex = LANE_CENTER;
  private targetX: number;
  private velocityY = 0;
  private grounded = true;
  state: PlayerState = 'running';

  // Slide
  private slideTimer = 0;
  private originalScaleY = 1;

  // Shield visual aura
  private shieldMesh: THREE.Mesh | null = null;

  // World Z position (moves forward)
  posZ = 0;

  private scene: THREE.Scene;
  private animator: SurferAnimator;

  constructor(scene: THREE.Scene) {
    this.scene = scene;

    // Low-poly surfer model with articulated limbs
    const surfer = createSurferModel();
    this.mesh = surfer.group;
    this.animator = new SurferAnimator(surfer);

    this.targetX = getLaneX(this.laneIndex);
    this.mesh.position.set(this.targetX, 0, 0);
    this.scene.add(this.mesh);

    // Listen to input
    eventBus.on('input:swipe', this.onSwipe);
    eventBus.on('input:jump', this.onJump);
    eventBus.on('input:slide', this.onSlide);
  }

  private onSwipe = (...args: unknown[]): void => {
    const dir = args[0] as SwipeDirection;
    if (this.state === 'dead') return;
    if (dir === 'left' && this.laneIndex > LANE_LEFT) {
      this.laneIndex--;
    } else if (dir === 'right' && this.laneIndex < LANE_RIGHT) {
      this.laneIndex++;
    }
    this.targetX = getLaneX(this.laneIndex);
  };

  private onJump = (): void => {
    if (this.state === 'dead') return;
    if (!this.grounded) return;

    // Cancel slide if sliding
    if (this.state === 'sliding') {
      this.endSlide();
    }

    this.velocityY = JUMP_FORCE;
    this.grounded = false;
    this.state = 'jumping';
  };

  private onSlide = (): void => {
    if (this.state === 'dead') return;
    if (!this.grounded) return;
    if (this.state === 'sliding') return;

    this.state = 'sliding';
    this.slideTimer = SLIDE_DURATION;
    this.originalScaleY = this.mesh.scale.y;
    this.mesh.scale.y = 0.45;
    this.mesh.position.y = 0;
  };

  private endSlide(): void {
    this.mesh.scale.y = this.originalScaleY;
    this.state = 'running';
    this.slideTimer = 0;
  }

  update(dt: number, speed: number): void {
    if (this.state === 'dead') return;

    // Move forward in world
    this.posZ += speed * dt;
    this.mesh.position.z = this.posZ;

    // Lane movement (smooth lerp on X)
    const lerpT = clamp(LANE_SWITCH_SPEED * dt, 0, 1);
    this.mesh.position.x = lerp(this.mesh.position.x, this.targetX, lerpT);

    // Jump / gravity
    if (!this.grounded) {
      this.velocityY -= GRAVITY * dt;
      this.mesh.position.y += this.velocityY * dt;
      if (this.mesh.position.y <= 0) {
        this.mesh.position.y = 0;
        this.velocityY = 0;
        this.grounded = true;
        if (this.state === 'jumping') {
          this.state = 'running';
        }
      }
    }

    // Slide timer
    if (this.state === 'sliding') {
      this.slideTimer -= dt;
      if (this.slideTimer <= 0) {
        this.endSlide();
      }
    }

    // Animate surfer limbs
    this.animator.update(dt, this.state, speed);
  }

  die(): void {
    this.state = 'dead';
  }

  /** Trigger a higher jump (e.g. from a ramp) */
  rampJump(): void {
    if (this.state === 'dead') return;
    if (this.state === 'sliding') this.endSlide();
    this.velocityY = RAMP_JUMP_FORCE;
    this.grounded = false;
    this.state = 'jumping';
  }

  /** Show/hide shield bubble around the player */
  setShieldVisible(visible: boolean): void {
    if (visible && !this.shieldMesh) {
      const geo = new THREE.SphereGeometry(0.9, 16, 12);
      const mat = new THREE.MeshStandardMaterial({
        color: 0x44aaff,
        emissive: 0x2288ff,
        emissiveIntensity: 0.4,
        transparent: true,
        opacity: 0.25,
        side: THREE.DoubleSide,
      });
      this.shieldMesh = new THREE.Mesh(geo, mat);
      this.shieldMesh.position.y = 0.8;
      this.mesh.add(this.shieldMesh);
    }
    if (this.shieldMesh) {
      this.shieldMesh.visible = visible;
    }
  }

  reset(): void {
    this.laneIndex = LANE_CENTER;
    this.targetX = getLaneX(LANE_CENTER);
    this.mesh.position.set(this.targetX, 0, 0);
    this.mesh.scale.y = 1;
    this.velocityY = 0;
    this.grounded = true;
    this.state = 'running';
    this.posZ = 0;
    this.slideTimer = 0;
    this.setShieldVisible(false);
    this.animator.reset();
  }

  // Pre-allocated hitbox to avoid per-frame GC allocations
  private _hitbox = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3());

  /** AABB hitbox in world coordinates (reuses pre-allocated Box3) */
  getHitbox(): THREE.Box3 {
    const halfW = 0.3;
    const h = this.state === 'sliding' ? 0.7 : 1.6;
    const halfD = 0.2;
    const px = this.mesh.position.x;
    const py = this.mesh.position.y;
    const pz = this.mesh.position.z;
    this._hitbox.min.set(px - halfW, py, pz - halfD);
    this._hitbox.max.set(px + halfW, py + h, pz + halfD);
    return this._hitbox;
  }

  dispose(): void {
    eventBus.off('input:swipe', this.onSwipe);
    eventBus.off('input:jump', this.onJump);
    eventBus.off('input:slide', this.onSlide);
    this.scene.remove(this.mesh);
  }
}

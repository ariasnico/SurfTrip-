import * as THREE from 'three';

const TRAIL_COUNT = 40;

/** Continuous sand dust particles behind the player while running */
export class SandTrail {
  private points: THREE.Points;
  private ages: Float32Array;
  private maxAge = 0.8;
  private spawnTimer = 0;
  private spawnRate = 0.03; // seconds between spawns
  private nextSlot = 0;
  private scene: THREE.Scene;

  constructor(scene: THREE.Scene) {
    this.scene = scene;
    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(TRAIL_COUNT * 3);
    this.ages = new Float32Array(TRAIL_COUNT).fill(this.maxAge + 1);

    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const mat = new THREE.PointsMaterial({
      size: 0.2,
      color: 0xf5e6ca,
      transparent: true,
      opacity: 0.5,
      depthWrite: false,
    });

    this.points = new THREE.Points(geo, mat);
    this.scene.add(this.points);
  }

  update(dt: number, playerX: number, playerY: number, playerZ: number, isGrounded: boolean): void {
    const positions = this.points.geometry.attributes.position.array as Float32Array;

    // Age existing particles
    for (let i = 0; i < TRAIL_COUNT; i++) {
      this.ages[i] += dt;
    }

    // Spawn new particle behind player (only if grounded)
    this.spawnTimer += dt;
    if (isGrounded && this.spawnTimer >= this.spawnRate) {
      this.spawnTimer = 0;
      const i3 = this.nextSlot * 3;
      positions[i3] = playerX + (Math.random() - 0.5) * 0.6;
      positions[i3 + 1] = playerY + 0.05;
      positions[i3 + 2] = playerZ - 0.5 + (Math.random() - 0.5) * 0.3;
      this.ages[this.nextSlot] = 0;
      this.nextSlot = (this.nextSlot + 1) % TRAIL_COUNT;
    }

    // Fade out particles by moving them down
    for (let i = 0; i < TRAIL_COUNT; i++) {
      if (this.ages[i] < this.maxAge) {
        const i3 = i * 3;
        positions[i3 + 1] += 0.3 * dt; // float up slightly
      }
    }

    this.points.geometry.attributes.position.needsUpdate = true;

    // Adjust opacity based on oldest visible particle
    const mat = this.points.material as THREE.PointsMaterial;
    mat.opacity = 0.4;
  }

  dispose(): void {
    this.points.geometry.dispose();
    (this.points.material as THREE.PointsMaterial).dispose();
    this.scene.remove(this.points);
  }
}

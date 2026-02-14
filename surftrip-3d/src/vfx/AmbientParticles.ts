import * as THREE from 'three';
import type { ZoneId } from '@data/ZoneData';

const PARTICLE_COUNT = 40;

interface AmbientConfig {
  color: number;
  size: number;
  speed: THREE.Vector3;
  spread: THREE.Vector3;
  lifetime: number;
  emissive: boolean;
}

const ZONE_CONFIGS: Record<ZoneId, AmbientConfig> = {
  chapadmalal: {
    color: 0xf5e6ca, size: 0.08, lifetime: 1.5,
    speed: new THREE.Vector3(2, 0.3, 0), spread: new THREE.Vector3(15, 5, 30),
    emissive: false,
  },
  rambla: {
    color: 0xaa8855, size: 0.15, lifetime: 3.0,
    speed: new THREE.Vector3(0.5, -0.8, 0.2), spread: new THREE.Vector3(12, 8, 25),
    emissive: false,
  },
  carilo: {
    color: 0x88ff88, size: 0.1, lifetime: 4.0,
    speed: new THREE.Vector3(0.2, 0.1, 0.1), spread: new THREE.Vector3(10, 4, 20),
    emissive: true,
  },
  rutaCostera: {
    color: 0xffcc66, size: 0.06, lifetime: 2.5,
    speed: new THREE.Vector3(0.8, 0.2, 0.1), spread: new THREE.Vector3(15, 6, 30),
    emissive: false,
  },
};

/** Zone-specific ambient floating particles for atmosphere */
export class AmbientParticles {
  private points: THREE.Points;
  private ages: Float32Array;
  private velocities: Float32Array;
  private scene: THREE.Scene;
  private config: AmbientConfig;
  private nextSlot = 0;
  private spawnTimer = 0;

  constructor(scene: THREE.Scene) {
    this.scene = scene;
    this.config = ZONE_CONFIGS.chapadmalal;

    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(PARTICLE_COUNT * 3);
    this.ages = new Float32Array(PARTICLE_COUNT).fill(999);
    this.velocities = new Float32Array(PARTICLE_COUNT * 3);

    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const mat = new THREE.PointsMaterial({
      size: this.config.size,
      color: this.config.color,
      transparent: true,
      opacity: 0.5,
      depthWrite: false,
    });

    this.points = new THREE.Points(geo, mat);
    this.scene.add(this.points);
  }

  setZone(zone: ZoneId): void {
    this.config = ZONE_CONFIGS[zone];
    const mat = this.points.material as THREE.PointsMaterial;
    mat.color.setHex(this.config.color);
    mat.size = this.config.size;
  }

  update(dt: number, playerX: number, playerY: number, playerZ: number): void {
    const positions = this.points.geometry.attributes.position.array as Float32Array;

    // Spawn new particles
    this.spawnTimer += dt;
    if (this.spawnTimer >= 0.08) {
      this.spawnTimer = 0;
      const i3 = this.nextSlot * 3;
      const spread = this.config.spread;
      positions[i3] = playerX + (Math.random() - 0.5) * spread.x;
      positions[i3 + 1] = playerY + 0.5 + Math.random() * spread.y;
      positions[i3 + 2] = playerZ + (Math.random() - 0.5) * spread.z;

      const spd = this.config.speed;
      this.velocities[i3] = spd.x * (0.5 + Math.random());
      this.velocities[i3 + 1] = spd.y * (0.5 + Math.random());
      this.velocities[i3 + 2] = spd.z * (0.5 + Math.random());

      this.ages[this.nextSlot] = 0;
      this.nextSlot = (this.nextSlot + 1) % PARTICLE_COUNT;
    }

    // Update positions and ages
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      if (this.ages[i] > this.config.lifetime) continue;
      this.ages[i] += dt;
      const i3 = i * 3;
      positions[i3] += this.velocities[i3] * dt;
      positions[i3 + 1] += this.velocities[i3 + 1] * dt;
      positions[i3 + 2] += this.velocities[i3 + 2] * dt;

      // Carilo fireflies: erratic movement
      if (this.config.emissive) {
        positions[i3] += Math.sin(this.ages[i] * 3 + i) * 0.02;
        positions[i3 + 1] += Math.cos(this.ages[i] * 2.5 + i * 0.7) * 0.015;
      }
    }

    this.points.geometry.attributes.position.needsUpdate = true;

    // Fade based on average age
    const mat = this.points.material as THREE.PointsMaterial;
    mat.opacity = 0.5;
  }

  dispose(): void {
    this.points.geometry.dispose();
    (this.points.material as THREE.PointsMaterial).dispose();
    this.scene.remove(this.points);
  }
}

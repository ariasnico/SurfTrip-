import * as THREE from 'three';
import { randInt, randFloat } from '@utils/MathUtils';
import { LANES } from './LaneSystem';

export type PowerUpType = 'magnet' | 'shield' | 'multiplier' | 'megawave' | 'slowmo';

export interface PowerUpEffect {
  type: PowerUpType;
  remaining: number; // seconds left
  duration: number; // total duration
}

interface PowerUpItem {
  mesh: THREE.Group;
  worldZ: number;
  lane: number;
  type: PowerUpType;
  active: boolean;
}

// Power-up config: duration, rarity weight (lower = rarer), color
const POWERUP_CONFIG: Record<PowerUpType, { duration: number; weight: number; color: number; emissive: number }> = {
  magnet:     { duration: 10, weight: 30, color: 0xff4444, emissive: 0xff2222 },
  shield:     { duration: 0,  weight: 25, color: 0x44aaff, emissive: 0x2288ff },
  multiplier: { duration: 15, weight: 25, color: 0xffdd00, emissive: 0xffaa00 },
  megawave:   { duration: 8,  weight: 10, color: 0x00ffaa, emissive: 0x00dd88 },
  slowmo:     { duration: 5,  weight: 10, color: 0xcc66ff, emissive: 0xaa44dd },
};

const SPAWN_INTERVAL_MIN = 80;
const SPAWN_INTERVAL_MAX = 160;

export class PowerUpManager {
  private items: PowerUpItem[] = [];
  private activeEffects: Map<PowerUpType, PowerUpEffect> = new Map();
  private nextSpawnZ = 60;
  private group: THREE.Group;
  private scene: THREE.Scene;

  constructor(scene: THREE.Scene) {
    this.scene = scene;
    this.group = new THREE.Group();
    this.scene.add(this.group);
  }

  /** Spawn power-up items ahead of the player */
  update(playerZ: number, dt: number): void {
    // Spawn new power-ups ahead
    while (this.nextSpawnZ < playerZ + 120) {
      this.spawn(this.nextSpawnZ);
      this.nextSpawnZ += randFloat(SPAWN_INTERVAL_MIN, SPAWN_INTERVAL_MAX);
    }

    // Animate items
    const time = Date.now() * 0.003;
    for (const item of this.items) {
      if (!item.active) continue;
      // Rotate and bob
      item.mesh.rotation.y += 3.0 * dt;
      item.mesh.position.y = 1.2 + Math.sin(time + item.worldZ) * 0.3;

      // Deactivate behind player
      if (item.worldZ < playerZ - 10) {
        this.deactivateItem(item);
      }
    }

    // Clean up inactive
    if (this.items.length > 20) {
      this.items = this.items.filter((i) => i.active);
    }

    // Update active effect timers
    for (const [type, effect] of this.activeEffects) {
      effect.remaining -= dt;
      if (effect.remaining <= 0) {
        this.activeEffects.delete(type);
      }
    }

  }

  private spawn(z: number): void {
    const type = this.weightedRandomType();
    const laneIdx = randInt(0, 2);
    const x = LANES[laneIdx];
    const config = POWERUP_CONFIG[type];

    const mesh = this.createPowerUpMesh(type, config.color, config.emissive);
    mesh.position.set(x, 1.2, z);
    this.group.add(mesh);
    this.items.push({ mesh, worldZ: z, lane: laneIdx, type, active: true });
  }

  private weightedRandomType(): PowerUpType {
    const types = Object.keys(POWERUP_CONFIG) as PowerUpType[];
    const totalWeight = types.reduce((sum, t) => sum + POWERUP_CONFIG[t].weight, 0);
    let r = Math.random() * totalWeight;
    for (const t of types) {
      r -= POWERUP_CONFIG[t].weight;
      if (r <= 0) return t;
    }
    return types[0];
  }

  private createPowerUpMesh(type: PowerUpType, color: number, emissive: number): THREE.Group {
    const group = new THREE.Group();

    // Outer ring (glowing halo)
    const ringGeo = new THREE.TorusGeometry(0.4, 0.06, 8, 16);
    const ringMat = new THREE.MeshStandardMaterial({
      color: emissive,
      emissive: emissive,
      emissiveIntensity: 0.8,
      transparent: true,
      opacity: 0.7,
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 2;
    group.add(ring);

    // Inner icon based on type
    let iconMesh: THREE.Mesh;
    switch (type) {
      case 'magnet': {
        // U-shape magnet approximation: thick torus segment
        const geo = new THREE.TorusGeometry(0.2, 0.08, 8, 12, Math.PI);
        const mat = new THREE.MeshStandardMaterial({ color, emissive, emissiveIntensity: 0.5 });
        iconMesh = new THREE.Mesh(geo, mat);
        break;
      }
      case 'shield': {
        // Diamond/shield shape using octahedron
        const geo = new THREE.OctahedronGeometry(0.22, 0);
        const mat = new THREE.MeshStandardMaterial({ color, emissive, emissiveIntensity: 0.5 });
        iconMesh = new THREE.Mesh(geo, mat);
        break;
      }
      case 'multiplier': {
        // x2 represented as a star
        const geo = new THREE.OctahedronGeometry(0.2, 0);
        const mat = new THREE.MeshStandardMaterial({ color, emissive, emissiveIntensity: 0.6 });
        iconMesh = new THREE.Mesh(geo, mat);
        iconMesh.scale.set(1, 1.4, 1);
        break;
      }
      case 'megawave': {
        // Wave: sphere
        const geo = new THREE.SphereGeometry(0.2, 12, 8);
        const mat = new THREE.MeshStandardMaterial({ color, emissive, emissiveIntensity: 0.6 });
        iconMesh = new THREE.Mesh(geo, mat);
        break;
      }
      case 'slowmo': {
        // Clock: cylinder
        const geo = new THREE.CylinderGeometry(0.18, 0.18, 0.08, 16);
        const mat = new THREE.MeshStandardMaterial({ color, emissive, emissiveIntensity: 0.5 });
        iconMesh = new THREE.Mesh(geo, mat);
        break;
      }
    }
    group.add(iconMesh);

    return group;
  }

  /** Check if player picks up a power-up. Returns the type if collected, null otherwise */
  checkCollection(playerX: number, playerY: number, playerZ: number): PowerUpType | null {
    for (const item of this.items) {
      if (!item.active) continue;
      const dx = Math.abs(item.mesh.position.x - playerX);
      const dy = Math.abs(item.mesh.position.y - (playerY + 1.0));
      const dz = Math.abs(item.worldZ - playerZ);
      if (dx < 1.2 && dy < 1.5 && dz < 1.5) {
        this.deactivateItem(item);
        this.activate(item.type);
        return item.type;
      }
    }
    return null;
  }

  private activate(type: PowerUpType): void {
    const config = POWERUP_CONFIG[type];
    if (type === 'shield') {
      // Shield: one-use, no timer, just flag it as active
      this.activeEffects.set(type, { type, remaining: 9999, duration: 9999 });
    } else {
      this.activeEffects.set(type, { type, remaining: config.duration, duration: config.duration });
    }
  }

  private deactivateItem(item: PowerUpItem): void {
    item.active = false;
    item.mesh.visible = false;
    this.group.remove(item.mesh);
  }

  /** Use shield: returns true if shield was active and consumed */
  useShield(): boolean {
    if (this.activeEffects.has('shield')) {
      this.activeEffects.delete('shield');
      return true;
    }
    return false;
  }

  // ── Queries ──

  isActive(type: PowerUpType): boolean {
    return this.activeEffects.has(type);
  }

  getEffect(type: PowerUpType): PowerUpEffect | undefined {
    return this.activeEffects.get(type);
  }

  /** Score multiplier from the multiplier power-up (x2) */
  getScoreMultiplier(): number {
    return this.activeEffects.has('multiplier') ? 2 : 1;
  }

  /** Speed multiplier for slow-mo (0.5x speed) */
  getSpeedMultiplier(): number {
    return this.activeEffects.has('slowmo') ? 0.5 : 1;
  }

  /** Whether the player is invincible (mega wave or shield) */
  isInvincible(): boolean {
    return this.activeEffects.has('megawave');
  }

  /** Whether coin magnet is active */
  isMagnetActive(): boolean {
    return this.activeEffects.has('magnet');
  }

  /** Get list of active effects for HUD display */
  getActiveEffects(): PowerUpEffect[] {
    return Array.from(this.activeEffects.values());
  }

  reset(): void {
    for (const item of this.items) {
      item.mesh.visible = false;
      this.group.remove(item.mesh);
    }
    this.items = [];
    this.activeEffects.clear();
    this.nextSpawnZ = 60;
  }

  dispose(): void {
    this.reset();
    this.scene.remove(this.group);
  }
}

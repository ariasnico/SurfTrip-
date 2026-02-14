import * as THREE from 'three';
import { ObjectPool } from '@utils/ObjectPool';
import { randInt, randFloat } from '@utils/MathUtils';
import { LANES } from './LaneSystem';

export interface Obstacle {
  mesh: THREE.Mesh;
  lane: number;
  worldZ: number;
  type: 'low' | 'high'; // low = jump over, high = slide under
  active: boolean;
}

const OBSTACLE_COLORS: Record<string, number> = {
  low: 0x8b7355, // rock brown
  high: 0xcc4444, // red barrier
};

const MIN_INTERVAL = 15; // min distance between obstacles (world units)
const MAX_INTERVAL = 30;

export class ObstacleSpawner {
  private obstacles: Obstacle[] = [];
  private poolLow: ObjectPool<THREE.Mesh>;
  private poolHigh: ObjectPool<THREE.Mesh>;
  private nextSpawnZ = 30; // start spawning ahead of the player
  private group: THREE.Group;
  private scene: THREE.Scene;

  constructor(scene: THREE.Scene) {
    this.scene = scene;
    this.group = new THREE.Group();
    this.scene.add(this.group);

    // Low obstacle (jump over): wide box on the ground
    this.poolLow = new ObjectPool<THREE.Mesh>(
      () => {
        const geo = new THREE.BoxGeometry(1.8, 0.9, 0.8);
        const mat = new THREE.MeshStandardMaterial({ color: OBSTACLE_COLORS.low, roughness: 0.8 });
        const mesh = new THREE.Mesh(geo, mat) as THREE.Mesh;
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        return mesh;
      },
      (m) => { m.visible = true; },
      6,
    );

    // High obstacle (slide under): tall thin barrier
    this.poolHigh = new ObjectPool<THREE.Mesh>(
      () => {
        const geo = new THREE.BoxGeometry(2.0, 1.2, 0.3);
        const mat = new THREE.MeshStandardMaterial({ color: OBSTACLE_COLORS.high, roughness: 0.5 });
        const mesh = new THREE.Mesh(geo, mat) as THREE.Mesh;
        mesh.castShadow = true;
        return mesh;
      },
      (m) => { m.visible = true; },
      4,
    );
  }

  update(playerZ: number, _speed: number): void {
    // Spawn new obstacles ahead
    while (this.nextSpawnZ < playerZ + 100) {
      this.spawn(this.nextSpawnZ);
      this.nextSpawnZ += randFloat(MIN_INTERVAL, MAX_INTERVAL);
    }

    // Deactivate obstacles behind the player
    for (const obs of this.obstacles) {
      if (!obs.active) continue;
      if (obs.worldZ < playerZ - 10) {
        obs.active = false;
        obs.mesh.visible = false;
        this.group.remove(obs.mesh);
        if (obs.type === 'low') this.poolLow.release(obs.mesh);
        else this.poolHigh.release(obs.mesh);
      }
    }

    // Clean up inactive from array periodically
    if (this.obstacles.length > 50) {
      this.obstacles = this.obstacles.filter((o) => o.active);
    }
  }

  private spawn(z: number): void {
    const laneIdx = randInt(0, 2);
    const type = Math.random() < 0.7 ? 'low' : 'high';
    const mesh = type === 'low' ? this.poolLow.get() : this.poolHigh.get();

    const x = LANES[laneIdx];
    if (type === 'low') {
      mesh.position.set(x, 0.45, z);
    } else {
      // High obstacles float above the ground so player can slide under
      mesh.position.set(x, 1.4, z);
    }

    this.group.add(mesh);
    this.obstacles.push({ mesh, lane: laneIdx, worldZ: z, type, active: true });
  }

  /** Get all active obstacles near the player for collision checking */
  getActiveNear(playerZ: number, range = 2): Obstacle[] {
    return this.obstacles.filter(
      (o) => o.active && Math.abs(o.worldZ - playerZ) < range,
    );
  }

  reset(): void {
    for (const obs of this.obstacles) {
      obs.mesh.visible = false;
      this.group.remove(obs.mesh);
      if (obs.type === 'low') this.poolLow.release(obs.mesh);
      else this.poolHigh.release(obs.mesh);
    }
    this.obstacles = [];
    this.nextSpawnZ = 30;
  }

  dispose(): void {
    this.reset();
    this.scene.remove(this.group);
  }
}

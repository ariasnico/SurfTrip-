import * as THREE from 'three';
import { randInt, randFloat } from '@utils/MathUtils';
import { LANES } from './LaneSystem';
import { createLowObstacle, createHighObstacle } from '@world/ObstacleModels';

export interface Obstacle {
  mesh: THREE.Mesh;
  lane: number;
  worldZ: number;
  type: 'low' | 'high'; // low = jump over, high = slide under
  active: boolean;
}

const MIN_INTERVAL = 15; // min distance between obstacles (world units)
const MAX_INTERVAL = 30;

export class ObstacleSpawner {
  private obstacles: Obstacle[] = [];
  private nextSpawnZ = 30; // start spawning ahead of the player
  private group: THREE.Group;
  private scene: THREE.Scene;

  constructor(scene: THREE.Scene) {
    this.scene = scene;
    this.group = new THREE.Group();
    this.scene.add(this.group);
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
    const mesh = type === 'low' ? createLowObstacle() : createHighObstacle();

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

  /** Spawn obstacles from a pattern section at a given world Z offset */
  spawnFromPattern(patternObstacles: { lane: number; offsetZ: number; type: 'low' | 'high' }[], startZ: number): void {
    for (const po of patternObstacles) {
      const mesh = po.type === 'low' ? createLowObstacle() : createHighObstacle();
      const x = LANES[po.lane];
      const z = startZ + po.offsetZ;
      if (po.type === 'low') {
        mesh.position.set(x, 0.45, z);
      } else {
        mesh.position.set(x, 1.4, z);
      }
      this.group.add(mesh);
      this.obstacles.push({ mesh, lane: po.lane, worldZ: z, type: po.type, active: true });
    }
  }

  /** Temporarily suppress auto-spawning until past a given Z */
  suppressUntil(z: number): void {
    if (this.nextSpawnZ < z) {
      this.nextSpawnZ = z;
    }
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
    }
    this.obstacles = [];
    this.nextSpawnZ = 30;
  }

  dispose(): void {
    this.reset();
    this.scene.remove(this.group);
  }
}

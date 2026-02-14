import * as THREE from 'three';
import { ObjectPool } from '@utils/ObjectPool';
import { randInt, randFloat } from '@utils/MathUtils';
import { LANES } from './LaneSystem';

export interface Collectible {
  mesh: THREE.Mesh;
  lane: number;
  worldZ: number;
  active: boolean;
  points: number;
}

const MIN_INTERVAL = 8;
const MAX_INTERVAL = 18;

export class CollectibleSystem {
  private items: Collectible[] = [];
  private pool: ObjectPool<THREE.Mesh>;
  private nextSpawnZ = 15;
  private group: THREE.Group;
  private scene: THREE.Scene;

  constructor(scene: THREE.Scene) {
    this.scene = scene;
    this.group = new THREE.Group();
    this.scene.add(this.group);

    // Collectible = factura / medialuna (Argentine pastry)
    this.pool = new ObjectPool<THREE.Mesh>(
      () => {
        // Crescent shape using a torus segment
        const geo = new THREE.TorusGeometry(0.22, 0.1, 8, 12, Math.PI);
        const mat = new THREE.MeshStandardMaterial({
          color: 0xd4923a,
          roughness: 0.55,
          metalness: 0.05,
          emissive: 0xc47f2a,
          emissiveIntensity: 0.12,
        });
        const mesh = new THREE.Mesh(geo, mat) as THREE.Mesh;
        mesh.castShadow = true;
        // Rotate so the crescent faces upward
        mesh.rotation.x = -Math.PI / 2;
        return mesh;
      },
      (m) => { m.visible = true; },
      12,
    );
  }

  update(playerZ: number, dt: number): void {
    // Spawn ahead
    while (this.nextSpawnZ < playerZ + 100) {
      this.spawn(this.nextSpawnZ);
      this.nextSpawnZ += randFloat(MIN_INTERVAL, MAX_INTERVAL);
    }

    // Animate rotation + deactivate behind
    for (const item of this.items) {
      if (!item.active) continue;
      // Spin
      item.mesh.rotation.y += 2.5 * dt;
      // Bob up/down
      item.mesh.position.y = 1.0 + Math.sin(Date.now() * 0.004 + item.worldZ) * 0.2;

      if (item.worldZ < playerZ - 10) {
        this.deactivate(item);
      }
    }

    if (this.items.length > 60) {
      this.items = this.items.filter((i) => i.active);
    }
  }

  private spawn(z: number): void {
    // Spawn a line of 3-5 collectibles in a lane
    const laneIdx = randInt(0, 2);
    const count = randInt(3, 5);
    const x = LANES[laneIdx];

    for (let i = 0; i < count; i++) {
      const mesh = this.pool.get();
      const itemZ = z + i * 2.5;
      mesh.position.set(x, 1.0, itemZ);
      this.group.add(mesh);
      this.items.push({ mesh, lane: laneIdx, worldZ: itemZ, active: true, points: 10 });
    }

    // Advance nextSpawnZ past the line we just placed
    this.nextSpawnZ = z + count * 2.5 + randFloat(MIN_INTERVAL, MAX_INTERVAL);
  }

  private deactivate(item: Collectible): void {
    item.active = false;
    item.mesh.visible = false;
    this.group.remove(item.mesh);
    this.pool.release(item.mesh);
  }

  /** Check collection against player — returns points earned */
  checkCollection(playerX: number, playerY: number, playerZ: number): number {
    let points = 0;
    for (const item of this.items) {
      if (!item.active) continue;
      const dx = Math.abs(item.mesh.position.x - playerX);
      const dy = Math.abs(item.mesh.position.y - (playerY + 1.0));
      const dz = Math.abs(item.worldZ - playerZ);
      if (dx < 1.0 && dy < 1.2 && dz < 1.2) {
        points += item.points;
        this.deactivate(item);
      }
    }
    return points;
  }

  reset(): void {
    for (const item of this.items) {
      item.mesh.visible = false;
      this.group.remove(item.mesh);
      this.pool.release(item.mesh);
    }
    this.items = [];
    this.nextSpawnZ = 15;
  }

  dispose(): void {
    this.reset();
    this.scene.remove(this.group);
  }
}

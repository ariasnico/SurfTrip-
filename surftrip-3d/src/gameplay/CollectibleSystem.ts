import * as THREE from 'three';
import { ObjectPool } from '@utils/ObjectPool';
import { randInt, randFloat, lerp } from '@utils/MathUtils';
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
const MAGNET_RANGE = 6; // attraction radius
const MAGNET_SPEED = 15; // attraction speed

export class CollectibleSystem {
  private items: Collectible[] = [];
  private pool: ObjectPool<THREE.Mesh>;
  private nextSpawnZ = 15;
  private group: THREE.Group;
  private scene: THREE.Scene;
  /** Track how many items were collected this frame (for combo system) */
  lastCollectedCount = 0;

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

  update(playerZ: number, dt: number, magnetActive = false, playerX = 0): void {
    // Spawn ahead
    while (this.nextSpawnZ < playerZ + 100) {
      this.spawn(this.nextSpawnZ);
      this.nextSpawnZ += randFloat(MIN_INTERVAL, MAX_INTERVAL);
    }

    // Animate rotation + deactivate behind + magnet attraction
    for (const item of this.items) {
      if (!item.active) continue;
      // Spin
      item.mesh.rotation.y += 2.5 * dt;
      // Bob up/down
      const baseY = 1.0 + Math.sin(Date.now() * 0.004 + item.worldZ) * 0.2;

      // Magnet: attract towards player X position
      if (magnetActive) {
        const dx = playerX - item.mesh.position.x;
        const dz = playerZ - item.worldZ;
        const dist = Math.sqrt(dx * dx + dz * dz);
        if (dist < MAGNET_RANGE) {
          item.mesh.position.x = lerp(item.mesh.position.x, playerX, MAGNET_SPEED * dt);
          item.mesh.position.y = lerp(item.mesh.position.y, 1.0, MAGNET_SPEED * dt);
        } else {
          item.mesh.position.y = baseY;
        }
      } else {
        item.mesh.position.y = baseY;
      }

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

  /** Spawn collectibles from a pattern section at a given world Z offset */
  spawnFromPattern(patternCollectibles: { lane: number; offsetZ: number }[], startZ: number): void {
    for (const c of patternCollectibles) {
      const mesh = this.pool.get();
      const x = LANES[c.lane];
      const z = startZ + c.offsetZ;
      mesh.position.set(x, 1.0, z);
      this.group.add(mesh);
      this.items.push({ mesh, lane: c.lane, worldZ: z, active: true, points: 10 });
    }
  }

  /** Temporarily suppress auto-spawning until past a given Z */
  suppressUntil(z: number): void {
    if (this.nextSpawnZ < z) {
      this.nextSpawnZ = z;
    }
  }

  private deactivate(item: Collectible): void {
    item.active = false;
    item.mesh.visible = false;
    this.group.remove(item.mesh);
    this.pool.release(item.mesh);
  }

  /** Check collection against player — returns points earned.
   *  Uses wider radius when megawave is active. */
  checkCollection(playerX: number, playerY: number, playerZ: number, megawave = false): number {
    let points = 0;
    let count = 0;
    const rangeX = megawave ? 3.0 : 1.0;
    const rangeYZ = megawave ? 3.0 : 1.2;
    for (const item of this.items) {
      if (!item.active) continue;
      const dx = Math.abs(item.mesh.position.x - playerX);
      const dy = Math.abs(item.mesh.position.y - (playerY + 1.0));
      const dz = Math.abs(item.worldZ - playerZ);
      if (dx < rangeX && dy < rangeYZ && dz < rangeYZ) {
        points += item.points;
        count++;
        this.deactivate(item);
      }
    }
    this.lastCollectedCount = count;
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
    this.lastCollectedCount = 0;
  }

  dispose(): void {
    this.reset();
    this.scene.remove(this.group);
  }
}

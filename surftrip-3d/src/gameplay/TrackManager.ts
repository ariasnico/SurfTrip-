import * as THREE from 'three';
import { LANE_WIDTH } from './LaneSystem';

const CHUNK_LENGTH = 30;
const CHUNK_COUNT = 6;
const TRACK_WIDTH = LANE_WIDTH * 2 + 4; // extra margin on sides

export class TrackManager {
  private chunks: THREE.Mesh[] = [];
  private furthestZ = 0;
  private sandMaterial: THREE.MeshStandardMaterial;
  private trackGroup: THREE.Group;
  private scene: THREE.Scene;

  constructor(scene: THREE.Scene) {
    this.scene = scene;
    this.trackGroup = new THREE.Group();
    this.scene.add(this.trackGroup);

    this.sandMaterial = new THREE.MeshStandardMaterial({
      color: 0xf5e6ca,
      roughness: 0.9,
      metalness: 0.0,
    });

    // Create initial chunks ahead of the player
    for (let i = 0; i < CHUNK_COUNT; i++) {
      this.createChunk(i * CHUNK_LENGTH);
    }
    this.furthestZ = CHUNK_COUNT * CHUNK_LENGTH;
  }

  private createChunk(z: number): void {
    const geo = new THREE.PlaneGeometry(TRACK_WIDTH, CHUNK_LENGTH);
    geo.rotateX(-Math.PI / 2);
    const mesh = new THREE.Mesh(geo, this.sandMaterial);
    mesh.position.set(0, 0, z + CHUNK_LENGTH / 2);
    mesh.receiveShadow = true;
    this.trackGroup.add(mesh);
    this.chunks.push(mesh);
  }

  update(playerZ: number): void {
    // Recycle chunks that are behind the player
    for (const chunk of this.chunks) {
      const chunkEnd = chunk.position.z - CHUNK_LENGTH / 2;
      if (chunkEnd < playerZ - CHUNK_LENGTH) {
        // Move this chunk to the front
        chunk.position.z = this.furthestZ + CHUNK_LENGTH / 2;
        this.furthestZ += CHUNK_LENGTH;
      }
    }
  }

  dispose(): void {
    this.chunks.forEach((c) => {
      c.geometry.dispose();
      this.trackGroup.remove(c);
    });
    (this.sandMaterial).dispose();
    this.scene.remove(this.trackGroup);
  }
}

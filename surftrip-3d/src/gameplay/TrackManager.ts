import * as THREE from 'three';
import { LANE_WIDTH, LANES } from './LaneSystem';

const CHUNK_LENGTH = 30;
const CHUNK_COUNT = 6;
const TRACK_WIDTH = LANE_WIDTH * 2 + 4; // extra margin on sides

export class TrackManager {
  private chunks: THREE.Group[] = [];
  private furthestZ = 0;
  private sandMaterial: THREE.MeshStandardMaterial;
  private laneDividerMat: THREE.MeshStandardMaterial;
  private edgeMat: THREE.MeshStandardMaterial;
  private trackGroup: THREE.Group;
  private scene: THREE.Scene;

  constructor(scene: THREE.Scene) {
    this.scene = scene;
    this.trackGroup = new THREE.Group();
    this.scene.add(this.trackGroup);

    // Wet sand for the running track
    this.sandMaterial = new THREE.MeshStandardMaterial({
      color: 0xe8d5b0,
      roughness: 0.85,
      metalness: 0.02,
    });

    // Subtle lane divider lines
    this.laneDividerMat = new THREE.MeshStandardMaterial({
      color: 0xd4c49a,
      roughness: 0.9,
    });

    // Darker wet sand at edges near ocean
    this.edgeMat = new THREE.MeshStandardMaterial({
      color: 0xc9b896,
      roughness: 0.7,
      metalness: 0.05,
    });

    // Create initial chunks ahead of the player
    for (let i = 0; i < CHUNK_COUNT; i++) {
      this.createChunk(i * CHUNK_LENGTH);
    }
    this.furthestZ = CHUNK_COUNT * CHUNK_LENGTH;
  }

  private createChunk(z: number): void {
    const chunkGroup = new THREE.Group();
    chunkGroup.position.set(0, 0, z + CHUNK_LENGTH / 2);

    // Main ground plane
    const geo = new THREE.PlaneGeometry(TRACK_WIDTH, CHUNK_LENGTH);
    geo.rotateX(-Math.PI / 2);
    const mesh = new THREE.Mesh(geo, this.sandMaterial);
    mesh.receiveShadow = true;
    chunkGroup.add(mesh);

    // Lane divider lines (subtle grooves in sand between lanes)
    for (let i = 0; i < LANES.length - 1; i++) {
      const divX = (LANES[i] + LANES[i + 1]) / 2;
      // Dashed line effect using small segments
      for (let dz = -CHUNK_LENGTH / 2; dz < CHUNK_LENGTH / 2; dz += 3) {
        const divGeo = new THREE.PlaneGeometry(0.06, 1.5);
        divGeo.rotateX(-Math.PI / 2);
        const div = new THREE.Mesh(divGeo, this.laneDividerMat);
        div.position.set(divX, 0.005, dz);
        div.receiveShadow = true;
        chunkGroup.add(div);
      }
    }

    // Edge strips (darker wet sand at track borders)
    for (const edgeX of [-(TRACK_WIDTH / 2 - 0.3), TRACK_WIDTH / 2 - 0.3]) {
      const edgeGeo = new THREE.PlaneGeometry(0.6, CHUNK_LENGTH);
      edgeGeo.rotateX(-Math.PI / 2);
      const edge = new THREE.Mesh(edgeGeo, this.edgeMat);
      edge.position.set(edgeX, 0.003, 0);
      edge.receiveShadow = true;
      chunkGroup.add(edge);
    }

    this.trackGroup.add(chunkGroup);
    this.chunks.push(chunkGroup);
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
      this.trackGroup.remove(c);
    });
    this.sandMaterial.dispose();
    this.laneDividerMat.dispose();
    this.edgeMat.dispose();
    this.scene.remove(this.trackGroup);
  }
}

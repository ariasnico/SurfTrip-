import * as THREE from 'three';
import { LANE_WIDTH, LANES } from './LaneSystem';

const CHUNK_LENGTH = 30;
const CHUNK_COUNT = 6;
const TRACK_WIDTH = LANE_WIDTH * 2 + 4; // extra margin on sides

export class TrackManager {
  private chunks: THREE.Group[] = [];
  private furthestZ = 0;
  private sandMaterial: THREE.MeshStandardMaterial;
  private trackGroup: THREE.Group;
  private scene: THREE.Scene;
  private baseGround: THREE.Mesh;

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

    // Large static base ground (dry sand) so there's never a gap
    const baseMat = new THREE.MeshStandardMaterial({
      color: 0xf0dfc0,
      roughness: 0.95,
    });
    const baseGeo = new THREE.PlaneGeometry(80, 400);
    baseGeo.rotateX(-Math.PI / 2);
    this.baseGround = new THREE.Mesh(baseGeo, baseMat);
    this.baseGround.position.y = -0.02;
    this.baseGround.receiveShadow = true;
    this.scene.add(this.baseGround);

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

    // Lane dividers — thin 3D boxes raised above the ground (avoids z-fighting)
    const divMat = new THREE.MeshStandardMaterial({ color: 0xcdb990, roughness: 0.9 });
    for (let i = 0; i < LANES.length - 1; i++) {
      const divX = (LANES[i] + LANES[i + 1]) / 2;
      const divGeo = new THREE.BoxGeometry(0.05, 0.02, CHUNK_LENGTH);
      const div = new THREE.Mesh(divGeo, divMat);
      div.position.set(divX, 0.02, 0);
      div.receiveShadow = true;
      chunkGroup.add(div);
    }

    // Edge strips — thin 3D boxes raised above ground
    const edgeMat = new THREE.MeshStandardMaterial({ color: 0xc0a880, roughness: 0.8 });
    for (const edgeX of [-(TRACK_WIDTH / 2 - 0.15), TRACK_WIDTH / 2 - 0.15]) {
      const edgeGeo = new THREE.BoxGeometry(0.3, 0.02, CHUNK_LENGTH);
      const edge = new THREE.Mesh(edgeGeo, edgeMat);
      edge.position.set(edgeX, 0.02, 0);
      edge.receiveShadow = true;
      chunkGroup.add(edge);
    }

    this.trackGroup.add(chunkGroup);
    this.chunks.push(chunkGroup);
  }

  update(playerZ: number): void {
    // Move the base ground to follow the player
    this.baseGround.position.z = playerZ + 80;

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
    this.scene.remove(this.trackGroup);
    this.scene.remove(this.baseGround);
  }
}

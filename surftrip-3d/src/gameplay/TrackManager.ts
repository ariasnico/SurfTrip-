import * as THREE from 'three';
import { LANE_WIDTH, LANES } from './LaneSystem';

const CHUNK_LENGTH = 30;
const CHUNK_COUNT = 6;
const TRACK_WIDTH = LANE_WIDTH * 2 + 4; // extra margin on sides

/** Procedural sand shader — noise-based texture with zone-dynamic colors */
const TrackVert = /* glsl */ `
  varying vec2 vUv;
  varying vec3 vWorldPos;
  void main() {
    vUv = uv;
    vWorldPos = (modelMatrix * vec4(position, 1.0)).xyz;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const TrackFrag = /* glsl */ `
  uniform vec3 uSandColor;
  uniform vec3 uDarkSand;
  uniform float uTime;
  varying vec2 vUv;
  varying vec3 vWorldPos;

  // Simple hash noise
  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));
    return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
  }

  void main() {
    // Multi-octave noise for sand grain detail
    vec2 wp = vWorldPos.xz;
    float n1 = noise(wp * 2.0);
    float n2 = noise(wp * 6.0) * 0.5;
    float n3 = noise(wp * 18.0) * 0.25;
    float sandNoise = (n1 + n2 + n3) / 1.75;

    // Blend between sand color and darker sand
    vec3 color = mix(uDarkSand, uSandColor, sandNoise);

    // Subtle wet patches near center of track
    float centerDist = abs(vWorldPos.x) / 4.0;
    float wet = smoothstep(0.6, 0.2, centerDist) * 0.15;
    color *= (1.0 - wet);

    // Subtle footprint-like darker streaks along Z
    float streaks = noise(vec2(vWorldPos.x * 3.0, vWorldPos.z * 0.4)) * 0.08;
    color -= vec3(streaks);

    // Very subtle specular highlight on wet sand
    float spec = smoothstep(0.7, 0.9, sandNoise) * wet * 2.0;
    color += vec3(1.0, 0.95, 0.85) * spec * 0.1;

    gl_FragColor = vec4(clamp(color, 0.0, 1.0), 1.0);
  }
`;

export class TrackManager {
  private chunks: THREE.Group[] = [];
  private furthestZ = 0;
  private sandMaterial: THREE.ShaderMaterial;
  private baseMaterial: THREE.MeshStandardMaterial;
  private dividerMaterial: THREE.MeshStandardMaterial;
  private edgeMaterial: THREE.MeshStandardMaterial;
  private trackGroup: THREE.Group;
  private scene: THREE.Scene;
  private baseGround: THREE.Mesh;

  constructor(scene: THREE.Scene) {
    this.scene = scene;
    this.trackGroup = new THREE.Group();
    this.scene.add(this.trackGroup);

    // Procedural sand shader for the running track
    this.sandMaterial = new THREE.ShaderMaterial({
      vertexShader: TrackVert,
      fragmentShader: TrackFrag,
      uniforms: {
        uSandColor: { value: new THREE.Vector3(0.91, 0.84, 0.69) }, // 0xe8d5b0
        uDarkSand: { value: new THREE.Vector3(0.76, 0.68, 0.55) },
        uTime: { value: 0 },
      },
    });

    // Shared materials for dividers and edges (zone-dynamic)
    this.dividerMaterial = new THREE.MeshStandardMaterial({ color: 0xcdb990, roughness: 0.9 });
    this.edgeMaterial = new THREE.MeshStandardMaterial({ color: 0xc0a880, roughness: 0.8 });

    // Large static base ground (dry sand) so there's never a gap
    this.baseMaterial = new THREE.MeshStandardMaterial({
      color: 0xf0dfc0,
      roughness: 0.95,
    });
    const baseGeo = new THREE.PlaneGeometry(80, 400);
    baseGeo.rotateX(-Math.PI / 2);
    this.baseGround = new THREE.Mesh(baseGeo, this.baseMaterial);
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

    // Main ground plane with procedural sand shader
    const geo = new THREE.PlaneGeometry(TRACK_WIDTH, CHUNK_LENGTH);
    geo.rotateX(-Math.PI / 2);
    const mesh = new THREE.Mesh(geo, this.sandMaterial);
    mesh.receiveShadow = true;
    chunkGroup.add(mesh);

    // Lane dividers — thin 3D boxes raised above the ground (avoids z-fighting)
    for (let i = 0; i < LANES.length - 1; i++) {
      const divX = (LANES[i] + LANES[i + 1]) / 2;
      const divGeo = new THREE.BoxGeometry(0.05, 0.02, CHUNK_LENGTH);
      const div = new THREE.Mesh(divGeo, this.dividerMaterial);
      div.position.set(divX, 0.02, 0);
      div.receiveShadow = true;
      chunkGroup.add(div);
    }

    // Edge strips — thin 3D boxes raised above ground
    for (const edgeX of [-(TRACK_WIDTH / 2 - 0.15), TRACK_WIDTH / 2 - 0.15]) {
      const edgeGeo = new THREE.BoxGeometry(0.3, 0.02, CHUNK_LENGTH);
      const edge = new THREE.Mesh(edgeGeo, this.edgeMaterial);
      edge.position.set(edgeX, 0.02, 0);
      edge.receiveShadow = true;
      chunkGroup.add(edge);
    }

    this.trackGroup.add(chunkGroup);
    this.chunks.push(chunkGroup);
  }

  /** Update track colors for zone transitions */
  setColors(sand: number, base: number, divider: number, edge: number): void {
    // Convert hex to normalized RGB for shader
    const sr = ((sand >> 16) & 0xff) / 255;
    const sg = ((sand >> 8) & 0xff) / 255;
    const sb = (sand & 0xff) / 255;
    this.sandMaterial.uniforms.uSandColor.value.set(sr, sg, sb);
    // Dark sand variant: slightly darker
    this.sandMaterial.uniforms.uDarkSand.value.set(sr * 0.82, sg * 0.82, sb * 0.82);

    this.baseMaterial.color.setHex(base);
    this.dividerMaterial.color.setHex(divider);
    this.edgeMaterial.color.setHex(edge);
  }

  reset(): void {
    // Reposition all chunks back to the starting layout
    for (let i = 0; i < this.chunks.length; i++) {
      this.chunks[i].position.z = i * CHUNK_LENGTH + CHUNK_LENGTH / 2;
    }
    this.furthestZ = CHUNK_COUNT * CHUNK_LENGTH;
    this.baseGround.position.z = 80;
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

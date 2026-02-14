import * as THREE from 'three';

const VERT = /* glsl */ `
  uniform float uTime;
  varying vec2 vUv;
  varying float vWave;
  void main() {
    vUv = uv;
    vec3 pos = position;
    // Two layered sine waves
    float wave1 = sin(pos.x * 0.3 + uTime * 0.8) * 0.4;
    float wave2 = sin(pos.z * 0.5 + uTime * 1.2) * 0.25;
    float wave3 = sin((pos.x + pos.z) * 0.2 + uTime * 0.5) * 0.3;
    pos.y += wave1 + wave2 + wave3;
    vWave = (wave1 + wave2 + wave3) * 0.5 + 0.5;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

const FRAG = /* glsl */ `
  uniform float uTime;
  uniform vec3 uDeep;
  uniform vec3 uSurf;
  uniform vec3 uFoam;
  varying vec2 vUv;
  varying float vWave;
  void main() {
    vec3 color = mix(uDeep, uSurf, vWave);

    // Foam on wave crests
    float foamLine = smoothstep(0.72, 0.82, vWave);
    color = mix(color, uFoam, foamLine * 0.7);

    // Shimmer
    float shimmer = sin(vUv.x * 40.0 + uTime * 2.0) * sin(vUv.y * 40.0 + uTime * 1.5);
    color += vec3(shimmer * 0.03);

    gl_FragColor = vec4(color, 0.88);
  }
`;

export class Ocean {
  private mesh: THREE.Mesh;
  private uniforms: {
    uTime: { value: number };
    uDeep: { value: THREE.Vector3 };
    uSurf: { value: THREE.Vector3 };
    uFoam: { value: THREE.Vector3 };
  };
  private scene: THREE.Scene;

  constructor(scene: THREE.Scene) {
    this.scene = scene;

    this.uniforms = {
      uTime: { value: 0 },
      uDeep: { value: new THREE.Vector3(0.08, 0.30, 0.55) },
      uSurf: { value: new THREE.Vector3(0.25, 0.65, 0.85) },
      uFoam: { value: new THREE.Vector3(0.9, 0.95, 1.0) },
    };

    const geo = new THREE.PlaneGeometry(100, 300, 64, 64);
    geo.rotateX(-Math.PI / 2);

    const mat = new THREE.ShaderMaterial({
      vertexShader: VERT,
      fragmentShader: FRAG,
      uniforms: this.uniforms,
      transparent: true,
      side: THREE.DoubleSide,
    });

    this.mesh = new THREE.Mesh(geo, mat);
    this.mesh.position.set(55, -0.3, 80);
    this.scene.add(this.mesh);
  }

  /** Update ocean colors for zone transitions */
  setColors(
    deep: [number, number, number],
    surf: [number, number, number],
    foam: [number, number, number],
  ): void {
    this.uniforms.uDeep.value.set(deep[0], deep[1], deep[2]);
    this.uniforms.uSurf.value.set(surf[0], surf[1], surf[2]);
    this.uniforms.uFoam.value.set(foam[0], foam[1], foam[2]);
  }

  update(dt: number, playerZ: number): void {
    this.uniforms.uTime.value += dt;
    this.mesh.position.z = playerZ + 80;
  }

  dispose(): void {
    this.mesh.geometry.dispose();
    (this.mesh.material as THREE.ShaderMaterial).dispose();
    this.scene.remove(this.mesh);
  }
}

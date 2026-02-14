import * as THREE from 'three';

const VERT = /* glsl */ `
  uniform float uTime;
  varying vec2 vUv;
  varying float vWave;
  varying vec3 vWorldPos;
  varying vec3 vNormal;
  void main() {
    vUv = uv;
    vec3 pos = position;
    // Three layered sine waves
    float wave1 = sin(pos.x * 0.3 + uTime * 0.8) * 0.4;
    float wave2 = sin(pos.z * 0.5 + uTime * 1.2) * 0.25;
    float wave3 = sin((pos.x + pos.z) * 0.2 + uTime * 0.5) * 0.3;
    pos.y += wave1 + wave2 + wave3;
    vWave = (wave1 + wave2 + wave3) * 0.5 + 0.5;

    // Approximate normal from wave derivatives
    float dx = 0.3 * cos(pos.x * 0.3 + uTime * 0.8) * 0.4
             + 0.2 * cos((pos.x + pos.z) * 0.2 + uTime * 0.5) * 0.3;
    float dz = 0.5 * cos(pos.z * 0.5 + uTime * 1.2) * 0.25
             + 0.2 * cos((pos.x + pos.z) * 0.2 + uTime * 0.5) * 0.3;
    vNormal = normalize(vec3(-dx, 1.0, -dz));

    vWorldPos = (modelMatrix * vec4(pos, 1.0)).xyz;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

const FRAG = /* glsl */ `
  uniform float uTime;
  uniform vec3 uDeep;
  uniform vec3 uSurf;
  uniform vec3 uFoam;
  uniform vec3 uSkyColor;
  uniform vec3 uSunDir;
  uniform vec3 uCameraPos;
  varying vec2 vUv;
  varying float vWave;
  varying vec3 vWorldPos;
  varying vec3 vNormal;

  // Pseudo-random for procedural foam pattern
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
    vec3 color = mix(uDeep, uSurf, vWave);

    // Procedural foam on wave crests
    float foamBase = smoothstep(0.68, 0.82, vWave);
    float foamNoise = noise(vUv * 60.0 + vec2(uTime * 0.3, uTime * 0.2));
    float foam = foamBase * (0.5 + foamNoise * 0.5);
    color = mix(color, uFoam, foam * 0.8);

    // White caps on highest waves
    float whiteCap = smoothstep(0.85, 0.92, vWave) * foamNoise;
    color = mix(color, vec3(1.0), whiteCap * 0.6);

    // Shimmer (high-frequency detail)
    float shimmer = sin(vUv.x * 40.0 + uTime * 2.0) * sin(vUv.y * 40.0 + uTime * 1.5);
    color += vec3(shimmer * 0.03);

    // Fake Fresnel: sky reflection at grazing angles
    vec3 viewDir = normalize(uCameraPos - vWorldPos);
    float fresnel = pow(1.0 - max(dot(vNormal, viewDir), 0.0), 3.0);
    color = mix(color, uSkyColor, fresnel * 0.35);

    // Specular highlight from sun (Blinn-Phong)
    vec3 halfDir = normalize(uSunDir + viewDir);
    float spec = pow(max(dot(vNormal, halfDir), 0.0), 64.0);
    color += vec3(1.0, 0.95, 0.85) * spec * 0.6;

    gl_FragColor = vec4(color, 0.88);
  }
`;

export class Ocean {
  private mesh: THREE.Mesh;
  uniforms: {
    uTime: { value: number };
    uDeep: { value: THREE.Vector3 };
    uSurf: { value: THREE.Vector3 };
    uFoam: { value: THREE.Vector3 };
    uSkyColor: { value: THREE.Vector3 };
    uSunDir: { value: THREE.Vector3 };
    uCameraPos: { value: THREE.Vector3 };
  };
  private scene: THREE.Scene;

  constructor(scene: THREE.Scene) {
    this.scene = scene;

    this.uniforms = {
      uTime: { value: 0 },
      uDeep: { value: new THREE.Vector3(0.08, 0.30, 0.55) },
      uSurf: { value: new THREE.Vector3(0.25, 0.65, 0.85) },
      uFoam: { value: new THREE.Vector3(0.9, 0.95, 1.0) },
      uSkyColor: { value: new THREE.Vector3(0.75, 0.88, 0.97) },
      uSunDir: { value: new THREE.Vector3(0.4, 0.7, -0.3).normalize() },
      uCameraPos: { value: new THREE.Vector3(0, 6, -10) },
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

  /** Update sky reflection color (called during zone transitions) */
  setSkyColor(horizon: [number, number, number]): void {
    this.uniforms.uSkyColor.value.set(horizon[0], horizon[1], horizon[2]);
  }

  /** Update sun direction for specular highlight */
  setSunDirection(x: number, y: number, z: number): void {
    this.uniforms.uSunDir.value.set(x, y, z).normalize();
  }

  update(dt: number, playerZ: number, camera?: THREE.Camera): void {
    this.uniforms.uTime.value += dt;
    this.mesh.position.z = playerZ + 80;
    if (camera) {
      this.uniforms.uCameraPos.value.copy(camera.position);
    }
  }

  dispose(): void {
    this.mesh.geometry.dispose();
    (this.mesh.material as THREE.ShaderMaterial).dispose();
    this.scene.remove(this.mesh);
  }
}

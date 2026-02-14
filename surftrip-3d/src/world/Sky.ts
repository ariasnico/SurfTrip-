import * as THREE from 'three';

/** Procedural sky gradient + sun + clouds + seagulls */
export class Sky {
  private clouds: THREE.Group;
  private seagulls: THREE.Group;
  private scene: THREE.Scene;
  private skyMesh: THREE.Mesh;
  private sunMesh: THREE.Mesh;
  private sunHalo: THREE.Mesh;
  private skyUniforms: {
    uZenith: { value: THREE.Vector3 };
    uHorizon: { value: THREE.Vector3 };
    uGround: { value: THREE.Vector3 };
    uSunGlow: { value: THREE.Vector3 };
    uSunDir: { value: THREE.Vector3 };
  };

  // Sun position (relative to sky sphere, changes per zone)
  private sunTarget = new THREE.Vector3(15, 40, 100);

  constructor(scene: THREE.Scene) {
    this.scene = scene;

    // Sky gradient with sun glow
    const skyGeo = new THREE.SphereGeometry(150, 16, 16);
    this.skyUniforms = {
      uZenith: { value: new THREE.Vector3(0.35, 0.60, 0.92) },
      uHorizon: { value: new THREE.Vector3(0.75, 0.88, 0.97) },
      uGround: { value: new THREE.Vector3(0.92, 0.87, 0.78) },
      uSunGlow: { value: new THREE.Vector3(1.0, 0.9, 0.7) },
      uSunDir: { value: new THREE.Vector3(0.2, 0.7, 0.5).normalize() },
    };
    const skyMat = new THREE.ShaderMaterial({
      side: THREE.BackSide,
      uniforms: this.skyUniforms,
      vertexShader: /* glsl */ `
        varying vec3 vLocalPos;
        void main() {
          vLocalPos = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: /* glsl */ `
        uniform vec3 uZenith;
        uniform vec3 uHorizon;
        uniform vec3 uGround;
        uniform vec3 uSunGlow;
        uniform vec3 uSunDir;
        varying vec3 vLocalPos;
        void main() {
          vec3 dir = normalize(vLocalPos);
          float h = dir.y;

          // Base gradient
          vec3 color = h > 0.0
            ? mix(uHorizon, uZenith, pow(h, 0.6))
            : mix(uHorizon, uGround, pow(-h, 0.4));

          // Sun glow near horizon
          float sunDot = max(dot(dir, uSunDir), 0.0);
          float sunGlow = pow(sunDot, 8.0) * 0.4;
          float sunCore = pow(sunDot, 64.0) * 0.3;
          color = mix(color, uSunGlow, sunGlow + sunCore);

          gl_FragColor = vec4(color, 1.0);
        }
      `,
    });
    this.skyMesh = new THREE.Mesh(skyGeo, skyMat);
    this.scene.add(this.skyMesh);

    // Fallback background
    this.scene.background = new THREE.Color(0x87ceeb);

    // Sun sphere (emissive, contributes to bloom)
    const sunGeo = new THREE.SphereGeometry(3, 12, 12);
    const sunMat = new THREE.MeshBasicMaterial({
      color: 0xfffae0,
    });
    this.sunMesh = new THREE.Mesh(sunGeo, sunMat);
    this.sunMesh.position.copy(this.sunTarget);
    this.scene.add(this.sunMesh);

    // Sun halo (sprite-like glow)
    const haloGeo = new THREE.PlaneGeometry(20, 20);
    const haloCanvas = this.createHaloTexture();
    const haloTex = new THREE.CanvasTexture(haloCanvas);
    const haloMat = new THREE.MeshBasicMaterial({
      map: haloTex,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    this.sunHalo = new THREE.Mesh(haloGeo, haloMat);
    this.sunHalo.position.copy(this.sunTarget);
    this.scene.add(this.sunHalo);

    // Clouds
    this.clouds = new THREE.Group();
    this.scene.add(this.clouds);
    this.createClouds();

    // Seagulls
    this.seagulls = new THREE.Group();
    this.scene.add(this.seagulls);
    this.createSeagulls();
  }

  /** Generate a radial gradient texture for the sun halo */
  private createHaloTexture(): HTMLCanvasElement {
    const size = 128;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d')!;
    const gradient = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
    gradient.addColorStop(0, 'rgba(255, 250, 220, 0.6)');
    gradient.addColorStop(0.3, 'rgba(255, 220, 150, 0.2)');
    gradient.addColorStop(1, 'rgba(255, 200, 100, 0)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, size, size);
    return canvas;
  }

  /** Update sky colors for zone transitions */
  setColors(
    zenith: [number, number, number],
    horizon: [number, number, number],
    ground: [number, number, number],
  ): void {
    this.skyUniforms.uZenith.value.set(zenith[0], zenith[1], zenith[2]);
    this.skyUniforms.uHorizon.value.set(horizon[0], horizon[1], horizon[2]);
    this.skyUniforms.uGround.value.set(ground[0], ground[1], ground[2]);
  }

  /** Set sun position (zone-dependent) */
  setSunPosition(x: number, y: number, z: number): void {
    this.sunTarget.set(x, y, z);
    // Update sun glow direction in shader
    const dir = this.sunTarget.clone().normalize();
    this.skyUniforms.uSunDir.value.copy(dir);
  }

  /** Set sun glow color (warm for sunset, cool for forest) */
  setSunGlow(r: number, g: number, b: number): void {
    this.skyUniforms.uSunGlow.value.set(r, g, b);
  }

  private createClouds(): void {
    // Use procedural cloud sprites (canvas-generated soft puffs)
    const cloudTexture = this.createCloudTexture();
    const cloudTex = new THREE.CanvasTexture(cloudTexture);

    for (let i = 0; i < 20; i++) {
      const cloudMat = new THREE.MeshBasicMaterial({
        map: cloudTex,
        transparent: true,
        opacity: 0.65 + Math.random() * 0.2,
        depthWrite: false,
        side: THREE.DoubleSide,
      });

      const size = 6 + Math.random() * 10;
      const cloudGeo = new THREE.PlaneGeometry(size, size * 0.5);
      const cloud = new THREE.Mesh(cloudGeo, cloudMat);

      cloud.position.set(
        (Math.random() - 0.5) * 120,
        25 + Math.random() * 20,
        Math.random() * 200,
      );
      cloud.rotation.x = -0.3; // Tilt to face camera somewhat
      cloud.userData['speedX'] = 0.3 + Math.random() * 0.5;

      this.clouds.add(cloud);
    }
  }

  /** Generate a soft cloud texture via canvas 2D */
  private createCloudTexture(): HTMLCanvasElement {
    const size = 128;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d')!;

    // Draw overlapping circles with soft edges
    ctx.globalCompositeOperation = 'source-over';
    const circles = [
      { x: 0.5, y: 0.5, r: 0.35 },
      { x: 0.3, y: 0.5, r: 0.28 },
      { x: 0.7, y: 0.5, r: 0.28 },
      { x: 0.4, y: 0.4, r: 0.22 },
      { x: 0.6, y: 0.4, r: 0.25 },
    ];
    for (const c of circles) {
      const gradient = ctx.createRadialGradient(
        c.x * size, c.y * size, 0,
        c.x * size, c.y * size, c.r * size,
      );
      gradient.addColorStop(0, 'rgba(255, 255, 255, 0.8)');
      gradient.addColorStop(0.7, 'rgba(255, 255, 255, 0.3)');
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, size, size);
    }
    return canvas;
  }

  private createSeagulls(): void {
    const wingMat = new THREE.MeshStandardMaterial({ color: 0xeeeeee, roughness: 0.8 });
    const bodyMat = new THREE.MeshStandardMaterial({ color: 0xdddddd, roughness: 0.7 });

    for (let i = 0; i < 6; i++) {
      const bird = new THREE.Group();

      const bodyGeo = new THREE.ConeGeometry(0.08, 0.5, 4);
      bodyGeo.rotateX(Math.PI / 2);
      const body = new THREE.Mesh(bodyGeo, bodyMat);
      bird.add(body);

      const wingGeo = new THREE.BufferGeometry();
      const vertices = new Float32Array([
        0, 0, 0, 0.6, 0.1, 0, 0.3, 0, -0.15,
      ]);
      wingGeo.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
      wingGeo.computeVertexNormals();

      const leftWing = new THREE.Mesh(wingGeo, wingMat);
      leftWing.position.set(-0.05, 0, 0);
      bird.add(leftWing);

      const rightWing = new THREE.Mesh(wingGeo.clone(), wingMat);
      rightWing.scale.x = -1;
      rightWing.position.set(0.05, 0, 0);
      bird.add(rightWing);

      bird.position.set(
        (Math.random() - 0.5) * 40,
        12 + Math.random() * 15,
        Math.random() * 150,
      );
      bird.userData['phase'] = Math.random() * Math.PI * 2;
      bird.userData['speedZ'] = 0.5 + Math.random() * 1;
      bird.scale.setScalar(0.8 + Math.random() * 0.5);

      this.seagulls.add(bird);
    }
  }

  update(dt: number, playerZ: number): void {
    // Keep sky sphere centered on the player
    this.skyMesh.position.z = playerZ;

    // Sun follows player but stays at relative offset
    this.sunMesh.position.set(this.sunTarget.x, this.sunTarget.y, playerZ + this.sunTarget.z);
    this.sunHalo.position.copy(this.sunMesh.position);
    // Halo always faces camera
    this.sunHalo.lookAt(0, 6, playerZ - 10);

    // Drift clouds
    for (const cloud of this.clouds.children) {
      cloud.position.x += (cloud.userData['speedX'] as number) * dt;
      if (cloud.position.x > 80) cloud.position.x = -80;
      if (cloud.position.z < playerZ - 30) {
        cloud.position.z += 230;
      }
    }

    // Animate seagulls
    for (const bird of this.seagulls.children) {
      const phase = bird.userData['phase'] as number;
      const speedZ = bird.userData['speedZ'] as number;
      bird.position.z += speedZ * dt;
      bird.position.y += Math.sin(Date.now() * 0.005 + phase) * 0.01;
      bird.rotation.z = Math.sin(Date.now() * 0.008 + phase) * 0.15;

      if (bird.position.z < playerZ - 20) {
        bird.position.z += 170;
        bird.position.x = (Math.random() - 0.5) * 40;
      }
    }
  }

  dispose(): void {
    this.scene.remove(this.clouds);
    this.scene.remove(this.seagulls);
    this.scene.remove(this.sunMesh);
    this.scene.remove(this.sunHalo);
  }
}

import * as THREE from 'three';

/** Procedural sky gradient + floating clouds + seagulls */
export class Sky {
  private clouds: THREE.Group;
  private seagulls: THREE.Group;
  private scene: THREE.Scene;

  constructor(scene: THREE.Scene) {
    this.scene = scene;

    // Sky gradient via a large background sphere
    const skyGeo = new THREE.SphereGeometry(150, 16, 16);
    const skyMat = new THREE.ShaderMaterial({
      side: THREE.BackSide,
      uniforms: {},
      vertexShader: /* glsl */ `
        varying vec3 vWorldPosition;
        void main() {
          vec4 worldPos = modelMatrix * vec4(position, 1.0);
          vWorldPosition = worldPos.xyz;
          gl_Position = projectionMatrix * viewMatrix * worldPos;
        }
      `,
      fragmentShader: /* glsl */ `
        varying vec3 vWorldPosition;
        void main() {
          float h = normalize(vWorldPosition).y;
          // Gradient: horizon warm → zenith blue
          vec3 zenith = vec3(0.35, 0.60, 0.92);
          vec3 horizon = vec3(0.75, 0.88, 0.97);
          vec3 ground = vec3(0.92, 0.87, 0.78);
          vec3 color = h > 0.0
            ? mix(horizon, zenith, pow(h, 0.6))
            : mix(horizon, ground, pow(-h, 0.4));
          gl_FragColor = vec4(color, 1.0);
        }
      `,
    });
    const skyMesh = new THREE.Mesh(skyGeo, skyMat);
    this.scene.add(skyMesh);

    // Remove flat background color so the sphere shows
    this.scene.background = null;

    // Clouds
    this.clouds = new THREE.Group();
    this.scene.add(this.clouds);
    this.createClouds();

    // Seagulls
    this.seagulls = new THREE.Group();
    this.scene.add(this.seagulls);
    this.createSeagulls();
  }

  private createClouds(): void {
    const cloudMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 1,
      metalness: 0,
      transparent: true,
      opacity: 0.85,
    });

    for (let i = 0; i < 20; i++) {
      const cloud = new THREE.Group();

      // Each cloud = cluster of 3-5 squashed spheres
      const puffCount = 3 + Math.floor(Math.random() * 3);
      for (let j = 0; j < puffCount; j++) {
        const r = 1.5 + Math.random() * 2;
        const puffGeo = new THREE.SphereGeometry(r, 8, 6);
        const puff = new THREE.Mesh(puffGeo, cloudMat);
        puff.position.set(
          (j - puffCount / 2) * r * 0.8,
          (Math.random() - 0.5) * r * 0.3,
          (Math.random() - 0.5) * r * 0.5,
        );
        puff.scale.y = 0.4 + Math.random() * 0.2;
        cloud.add(puff);
      }

      cloud.position.set(
        (Math.random() - 0.5) * 120,
        25 + Math.random() * 20,
        Math.random() * 200,
      );
      cloud.userData['speedX'] = 0.3 + Math.random() * 0.5;

      this.clouds.add(cloud);
    }
  }

  private createSeagulls(): void {
    const wingMat = new THREE.MeshStandardMaterial({ color: 0xeeeeee, roughness: 0.8 });
    const bodyMat = new THREE.MeshStandardMaterial({ color: 0xdddddd, roughness: 0.7 });

    for (let i = 0; i < 6; i++) {
      const bird = new THREE.Group();

      // Body
      const bodyGeo = new THREE.ConeGeometry(0.08, 0.5, 4);
      bodyGeo.rotateX(Math.PI / 2);
      const body = new THREE.Mesh(bodyGeo, bodyMat);
      bird.add(body);

      // Wings (flat triangles)
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
    // Drift clouds
    for (const cloud of this.clouds.children) {
      cloud.position.x += (cloud.userData['speedX'] as number) * dt;
      if (cloud.position.x > 80) cloud.position.x = -80;
      // Keep clouds near player
      if (cloud.position.z < playerZ - 30) {
        cloud.position.z += 230;
      }
    }

    // Animate seagulls
    for (const bird of this.seagulls.children) {
      const phase = bird.userData['phase'] as number;
      const speedZ = bird.userData['speedZ'] as number;
      bird.position.z += speedZ * dt;
      // Wing flap via Y oscillation
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
  }
}

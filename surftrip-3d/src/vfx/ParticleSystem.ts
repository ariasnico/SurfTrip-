import * as THREE from 'three';

const PARTICLE_COUNT = 60;

/** Simple particle burst effect for collecting items or crashing */
export class ParticleSystem {
  private particles: THREE.Points;
  private velocities: Float32Array;
  private lifetimes: Float32Array;
  private active = false;
  private elapsed = 0;
  private duration = 0.6;
  private scene: THREE.Scene;

  constructor(scene: THREE.Scene) {
    this.scene = scene;
    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(PARTICLE_COUNT * 3);
    const colors = new Float32Array(PARTICLE_COUNT * 3);
    this.velocities = new Float32Array(PARTICLE_COUNT * 3);
    this.lifetimes = new Float32Array(PARTICLE_COUNT);

    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const mat = new THREE.PointsMaterial({
      size: 0.15,
      vertexColors: true,
      transparent: true,
      opacity: 1,
      depthWrite: false,
    });

    this.particles = new THREE.Points(geo, mat);
    this.particles.visible = false;
    this.scene.add(this.particles);
  }

  /** Emit a burst of particles at the given world position */
  emit(x: number, y: number, z: number, color: THREE.Color): void {
    const positions = this.particles.geometry.attributes.position.array as Float32Array;
    const colors = this.particles.geometry.attributes.color.array as Float32Array;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3;
      positions[i3] = x;
      positions[i3 + 1] = y;
      positions[i3 + 2] = z;

      // Random velocity in a sphere
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      const speed = 2 + Math.random() * 4;
      this.velocities[i3] = Math.sin(phi) * Math.cos(theta) * speed;
      this.velocities[i3 + 1] = Math.abs(Math.cos(phi)) * speed * 1.2;
      this.velocities[i3 + 2] = Math.sin(phi) * Math.sin(theta) * speed;

      this.lifetimes[i] = 0.3 + Math.random() * 0.4;

      // Color with slight variation
      colors[i3] = color.r * (0.8 + Math.random() * 0.4);
      colors[i3 + 1] = color.g * (0.8 + Math.random() * 0.4);
      colors[i3 + 2] = color.b * (0.8 + Math.random() * 0.4);
    }

    this.particles.geometry.attributes.position.needsUpdate = true;
    this.particles.geometry.attributes.color.needsUpdate = true;
    this.particles.visible = true;
    this.active = true;
    this.elapsed = 0;
  }

  update(dt: number): void {
    if (!this.active) return;

    this.elapsed += dt;
    if (this.elapsed > this.duration) {
      this.active = false;
      this.particles.visible = false;
      return;
    }

    const positions = this.particles.geometry.attributes.position.array as Float32Array;
    const progress = this.elapsed / this.duration;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3;
      if (this.elapsed < this.lifetimes[i]) {
        positions[i3] += this.velocities[i3] * dt;
        positions[i3 + 1] += this.velocities[i3 + 1] * dt;
        this.velocities[i3 + 1] -= 9.8 * dt; // gravity
        positions[i3 + 2] += this.velocities[i3 + 2] * dt;
      }
    }

    this.particles.geometry.attributes.position.needsUpdate = true;
    (this.particles.material as THREE.PointsMaterial).opacity = 1 - progress;
  }

  dispose(): void {
    this.particles.geometry.dispose();
    (this.particles.material as THREE.PointsMaterial).dispose();
    this.scene.remove(this.particles);
  }
}

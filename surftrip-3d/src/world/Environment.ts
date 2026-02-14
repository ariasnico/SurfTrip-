import * as THREE from 'three';
import { Ocean } from './Ocean';
import { Sky } from './Sky';
import { BeachDecor } from './BeachDecor';
import { createPalmTree } from './PalmTree';

export class Environment {
  private ocean: Ocean;
  private sky: Sky;
  private beachDecor: BeachDecor;
  private palmTrees: THREE.Group;
  private scene: THREE.Scene;
  private palmSpan = 200;

  constructor(scene: THREE.Scene) {
    this.scene = scene;

    // Animated ocean with shader
    this.ocean = new Ocean(this.scene);

    // Gradient sky + clouds + seagulls
    this.sky = new Sky(this.scene);

    // Beach decorations (umbrellas, sandcastles, chairs, rocks)
    this.beachDecor = new BeachDecor(this.scene);

    // Palm trees on both sides
    this.palmTrees = new THREE.Group();
    this.scene.add(this.palmTrees);
    this.createPalms();
  }

  private createPalms(): void {
    for (let z = 0; z < this.palmSpan; z += 10 + Math.random() * 6) {
      for (const side of [-1, 1]) {
        const xOffset = 5.5 + Math.random() * 3;
        const tree = createPalmTree();
        tree.position.set(side * xOffset, 0, z);
        tree.rotation.y = Math.random() * Math.PI * 2;
        const s = 0.7 + Math.random() * 0.5;
        tree.scale.setScalar(s);
        this.palmTrees.add(tree);
      }
    }
  }

  reset(): void {
    // Remove old palms and recreate at starting positions
    while (this.palmTrees.children.length > 0) {
      this.palmTrees.remove(this.palmTrees.children[0]);
    }
    this.createPalms();
  }

  update(playerZ: number, dt: number): void {
    this.ocean.update(dt, playerZ);
    this.sky.update(dt, playerZ);
    this.beachDecor.update(playerZ);

    // Recycle palm trees
    for (const child of this.palmTrees.children) {
      if (child.position.z < playerZ - 20) {
        child.position.z += this.palmSpan;
      }
    }
  }

  dispose(): void {
    this.ocean.dispose();
    this.sky.dispose();
    this.beachDecor.dispose();
    this.scene.remove(this.palmTrees);
  }
}

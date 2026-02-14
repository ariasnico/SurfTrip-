import * as THREE from 'three';

export class Environment {
  private ocean: THREE.Mesh;
  private sideDecorations: THREE.Group;
  private scene: THREE.Scene;

  constructor(scene: THREE.Scene) {
    this.scene = scene;
    // Sky color (background matches fog)
    this.scene.background = new THREE.Color(0x87ceeb);

    // Ocean plane on the right side
    const oceanGeo = new THREE.PlaneGeometry(80, 300);
    oceanGeo.rotateX(-Math.PI / 2);
    const oceanMat = new THREE.MeshStandardMaterial({
      color: 0x3a9ad9,
      roughness: 0.2,
      metalness: 0.1,
      transparent: true,
      opacity: 0.85,
    });
    this.ocean = new THREE.Mesh(oceanGeo, oceanMat);
    this.ocean.position.set(45, -0.15, 80);
    this.ocean.receiveShadow = true;
    this.scene.add(this.ocean);

    // Side decorations (palmeras placeholder = green cones + brown cylinders)
    this.sideDecorations = new THREE.Group();
    this.scene.add(this.sideDecorations);
    this.createSideDecor();
  }

  private createSideDecor(): void {
    const trunkGeo = new THREE.CylinderGeometry(0.15, 0.2, 3, 6);
    const trunkMat = new THREE.MeshStandardMaterial({ color: 0x8b6914 });
    const leavesGeo = new THREE.ConeGeometry(1.2, 2.5, 6);
    const leavesMat = new THREE.MeshStandardMaterial({ color: 0x2d8b46 });

    // Place trees on both sides of the track, spaced out
    for (let z = 0; z < 180; z += 12) {
      for (const side of [-1, 1]) {
        const xOffset = 5 + Math.random() * 3;
        const tree = new THREE.Group();

        const trunk = new THREE.Mesh(trunkGeo, trunkMat);
        trunk.position.y = 1.5;
        trunk.castShadow = true;
        tree.add(trunk);

        const leaves = new THREE.Mesh(leavesGeo, leavesMat);
        leaves.position.y = 4;
        leaves.castShadow = true;
        tree.add(leaves);

        tree.position.set(side * xOffset, 0, z);
        // Slight random rotation and scale
        tree.rotation.y = Math.random() * Math.PI;
        const s = 0.8 + Math.random() * 0.5;
        tree.scale.setScalar(s);

        this.sideDecorations.add(tree);
      }
    }
  }

  update(playerZ: number): void {
    // Move ocean to follow the player
    this.ocean.position.z = playerZ + 80;

    // Recycle side decorations
    for (const child of this.sideDecorations.children) {
      if (child.position.z < playerZ - 20) {
        child.position.z += 180;
      }
    }
  }

  dispose(): void {
    this.scene.remove(this.ocean);
    this.scene.remove(this.sideDecorations);
  }
}

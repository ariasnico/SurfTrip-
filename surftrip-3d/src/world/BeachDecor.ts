import * as THREE from 'three';

/** Procedural beach decorations placed alongside the track */
export class BeachDecor {
  private group: THREE.Group;
  private scene: THREE.Scene;
  private totalSpan = 200;

  constructor(scene: THREE.Scene) {
    this.scene = scene;
    this.group = new THREE.Group();
    this.scene.add(this.group);
    this.populate();
  }

  private populate(): void {
    for (let z = 0; z < this.totalSpan; z += 8 + Math.random() * 10) {
      const side = Math.random() < 0.5 ? -1 : 1;
      const x = side * (4 + Math.random() * 4);
      const kind = Math.random();

      if (kind < 0.35) {
        this.group.add(this.createUmbrella(x, z));
      } else if (kind < 0.55) {
        this.group.add(this.createSandcastle(x, z));
      } else if (kind < 0.75) {
        this.group.add(this.createBeachChair(x, z));
      } else {
        this.group.add(this.createRock(x, z));
      }
    }
  }

  private createUmbrella(x: number, z: number): THREE.Group {
    const g = new THREE.Group();

    // Pole
    const poleGeo = new THREE.CylinderGeometry(0.04, 0.04, 2.2, 6);
    const poleMat = new THREE.MeshStandardMaterial({ color: 0xcccccc, metalness: 0.4 });
    const pole = new THREE.Mesh(poleGeo, poleMat);
    pole.position.y = 1.1;
    pole.castShadow = true;
    g.add(pole);

    // Canopy
    const colors = [0xff4466, 0x44aaff, 0xffcc00, 0x44dd66];
    const color = colors[Math.floor(Math.random() * colors.length)];
    const canopyGeo = new THREE.ConeGeometry(1.2, 0.6, 8, 1, true);
    const canopyMat = new THREE.MeshStandardMaterial({ color, roughness: 0.7, side: THREE.DoubleSide });
    const canopy = new THREE.Mesh(canopyGeo, canopyMat);
    canopy.position.y = 2.1;
    canopy.rotation.x = Math.PI;
    canopy.castShadow = true;
    g.add(canopy);

    g.position.set(x, 0, z);
    g.rotation.y = Math.random() * Math.PI;
    return g;
  }

  private createSandcastle(x: number, z: number): THREE.Group {
    const g = new THREE.Group();
    const sandMat = new THREE.MeshStandardMaterial({ color: 0xe8d5a3, roughness: 0.9 });

    // Base mound
    const baseGeo = new THREE.CylinderGeometry(0.5, 0.7, 0.4, 8);
    const base = new THREE.Mesh(baseGeo, sandMat);
    base.position.y = 0.2;
    base.castShadow = true;
    g.add(base);

    // Towers
    for (let i = 0; i < 4; i++) {
      const angle = (i / 4) * Math.PI * 2;
      const towerGeo = new THREE.CylinderGeometry(0.12, 0.15, 0.5, 6);
      const tower = new THREE.Mesh(towerGeo, sandMat);
      tower.position.set(Math.cos(angle) * 0.35, 0.65, Math.sin(angle) * 0.35);
      tower.castShadow = true;
      g.add(tower);

      // Tiny cone top
      const topGeo = new THREE.ConeGeometry(0.14, 0.15, 6);
      const top = new THREE.Mesh(topGeo, sandMat);
      top.position.set(Math.cos(angle) * 0.35, 0.97, Math.sin(angle) * 0.35);
      g.add(top);
    }

    // Flag on one tower
    const flagGeo = new THREE.PlaneGeometry(0.2, 0.12);
    const flagMat = new THREE.MeshStandardMaterial({ color: 0xff3333, side: THREE.DoubleSide });
    const flag = new THREE.Mesh(flagGeo, flagMat);
    flag.position.set(0.35, 1.15, 0);
    g.add(flag);

    g.position.set(x, 0, z);
    return g;
  }

  private createBeachChair(x: number, z: number): THREE.Group {
    const g = new THREE.Group();
    const woodMat = new THREE.MeshStandardMaterial({ color: 0xc4a36d, roughness: 0.8 });
    const fabricColors = [0x3388ff, 0xff5544, 0x44cc88];
    const fabricMat = new THREE.MeshStandardMaterial({
      color: fabricColors[Math.floor(Math.random() * fabricColors.length)],
      roughness: 0.7,
    });

    // Frame
    const frameGeo = new THREE.BoxGeometry(0.6, 0.04, 1.0);
    const frame = new THREE.Mesh(frameGeo, woodMat);
    frame.position.y = 0.3;
    frame.rotation.x = -0.2;
    frame.castShadow = true;
    g.add(frame);

    // Back rest
    const backGeo = new THREE.BoxGeometry(0.6, 0.5, 0.04);
    const back = new THREE.Mesh(backGeo, fabricMat);
    back.position.set(0, 0.55, -0.42);
    back.rotation.x = -0.3;
    back.castShadow = true;
    g.add(back);

    // Legs
    const legGeo = new THREE.CylinderGeometry(0.02, 0.02, 0.35, 4);
    for (const lx of [-0.25, 0.25]) {
      for (const lz of [-0.4, 0.4]) {
        const leg = new THREE.Mesh(legGeo, woodMat);
        leg.position.set(lx, 0.15, lz);
        g.add(leg);
      }
    }

    g.position.set(x, 0, z);
    g.rotation.y = Math.random() * Math.PI;
    return g;
  }

  private createRock(x: number, z: number): THREE.Group {
    const g = new THREE.Group();
    const rockMat = new THREE.MeshStandardMaterial({ color: 0x888888, roughness: 0.9 });

    const count = 1 + Math.floor(Math.random() * 3);
    for (let i = 0; i < count; i++) {
      const r = 0.2 + Math.random() * 0.4;
      const rockGeo = new THREE.DodecahedronGeometry(r, 0);
      const rock = new THREE.Mesh(rockGeo, rockMat);
      rock.position.set(
        (Math.random() - 0.5) * 0.5,
        r * 0.5,
        (Math.random() - 0.5) * 0.5,
      );
      rock.rotation.set(Math.random(), Math.random(), Math.random());
      rock.scale.y = 0.6 + Math.random() * 0.4;
      rock.castShadow = true;
      g.add(rock);
    }

    g.position.set(x, 0, z);
    return g;
  }

  update(playerZ: number): void {
    for (const child of this.group.children) {
      if (child.position.z < playerZ - 20) {
        child.position.z += this.totalSpan;
      }
    }
  }

  dispose(): void {
    this.scene.remove(this.group);
  }
}

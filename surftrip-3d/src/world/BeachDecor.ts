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

      if (kind < 0.22) {
        this.group.add(this.createUmbrella(x, z));
      } else if (kind < 0.36) {
        this.group.add(this.createSandcastle(x, z));
      } else if (kind < 0.50) {
        this.group.add(this.createBeachChair(x, z));
      } else if (kind < 0.62) {
        this.group.add(this.createRock(x, z));
      } else if (kind < 0.74) {
        this.group.add(this.createParrilla(x, z));
      } else if (kind < 0.86) {
        this.group.add(this.createBanderaArgentina(x, z));
      } else {
        this.group.add(this.createTermoMate(x, z));
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

    // Argentine flag on one tower
    const flagPoleGeo = new THREE.CylinderGeometry(0.01, 0.01, 0.3, 4);
    const flagPoleMat = new THREE.MeshStandardMaterial({ color: 0x8b6914 });
    const flagPole = new THREE.Mesh(flagPoleGeo, flagPoleMat);
    flagPole.position.set(0.35, 1.1, 0);
    g.add(flagPole);

    // Celeste stripe
    const flagCelGeo = new THREE.PlaneGeometry(0.2, 0.04);
    const flagCelMat = new THREE.MeshStandardMaterial({ color: 0x75aadb, side: THREE.DoubleSide });
    const flagCel1 = new THREE.Mesh(flagCelGeo, flagCelMat);
    flagCel1.position.set(0.45, 1.22, 0);
    g.add(flagCel1);
    // White stripe
    const flagWhGeo = new THREE.PlaneGeometry(0.2, 0.04);
    const flagWhMat = new THREE.MeshStandardMaterial({ color: 0xffffff, side: THREE.DoubleSide });
    const flagWh = new THREE.Mesh(flagWhGeo, flagWhMat);
    flagWh.position.set(0.45, 1.18, 0);
    g.add(flagWh);
    // Celeste stripe bottom
    const flagCel2 = new THREE.Mesh(flagCelGeo, flagCelMat);
    flagCel2.position.set(0.45, 1.14, 0);
    g.add(flagCel2);

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

  /** Parrilla / asado grill — Argentine BBQ */
  private createParrilla(x: number, z: number): THREE.Group {
    const g = new THREE.Group();
    const metalMat = new THREE.MeshStandardMaterial({ color: 0x444444, metalness: 0.6, roughness: 0.4 });
    const brickMat = new THREE.MeshStandardMaterial({ color: 0x8b4513, roughness: 0.9 });
    const coalMat = new THREE.MeshStandardMaterial({ color: 0x2a1a0a, roughness: 0.95 });
    const fireMat = new THREE.MeshStandardMaterial({ color: 0xff4500, emissive: 0xff2200, emissiveIntensity: 0.4, roughness: 0.8 });

    // Brick base
    const baseGeo = new THREE.BoxGeometry(1.2, 0.6, 0.8);
    const base = new THREE.Mesh(baseGeo, brickMat);
    base.position.y = 0.3;
    base.castShadow = true;
    g.add(base);

    // Grill grate
    const grateGeo = new THREE.BoxGeometry(1.0, 0.03, 0.6);
    const grate = new THREE.Mesh(grateGeo, metalMat);
    grate.position.y = 0.62;
    grate.castShadow = true;
    g.add(grate);

    // Coals glow
    const coalGeo = new THREE.BoxGeometry(0.9, 0.08, 0.5);
    const coal = new THREE.Mesh(coalGeo, coalMat);
    coal.position.y = 0.55;
    g.add(coal);

    // Fire embers (small glowing spheres)
    for (let i = 0; i < 3; i++) {
      const emberGeo = new THREE.SphereGeometry(0.05, 4, 4);
      const ember = new THREE.Mesh(emberGeo, fireMat);
      ember.position.set((Math.random() - 0.5) * 0.6, 0.58, (Math.random() - 0.5) * 0.3);
      g.add(ember);
    }

    // Chimney
    const chimGeo = new THREE.CylinderGeometry(0.08, 0.12, 0.8, 6);
    const chim = new THREE.Mesh(chimGeo, brickMat);
    chim.position.set(-0.5, 0.9, 0);
    chim.castShadow = true;
    g.add(chim);

    g.position.set(x, 0, z);
    g.rotation.y = Math.random() * Math.PI;
    return g;
  }

  /** Bandera Argentina on a pole */
  private createBanderaArgentina(x: number, z: number): THREE.Group {
    const g = new THREE.Group();

    // Pole
    const poleMat = new THREE.MeshStandardMaterial({ color: 0x8b6914, roughness: 0.7 });
    const poleGeo = new THREE.CylinderGeometry(0.03, 0.04, 2.5, 6);
    const pole = new THREE.Mesh(poleGeo, poleMat);
    pole.position.y = 1.25;
    pole.castShadow = true;
    g.add(pole);

    // Flag - celeste stripe top
    const celesteMat = new THREE.MeshStandardMaterial({ color: 0x75aadb, side: THREE.DoubleSide });
    const whiteMat = new THREE.MeshStandardMaterial({ color: 0xffffff, side: THREE.DoubleSide });
    const solMat = new THREE.MeshStandardMaterial({ color: 0xf6b40e, side: THREE.DoubleSide });

    const stripeGeo = new THREE.PlaneGeometry(0.8, 0.15);

    const cel1 = new THREE.Mesh(stripeGeo, celesteMat);
    cel1.position.set(0.4, 2.35, 0);
    g.add(cel1);

    const wh = new THREE.Mesh(stripeGeo, whiteMat);
    wh.position.set(0.4, 2.2, 0);
    g.add(wh);

    const cel2 = new THREE.Mesh(stripeGeo, celesteMat);
    cel2.position.set(0.4, 2.05, 0);
    g.add(cel2);

    // Sol de Mayo (golden circle on white stripe)
    const solGeo = new THREE.CircleGeometry(0.06, 10);
    const sol = new THREE.Mesh(solGeo, solMat);
    sol.position.set(0.4, 2.2, 0.01);
    g.add(sol);

    g.position.set(x, 0, z);
    return g;
  }

  /** Termo con mate — thermos and mate set on a towel */
  private createTermoMate(x: number, z: number): THREE.Group {
    const g = new THREE.Group();

    // Beach towel
    const towelColors = [0x75aadb, 0xff6347, 0x32cd32];
    const towelMat = new THREE.MeshStandardMaterial({
      color: towelColors[Math.floor(Math.random() * towelColors.length)],
      roughness: 0.9,
    });
    const towelGeo = new THREE.BoxGeometry(0.8, 0.02, 1.2);
    const towel = new THREE.Mesh(towelGeo, towelMat);
    towel.position.y = 0.01;
    g.add(towel);

    // Thermos (tall cylinder)
    const thermosMat = new THREE.MeshStandardMaterial({ color: 0x228b22, metalness: 0.3, roughness: 0.5 });
    const thermosGeo = new THREE.CylinderGeometry(0.08, 0.08, 0.5, 8);
    const thermos = new THREE.Mesh(thermosGeo, thermosMat);
    thermos.position.set(-0.15, 0.27, 0.1);
    thermos.castShadow = true;
    g.add(thermos);

    // Thermos cap
    const capMat = new THREE.MeshStandardMaterial({ color: 0x333333, roughness: 0.6 });
    const capGeo = new THREE.CylinderGeometry(0.06, 0.085, 0.08, 8);
    const cap = new THREE.Mesh(capGeo, capMat);
    cap.position.set(-0.15, 0.54, 0.1);
    g.add(cap);

    // Mate gourd
    const mateMat = new THREE.MeshStandardMaterial({ color: 0x6b4423, roughness: 0.8 });
    const mateGeo = new THREE.SphereGeometry(0.1, 8, 6);
    mateGeo.scale(1.0, 0.8, 1.0);
    const mate = new THREE.Mesh(mateGeo, mateMat);
    mate.position.set(0.15, 0.1, -0.1);
    mate.castShadow = true;
    g.add(mate);

    // Bombilla
    const bombMat = new THREE.MeshStandardMaterial({ color: 0xc0c0c0, metalness: 0.7, roughness: 0.3 });
    const bombGeo = new THREE.CylinderGeometry(0.012, 0.015, 0.22, 5);
    const bomb = new THREE.Mesh(bombGeo, bombMat);
    bomb.position.set(0.15, 0.2, -0.1);
    bomb.rotation.z = -0.2;
    g.add(bomb);

    g.position.set(x, 0, z);
    g.rotation.y = Math.random() * Math.PI;
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

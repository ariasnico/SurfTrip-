import * as THREE from 'three';
import { qualityManager } from '@core/QualityManager';
import type { ZoneId } from '@data/ZoneData';

/** Procedural decorations placed alongside the track — zone-aware */
export class BeachDecor {
  private group: THREE.Group;
  private scene: THREE.Scene;
  private totalSpan = 200;
  currentZone: ZoneId = 'chapadmalal';

  constructor(scene: THREE.Scene) {
    this.scene = scene;
    this.group = new THREE.Group();
    this.scene.add(this.group);
    this.populate();
  }

  /** Repopulate decorations for a new zone (called on zone change) */
  repopulate(): void {
    while (this.group.children.length > 0) {
      this.group.remove(this.group.children[0]);
    }
    this.populate();
  }

  private populate(): void {
    const density = qualityManager.settings.decorDensity;
    const baseSpacing = 200 / density; // Larger spacing = fewer items
    for (let z = 0; z < this.totalSpan; z += baseSpacing + Math.random() * 10) {
      const side = Math.random() < 0.5 ? -1 : 1;
      const x = side * (4 + Math.random() * 4);
      this.group.add(this.createDecorForZone(x, z));
    }
  }

  private createDecorForZone(x: number, z: number): THREE.Group {
    switch (this.currentZone) {
      case 'rambla': return this.createRamblaDecor(x, z);
      case 'carilo': return this.createCariloDecor(x, z);
      case 'rutaCostera': return this.createRutaDecor(x, z);
      default: return this.createChapadDecor(x, z);
    }
  }

  private createChapadDecor(x: number, z: number): THREE.Group {
    const kind = Math.random();
    if (kind < 0.22) return this.createUmbrella(x, z);
    if (kind < 0.36) return this.createSandcastle(x, z);
    if (kind < 0.50) return this.createBeachChair(x, z);
    if (kind < 0.62) return this.createRock(x, z);
    if (kind < 0.74) return this.createParrilla(x, z);
    if (kind < 0.86) return this.createBanderaArgentina(x, z);
    return this.createTermoMate(x, z);
  }

  private createRamblaDecor(x: number, z: number): THREE.Group {
    const kind = Math.random();
    if (kind < 0.25) return this.createLampPost(x, z);
    if (kind < 0.45) return this.createParkBench(x, z);
    if (kind < 0.60) return this.createTrashCan(x, z);
    if (kind < 0.75) return this.createFlowerPot(x, z);
    if (kind < 0.88) return this.createBanderaArgentina(x, z);
    return this.createTermoMate(x, z);
  }

  private createCariloDecor(x: number, z: number): THREE.Group {
    const kind = Math.random();
    if (kind < 0.30) return this.createPineTree(x, z);
    if (kind < 0.50) return this.createBush(x, z);
    if (kind < 0.65) return this.createRock(x, z);
    if (kind < 0.78) return this.createWoodLog(x, z);
    if (kind < 0.90) return this.createFern(x, z);
    return this.createTermoMate(x, z);
  }

  private createRutaDecor(x: number, z: number): THREE.Group {
    const kind = Math.random();
    if (kind < 0.25) return this.createMilestone(x, z);
    if (kind < 0.45) return this.createFence(x, z);
    if (kind < 0.60) return this.createWildGrass(x, z);
    if (kind < 0.75) return this.createRock(x, z);
    if (kind < 0.88) return this.createBanderaArgentina(x, z);
    return this.createTermoMate(x, z);
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

  // ── Zone 2: Rambla decorations ──────────────────────────────────────

  private createLampPost(x: number, z: number): THREE.Group {
    const g = new THREE.Group();
    const metalMat = new THREE.MeshStandardMaterial({ color: 0x555555, metalness: 0.5, roughness: 0.4 });
    const lightMat = new THREE.MeshStandardMaterial({ color: 0xffffcc, emissive: 0xffff88, emissiveIntensity: 0.3, roughness: 0.5 });

    const poleGeo = new THREE.CylinderGeometry(0.05, 0.07, 3.5, 6);
    const pole = new THREE.Mesh(poleGeo, metalMat);
    pole.position.y = 1.75;
    pole.castShadow = true;
    g.add(pole);

    const armGeo = new THREE.CylinderGeometry(0.03, 0.03, 0.6, 5);
    armGeo.rotateZ(Math.PI / 2);
    const arm = new THREE.Mesh(armGeo, metalMat);
    arm.position.set(0.3, 3.4, 0);
    g.add(arm);

    const lampGeo = new THREE.SphereGeometry(0.15, 8, 6);
    const lamp = new THREE.Mesh(lampGeo, lightMat);
    lamp.position.set(0.55, 3.35, 0);
    g.add(lamp);

    g.position.set(x, 0, z);
    return g;
  }

  private createParkBench(x: number, z: number): THREE.Group {
    const g = new THREE.Group();
    const woodMat = new THREE.MeshStandardMaterial({ color: 0x8b6914, roughness: 0.8 });
    const metalMat = new THREE.MeshStandardMaterial({ color: 0x555555, metalness: 0.5, roughness: 0.4 });

    const seatGeo = new THREE.BoxGeometry(1.2, 0.06, 0.4);
    const seat = new THREE.Mesh(seatGeo, woodMat);
    seat.position.y = 0.45;
    seat.castShadow = true;
    g.add(seat);

    const backGeo = new THREE.BoxGeometry(1.2, 0.4, 0.04);
    const back = new THREE.Mesh(backGeo, woodMat);
    back.position.set(0, 0.7, -0.18);
    back.castShadow = true;
    g.add(back);

    const legGeo = new THREE.BoxGeometry(0.06, 0.45, 0.3);
    for (const lx of [-0.5, 0.5]) {
      const leg = new THREE.Mesh(legGeo, metalMat);
      leg.position.set(lx, 0.22, 0);
      g.add(leg);
    }

    g.position.set(x, 0, z);
    g.rotation.y = Math.random() * Math.PI;
    return g;
  }

  private createTrashCan(x: number, z: number): THREE.Group {
    const g = new THREE.Group();
    const canMat = new THREE.MeshStandardMaterial({ color: 0x336633, roughness: 0.6 });

    const canGeo = new THREE.CylinderGeometry(0.2, 0.25, 0.7, 8);
    const can = new THREE.Mesh(canGeo, canMat);
    can.position.y = 0.35;
    can.castShadow = true;
    g.add(can);

    const lidGeo = new THREE.CylinderGeometry(0.22, 0.22, 0.05, 8);
    const lid = new THREE.Mesh(lidGeo, canMat);
    lid.position.y = 0.72;
    g.add(lid);

    g.position.set(x, 0, z);
    return g;
  }

  private createFlowerPot(x: number, z: number): THREE.Group {
    const g = new THREE.Group();
    const potMat = new THREE.MeshStandardMaterial({ color: 0xb85533, roughness: 0.8 });
    const flowerColors = [0xff4488, 0xffaa22, 0xff2244, 0xcc44ff];
    const flowerMat = new THREE.MeshStandardMaterial({
      color: flowerColors[Math.floor(Math.random() * flowerColors.length)],
      roughness: 0.6,
    });

    const potGeo = new THREE.CylinderGeometry(0.25, 0.18, 0.35, 8);
    const pot = new THREE.Mesh(potGeo, potMat);
    pot.position.y = 0.18;
    pot.castShadow = true;
    g.add(pot);

    for (let i = 0; i < 5; i++) {
      const fGeo = new THREE.SphereGeometry(0.08, 5, 4);
      const f = new THREE.Mesh(fGeo, flowerMat);
      const angle = (i / 5) * Math.PI * 2;
      f.position.set(Math.cos(angle) * 0.12, 0.42, Math.sin(angle) * 0.12);
      g.add(f);
    }

    const stemMat = new THREE.MeshStandardMaterial({ color: 0x33aa33, roughness: 0.7 });
    const leafGeo = new THREE.SphereGeometry(0.18, 6, 5);
    const leaves = new THREE.Mesh(leafGeo, stemMat);
    leaves.position.y = 0.40;
    leaves.scale.y = 0.6;
    g.add(leaves);

    g.position.set(x, 0, z);
    return g;
  }

  // ── Zone 3: Carilo decorations ──────────────────────────────────────

  private createPineTree(x: number, z: number): THREE.Group {
    const g = new THREE.Group();
    const trunkMat = new THREE.MeshStandardMaterial({ color: 0x5a3a1a, roughness: 0.85 });
    const leavesMat = new THREE.MeshStandardMaterial({ color: 0x1a4a1a, roughness: 0.7 });

    const trunkGeo = new THREE.CylinderGeometry(0.12, 0.18, 2.5, 6);
    const trunk = new THREE.Mesh(trunkGeo, trunkMat);
    trunk.position.y = 1.25;
    trunk.castShadow = true;
    g.add(trunk);

    for (let i = 0; i < 3; i++) {
      const radius = 1.0 - i * 0.25;
      const coneGeo = new THREE.ConeGeometry(radius, 1.2, 7);
      const cone = new THREE.Mesh(coneGeo, leavesMat);
      cone.position.y = 2.0 + i * 0.8;
      cone.castShadow = true;
      g.add(cone);
    }

    g.position.set(x, 0, z);
    return g;
  }

  private createBush(x: number, z: number): THREE.Group {
    const g = new THREE.Group();
    const bushMat = new THREE.MeshStandardMaterial({ color: 0x2d5a1a, roughness: 0.8 });

    const count = 2 + Math.floor(Math.random() * 3);
    for (let i = 0; i < count; i++) {
      const r = 0.3 + Math.random() * 0.3;
      const sphereGeo = new THREE.SphereGeometry(r, 7, 5);
      const sphere = new THREE.Mesh(sphereGeo, bushMat);
      sphere.position.set(
        (Math.random() - 0.5) * 0.5,
        r * 0.7,
        (Math.random() - 0.5) * 0.5,
      );
      sphere.scale.y = 0.7;
      sphere.castShadow = true;
      g.add(sphere);
    }

    g.position.set(x, 0, z);
    return g;
  }

  private createWoodLog(x: number, z: number): THREE.Group {
    const g = new THREE.Group();
    const logMat = new THREE.MeshStandardMaterial({ color: 0x5a3a1a, roughness: 0.9 });

    const logGeo = new THREE.CylinderGeometry(0.15, 0.18, 1.5, 6);
    logGeo.rotateZ(Math.PI / 2 + (Math.random() - 0.5) * 0.3);
    const log = new THREE.Mesh(logGeo, logMat);
    log.position.y = 0.15;
    log.castShadow = true;
    g.add(log);

    g.position.set(x, 0, z);
    return g;
  }

  private createFern(x: number, z: number): THREE.Group {
    const g = new THREE.Group();
    const fernMat = new THREE.MeshStandardMaterial({ color: 0x3a7a2a, roughness: 0.7, side: THREE.DoubleSide });

    for (let i = 0; i < 6; i++) {
      const angle = (i / 6) * Math.PI * 2;
      const leafGeo = new THREE.PlaneGeometry(0.2, 0.8);
      const leaf = new THREE.Mesh(leafGeo, fernMat);
      leaf.position.set(Math.cos(angle) * 0.15, 0.4, Math.sin(angle) * 0.15);
      leaf.rotation.set(-0.6, angle, 0);
      g.add(leaf);
    }

    g.position.set(x, 0, z);
    return g;
  }

  // ── Zone 4: Ruta Costera decorations ────────────────────────────────

  private createMilestone(x: number, z: number): THREE.Group {
    const g = new THREE.Group();
    const postMat = new THREE.MeshStandardMaterial({ color: 0xdddddd, roughness: 0.6 });
    const signMat = new THREE.MeshStandardMaterial({ color: 0x3366aa, roughness: 0.5 });

    const postGeo = new THREE.CylinderGeometry(0.04, 0.04, 1.5, 5);
    const post = new THREE.Mesh(postGeo, postMat);
    post.position.y = 0.75;
    post.castShadow = true;
    g.add(post);

    const signGeo = new THREE.BoxGeometry(0.6, 0.3, 0.04);
    const sign = new THREE.Mesh(signGeo, signMat);
    sign.position.y = 1.4;
    sign.castShadow = true;
    g.add(sign);

    g.position.set(x, 0, z);
    return g;
  }

  private createFence(x: number, z: number): THREE.Group {
    const g = new THREE.Group();
    const woodMat = new THREE.MeshStandardMaterial({ color: 0x8a7050, roughness: 0.85 });

    for (let i = 0; i < 3; i++) {
      const postGeo = new THREE.CylinderGeometry(0.04, 0.05, 0.8, 5);
      const post = new THREE.Mesh(postGeo, woodMat);
      post.position.set(i * 0.8 - 0.8, 0.4, 0);
      post.castShadow = true;
      g.add(post);
    }

    const railGeo = new THREE.CylinderGeometry(0.02, 0.02, 2.0, 5);
    railGeo.rotateZ(Math.PI / 2);
    const rail = new THREE.Mesh(railGeo, woodMat);
    rail.position.y = 0.6;
    g.add(rail);

    g.position.set(x, 0, z);
    g.rotation.y = Math.random() * Math.PI;
    return g;
  }

  private createWildGrass(x: number, z: number): THREE.Group {
    const g = new THREE.Group();
    const grassMat = new THREE.MeshStandardMaterial({ color: 0x8a9a40, roughness: 0.8, side: THREE.DoubleSide });

    for (let i = 0; i < 8; i++) {
      const bladeGeo = new THREE.PlaneGeometry(0.05, 0.5 + Math.random() * 0.3);
      const blade = new THREE.Mesh(bladeGeo, grassMat);
      blade.position.set(
        (Math.random() - 0.5) * 0.6,
        0.25,
        (Math.random() - 0.5) * 0.6,
      );
      blade.rotation.set(0, Math.random() * Math.PI, (Math.random() - 0.5) * 0.3);
      g.add(blade);
    }

    g.position.set(x, 0, z);
    return g;
  }

  update(playerZ: number): void {
    const fogFar = qualityManager.settings.fogFar;
    for (const child of this.group.children) {
      if (child.position.z < playerZ - 40) {
        child.position.z += this.totalSpan;
      }
      // Distance-based visibility culling
      const dist = child.position.z - playerZ;
      child.visible = dist > -40 && dist < fogFar + 10;
    }
  }

  dispose(): void {
    this.scene.remove(this.group);
  }
}

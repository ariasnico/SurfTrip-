import * as THREE from 'three';
import { Ocean } from './Ocean';
import { Sky } from './Sky';
import { BeachDecor } from './BeachDecor';
import { createPalmTree } from './PalmTree';
import type { ZoneColors, ZoneId, ZoneLighting } from '@data/ZoneData';

export class Environment {
  private ocean: Ocean;
  private sky: Sky;
  beachDecor: BeachDecor;
  private palmTrees: THREE.Group;
  private scene: THREE.Scene;
  private palmSpan = 200;
  private lastAppliedZone: ZoneId = 'chapadmalal';

  constructor(scene: THREE.Scene) {
    this.scene = scene;

    // Animated ocean with shader
    this.ocean = new Ocean(this.scene);

    // Gradient sky + clouds + seagulls
    this.sky = new Sky(this.scene);

    // Decorations (zone-aware)
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

  /** Apply blended zone colors to all visual sub-systems */
  applyZoneColors(colors: ZoneColors): void {
    this.sky.setColors(colors.skyZenith, colors.skyHorizon, colors.skyGround);
    this.ocean.setColors(colors.oceanDeep, colors.oceanSurf, colors.oceanFoam);

    // Forward sky horizon color to ocean for Fresnel reflection
    this.ocean.setSkyColor(colors.skyHorizon);

    // Update existing fog color (avoid creating new Fog every frame)
    const fog = this.scene.fog as THREE.Fog;
    if (fog) {
      fog.color.setHex(colors.fog);
    } else {
      this.scene.fog = new THREE.Fog(colors.fog, 40, 120);
    }
    if (this.scene.background instanceof THREE.Color) {
      this.scene.background.setHex(colors.background);
    }
  }

  /** Apply zone-specific lighting to scene lights and sky */
  applyZoneLighting(
    lighting: ZoneLighting,
    sunLight: THREE.DirectionalLight,
    ambientLight: THREE.AmbientLight,
    hemiLight: THREE.HemisphereLight,
  ): void {
    sunLight.color.setHex(lighting.sunColor);
    sunLight.intensity = lighting.sunIntensity;
    ambientLight.intensity = lighting.ambientIntensity;
    hemiLight.groundColor.setHex(lighting.hemisphereGround);

    // Update sky sun position and glow
    this.sky.setSunPosition(lighting.sunPosition[0], lighting.sunPosition[1], lighting.sunPosition[2]);
    this.sky.setSunGlow(lighting.sunGlow[0], lighting.sunGlow[1], lighting.sunGlow[2]);

    // Update ocean sun direction to match
    this.ocean.setSunDirection(lighting.sunPosition[0], lighting.sunPosition[1], lighting.sunPosition[2]);
  }

  /** Switch decorations when entering a new zone */
  switchDecorZone(zone: ZoneId): void {
    if (zone === this.lastAppliedZone) return;
    this.lastAppliedZone = zone;
    this.beachDecor.currentZone = zone;
    this.beachDecor.repopulate();
  }

  reset(): void {
    // Remove old palms and recreate at starting positions
    while (this.palmTrees.children.length > 0) {
      this.palmTrees.remove(this.palmTrees.children[0]);
    }
    this.createPalms();
    this.lastAppliedZone = 'chapadmalal';
    this.beachDecor.currentZone = 'chapadmalal';
    this.beachDecor.repopulate();
  }

  update(playerZ: number, dt: number, camera?: THREE.Camera): void {
    this.ocean.update(dt, playerZ, camera);
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

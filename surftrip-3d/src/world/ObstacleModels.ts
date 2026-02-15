import * as THREE from 'three';
import { geometryCache } from '@utils/GeometryCache';
import type { ZoneId } from '@data/ZoneData';

/** Creates varied low obstacle meshes (things to jump over), zone-aware */
export function createLowObstacle(zone: ZoneId = 'chapadmalal'): THREE.Mesh {
  switch (zone) {
    case 'rambla':
      return createRamblaLow();
    case 'carilo':
      return createCariloLow();
    case 'rutaCostera':
      return createRutaLow();
    default: { // chapadmalal
      const variant = Math.floor(Math.random() * 4);
      switch (variant) {
        case 0: return createRockObstacle();
        case 1: return createDriftwood();
        case 2: return createMateObstacle();
        default: return createSandWall();
      }
    }
  }
}

/** Creates varied high obstacle meshes (things to slide under), zone-aware */
export function createHighObstacle(zone: ZoneId = 'chapadmalal'): THREE.Mesh {
  switch (zone) {
    case 'rambla':
      return createRamblaHigh();
    case 'carilo':
      return createCariloHigh();
    case 'rutaCostera':
      return createRutaHigh();
    default: { // chapadmalal
      const variant = Math.floor(Math.random() * 2);
      switch (variant) {
        case 0: return createUmbrellaBarrier();
        default: return createWoodBarrier();
      }
    }
  }
}

// ── Cached geometry/material helpers ────────────────────────────────

function getCachedGeo(key: string, factory: () => THREE.BufferGeometry): THREE.BufferGeometry {
  return geometryCache.getGeometry(key, factory);
}

function getCachedMat(key: string, factory: () => THREE.MeshStandardMaterial): THREE.MeshStandardMaterial {
  return geometryCache.getStandardMaterial(key, factory);
}

// ── Chapadmalal obstacles ───────────────────────────────────────────

function createRockObstacle(): THREE.Mesh {
  const colors = [0x7a6b5d, 0x8b7d6b, 0x6e6259];
  const color = colors[Math.floor(Math.random() * colors.length)];
  const geo = getCachedGeo('obs_rock', () => {
    const g = new THREE.DodecahedronGeometry(0.55, 1);
    g.scale(1.6, 0.85, 0.9);
    return g;
  });
  const mat = getCachedMat(`obs_rock_${color}`, () => new THREE.MeshStandardMaterial({ color, roughness: 0.9 }));
  const mesh = new THREE.Mesh(geo, mat);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  mesh.userData['boxW'] = 1.8;
  mesh.userData['boxH'] = 0.9;
  mesh.userData['boxD'] = 0.8;
  return mesh;
}

function createDriftwood(): THREE.Mesh {
  const geo = getCachedGeo('obs_driftwood', () => {
    const g = new THREE.CylinderGeometry(0.15, 0.2, 2.0, 6);
    g.rotateZ(Math.PI / 2);
    return g;
  });
  const mat = getCachedMat('obs_driftwood_mat', () => new THREE.MeshStandardMaterial({ color: 0xa08060, roughness: 0.85 }));
  const mesh = new THREE.Mesh(geo, mat);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  mesh.userData['boxW'] = 2.0;
  mesh.userData['boxH'] = 0.4;
  mesh.userData['boxD'] = 0.4;
  return mesh;
}

function createSandWall(): THREE.Mesh {
  const geo = getCachedGeo('obs_sandwall', () => new THREE.BoxGeometry(1.8, 0.7, 0.6));
  const mat = getCachedMat('obs_sandwall_mat', () => new THREE.MeshStandardMaterial({ color: 0xe0c895, roughness: 0.95 }));
  const mesh = new THREE.Mesh(geo, mat);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  mesh.userData['boxW'] = 1.8;
  mesh.userData['boxH'] = 0.7;
  mesh.userData['boxD'] = 0.6;
  return mesh;
}

function createUmbrellaBarrier(): THREE.Mesh {
  const group = new THREE.Group();

  const poleMat = getCachedMat('obs_umb_pole', () => new THREE.MeshStandardMaterial({ color: 0xcccccc, metalness: 0.4, roughness: 0.5 }));
  const poleGeo = getCachedGeo('obs_umb_pole_geo', () => {
    const g = new THREE.CylinderGeometry(0.04, 0.04, 2.2, 6);
    g.rotateZ(Math.PI / 2);
    return g;
  });
  const pole = new THREE.Mesh(poleGeo, poleMat);
  pole.castShadow = true;
  group.add(pole);

  const colors = [0xff4466, 0x44aaff, 0xffcc00];
  const canopyColor = colors[Math.floor(Math.random() * colors.length)];
  const canopyGeo = getCachedGeo('obs_umb_canopy', () => new THREE.ConeGeometry(0.7, 0.4, 8, 1, true));
  const canopyMat = getCachedMat(`obs_umb_canopy_${canopyColor}`, () =>
    new THREE.MeshStandardMaterial({ color: canopyColor, roughness: 0.7, side: THREE.DoubleSide }));
  const canopy = new THREE.Mesh(canopyGeo, canopyMat);
  canopy.rotation.x = Math.PI;
  canopy.position.y = 0.1;
  canopy.castShadow = true;
  group.add(canopy);

  const hitGeo = getCachedGeo('obs_umb_hit', () => new THREE.BoxGeometry(2.0, 1.2, 0.3));
  const hitMat = getCachedMat('obs_invisible', () => new THREE.MeshStandardMaterial({ visible: false }));
  const hitbox = new THREE.Mesh(hitGeo, hitMat);
  hitbox.add(group);
  hitbox.castShadow = true;
  hitbox.userData['boxW'] = 2.0;
  hitbox.userData['boxH'] = 1.2;
  hitbox.userData['boxD'] = 0.3;
  return hitbox as THREE.Mesh;
}

/** Mate gourd with bombilla — Argentine icon obstacle */
function createMateObstacle(): THREE.Mesh {
  const group = new THREE.Group();

  const gourdMat = getCachedMat('obs_mate_gourd', () => new THREE.MeshStandardMaterial({ color: 0x6b4423, roughness: 0.8 }));
  const gourdGeo = getCachedGeo('obs_mate_gourd_geo', () => {
    const g = new THREE.SphereGeometry(0.45, 10, 8);
    g.scale(1.0, 0.85, 1.0);
    return g;
  });
  const gourd = new THREE.Mesh(gourdGeo, gourdMat);
  gourd.position.y = 0;
  gourd.castShadow = true;
  group.add(gourd);

  const rimMat = getCachedMat('obs_mate_rim', () => new THREE.MeshStandardMaterial({ color: 0xc0c0c0, metalness: 0.7, roughness: 0.3 }));
  const rimGeo = getCachedGeo('obs_mate_rim_geo', () => {
    const g = new THREE.TorusGeometry(0.32, 0.04, 8, 16);
    g.rotateX(Math.PI / 2);
    return g;
  });
  const rim = new THREE.Mesh(rimGeo, rimMat);
  rim.position.y = 0.32;
  group.add(rim);

  const yerbaMat = getCachedMat('obs_mate_yerba', () => new THREE.MeshStandardMaterial({ color: 0x3d6b2e, roughness: 0.9 }));
  const yerbaGeo = getCachedGeo('obs_mate_yerba_geo', () => {
    const g = new THREE.CircleGeometry(0.3, 10);
    g.rotateX(-Math.PI / 2);
    return g;
  });
  const yerba = new THREE.Mesh(yerbaGeo, yerbaMat);
  yerba.position.y = 0.33;
  group.add(yerba);

  const bombillaGeo = getCachedGeo('obs_mate_bomb', () => new THREE.CylinderGeometry(0.025, 0.03, 1.0, 6));
  const bombilla = new THREE.Mesh(bombillaGeo, rimMat);
  bombilla.position.set(0.1, 0.6, 0);
  bombilla.rotation.z = -0.25;
  bombilla.castShadow = true;
  group.add(bombilla);

  const filterGeo = getCachedGeo('obs_mate_filter', () => {
    const g = new THREE.SphereGeometry(0.05, 6, 4);
    g.scale(1.2, 0.5, 1.2);
    return g;
  });
  const filter = new THREE.Mesh(filterGeo, rimMat);
  filter.position.set(0.0, 0.15, 0);
  group.add(filter);

  return makeHitbox(group, 1.0, 1.2, 1.0);
}

function createWoodBarrier(): THREE.Mesh {
  const group = new THREE.Group();
  const woodMat = getCachedMat('obs_wood_barrier', () => new THREE.MeshStandardMaterial({ color: 0xa07040, roughness: 0.8 }));

  const plankGeo = getCachedGeo('obs_wood_plank', () => new THREE.BoxGeometry(2.2, 0.15, 0.1));
  const plank1 = new THREE.Mesh(plankGeo, woodMat);
  plank1.position.y = 0.1;
  plank1.castShadow = true;
  group.add(plank1);

  const plank2 = new THREE.Mesh(plankGeo, woodMat);
  plank2.position.y = -0.15;
  plank2.castShadow = true;
  group.add(plank2);

  const poleGeo = getCachedGeo('obs_wood_pole', () => new THREE.CylinderGeometry(0.04, 0.05, 1.6, 5));
  for (const px of [-0.9, 0.9]) {
    const pole = new THREE.Mesh(poleGeo, woodMat);
    pole.position.set(px, -0.5, 0);
    pole.castShadow = true;
    group.add(pole);
  }

  const hitGeo = getCachedGeo('obs_wood_hit', () => new THREE.BoxGeometry(2.2, 1.2, 0.2));
  const hitMat = getCachedMat('obs_invisible', () => new THREE.MeshStandardMaterial({ visible: false }));
  const hitbox = new THREE.Mesh(hitGeo, hitMat);
  hitbox.add(group);
  hitbox.castShadow = true;
  hitbox.userData['boxW'] = 2.2;
  hitbox.userData['boxH'] = 1.2;
  hitbox.userData['boxD'] = 0.2;
  return hitbox as THREE.Mesh;
}

// ── Zone 2: Rambla de Mar del Plata ─────────────────────────────────────

function createRamblaLow(): THREE.Mesh {
  const variant = Math.floor(Math.random() * 3);
  switch (variant) {
    case 0: return createBenchObstacle();
    case 1: return createBicycleObstacle();
    default: return createChurroCartObstacle();
  }
}

function createRamblaHigh(): THREE.Mesh {
  const variant = Math.floor(Math.random() * 2);
  return variant === 0 ? createBannerBarrier() : createWoodBarrier();
}

function createBenchObstacle(): THREE.Mesh {
  const group = new THREE.Group();
  const woodMat = getCachedMat('obs_bench_wood', () => new THREE.MeshStandardMaterial({ color: 0x8b6914, roughness: 0.8 }));
  const metalMat = getCachedMat('obs_bench_metal', () => new THREE.MeshStandardMaterial({ color: 0x555555, metalness: 0.5, roughness: 0.4 }));

  const seatGeo = getCachedGeo('obs_bench_seat', () => new THREE.BoxGeometry(1.6, 0.08, 0.5));
  const seat = new THREE.Mesh(seatGeo, woodMat);
  seat.position.y = 0.45;
  seat.castShadow = true;
  group.add(seat);

  const backGeo = getCachedGeo('obs_bench_back', () => new THREE.BoxGeometry(1.6, 0.5, 0.06));
  const back = new THREE.Mesh(backGeo, woodMat);
  back.position.set(0, 0.72, -0.2);
  back.rotation.x = -0.1;
  back.castShadow = true;
  group.add(back);

  const legGeo = getCachedGeo('obs_bench_leg', () => new THREE.CylinderGeometry(0.03, 0.03, 0.45, 5));
  for (const lx of [-0.6, 0.6]) {
    for (const lz of [-0.15, 0.15]) {
      const leg = new THREE.Mesh(legGeo, metalMat);
      leg.position.set(lx, 0.22, lz);
      group.add(leg);
    }
  }

  return makeHitbox(group, 1.6, 1.0, 0.6);
}

function createBicycleObstacle(): THREE.Mesh {
  const group = new THREE.Group();
  const frameMat = getCachedMat('obs_bike_frame', () => new THREE.MeshStandardMaterial({ color: 0xdd3333, metalness: 0.3, roughness: 0.5 }));
  const wheelMat = getCachedMat('obs_bike_wheel', () => new THREE.MeshStandardMaterial({ color: 0x333333, roughness: 0.7 }));

  const frameGeo = getCachedGeo('obs_bike_frame', () => new THREE.CylinderGeometry(0.03, 0.03, 1.0, 5));
  const frame = new THREE.Mesh(frameGeo, frameMat);
  frame.rotation.z = Math.PI / 6;
  frame.position.set(0, 0.5, 0);
  frame.castShadow = true;
  group.add(frame);

  const wheelGeo = getCachedGeo('obs_bike_wheel', () => new THREE.TorusGeometry(0.3, 0.04, 8, 16));
  for (const wx of [-0.4, 0.4]) {
    const wheel = new THREE.Mesh(wheelGeo, wheelMat);
    wheel.position.set(wx, 0.3, 0);
    wheel.rotation.y = Math.PI / 2;
    group.add(wheel);
  }

  const barGeo = getCachedGeo('obs_bike_bar', () => {
    const g = new THREE.CylinderGeometry(0.02, 0.02, 0.4, 5);
    g.rotateZ(Math.PI / 2);
    return g;
  });
  const bar = new THREE.Mesh(barGeo, frameMat);
  bar.position.set(0.3, 0.8, 0);
  group.add(bar);

  return makeHitbox(group, 1.2, 1.0, 0.6);
}

function createChurroCartObstacle(): THREE.Mesh {
  const group = new THREE.Group();
  const cartMat = getCachedMat('obs_cart_body', () => new THREE.MeshStandardMaterial({ color: 0xcc8833, roughness: 0.7 }));
  const metalMat = getCachedMat('obs_cart_metal', () => new THREE.MeshStandardMaterial({ color: 0x888888, metalness: 0.4, roughness: 0.5 }));

  const bodyGeo = getCachedGeo('obs_cart_body', () => new THREE.BoxGeometry(1.2, 0.6, 0.8));
  const body = new THREE.Mesh(bodyGeo, cartMat);
  body.position.y = 0.5;
  body.castShadow = true;
  group.add(body);

  const wheelGeo = getCachedGeo('obs_cart_wheel', () => {
    const g = new THREE.CylinderGeometry(0.15, 0.15, 0.08, 8);
    g.rotateX(Math.PI / 2);
    return g;
  });
  for (const wx of [-0.5, 0.5]) {
    const wheel = new THREE.Mesh(wheelGeo, metalMat);
    wheel.position.set(wx, 0.15, 0.35);
    group.add(wheel);
  }

  const canopyGeo = getCachedGeo('obs_cart_canopy', () => new THREE.BoxGeometry(1.4, 0.05, 1.0));
  const canopyMat = getCachedMat('obs_cart_canopy', () => new THREE.MeshStandardMaterial({ color: 0xff6600, roughness: 0.7 }));
  const canopy = new THREE.Mesh(canopyGeo, canopyMat);
  canopy.position.set(0, 1.1, 0);
  canopy.castShadow = true;
  group.add(canopy);

  return makeHitbox(group, 1.4, 1.0, 1.0);
}

function createBannerBarrier(): THREE.Mesh {
  const group = new THREE.Group();
  const poleMat = getCachedMat('obs_banner_pole', () => new THREE.MeshStandardMaterial({ color: 0x888888, metalness: 0.5, roughness: 0.4 }));
  const bannerColors = [0xff6600, 0x3388ff, 0xcc3333];
  const bannerColor = bannerColors[Math.floor(Math.random() * bannerColors.length)];
  const bannerMat = getCachedMat(`obs_banner_${bannerColor}`, () =>
    new THREE.MeshStandardMaterial({ color: bannerColor, roughness: 0.7, side: THREE.DoubleSide }));

  const poleGeo = getCachedGeo('obs_banner_pole', () => new THREE.CylinderGeometry(0.04, 0.04, 1.8, 6));
  for (const px of [-1.0, 1.0]) {
    const pole = new THREE.Mesh(poleGeo, poleMat);
    pole.position.set(px, -0.4, 0);
    pole.castShadow = true;
    group.add(pole);
  }

  const bannerGeo = getCachedGeo('obs_banner_plane', () => new THREE.PlaneGeometry(2.0, 0.6));
  const banner = new THREE.Mesh(bannerGeo, bannerMat);
  banner.position.y = 0;
  banner.castShadow = true;
  group.add(banner);

  const hitGeo = getCachedGeo('obs_banner_hit', () => new THREE.BoxGeometry(2.2, 1.2, 0.3));
  const hitMat = getCachedMat('obs_invisible', () => new THREE.MeshStandardMaterial({ visible: false }));
  const hitbox = new THREE.Mesh(hitGeo, hitMat);
  hitbox.add(group);
  hitbox.castShadow = true;
  hitbox.userData['boxW'] = 2.2;
  hitbox.userData['boxH'] = 1.2;
  hitbox.userData['boxD'] = 0.3;
  return hitbox as THREE.Mesh;
}

// ── Zone 3: Bosque de Carilo ────────────────────────────────────────────

function createCariloLow(): THREE.Mesh {
  const variant = Math.floor(Math.random() * 3);
  switch (variant) {
    case 0: return createTreeTrunkObstacle();
    case 1: return createRootObstacle();
    default: return createMushroomObstacle();
  }
}

function createCariloHigh(): THREE.Mesh {
  const variant = Math.floor(Math.random() * 2);
  return variant === 0 ? createLowBranchBarrier() : createWoodBarrier();
}

function createTreeTrunkObstacle(): THREE.Mesh {
  const geo = getCachedGeo('obs_trunk', () => {
    const g = new THREE.CylinderGeometry(0.25, 0.3, 2.0, 7);
    g.rotateZ(Math.PI / 2);
    return g;
  });
  const mat = getCachedMat('obs_trunk_mat', () => new THREE.MeshStandardMaterial({ color: 0x5a3a1a, roughness: 0.9 }));
  const mesh = new THREE.Mesh(geo, mat);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  mesh.userData['boxW'] = 2.0;
  mesh.userData['boxH'] = 0.5;
  mesh.userData['boxD'] = 0.5;
  return mesh;
}

function createRootObstacle(): THREE.Mesh {
  const group = new THREE.Group();
  const rootMat = getCachedMat('obs_root_mat', () => new THREE.MeshStandardMaterial({ color: 0x4a2a0a, roughness: 0.9 }));
  const rootGeo = getCachedGeo('obs_root_geo', () => new THREE.CylinderGeometry(0.06, 0.1, 1.2, 5));

  for (let i = 0; i < 4; i++) {
    const root = new THREE.Mesh(rootGeo, rootMat);
    root.rotation.z = Math.PI / 2 + (Math.random() - 0.5) * 0.4;
    root.position.set(
      (Math.random() - 0.5) * 0.8,
      0.08,
      (Math.random() - 0.5) * 0.3,
    );
    root.castShadow = true;
    group.add(root);
  }

  return makeHitbox(group, 1.6, 0.5, 0.6);
}

function createMushroomObstacle(): THREE.Mesh {
  const group = new THREE.Group();
  const stemMat = getCachedMat('obs_mush_stem', () => new THREE.MeshStandardMaterial({ color: 0xddd8c0, roughness: 0.8 }));
  const capMat = getCachedMat('obs_mush_cap', () => new THREE.MeshStandardMaterial({ color: 0xcc3322, roughness: 0.6 }));

  const stemGeo = getCachedGeo('obs_mush_stem', () => new THREE.CylinderGeometry(0.15, 0.2, 0.5, 6));
  const stem = new THREE.Mesh(stemGeo, stemMat);
  stem.position.y = 0.25;
  stem.castShadow = true;
  group.add(stem);

  const capGeo = getCachedGeo('obs_mush_cap', () => new THREE.SphereGeometry(0.45, 8, 6, 0, Math.PI * 2, 0, Math.PI / 2));
  const cap = new THREE.Mesh(capGeo, capMat);
  cap.position.y = 0.5;
  cap.castShadow = true;
  group.add(cap);

  const spotMat = getCachedMat('obs_mush_spot', () => new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.7 }));
  const spotGeo = getCachedGeo('obs_mush_spot', () => new THREE.SphereGeometry(0.05, 5, 4));
  for (let i = 0; i < 5; i++) {
    const spot = new THREE.Mesh(spotGeo, spotMat);
    const angle = (i / 5) * Math.PI * 2;
    spot.position.set(
      Math.cos(angle) * 0.3,
      0.6 + Math.random() * 0.1,
      Math.sin(angle) * 0.3,
    );
    group.add(spot);
  }

  return makeHitbox(group, 1.0, 0.9, 1.0);
}

function createLowBranchBarrier(): THREE.Mesh {
  const group = new THREE.Group();
  const branchMat = getCachedMat('obs_branch_mat', () => new THREE.MeshStandardMaterial({ color: 0x4a3520, roughness: 0.85 }));
  const leafMat = getCachedMat('obs_branch_leaf', () => new THREE.MeshStandardMaterial({ color: 0x2d6b20, roughness: 0.7 }));

  const branchGeo = getCachedGeo('obs_branch_geo', () => {
    const g = new THREE.CylinderGeometry(0.06, 0.1, 2.4, 5);
    g.rotateZ(Math.PI / 2);
    return g;
  });
  const branch = new THREE.Mesh(branchGeo, branchMat);
  branch.castShadow = true;
  group.add(branch);

  const leafGeo = getCachedGeo('obs_branch_leaf_geo', () => new THREE.SphereGeometry(0.25, 6, 5));
  for (let i = 0; i < 6; i++) {
    const leaf = new THREE.Mesh(leafGeo, leafMat);
    leaf.position.set(
      (Math.random() - 0.5) * 1.8,
      (Math.random() - 0.5) * 0.3,
      (Math.random() - 0.5) * 0.3,
    );
    leaf.scale.y = 0.5;
    group.add(leaf);
  }

  const hitGeo = getCachedGeo('obs_branch_hit', () => new THREE.BoxGeometry(2.2, 1.2, 0.5));
  const hitMat = getCachedMat('obs_invisible', () => new THREE.MeshStandardMaterial({ visible: false }));
  const hitbox = new THREE.Mesh(hitGeo, hitMat);
  hitbox.add(group);
  hitbox.castShadow = true;
  hitbox.userData['boxW'] = 2.2;
  hitbox.userData['boxH'] = 1.2;
  hitbox.userData['boxD'] = 0.5;
  return hitbox as THREE.Mesh;
}

// ── Zone 4: Ruta Costera ────────────────────────────────────────────────

function createRutaLow(): THREE.Mesh {
  const variant = Math.floor(Math.random() * 3);
  switch (variant) {
    case 0: return createTrafficConeObstacle();
    case 1: return createTireObstacle();
    default: return createRockObstacle(); // rocks appear everywhere
  }
}

function createRutaHigh(): THREE.Mesh {
  const variant = Math.floor(Math.random() * 2);
  return variant === 0 ? createRoadSignBarrier() : createWoodBarrier();
}

function createTrafficConeObstacle(): THREE.Mesh {
  const group = new THREE.Group();
  const coneMat = getCachedMat('obs_tcone_mat', () => new THREE.MeshStandardMaterial({ color: 0xff6600, roughness: 0.6 }));
  const stripeMat = getCachedMat('obs_tcone_stripe', () => new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.7 }));

  const coneGeo = getCachedGeo('obs_tcone_geo', () => new THREE.ConeGeometry(0.25, 0.8, 6));
  const cone = new THREE.Mesh(coneGeo, coneMat);
  cone.position.y = 0.4;
  cone.castShadow = true;
  group.add(cone);

  const stripeGeo = getCachedGeo('obs_tcone_stripe_geo', () => new THREE.CylinderGeometry(0.18, 0.2, 0.1, 6));
  const stripe = new THREE.Mesh(stripeGeo, stripeMat);
  stripe.position.y = 0.35;
  group.add(stripe);

  const baseGeo = getCachedGeo('obs_tcone_base', () => new THREE.BoxGeometry(0.5, 0.06, 0.5));
  const base = new THREE.Mesh(baseGeo, coneMat);
  base.position.y = 0.03;
  group.add(base);

  return makeHitbox(group, 0.8, 0.9, 0.8);
}

function createTireObstacle(): THREE.Mesh {
  const geo = getCachedGeo('obs_tire', () => {
    const g = new THREE.TorusGeometry(0.35, 0.15, 8, 16);
    g.rotateX(Math.PI / 2);
    return g;
  });
  const tireMat = getCachedMat('obs_tire_mat', () => new THREE.MeshStandardMaterial({ color: 0x2a2a2a, roughness: 0.9 }));
  const mesh = new THREE.Mesh(geo, tireMat);
  mesh.position.y = 0.15;
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  mesh.userData['boxW'] = 1.0;
  mesh.userData['boxH'] = 0.5;
  mesh.userData['boxD'] = 1.0;
  return mesh;
}

function createRoadSignBarrier(): THREE.Mesh {
  const group = new THREE.Group();
  const poleMat = getCachedMat('obs_rsign_pole', () => new THREE.MeshStandardMaterial({ color: 0x888888, metalness: 0.5, roughness: 0.4 }));
  const signMat = getCachedMat('obs_rsign_sign', () => new THREE.MeshStandardMaterial({ color: 0xffcc00, roughness: 0.5 }));

  const poleGeo = getCachedGeo('obs_rsign_pole', () => new THREE.CylinderGeometry(0.04, 0.04, 1.8, 6));
  const pole = new THREE.Mesh(poleGeo, poleMat);
  pole.position.set(0, -0.4, 0);
  pole.castShadow = true;
  group.add(pole);

  const signGeo = getCachedGeo('obs_rsign_sign', () => new THREE.BoxGeometry(0.8, 0.8, 0.05));
  const sign = new THREE.Mesh(signGeo, signMat);
  sign.rotation.z = Math.PI / 4;
  sign.position.y = 0.2;
  sign.castShadow = true;
  group.add(sign);

  const barGeo = getCachedGeo('obs_rsign_bar', () => {
    const g = new THREE.CylinderGeometry(0.03, 0.03, 2.0, 5);
    g.rotateZ(Math.PI / 2);
    return g;
  });
  const bar = new THREE.Mesh(barGeo, poleMat);
  bar.position.y = -0.2;
  group.add(bar);

  const hitGeo = getCachedGeo('obs_rsign_hit', () => new THREE.BoxGeometry(2.0, 1.2, 0.3));
  const hitMat = getCachedMat('obs_invisible', () => new THREE.MeshStandardMaterial({ visible: false }));
  const hitbox = new THREE.Mesh(hitGeo, hitMat);
  hitbox.add(group);
  hitbox.castShadow = true;
  hitbox.userData['boxW'] = 2.0;
  hitbox.userData['boxH'] = 1.2;
  hitbox.userData['boxD'] = 0.3;
  return hitbox as THREE.Mesh;
}

// ── Helpers ────────────────────────────────────────────────────────────

function makeHitbox(group: THREE.Group, w: number, h: number, d: number): THREE.Mesh {
  const geo = getCachedGeo(`obs_hitbox_${w}_${h}_${d}`, () => new THREE.BoxGeometry(w, h, d));
  const mat = getCachedMat('obs_invisible', () => new THREE.MeshStandardMaterial({ visible: false }));
  const hitbox = new THREE.Mesh(geo, mat);
  hitbox.add(group);
  hitbox.castShadow = true;
  hitbox.userData['boxW'] = w;
  hitbox.userData['boxH'] = h;
  hitbox.userData['boxD'] = d;
  return hitbox as THREE.Mesh;
}

import * as THREE from 'three';

/** Creates varied low obstacle meshes (things to jump over) */
export function createLowObstacle(): THREE.Mesh {
  const variant = Math.floor(Math.random() * 4);

  switch (variant) {
    case 0: // Rock cluster
      return createRockObstacle();
    case 1: // Driftwood log
      return createDriftwood();
    case 2: // Mate gigante
      return createMateObstacle();
    default: // Sandcastle wall
      return createSandWall();
  }
}

/** Creates varied high obstacle meshes (things to slide under) */
export function createHighObstacle(): THREE.Mesh {
  const variant = Math.floor(Math.random() * 2);

  switch (variant) {
    case 0: // Beach umbrella horizontal
      return createUmbrellaBarrier();
    default: // Wooden barrier
      return createWoodBarrier();
  }
}

function createRockObstacle(): THREE.Mesh {
  const colors = [0x7a6b5d, 0x8b7d6b, 0x6e6259];
  const color = colors[Math.floor(Math.random() * colors.length)];
  const geo = new THREE.DodecahedronGeometry(0.55, 1);
  // Squash it to be wider
  geo.scale(1.6, 0.85, 0.9);
  const mat = new THREE.MeshStandardMaterial({ color, roughness: 0.9 });
  const mesh = new THREE.Mesh(geo, mat) as THREE.Mesh;
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  // Store collision box params as userData
  mesh.userData['boxW'] = 1.8;
  mesh.userData['boxH'] = 0.9;
  mesh.userData['boxD'] = 0.8;
  return mesh;
}

function createDriftwood(): THREE.Mesh {
  const geo = new THREE.CylinderGeometry(0.15, 0.2, 2.0, 6);
  geo.rotateZ(Math.PI / 2);
  const mat = new THREE.MeshStandardMaterial({ color: 0xa08060, roughness: 0.85 });
  const mesh = new THREE.Mesh(geo, mat) as THREE.Mesh;
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  mesh.userData['boxW'] = 2.0;
  mesh.userData['boxH'] = 0.4;
  mesh.userData['boxD'] = 0.4;
  return mesh;
}

function createSandWall(): THREE.Mesh {
  const geo = new THREE.BoxGeometry(1.8, 0.7, 0.6);
  const mat = new THREE.MeshStandardMaterial({ color: 0xe0c895, roughness: 0.95 });
  const mesh = new THREE.Mesh(geo, mat) as THREE.Mesh;
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  mesh.userData['boxW'] = 1.8;
  mesh.userData['boxH'] = 0.7;
  mesh.userData['boxD'] = 0.6;
  return mesh;
}

function createUmbrellaBarrier(): THREE.Mesh {
  // Horizontal umbrella pole spanning the lane
  const group = new THREE.Group();

  const poleMat = new THREE.MeshStandardMaterial({ color: 0xcccccc, metalness: 0.4, roughness: 0.5 });
  const poleGeo = new THREE.CylinderGeometry(0.04, 0.04, 2.2, 6);
  poleGeo.rotateZ(Math.PI / 2);
  const pole = new THREE.Mesh(poleGeo, poleMat);
  pole.castShadow = true;
  group.add(pole);

  const colors = [0xff4466, 0x44aaff, 0xffcc00];
  const canopyColor = colors[Math.floor(Math.random() * colors.length)];
  const canopyGeo = new THREE.ConeGeometry(0.7, 0.4, 8, 1, true);
  const canopyMat = new THREE.MeshStandardMaterial({ color: canopyColor, roughness: 0.7, side: THREE.DoubleSide });
  const canopy = new THREE.Mesh(canopyGeo, canopyMat);
  canopy.rotation.x = Math.PI;
  canopy.position.y = 0.1;
  canopy.castShadow = true;
  group.add(canopy);

  // Bake into single mesh for collision simplicity
  const geo = new THREE.BoxGeometry(2.0, 1.2, 0.3);
  const mat = new THREE.MeshStandardMaterial({ visible: false });
  const hitbox = new THREE.Mesh(geo, mat);

  // Attach visual as child of hitbox
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

  // Gourd body (rounded vessel)
  const gourdMat = new THREE.MeshStandardMaterial({ color: 0x6b4423, roughness: 0.8 });
  const gourdGeo = new THREE.SphereGeometry(0.45, 10, 8);
  gourdGeo.scale(1.0, 0.85, 1.0);
  const gourd = new THREE.Mesh(gourdGeo, gourdMat);
  gourd.position.y = 0;
  gourd.castShadow = true;
  group.add(gourd);

  // Metal rim at the top
  const rimMat = new THREE.MeshStandardMaterial({ color: 0xc0c0c0, metalness: 0.7, roughness: 0.3 });
  const rimGeo = new THREE.TorusGeometry(0.32, 0.04, 8, 16);
  rimGeo.rotateX(Math.PI / 2);
  const rim = new THREE.Mesh(rimGeo, rimMat);
  rim.position.y = 0.32;
  group.add(rim);

  // Yerba inside (green)
  const yerbaMat = new THREE.MeshStandardMaterial({ color: 0x3d6b2e, roughness: 0.9 });
  const yerbaGeo = new THREE.CircleGeometry(0.3, 10);
  yerbaGeo.rotateX(-Math.PI / 2);
  const yerba = new THREE.Mesh(yerbaGeo, yerbaMat);
  yerba.position.y = 0.33;
  group.add(yerba);

  // Bombilla (metal straw)
  const bombillaGeo = new THREE.CylinderGeometry(0.025, 0.03, 1.0, 6);
  const bombilla = new THREE.Mesh(bombillaGeo, rimMat);
  bombilla.position.set(0.1, 0.6, 0);
  bombilla.rotation.z = -0.25;
  bombilla.castShadow = true;
  group.add(bombilla);

  // Bombilla filter (flattened sphere at bottom)
  const filterGeo = new THREE.SphereGeometry(0.05, 6, 4);
  filterGeo.scale(1.2, 0.5, 1.2);
  const filter = new THREE.Mesh(filterGeo, rimMat);
  filter.position.set(0.0, 0.15, 0);
  group.add(filter);

  // Invisible hitbox
  const geo = new THREE.BoxGeometry(1.0, 1.2, 1.0);
  const mat = new THREE.MeshStandardMaterial({ visible: false });
  const hitbox = new THREE.Mesh(geo, mat);
  hitbox.add(group);
  hitbox.castShadow = true;
  hitbox.userData['boxW'] = 1.0;
  hitbox.userData['boxH'] = 1.2;
  hitbox.userData['boxD'] = 1.0;
  return hitbox as THREE.Mesh;
}

function createWoodBarrier(): THREE.Mesh {
  const group = new THREE.Group();
  const woodMat = new THREE.MeshStandardMaterial({ color: 0xa07040, roughness: 0.8 });

  // Horizontal plank
  const plankGeo = new THREE.BoxGeometry(2.2, 0.15, 0.1);
  const plank1 = new THREE.Mesh(plankGeo, woodMat);
  plank1.position.y = 0.1;
  plank1.castShadow = true;
  group.add(plank1);

  const plank2 = new THREE.Mesh(plankGeo, woodMat);
  plank2.position.y = -0.15;
  plank2.castShadow = true;
  group.add(plank2);

  // Support poles
  const poleGeo = new THREE.CylinderGeometry(0.04, 0.05, 1.6, 5);
  for (const px of [-0.9, 0.9]) {
    const pole = new THREE.Mesh(poleGeo, woodMat);
    pole.position.set(px, -0.5, 0);
    pole.castShadow = true;
    group.add(pole);
  }

  const geo = new THREE.BoxGeometry(2.2, 1.2, 0.2);
  const mat = new THREE.MeshStandardMaterial({ visible: false });
  const hitbox = new THREE.Mesh(geo, mat);
  hitbox.add(group);
  hitbox.castShadow = true;
  hitbox.userData['boxW'] = 2.2;
  hitbox.userData['boxH'] = 1.2;
  hitbox.userData['boxD'] = 0.2;
  return hitbox as THREE.Mesh;
}

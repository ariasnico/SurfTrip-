import * as THREE from 'three';

/** Creates a low-poly surfer character with articulated limbs */
export function createSurferModel(): {
  group: THREE.Group;
  leftArm: THREE.Mesh;
  rightArm: THREE.Mesh;
  leftLeg: THREE.Mesh;
  rightLeg: THREE.Mesh;
  board: THREE.Mesh;
  hair: THREE.Mesh;
} {
  const group = new THREE.Group();

  // Colors — Argentine themed
  const skinMat = new THREE.MeshStandardMaterial({ color: 0xf4c28a, roughness: 0.7 });
  const shirtMat = new THREE.MeshStandardMaterial({ color: 0x75aadb, roughness: 0.6 }); // Celeste argentino
  const shortsMat = new THREE.MeshStandardMaterial({ color: 0x1a1a2e, roughness: 0.6 }); // Dark shorts
  const hairMat = new THREE.MeshStandardMaterial({ color: 0x3a2512, roughness: 0.8 });
  const boardMat = new THREE.MeshStandardMaterial({
    color: 0x75aadb,
    roughness: 0.35,
    metalness: 0.05,
  }); // Celeste board
  const stripeMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.5 }); // White stripe
  const solDeMayo = new THREE.MeshStandardMaterial({ color: 0xf6b40e, roughness: 0.4, metalness: 0.1 }); // Sol de Mayo gold

  // --- Torso (camiseta celeste y blanca) ---
  const torsoGeo = new THREE.BoxGeometry(0.55, 0.7, 0.35);
  const torso = new THREE.Mesh(torsoGeo, shirtMat);
  torso.position.y = 1.15;
  torso.castShadow = true;
  group.add(torso);

  // White stripe across chest (camiseta argentina)
  const chestStripeGeo = new THREE.BoxGeometry(0.56, 0.2, 0.36);
  const chestStripe = new THREE.Mesh(chestStripeGeo, stripeMat);
  chestStripe.position.y = 1.15;
  group.add(chestStripe);

  // --- Shorts ---
  const shortsGeo = new THREE.BoxGeometry(0.55, 0.35, 0.35);
  const shorts = new THREE.Mesh(shortsGeo, shortsMat);
  shorts.position.y = 0.65;
  shorts.castShadow = true;
  group.add(shorts);

  // --- Head ---
  const headGeo = new THREE.SphereGeometry(0.22, 10, 8);
  const head = new THREE.Mesh(headGeo, skinMat);
  head.position.y = 1.72;
  head.castShadow = true;
  group.add(head);

  // --- Hair (messy beach hair) ---
  const hairGeo = new THREE.SphereGeometry(0.25, 8, 6);
  const hair = new THREE.Mesh(hairGeo, hairMat);
  hair.position.y = 1.82;
  hair.scale.set(1, 0.7, 1.1);
  hair.castShadow = true;
  group.add(hair);

  // --- Arms ---
  const armGeo = new THREE.BoxGeometry(0.14, 0.55, 0.14);

  const leftArm = new THREE.Mesh(armGeo, skinMat);
  leftArm.position.set(-0.38, 1.1, 0);
  leftArm.castShadow = true;
  group.add(leftArm);

  const rightArm = new THREE.Mesh(armGeo, skinMat);
  rightArm.position.set(0.38, 1.1, 0);
  rightArm.castShadow = true;
  group.add(rightArm);

  // --- Legs ---
  const legGeo = new THREE.BoxGeometry(0.16, 0.5, 0.16);

  const leftLeg = new THREE.Mesh(legGeo, skinMat);
  leftLeg.position.set(-0.14, 0.25, 0);
  leftLeg.castShadow = true;
  group.add(leftLeg);

  const rightLeg = new THREE.Mesh(legGeo, skinMat);
  rightLeg.position.set(0.14, 0.25, 0);
  rightLeg.castShadow = true;
  group.add(rightLeg);

  // --- Surfboard ---
  const boardGeo = new THREE.BoxGeometry(0.5, 0.06, 1.6);
  const board = new THREE.Mesh(boardGeo, boardMat);
  board.position.y = 0.03;
  board.castShadow = true;
  group.add(board);

  // Board white stripes (Argentine flag on board)
  const boardStripe1Geo = new THREE.BoxGeometry(0.51, 0.065, 0.45);
  const boardStripe1 = new THREE.Mesh(boardStripe1Geo, stripeMat);
  boardStripe1.position.y = 0.035;
  group.add(boardStripe1);

  // Sol de Mayo emblem (golden circle on board)
  const solGeo = new THREE.CircleGeometry(0.08, 12);
  const sol = new THREE.Mesh(solGeo, solDeMayo);
  sol.position.set(0, 0.065, 0.2);
  sol.rotation.x = -Math.PI / 2;
  group.add(sol);

  // Board fin
  const finGeo = new THREE.BoxGeometry(0.04, 0.12, 0.15);
  const fin = new THREE.Mesh(finGeo, solDeMayo);
  fin.position.set(0, -0.03, -0.7);
  fin.castShadow = true;
  group.add(fin);

  return { group, leftArm, rightArm, leftLeg, rightLeg, board, hair };
}

/** Simple procedural animation for the surfer while running */
export class SurferAnimator {
  private time = 0;
  private leftArm: THREE.Mesh;
  private rightArm: THREE.Mesh;
  private leftLeg: THREE.Mesh;
  private rightLeg: THREE.Mesh;
  private hair: THREE.Mesh;
  private board: THREE.Mesh;

  constructor(parts: {
    leftArm: THREE.Mesh;
    rightArm: THREE.Mesh;
    leftLeg: THREE.Mesh;
    rightLeg: THREE.Mesh;
    board: THREE.Mesh;
    hair: THREE.Mesh;
  }) {
    this.leftArm = parts.leftArm;
    this.rightArm = parts.rightArm;
    this.leftLeg = parts.leftLeg;
    this.rightLeg = parts.rightLeg;
    this.board = parts.board;
    this.hair = parts.hair;
  }

  update(dt: number, state: 'running' | 'jumping' | 'sliding' | 'dead', speed: number): void {
    this.time += dt * speed * 0.5;

    switch (state) {
      case 'running': {
        // Arms swing opposite to legs
        const swing = Math.sin(this.time * 2) * 0.35;
        this.leftArm.rotation.x = swing;
        this.rightArm.rotation.x = -swing;
        this.leftLeg.rotation.x = -swing * 0.8;
        this.rightLeg.rotation.x = swing * 0.8;
        // Board slight tilt
        this.board.rotation.z = Math.sin(this.time) * 0.03;
        // Hair bob
        this.hair.position.z = Math.sin(this.time * 3) * 0.02;
        break;
      }
      case 'jumping': {
        // Arms up for balance
        this.leftArm.rotation.x = -0.6;
        this.rightArm.rotation.x = -0.6;
        this.leftArm.rotation.z = -0.4;
        this.rightArm.rotation.z = 0.4;
        this.leftLeg.rotation.x = 0.2;
        this.rightLeg.rotation.x = 0.2;
        this.board.rotation.z = 0;
        break;
      }
      case 'sliding': {
        // Crouching pose
        this.leftArm.rotation.x = 0.8;
        this.rightArm.rotation.x = 0.8;
        this.leftLeg.rotation.x = -0.6;
        this.rightLeg.rotation.x = -0.6;
        this.board.rotation.z = 0;
        break;
      }
      case 'dead': {
        // Ragdoll fall
        const t = Math.min(this.time * 0.5, 1);
        this.leftArm.rotation.x = t * 1.2;
        this.rightArm.rotation.x = t * -0.8;
        this.leftArm.rotation.z = -t * 0.5;
        this.rightArm.rotation.z = t * 0.7;
        this.leftLeg.rotation.x = t * 0.5;
        this.rightLeg.rotation.x = t * -0.3;
        break;
      }
    }
  }

  reset(): void {
    this.time = 0;
    this.leftArm.rotation.set(0, 0, 0);
    this.rightArm.rotation.set(0, 0, 0);
    this.leftLeg.rotation.set(0, 0, 0);
    this.rightLeg.rotation.set(0, 0, 0);
    this.board.rotation.set(0, 0, 0);
  }
}

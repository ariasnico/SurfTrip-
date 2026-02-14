import * as THREE from 'three';

const trunkMat = new THREE.MeshStandardMaterial({ color: 0x8b6914, roughness: 0.85 });
const leavesMat = new THREE.MeshStandardMaterial({ color: 0x2d8b46, roughness: 0.7, side: THREE.DoubleSide });

/** Create a low-poly palm tree with curved trunk and fan leaves */
export function createPalmTree(): THREE.Group {
  const tree = new THREE.Group();

  // Curved trunk using stacked cylinders with slight offset
  const segments = 5;
  const segHeight = 0.7;
  let offsetX = 0;
  for (let i = 0; i < segments; i++) {
    const radius = 0.18 - i * 0.02;
    const segGeo = new THREE.CylinderGeometry(radius - 0.02, radius, segHeight, 6);
    const seg = new THREE.Mesh(segGeo, trunkMat);
    offsetX += (i > 1 ? 0.08 : 0.02);
    seg.position.set(offsetX, i * segHeight + segHeight / 2, 0);
    seg.rotation.z = -i * 0.06;
    seg.castShadow = true;
    tree.add(seg);
  }

  const topY = segments * segHeight;
  const topX = offsetX;

  // Coconuts
  const coconutMat = new THREE.MeshStandardMaterial({ color: 0x6b4423, roughness: 0.8 });
  for (let i = 0; i < 3; i++) {
    const cGeo = new THREE.SphereGeometry(0.08, 6, 6);
    const coconut = new THREE.Mesh(cGeo, coconutMat);
    const angle = (i / 3) * Math.PI * 2;
    coconut.position.set(
      topX + Math.cos(angle) * 0.12,
      topY - 0.1,
      Math.sin(angle) * 0.12,
    );
    tree.add(coconut);
  }

  // Fan leaves (flat elongated shapes)
  const leafCount = 6;
  for (let i = 0; i < leafCount; i++) {
    const angle = (i / leafCount) * Math.PI * 2;
    const leafGeo = new THREE.PlaneGeometry(0.5, 1.8);
    const leaf = new THREE.Mesh(leafGeo, leavesMat);
    leaf.position.set(
      topX + Math.cos(angle) * 0.3,
      topY + 0.3,
      Math.sin(angle) * 0.3,
    );
    leaf.rotation.set(
      -0.5 + Math.random() * 0.3,
      angle,
      0.2 * Math.sin(angle),
    );
    leaf.castShadow = true;
    tree.add(leaf);
  }

  return tree;
}

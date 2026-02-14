import * as THREE from 'three';

const trunkMat = new THREE.MeshStandardMaterial({ color: 0x8b6914, roughness: 0.85 });
const trunkRingMat = new THREE.MeshStandardMaterial({ color: 0x7a5a10, roughness: 0.9 });
const leavesMat = new THREE.MeshStandardMaterial({ color: 0x2d8b46, roughness: 0.7, side: THREE.DoubleSide });
const leafTipMat = new THREE.MeshStandardMaterial({ color: 0x4aad5e, roughness: 0.7, side: THREE.DoubleSide });

/** Create a low-poly palm tree with curved trunk, rings, and drooping leaves */
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

    // Trunk rings for bark texture
    if (i > 0 && i < segments - 1) {
      const ringGeo = new THREE.TorusGeometry(radius - 0.005, 0.015, 4, 8);
      const ring = new THREE.Mesh(ringGeo, trunkRingMat);
      ring.position.set(offsetX, i * segHeight, 0);
      ring.rotation.x = Math.PI / 2;
      tree.add(ring);
    }
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

  // Fan leaves with droop (curved via vertex displacement)
  const leafCount = 6;
  for (let i = 0; i < leafCount; i++) {
    const angle = (i / leafCount) * Math.PI * 2;

    // Create leaf with more vertices so we can curve it
    const leafGeo = new THREE.PlaneGeometry(0.5, 1.8, 1, 6);
    const positions = leafGeo.attributes.position;

    // Curve the leaf: droop more at the tip
    for (let v = 0; v < positions.count; v++) {
      const ly = positions.getY(v); // along the leaf length
      const t = (ly + 0.9) / 1.8; // 0 at base, 1 at tip
      // Droop: lower Z at the tip
      positions.setZ(v, positions.getZ(v) - t * t * 0.6);
    }
    positions.needsUpdate = true;
    leafGeo.computeVertexNormals();

    // Use lighter green at tip occasionally
    const useTipMat = Math.random() > 0.5;
    const leaf = new THREE.Mesh(leafGeo, useTipMat ? leafTipMat : leavesMat);
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

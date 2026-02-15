/**
 * GeometryCache — Phase 8: Performance Optimization
 *
 * Caches Three.js geometries and materials so they are created once
 * and shared across all instances of the same object type.
 * Avoids redundant GPU uploads and reduces memory usage.
 */

import * as THREE from 'three';

class GeometryCacheClass {
  private geometries = new Map<string, THREE.BufferGeometry>();
  private materials = new Map<string, THREE.Material>();

  /** Get or create a cached geometry */
  getGeometry(key: string, factory: () => THREE.BufferGeometry): THREE.BufferGeometry {
    let geo = this.geometries.get(key);
    if (!geo) {
      geo = factory();
      this.geometries.set(key, geo);
    }
    return geo;
  }

  /** Get or create a cached material */
  getMaterial(key: string, factory: () => THREE.Material): THREE.Material {
    let mat = this.materials.get(key);
    if (!mat) {
      mat = factory();
      this.materials.set(key, mat);
    }
    return mat;
  }

  /** Get a cached MeshStandardMaterial (typed helper) */
  getStandardMaterial(key: string, factory: () => THREE.MeshStandardMaterial): THREE.MeshStandardMaterial {
    return this.getMaterial(key, factory) as THREE.MeshStandardMaterial;
  }

  /** Get a cached MeshBasicMaterial (typed helper) */
  getBasicMaterial(key: string, factory: () => THREE.MeshBasicMaterial): THREE.MeshBasicMaterial {
    return this.getMaterial(key, factory) as THREE.MeshBasicMaterial;
  }

  /** Dispose all cached resources */
  dispose(): void {
    for (const geo of this.geometries.values()) {
      geo.dispose();
    }
    for (const mat of this.materials.values()) {
      mat.dispose();
    }
    this.geometries.clear();
    this.materials.clear();
  }
}

/** Singleton geometry/material cache */
export const geometryCache = new GeometryCacheClass();

import * as THREE from 'three';
import { PostProcessing, ZONE_GRADING } from '@vfx/PostProcessing';
import type { ZoneGradingConfig } from '@vfx/PostProcessing';
import { qualityManager } from '@core/QualityManager';
import { eventBus } from '@core/EventBus';

export class SceneManager {
  readonly scene: THREE.Scene;
  readonly camera: THREE.PerspectiveCamera;
  readonly renderer: THREE.WebGLRenderer;
  private clock = new THREE.Clock();

  // Exposed lights for dynamic zone lighting
  readonly sunLight: THREE.DirectionalLight;
  readonly hemiLight: THREE.HemisphereLight;
  readonly ambientLight: THREE.AmbientLight;

  // Post-processing
  private postProcessing: PostProcessing | null = null;

  constructor() {
    const settings = qualityManager.settings;

    // Scene
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x87ceeb);
    this.scene.fog = new THREE.Fog(0x87ceeb, 40, settings.fogFar);

    // Camera — behind and above the player
    this.camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      200,
    );
    this.camera.position.set(0, 6, -10);
    this.camera.lookAt(0, 1.5, 10);

    // Renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    this.renderer.setPixelRatio(Math.min(settings.pixelRatio, window.devicePixelRatio));
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.shadowMap.enabled = settings.shadowsEnabled;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.1;
    document.body.appendChild(this.renderer.domElement);

    // Lighting
    this.hemiLight = new THREE.HemisphereLight(0x87ceeb, 0xf5e6ca, 0.6);
    this.scene.add(this.hemiLight);

    this.ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    this.scene.add(this.ambientLight);

    this.sunLight = new THREE.DirectionalLight(0xfff4e0, 1.2);
    this.sunLight.position.set(15, 25, -10);
    this.sunLight.castShadow = settings.shadowsEnabled;
    this.sunLight.shadow.mapSize.set(settings.shadowMapSize, settings.shadowMapSize);
    this.sunLight.shadow.camera.left = -20;
    this.sunLight.shadow.camera.right = 20;
    this.sunLight.shadow.camera.top = 20;
    this.sunLight.shadow.camera.bottom = -20;
    this.sunLight.shadow.camera.near = 1;
    this.sunLight.shadow.camera.far = 60;
    this.sunLight.shadow.bias = -0.001;
    this.scene.add(this.sunLight);
    this.scene.add(this.sunLight.target);

    // Post-processing pipeline (only if quality allows)
    if (settings.postProcessing) {
      this.postProcessing = new PostProcessing(this.renderer, this.scene, this.camera);
      this.postProcessing.setGrading(ZONE_GRADING.chapadmalal);
      if (!settings.bloom) {
        this.postProcessing.setBloomStrength(0);
      }
    }

    // Listen for quality changes
    eventBus.on('quality:changed', this.onQualityChanged);

    window.addEventListener('resize', this.onResize);
  }

  private onQualityChanged = (): void => {
    const settings = qualityManager.settings;

    // Update pixel ratio
    this.renderer.setPixelRatio(Math.min(settings.pixelRatio, window.devicePixelRatio));

    // Update shadows
    this.renderer.shadowMap.enabled = settings.shadowsEnabled;
    this.sunLight.castShadow = settings.shadowsEnabled;
    if (settings.shadowsEnabled) {
      this.sunLight.shadow.mapSize.set(settings.shadowMapSize, settings.shadowMapSize);
      this.sunLight.shadow.map?.dispose();
      (this.sunLight.shadow as { map: THREE.WebGLRenderTarget | null }).map = null;
    }

    // Update fog distance
    if (this.scene.fog instanceof THREE.Fog) {
      this.scene.fog.far = settings.fogFar;
    }

    // Update post-processing
    if (settings.postProcessing && !this.postProcessing) {
      this.postProcessing = new PostProcessing(this.renderer, this.scene, this.camera);
      this.postProcessing.setGrading(ZONE_GRADING.chapadmalal);
    }
    if (!settings.postProcessing && this.postProcessing) {
      this.postProcessing.dispose();
      this.postProcessing = null;
    }
    if (this.postProcessing) {
      this.postProcessing.setBloomStrength(settings.bloom ? 0.4 : 0);
    }
  };

  private onResize = (): void => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(w, h);
    this.postProcessing?.resize(w, h);
  };

  getDelta(): number {
    return this.clock.getDelta();
  }

  /** Update post-processing time-based effects */
  updatePostProcessing(dt: number): void {
    this.postProcessing?.update(dt);
  }

  /** Set zone-specific color grading */
  setZoneGrading(config: ZoneGradingConfig): void {
    this.postProcessing?.setGrading(config);
  }

  /** Blend between two zone grading configs */
  setBlendedZoneGrading(a: ZoneGradingConfig, b: ZoneGradingConfig, t: number): void {
    this.postProcessing?.setBlendedGrading(a, b, t);
  }

  setBloomStrength(strength: number): void {
    if (!qualityManager.settings.bloom) return;
    this.postProcessing?.setBloomStrength(strength);
  }

  /** Update sun shadow to follow player */
  updateSunTarget(playerZ: number): void {
    this.sunLight.target.position.set(0, 0, playerZ + 10);
    this.sunLight.target.updateMatrixWorld();
  }

  render(): void {
    if (this.postProcessing) {
      this.postProcessing.render();
    } else {
      this.renderer.render(this.scene, this.camera);
    }
  }

  dispose(): void {
    window.removeEventListener('resize', this.onResize);
    eventBus.off('quality:changed', this.onQualityChanged);
    this.postProcessing?.dispose();
    this.renderer.dispose();
  }
}

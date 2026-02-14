import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';

/** Zone-aware color grading + vignette + film grain shader */
const ColorGradeShader = {
  uniforms: {
    tDiffuse: { value: null as THREE.Texture | null },
    uSaturation: { value: 1.1 },
    uContrast: { value: 1.0 },
    uWarmth: { value: 0.08 },
    uBrightness: { value: 1.0 },
    uVignetteRadius: { value: 0.45 },
    uVignetteSoftness: { value: 0.6 },
    uGrainIntensity: { value: 0.025 },
    uTime: { value: 0 },
    uResolution: { value: new THREE.Vector2(1, 1) },
  },
  vertexShader: /* glsl */ `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: /* glsl */ `
    uniform sampler2D tDiffuse;
    uniform float uSaturation;
    uniform float uContrast;
    uniform float uWarmth;
    uniform float uBrightness;
    uniform float uVignetteRadius;
    uniform float uVignetteSoftness;
    uniform float uGrainIntensity;
    uniform float uTime;
    uniform vec2 uResolution;
    varying vec2 vUv;

    // Simple pseudo-random for grain
    float rand(vec2 co) {
      return fract(sin(dot(co, vec2(12.9898, 78.233))) * 43758.5453);
    }

    void main() {
      vec4 tex = texture2D(tDiffuse, vUv);
      vec3 color = tex.rgb;

      // Brightness
      color *= uBrightness;

      // Contrast (pivot at 0.5)
      color = (color - 0.5) * uContrast + 0.5;

      // Saturation
      float lum = dot(color, vec3(0.299, 0.587, 0.114));
      color = mix(vec3(lum), color, uSaturation);

      // Warmth (shift towards red/away from blue)
      color.r += uWarmth * 0.5;
      color.b -= uWarmth * 0.3;

      // Vignette
      vec2 center = vUv - 0.5;
      float dist = length(center);
      float vig = smoothstep(uVignetteRadius + uVignetteSoftness, uVignetteRadius, dist);
      color *= mix(0.4, 1.0, vig);

      // Film grain
      float grain = rand(vUv * uResolution + vec2(uTime * 100.0)) - 0.5;
      color += grain * uGrainIntensity;

      gl_FragColor = vec4(clamp(color, 0.0, 1.0), tex.a);
    }
  `,
};

export interface ZoneGradingConfig {
  saturation: number;
  contrast: number;
  warmth: number;
  brightness: number;
}

/** Zone-specific color grading presets */
export const ZONE_GRADING: Record<string, ZoneGradingConfig> = {
  chapadmalal: { saturation: 1.1, contrast: 1.0, warmth: 0.08, brightness: 1.0 },
  rambla: { saturation: 0.95, contrast: 1.0, warmth: 0.0, brightness: 1.0 },
  carilo: { saturation: 1.2, contrast: 1.05, warmth: -0.05, brightness: 0.92 },
  rutaCostera: { saturation: 1.25, contrast: 1.15, warmth: 0.15, brightness: 1.02 },
};

export class PostProcessing {
  private composer: EffectComposer;
  private bloomPass: UnrealBloomPass;
  private colorGradePass: ShaderPass;
  private time = 0;

  constructor(renderer: THREE.WebGLRenderer, scene: THREE.Scene, camera: THREE.Camera) {
    this.composer = new EffectComposer(renderer);

    // 1. Render pass
    const renderPass = new RenderPass(scene, camera);
    this.composer.addPass(renderPass);

    // 2. Bloom pass (threshold-based, affects bright emissive objects)
    const resolution = new THREE.Vector2(window.innerWidth, window.innerHeight);
    this.bloomPass = new UnrealBloomPass(resolution, 0.4, 0.3, 0.85);
    this.composer.addPass(this.bloomPass);

    // 3. Color grading + vignette + grain
    this.colorGradePass = new ShaderPass(ColorGradeShader);
    this.colorGradePass.uniforms.uResolution.value.set(window.innerWidth, window.innerHeight);
    this.composer.addPass(this.colorGradePass);

    // 4. Output pass (tone mapping + color space)
    const outputPass = new OutputPass();
    this.composer.addPass(outputPass);
  }

  /** Update color grading for zone transitions */
  setGrading(config: ZoneGradingConfig): void {
    this.colorGradePass.uniforms.uSaturation.value = config.saturation;
    this.colorGradePass.uniforms.uContrast.value = config.contrast;
    this.colorGradePass.uniforms.uWarmth.value = config.warmth;
    this.colorGradePass.uniforms.uBrightness.value = config.brightness;
  }

  /** Interpolate between two grading configs */
  setBlendedGrading(a: ZoneGradingConfig, b: ZoneGradingConfig, t: number): void {
    this.colorGradePass.uniforms.uSaturation.value = a.saturation + (b.saturation - a.saturation) * t;
    this.colorGradePass.uniforms.uContrast.value = a.contrast + (b.contrast - a.contrast) * t;
    this.colorGradePass.uniforms.uWarmth.value = a.warmth + (b.warmth - a.warmth) * t;
    this.colorGradePass.uniforms.uBrightness.value = a.brightness + (b.brightness - a.brightness) * t;
  }

  setBloomStrength(strength: number): void {
    this.bloomPass.strength = strength;
  }

  update(dt: number): void {
    this.time += dt;
    this.colorGradePass.uniforms.uTime.value = this.time;
  }

  render(): void {
    this.composer.render();
  }

  resize(width: number, height: number): void {
    this.composer.setSize(width, height);
    this.bloomPass.resolution.set(width, height);
    this.colorGradePass.uniforms.uResolution.value.set(width, height);
  }

  dispose(): void {
    this.composer.dispose();
  }
}

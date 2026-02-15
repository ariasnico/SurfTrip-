/**
 * QualityManager — Phase 8: Performance Optimization
 *
 * Manages quality presets (Low/Medium/High/Ultra) with auto-detection
 * based on FPS sampling during the first seconds of gameplay.
 * Exposes settings that SceneManager, Environment, and VFX systems read.
 */

import { eventBus } from '@core/EventBus';

export type QualityLevel = 'low' | 'medium' | 'high' | 'ultra';

export interface QualitySettings {
  /** Device pixel ratio cap */
  pixelRatio: number;
  /** Shadow map resolution (width & height) */
  shadowMapSize: number;
  /** Enable shadows at all */
  shadowsEnabled: boolean;
  /** Enable post-processing pipeline */
  postProcessing: boolean;
  /** Enable bloom pass */
  bloom: boolean;
  /** Max ambient particle count */
  ambientParticles: number;
  /** Max sand trail particles */
  trailParticles: number;
  /** Max decorations per side */
  decorDensity: number;
  /** Palm tree count multiplier (1.0 = default) */
  palmDensity: number;
  /** Ocean geometry segments */
  oceanSegments: number;
  /** Enable fog */
  fog: boolean;
  /** Seagull count */
  seagullCount: number;
  /** Cloud count */
  cloudCount: number;
  /** Fog far distance (lower = more culling) */
  fogFar: number;
}

const PRESETS: Record<QualityLevel, QualitySettings> = {
  low: {
    pixelRatio: 1,
    shadowMapSize: 512,
    shadowsEnabled: true,
    postProcessing: false,
    bloom: false,
    ambientParticles: 15,
    trailParticles: 20,
    decorDensity: 8,
    palmDensity: 0.5,
    oceanSegments: 32,
    fog: true,
    seagullCount: 2,
    cloudCount: 8,
    fogFar: 80,
  },
  medium: {
    pixelRatio: 1.5,
    shadowMapSize: 1024,
    shadowsEnabled: true,
    postProcessing: true,
    bloom: false,
    ambientParticles: 25,
    trailParticles: 30,
    decorDensity: 15,
    palmDensity: 0.75,
    oceanSegments: 48,
    fog: true,
    seagullCount: 4,
    cloudCount: 14,
    fogFar: 100,
  },
  high: {
    pixelRatio: 2,
    shadowMapSize: 2048,
    shadowsEnabled: true,
    postProcessing: true,
    bloom: true,
    ambientParticles: 40,
    trailParticles: 40,
    decorDensity: 20,
    palmDensity: 1.0,
    oceanSegments: 64,
    fog: true,
    seagullCount: 6,
    cloudCount: 20,
    fogFar: 120,
  },
  ultra: {
    pixelRatio: 2,
    shadowMapSize: 2048,
    shadowsEnabled: true,
    postProcessing: true,
    bloom: true,
    ambientParticles: 50,
    trailParticles: 50,
    decorDensity: 25,
    palmDensity: 1.2,
    oceanSegments: 80,
    fog: true,
    seagullCount: 8,
    cloudCount: 25,
    fogFar: 140,
  },
};

const STORAGE_KEY = 'surftrip3d_quality';

/** FPS sampling config for auto-detection */
const AUTO_DETECT_DURATION = 4; // seconds to sample
const AUTO_DETECT_LOW_THRESHOLD = 30;
const AUTO_DETECT_MEDIUM_THRESHOLD = 45;
const AUTO_DETECT_HIGH_THRESHOLD = 55;

class QualityManagerClass {
  private _level: QualityLevel = 'high';
  private _settings: QualitySettings = { ...PRESETS.high };
  private _autoDetecting = false;
  private _sampleFrames = 0;
  private _sampleTime = 0;
  private _userOverride = false;

  constructor() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && saved in PRESETS) {
      this._level = saved as QualityLevel;
      this._settings = { ...PRESETS[this._level] };
      this._userOverride = true;
    } else {
      // Start with a best-guess based on hardware hints
      this._level = this.guessInitialQuality();
      this._settings = { ...PRESETS[this._level] };
    }
  }

  get level(): QualityLevel {
    return this._level;
  }

  get settings(): Readonly<QualitySettings> {
    return this._settings;
  }

  /** Set quality level manually (saves to localStorage) */
  setLevel(level: QualityLevel): void {
    this._level = level;
    this._settings = { ...PRESETS[level] };
    this._userOverride = true;
    this._autoDetecting = false;
    localStorage.setItem(STORAGE_KEY, level);
    eventBus.emit('quality:changed', level);
  }

  /** Start auto-detection sampling. Call feedFrame() each frame. */
  startAutoDetect(): void {
    if (this._userOverride) return;
    this._autoDetecting = true;
    this._sampleFrames = 0;
    this._sampleTime = 0;
  }

  /** Feed a frame delta for auto-detection. Returns true when detection completes. */
  feedFrame(dt: number): boolean {
    if (!this._autoDetecting) return false;

    this._sampleFrames++;
    this._sampleTime += dt;

    if (this._sampleTime >= AUTO_DETECT_DURATION) {
      this._autoDetecting = false;
      const avgFps = this._sampleFrames / this._sampleTime;
      const detected = this.fpsToLevel(avgFps);

      if (detected !== this._level) {
        this._level = detected;
        this._settings = { ...PRESETS[detected] };
        eventBus.emit('quality:changed', detected);
      }
      return true;
    }
    return false;
  }

  get isAutoDetecting(): boolean {
    return this._autoDetecting;
  }

  /** Cycle to the next quality level (for UI toggle) */
  cycleLevel(): QualityLevel {
    const levels: QualityLevel[] = ['low', 'medium', 'high', 'ultra'];
    const idx = levels.indexOf(this._level);
    const next = levels[(idx + 1) % levels.length];
    this.setLevel(next);
    return next;
  }

  private fpsToLevel(fps: number): QualityLevel {
    if (fps < AUTO_DETECT_LOW_THRESHOLD) return 'low';
    if (fps < AUTO_DETECT_MEDIUM_THRESHOLD) return 'medium';
    if (fps < AUTO_DETECT_HIGH_THRESHOLD) return 'high';
    return 'ultra';
  }

  private guessInitialQuality(): QualityLevel {
    // Use devicePixelRatio and hardwareConcurrency as rough hints
    const dpr = window.devicePixelRatio || 1;
    const cores = navigator.hardwareConcurrency || 2;
    const isMobile = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);

    if (isMobile && cores <= 4) return 'low';
    if (isMobile) return 'medium';
    if (dpr <= 1 && cores <= 4) return 'medium';
    if (cores >= 8 && dpr >= 2) return 'ultra';
    return 'high';
  }
}

/** Singleton quality manager */
export const qualityManager = new QualityManagerClass();

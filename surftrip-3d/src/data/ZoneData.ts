/**
 * Zone Data — Phase 7: Zones & Variety + Phase 6: Visual Improvements
 *
 * Defines the 4 themed zones of the Argentine coast.
 * Each zone has unique colors, lighting, decorations, obstacles, and music.
 */

export type ZoneId = 'chapadmalal' | 'rambla' | 'carilo' | 'rutaCostera';

export interface ZoneColors {
  skyZenith: [number, number, number];
  skyHorizon: [number, number, number];
  skyGround: [number, number, number];
  fog: number;
  background: number;
  oceanDeep: [number, number, number];
  oceanSurf: [number, number, number];
  oceanFoam: [number, number, number];
  trackSand: number;
  trackBase: number;
  trackDivider: number;
  trackEdge: number;
}

export interface ZoneLighting {
  sunColor: number;
  sunIntensity: number;
  sunPosition: [number, number, number]; // relative to player Z
  ambientIntensity: number;
  hemisphereGround: number;
  sunGlow: [number, number, number]; // sky shader glow color
  bloomStrength: number;
}

export interface ZoneConfig {
  id: ZoneId;
  name: string;
  displayName: string;
  colors: ZoneColors;
  lighting: ZoneLighting;
  /** Music chord progression (arrays of 3 frequencies each) */
  chords: number[][];
  /** Music tempo in ms per beat */
  musicTempo: number;
  /** Music oscillator type for bass */
  bassType: OscillatorType;
}

// ── Zone 1: Playa de Chapadmalal ───────────────────────────────────────
const chapadmalal: ZoneConfig = {
  id: 'chapadmalal',
  name: 'chapadmalal',
  displayName: 'Playa de Chapadmalal',
  colors: {
    skyZenith: [0.35, 0.60, 0.92],
    skyHorizon: [0.75, 0.88, 0.97],
    skyGround: [0.92, 0.87, 0.78],
    fog: 0x87ceeb,
    background: 0x87ceeb,
    oceanDeep: [0.08, 0.30, 0.55],
    oceanSurf: [0.25, 0.65, 0.85],
    oceanFoam: [0.9, 0.95, 1.0],
    trackSand: 0xe8d5b0,
    trackBase: 0xf0dfc0,
    trackDivider: 0xcdb990,
    trackEdge: 0xc0a880,
  },
  lighting: {
    sunColor: 0xfff4e0,
    sunIntensity: 1.2,
    sunPosition: [15, 40, 100],
    ambientIntensity: 0.3,
    hemisphereGround: 0xf5e6ca,
    sunGlow: [1.0, 0.95, 0.8],
    bloomStrength: 0.4,
  },
  chords: [
    [220, 261.63, 329.63],
    [174.61, 220, 261.63],
    [261.63, 329.63, 392],
    [196, 246.94, 293.66],
  ],
  musicTempo: 214,
  bassType: 'triangle',
};

// ── Zone 2: Rambla de Mar del Plata ─────────────────────────────────────
const rambla: ZoneConfig = {
  id: 'rambla',
  name: 'rambla',
  displayName: 'Rambla de Mar del Plata',
  colors: {
    skyZenith: [0.45, 0.50, 0.65],
    skyHorizon: [0.70, 0.72, 0.78],
    skyGround: [0.65, 0.62, 0.60],
    fog: 0x8a9aaa,
    background: 0x8a9aaa,
    oceanDeep: [0.10, 0.25, 0.45],
    oceanSurf: [0.30, 0.55, 0.70],
    oceanFoam: [0.85, 0.88, 0.92],
    trackSand: 0xb0a8a0,
    trackBase: 0xc0b8b0,
    trackDivider: 0x999088,
    trackEdge: 0x887870,
  },
  lighting: {
    sunColor: 0xffe8d0,
    sunIntensity: 1.0,
    sunPosition: [20, 30, 80],
    ambientIntensity: 0.35,
    hemisphereGround: 0xc0b0a0,
    sunGlow: [0.9, 0.85, 0.8],
    bloomStrength: 0.35,
  },
  chords: [
    [293.66, 349.23, 440],
    [233.08, 293.66, 349.23],
    [174.61, 220, 261.63],
    [261.63, 329.63, 392],
  ],
  musicTempo: 240,
  bassType: 'sine',
};

// ── Zone 3: Bosque de Carilo ────────────────────────────────────────────
const carilo: ZoneConfig = {
  id: 'carilo',
  name: 'carilo',
  displayName: 'Bosque de Carilo',
  colors: {
    skyZenith: [0.20, 0.38, 0.28],
    skyHorizon: [0.40, 0.55, 0.42],
    skyGround: [0.30, 0.35, 0.25],
    fog: 0x4a6a4a,
    background: 0x4a6a4a,
    oceanDeep: [0.06, 0.20, 0.15],
    oceanSurf: [0.15, 0.40, 0.30],
    oceanFoam: [0.70, 0.80, 0.70],
    trackSand: 0x7a6b50,
    trackBase: 0x6a5b40,
    trackDivider: 0x605038,
    trackEdge: 0x504030,
  },
  lighting: {
    sunColor: 0xd4e8c0,
    sunIntensity: 0.7,
    sunPosition: [8, 20, 60],
    ambientIntensity: 0.4,
    hemisphereGround: 0x5a6a40,
    sunGlow: [0.6, 0.75, 0.5],
    bloomStrength: 0.3,
  },
  chords: [
    [164.81, 207.65, 246.94],
    [220, 261.63, 329.63],
    [246.94, 293.66, 369.99],
    [164.81, 207.65, 246.94],
  ],
  musicTempo: 280,
  bassType: 'triangle',
};

// ── Zone 4: Ruta Costera ────────────────────────────────────────────────
const rutaCostera: ZoneConfig = {
  id: 'rutaCostera',
  name: 'rutaCostera',
  displayName: 'Ruta Costera',
  colors: {
    skyZenith: [0.55, 0.30, 0.55],
    skyHorizon: [0.90, 0.55, 0.30],
    skyGround: [0.85, 0.70, 0.45],
    fog: 0xcc8855,
    background: 0xcc8855,
    oceanDeep: [0.15, 0.10, 0.30],
    oceanSurf: [0.45, 0.30, 0.55],
    oceanFoam: [0.95, 0.85, 0.75],
    trackSand: 0x808080,
    trackBase: 0x707060,
    trackDivider: 0x606050,
    trackEdge: 0xd0a030,
  },
  lighting: {
    sunColor: 0xff8844,
    sunIntensity: 1.4,
    sunPosition: [40, 10, 50],
    ambientIntensity: 0.25,
    hemisphereGround: 0xaa8040,
    sunGlow: [1.0, 0.6, 0.3],
    bloomStrength: 0.6,
  },
  chords: [
    [293.66, 369.99, 440],
    [220, 277.18, 329.63],
    [329.63, 415.30, 493.88],
    [220, 277.18, 329.63],
  ],
  musicTempo: 200,
  bassType: 'sawtooth',
};

/** Ordered zone sequence — cycles through during gameplay */
export const ZONE_SEQUENCE: ZoneConfig[] = [chapadmalal, rambla, carilo, rutaCostera];

/** Distance between zone transitions (world units) */
export const ZONE_LENGTH = 500;

/** Duration of zone crossfade transition (seconds) */
export const ZONE_TRANSITION_DURATION = 4.0;

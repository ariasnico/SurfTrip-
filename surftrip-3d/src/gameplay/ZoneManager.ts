/**
 * ZoneManager — Phase 7: Zones & Variety
 *
 * Tracks the player's current zone based on distance traveled.
 * Manages smooth transitions between zones with a crossfade progress value.
 */

import { ZONE_SEQUENCE, ZONE_LENGTH, ZONE_TRANSITION_DURATION } from '@data/ZoneData';
import type { ZoneConfig, ZoneColors } from '@data/ZoneData';

export class ZoneManager {
  /** Index into ZONE_SEQUENCE for the current zone */
  private currentIndex = 0;
  /** Index of the zone we're transitioning TO (-1 if not transitioning) */
  private nextIndex = -1;
  /** Crossfade progress 0..1 (0 = fully current, 1 = fully next) */
  private transitionProgress = 0;
  /** Whether a transition just started this frame */
  zoneChangedThisFrame = false;
  /** Name of the new zone (set when zoneChangedThisFrame is true) */
  newZoneName = '';

  get currentZone(): ZoneConfig {
    return ZONE_SEQUENCE[this.currentIndex % ZONE_SEQUENCE.length];
  }

  get nextZone(): ZoneConfig | null {
    if (this.nextIndex < 0) return null;
    return ZONE_SEQUENCE[this.nextIndex % ZONE_SEQUENCE.length];
  }

  get isTransitioning(): boolean {
    return this.nextIndex >= 0;
  }

  get progress(): number {
    return this.transitionProgress;
  }

  /** Get interpolated colors between current and next zone */
  getBlendedColors(): ZoneColors {
    const cur = this.currentZone.colors;
    if (!this.isTransitioning) return cur;
    const nxt = this.nextZone!.colors;
    const t = this.transitionProgress;
    return blendZoneColors(cur, nxt, t);
  }

  /** Get blended music config */
  getBlendedMusicConfig(): { chords: number[][]; tempo: number; bassType: OscillatorType } {
    const cur = this.currentZone;
    if (!this.isTransitioning || this.transitionProgress < 0.5) {
      return { chords: cur.chords, tempo: cur.musicTempo, bassType: cur.bassType };
    }
    const nxt = this.nextZone!;
    return { chords: nxt.chords, tempo: nxt.musicTempo, bassType: nxt.bassType };
  }

  update(playerZ: number, dt: number): void {
    this.zoneChangedThisFrame = false;

    const zoneIndex = Math.floor(playerZ / ZONE_LENGTH);
    const posInZone = playerZ - zoneIndex * ZONE_LENGTH;

    // Check if we should start a transition (when approaching zone boundary)
    const transitionStartDist = ZONE_LENGTH - ZONE_TRANSITION_DURATION * 15; // start ~60 units before boundary
    if (posInZone >= transitionStartDist && this.nextIndex < 0) {
      this.nextIndex = zoneIndex + 1;
      this.transitionProgress = 0;
      this.zoneChangedThisFrame = true;
      this.newZoneName = ZONE_SEQUENCE[(zoneIndex + 1) % ZONE_SEQUENCE.length].displayName;
    }

    // Update transition progress
    if (this.nextIndex >= 0) {
      this.transitionProgress += dt / ZONE_TRANSITION_DURATION;
      if (this.transitionProgress >= 1.0) {
        // Transition complete — next becomes current
        this.currentIndex = this.nextIndex % ZONE_SEQUENCE.length;
        this.nextIndex = -1;
        this.transitionProgress = 0;
      }
    }

    // If we've moved well past the boundary without transition, snap zone
    const expectedIndex = zoneIndex % ZONE_SEQUENCE.length;
    if (!this.isTransitioning && this.currentIndex !== expectedIndex && playerZ > ZONE_LENGTH) {
      this.currentIndex = expectedIndex;
    }
  }

  reset(): void {
    this.currentIndex = 0;
    this.nextIndex = -1;
    this.transitionProgress = 0;
    this.zoneChangedThisFrame = false;
    this.newZoneName = '';
  }
}

/** Linearly interpolate between two ZoneColors configs */
function blendZoneColors(a: ZoneColors, b: ZoneColors, t: number): ZoneColors {
  return {
    skyZenith: lerpArr3(a.skyZenith, b.skyZenith, t),
    skyHorizon: lerpArr3(a.skyHorizon, b.skyHorizon, t),
    skyGround: lerpArr3(a.skyGround, b.skyGround, t),
    fog: lerpColor(a.fog, b.fog, t),
    background: lerpColor(a.background, b.background, t),
    oceanDeep: lerpArr3(a.oceanDeep, b.oceanDeep, t),
    oceanSurf: lerpArr3(a.oceanSurf, b.oceanSurf, t),
    oceanFoam: lerpArr3(a.oceanFoam, b.oceanFoam, t),
    trackSand: lerpColor(a.trackSand, b.trackSand, t),
    trackBase: lerpColor(a.trackBase, b.trackBase, t),
    trackDivider: lerpColor(a.trackDivider, b.trackDivider, t),
    trackEdge: lerpColor(a.trackEdge, b.trackEdge, t),
  };
}

function lerpArr3(a: [number, number, number], b: [number, number, number], t: number): [number, number, number] {
  return [
    a[0] + (b[0] - a[0]) * t,
    a[1] + (b[1] - a[1]) * t,
    a[2] + (b[2] - a[2]) * t,
  ];
}

function lerpColor(a: number, b: number, t: number): number {
  const ar = (a >> 16) & 0xff, ag = (a >> 8) & 0xff, ab = a & 0xff;
  const br = (b >> 16) & 0xff, bg = (b >> 8) & 0xff, bb = b & 0xff;
  const r = Math.round(ar + (br - ar) * t);
  const g = Math.round(ag + (bg - ag) * t);
  const bl = Math.round(ab + (bb - ab) * t);
  return (r << 16) | (g << 8) | bl;
}

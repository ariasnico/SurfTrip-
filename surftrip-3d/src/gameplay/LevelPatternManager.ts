/**
 * LevelPatternManager — Phase 5.4: Level Patterns
 *
 * Defines predefined "sections" that spawn obstacles and collectibles
 * in designed patterns. These alternate with random generation to keep
 * gameplay varied but intentional.
 *
 * Section types:
 *  - rockField: dense low obstacles across multiple lanes
 *  - coinCorridor: long line of collectibles, no obstacles
 *  - slalom: alternating obstacles left/right requiring lane changes
 *  - rampJump: ramp that launches the player for a high jump with coins above
 *  - bonus: many collectibles in all lanes, no obstacles, limited length
 */

import { randInt, randFloat } from '@utils/MathUtils';

export type PatternType = 'rockField' | 'coinCorridor' | 'slalom' | 'rampJump' | 'bonus';

export interface PatternObstacle {
  lane: number;    // 0, 1, 2
  offsetZ: number; // relative Z from section start
  type: 'low' | 'high';
}

export interface PatternCollectible {
  lane: number;
  offsetZ: number;
}

export interface PatternSection {
  type: PatternType;
  length: number; // total Z-length of this section
  obstacles: PatternObstacle[];
  collectibles: PatternCollectible[];
  /** If true, the player gets a ramp at the start of the section */
  hasRamp: boolean;
}

// ── Pattern Definitions ──

function createRockField(): PatternSection {
  const obstacles: PatternObstacle[] = [];
  const collectibles: PatternCollectible[] = [];
  const length = 40;

  // Dense low obstacles in varied lanes
  for (let z = 0; z < length; z += 6) {
    const lane1 = randInt(0, 2);
    obstacles.push({ lane: lane1, offsetZ: z, type: 'low' });
    // Sometimes add a second obstacle in a different lane
    if (Math.random() < 0.4) {
      const lane2 = (lane1 + randInt(1, 2)) % 3;
      obstacles.push({ lane: lane2, offsetZ: z + 2, type: 'low' });
    }
  }

  // A few collectibles in safe gaps
  for (let z = 3; z < length; z += 8) {
    const safeLane = randInt(0, 2);
    collectibles.push({ lane: safeLane, offsetZ: z });
  }

  return { type: 'rockField', length, obstacles, collectibles, hasRamp: false };
}

function createCoinCorridor(): PatternSection {
  const collectibles: PatternCollectible[] = [];
  const length = 30;
  const lane = randInt(0, 2);

  // Long line of collectibles in one lane
  for (let z = 0; z < length; z += 2.5) {
    collectibles.push({ lane, offsetZ: z });
  }

  return { type: 'coinCorridor', length, obstacles: [], collectibles, hasRamp: false };
}

function createSlalom(): PatternSection {
  const obstacles: PatternObstacle[] = [];
  const collectibles: PatternCollectible[] = [];
  const length = 45;

  // Alternating obstacles left and right, requiring zigzag movement
  let currentLane = 0;
  for (let z = 0; z < length; z += 7) {
    obstacles.push({ lane: currentLane, offsetZ: z, type: 'low' });
    // Collectible in the open lane
    const openLane = currentLane === 0 ? 2 : 0;
    collectibles.push({ lane: openLane, offsetZ: z + 3 });
    currentLane = currentLane === 0 ? 2 : 0;
  }

  // Add some high obstacles in center for variety
  for (let z = 3; z < length; z += 14) {
    obstacles.push({ lane: 1, offsetZ: z, type: 'high' });
  }

  return { type: 'slalom', length, obstacles, collectibles, hasRamp: false };
}

function createRampJump(): PatternSection {
  const collectibles: PatternCollectible[] = [];
  const length = 25;

  // Coins arranged in an arc above ground level (collected during jump)
  const centerLane = 1;
  for (let z = 5; z < 20; z += 2.5) {
    collectibles.push({ lane: centerLane, offsetZ: z });
  }
  // Coins on the sides too
  collectibles.push({ lane: 0, offsetZ: 10 });
  collectibles.push({ lane: 2, offsetZ: 10 });

  return { type: 'rampJump', length, obstacles: [], collectibles, hasRamp: true };
}

function createBonus(): PatternSection {
  const collectibles: PatternCollectible[] = [];
  const length = 35;

  // All three lanes filled with collectibles
  for (let z = 0; z < length; z += 2.5) {
    collectibles.push({ lane: 0, offsetZ: z });
    collectibles.push({ lane: 1, offsetZ: z });
    collectibles.push({ lane: 2, offsetZ: z });
  }

  return { type: 'bonus', length, obstacles: [], collectibles, hasRamp: false };
}

// ── Weighted pattern selection ──
const PATTERN_WEIGHTS: { factory: () => PatternSection; weight: number }[] = [
  { factory: createRockField, weight: 25 },
  { factory: createCoinCorridor, weight: 25 },
  { factory: createSlalom, weight: 20 },
  { factory: createRampJump, weight: 15 },
  { factory: createBonus, weight: 15 },
];

export class LevelPatternManager {
  private nextPatternZ = 100; // start patterns after initial random section
  private currentPattern: PatternSection | null = null;
  private patternStartZ = 0;

  /** Distance between the end of one pattern and the start of the next */
  private minGap = 30;
  private maxGap = 60;

  /**
   * Call each frame. Returns a pattern section if the player has reached
   * the next pattern zone, or null if we're in a random-generation gap.
   */
  getPatternAt(playerZ: number): PatternSection | null {
    // If we have a current active pattern, check if player is past it
    if (this.currentPattern) {
      if (playerZ > this.patternStartZ + this.currentPattern.length + 20) {
        // Pattern done, schedule next
        this.nextPatternZ = this.patternStartZ + this.currentPattern.length + randFloat(this.minGap, this.maxGap);
        this.currentPattern = null;
      }
      return null; // Still in current pattern, don't spawn another
    }

    // Check if it's time for a new pattern
    if (playerZ + 80 >= this.nextPatternZ) {
      this.currentPattern = this.selectPattern();
      this.patternStartZ = this.nextPatternZ;
      const result = this.currentPattern;
      return result;
    }

    return null;
  }

  /** Get the world Z offset for the current pattern */
  getPatternStartZ(): number {
    return this.patternStartZ;
  }

  /** Whether a given Z position falls within the current active pattern zone */
  isInPatternZone(z: number): boolean {
    if (!this.currentPattern) return false;
    return z >= this.patternStartZ && z <= this.patternStartZ + this.currentPattern.length;
  }

  private selectPattern(): PatternSection {
    const totalWeight = PATTERN_WEIGHTS.reduce((sum, p) => sum + p.weight, 0);
    let r = Math.random() * totalWeight;
    for (const p of PATTERN_WEIGHTS) {
      r -= p.weight;
      if (r <= 0) return p.factory();
    }
    return PATTERN_WEIGHTS[0].factory();
  }

  reset(): void {
    this.nextPatternZ = 100;
    this.currentPattern = null;
    this.patternStartZ = 0;
  }
}

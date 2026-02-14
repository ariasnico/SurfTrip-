/**
 * ComboSystem — Phase 5.3: Combos & Multipliers
 *
 * Tracks consecutive item collections. The combo counter increases
 * with each pickup and decays after a timeout. Higher combos yield
 * higher score multipliers.
 *
 *   combo >= 5  → x2
 *   combo >= 15 → x3
 *
 * The combo resets if 3 seconds pass without collecting anything.
 */

const COMBO_TIMEOUT = 3; // seconds without collecting → combo resets
const COMBO_TIER_1 = 5;  // combo count for x2
const COMBO_TIER_2 = 15; // combo count for x3

export class ComboSystem {
  combo = 0;
  multiplier = 1;
  private timeSinceLastCollect = 0;
  /** Set to true for one frame when combo level changes */
  levelUpThisFrame = false;
  /** Set to true for one frame when combo breaks */
  brokeThisFrame = false;

  /** Call every frame */
  update(dt: number): void {
    this.levelUpThisFrame = false;
    this.brokeThisFrame = false;

    if (this.combo > 0) {
      this.timeSinceLastCollect += dt;
      if (this.timeSinceLastCollect >= COMBO_TIMEOUT) {
        this.combo = 0;
        this.multiplier = 1;
        this.brokeThisFrame = true;
      }
    }
  }

  /** Call when the player collects one or more items */
  addCollect(count: number): void {
    const prevMultiplier = this.multiplier;
    this.combo += count;
    this.timeSinceLastCollect = 0;

    // Recalculate multiplier tier
    if (this.combo >= COMBO_TIER_2) {
      this.multiplier = 3;
    } else if (this.combo >= COMBO_TIER_1) {
      this.multiplier = 2;
    } else {
      this.multiplier = 1;
    }

    if (this.multiplier > prevMultiplier) {
      this.levelUpThisFrame = true;
    }
  }

  reset(): void {
    this.combo = 0;
    this.multiplier = 1;
    this.timeSinceLastCollect = 0;
    this.levelUpThisFrame = false;
    this.brokeThisFrame = false;
  }
}

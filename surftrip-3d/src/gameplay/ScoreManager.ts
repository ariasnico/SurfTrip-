const STORAGE_KEY = 'surftrip3d_hiscore';

export class ScoreManager {
  score = 0;
  hiScore = 0;
  coins = 0;
  /** Current effective multiplier (combo * power-up) shown in HUD */
  displayMultiplier = 1;

  constructor() {
    this.hiScore = parseInt(localStorage.getItem(STORAGE_KEY) ?? '0', 10);
  }

  addDistance(distance: number, multiplier = 1): void {
    this.score += Math.round(distance * multiplier);
  }

  addPoints(points: number, multiplier = 1): void {
    const total = Math.round(points * multiplier);
    this.score += total;
    this.coins += total;
  }

  finalise(): boolean {
    const isNew = this.score > this.hiScore;
    if (isNew) {
      this.hiScore = this.score;
      localStorage.setItem(STORAGE_KEY, String(this.hiScore));
    }
    return isNew;
  }

  reset(): void {
    this.score = 0;
    this.coins = 0;
    this.displayMultiplier = 1;
  }
}

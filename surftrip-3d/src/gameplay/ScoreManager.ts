const STORAGE_KEY = 'surftrip3d_hiscore';

export class ScoreManager {
  score = 0;
  hiScore = 0;
  coins = 0;

  constructor() {
    this.hiScore = parseInt(localStorage.getItem(STORAGE_KEY) ?? '0', 10);
  }

  addDistance(distance: number): void {
    this.score += Math.round(distance);
  }

  addPoints(points: number): void {
    this.score += points;
    this.coins += points;
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
  }
}

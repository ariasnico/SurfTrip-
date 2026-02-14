import { clamp } from '@utils/MathUtils';

const BASE_SPEED = 12;
const MAX_SPEED = 30;
const RAMP_RATE = 0.15; // speed units gained per second of play

export class DifficultyManager {
  speed = BASE_SPEED;
  private elapsed = 0;

  update(dt: number): void {
    this.elapsed += dt;
    this.speed = clamp(BASE_SPEED + this.elapsed * RAMP_RATE, BASE_SPEED, MAX_SPEED);
  }

  reset(): void {
    this.speed = BASE_SPEED;
    this.elapsed = 0;
  }
}

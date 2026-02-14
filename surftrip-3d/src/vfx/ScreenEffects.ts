/** Screen shake effect — offsets the camera briefly on collision */
export class ScreenShake {
  private intensity = 0;
  private decay = 8;
  offsetX = 0;
  offsetY = 0;

  trigger(intensity = 0.5): void {
    this.intensity = intensity;
  }

  update(dt: number): void {
    if (this.intensity <= 0.01) {
      this.offsetX = 0;
      this.offsetY = 0;
      this.intensity = 0;
      return;
    }

    this.offsetX = (Math.random() - 0.5) * 2 * this.intensity;
    this.offsetY = (Math.random() - 0.5) * 2 * this.intensity;
    this.intensity *= Math.max(0, 1 - this.decay * dt);
  }

  reset(): void {
    this.intensity = 0;
    this.offsetX = 0;
    this.offsetY = 0;
  }
}

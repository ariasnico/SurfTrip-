import { eventBus } from './EventBus';

export type SwipeDirection = 'left' | 'right' | 'up' | 'down';

const SWIPE_THRESHOLD = 30; // px minimum swipe distance
const SWIPE_TIME_LIMIT = 300; // ms max swipe duration

export class InputManager {
  private touchStartX = 0;
  private touchStartY = 0;
  private touchStartTime = 0;

  constructor() {
    window.addEventListener('touchstart', this.onTouchStart, { passive: false });
    window.addEventListener('touchend', this.onTouchEnd, { passive: false });
    window.addEventListener('keydown', this.onKeyDown);
  }

  private onTouchStart = (e: TouchEvent): void => {
    // Don't capture touches on UI buttons
    const target = e.target as HTMLElement;
    if (target.closest('.btn') || target.closest('#start-screen') || target.closest('#game-over')) {
      return;
    }
    e.preventDefault();
    const touch = e.touches[0];
    this.touchStartX = touch.clientX;
    this.touchStartY = touch.clientY;
    this.touchStartTime = Date.now();
  };

  private onTouchEnd = (e: TouchEvent): void => {
    const target = e.target as HTMLElement;
    if (target.closest('.btn') || target.closest('#start-screen') || target.closest('#game-over')) {
      return;
    }
    e.preventDefault();

    const touch = e.changedTouches[0];
    const dx = touch.clientX - this.touchStartX;
    const dy = touch.clientY - this.touchStartY;
    const elapsed = Date.now() - this.touchStartTime;

    if (elapsed > SWIPE_TIME_LIMIT) {
      // Tap (long touch, treat as jump)
      eventBus.emit('input:jump');
      return;
    }

    const absDx = Math.abs(dx);
    const absDy = Math.abs(dy);

    if (absDx < SWIPE_THRESHOLD && absDy < SWIPE_THRESHOLD) {
      // Tap → jump
      eventBus.emit('input:jump');
      return;
    }

    if (absDx > absDy) {
      // Horizontal swipe
      const dir: SwipeDirection = dx > 0 ? 'right' : 'left';
      eventBus.emit('input:swipe', dir);
    } else {
      // Vertical swipe
      if (dy < 0) {
        eventBus.emit('input:jump');
      } else {
        eventBus.emit('input:slide');
      }
    }
  };

  private onKeyDown = (e: KeyboardEvent): void => {
    switch (e.code) {
      case 'ArrowLeft':
      case 'KeyA':
        e.preventDefault();
        eventBus.emit('input:swipe', 'left' as SwipeDirection);
        break;
      case 'ArrowRight':
      case 'KeyD':
        e.preventDefault();
        eventBus.emit('input:swipe', 'right' as SwipeDirection);
        break;
      case 'ArrowUp':
      case 'KeyW':
      case 'Space':
        e.preventDefault();
        eventBus.emit('input:jump');
        break;
      case 'ArrowDown':
      case 'KeyS':
        e.preventDefault();
        eventBus.emit('input:slide');
        break;
    }
  };

  dispose(): void {
    window.removeEventListener('touchstart', this.onTouchStart);
    window.removeEventListener('touchend', this.onTouchEnd);
    window.removeEventListener('keydown', this.onKeyDown);
  }
}

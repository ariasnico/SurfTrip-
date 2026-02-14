export class ObjectPool<T> {
  private pool: T[] = [];
  private factory: () => T;
  private resetFn: (obj: T) => void;

  constructor(
    factory: () => T,
    resetFn: (obj: T) => void,
    initialSize = 0,
  ) {
    this.factory = factory;
    this.resetFn = resetFn;
    for (let i = 0; i < initialSize; i++) {
      this.pool.push(this.factory());
    }
  }

  get(): T {
    if (this.pool.length > 0) {
      const obj = this.pool.pop()!;
      this.resetFn(obj);
      return obj;
    }
    return this.factory();
  }

  release(obj: T): void {
    this.pool.push(obj);
  }

  get size(): number {
    return this.pool.length;
  }
}

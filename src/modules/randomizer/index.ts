type Generate = () => number;

// noinspection JSSuspiciousNameCombination
class RandomGenerator {
  private x = 123456789;
  private y = 362436069;
  private z = 521288629;
  private seed: number;
  constructor(seed: number) {
    this.seed = seed;
  }

  generate: Generate = () => {
    const t = this.x ^ (this.x << 11);
    this.x = this.y;
    this.y = this.z;
    this.z = this.seed;
    this.seed = this.seed ^ (this.seed >>> 19) ^ (t ^ (t >>> 8));
    return this.seed / 2 ** 32;
  };
}

export { RandomGenerator };
export type Rng = {
  next: () => number;
  pick: <T>(items: readonly T[]) => T;
  int: (min: number, max: number) => number;
  shuffle: <T>(items: readonly T[]) => T[];
  chance: (p: number) => boolean;
};

function mulberry32(seed: number) {
  let a = seed >>> 0;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function makeRng(seed?: number): Rng {
  const next = mulberry32(seed ?? Math.floor(Math.random() * 2 ** 31));
  const rng: Rng = {
    next,
    pick: (items) => items[Math.floor(next() * items.length)],
    int: (min, max) => min + Math.floor(next() * (max - min + 1)),
    shuffle: (items) => {
      const copy = [...items];
      for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(next() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
      }
      return copy;
    },
    chance: (p) => next() < p,
  };
  return rng;
}

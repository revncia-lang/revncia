export function hash32(s: string) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h = Math.imul(h ^ s.charCodeAt(i), 16777619);
  }
  return h >>> 0;
}

export function palette(seed: number) {
  const h1 = 348 + (seed % 14);
  const h2 = (seed * 7) % 10;
  const h3 = 352 + ((seed * 13) % 10);
  return {
    a: `hsl(${h1} 72% 46%)`,
    b: `hsl(${h2} 64% 40%)`,
    c: `hsl(${h3} 48% 34%)`,
    dim: `hsl(${h1} 32% 96%)`,
  };
}

export function rnd(seed: number) {
  return () => {
    seed = (seed * 1664525 + 1013904223) >>> 0;
    return seed / 4294967296;
  };
}

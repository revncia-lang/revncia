export function hash32(s: string) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h = Math.imul(h ^ s.charCodeAt(i), 16777619);
  }
  return h >>> 0;
}

export function palette(seed: number) {
  const h1 = 18 + (seed % 22);
  const h2 = 26 + ((seed * 7) % 16);
  const h3 = 12 + ((seed * 13) % 26);
  return {
    a: `hsl(${h1} 88% 58%)`,
    b: `hsl(${h2} 78% 48%)`,
    c: `hsl(${h3} 62% 38%)`,
    dim: `hsl(${h1} 42% 94%)`,
  };
}

export function rnd(seed: number) {
  return () => {
    seed = (seed * 1664525 + 1013904223) >>> 0;
    return seed / 4294967296;
  };
}

export function hash32(s: string) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h = Math.imul(h ^ s.charCodeAt(i), 16777619);
  }
  return h >>> 0;
}

export function palette(seed: number) {
  const h1 = seed % 360;
  const h2 = (seed * 7 + 40) % 360;
  const h3 = (seed * 13 + 180) % 360;
  return {
    a: `hsl(${h1} 80% 58%)`,
    b: `hsl(${h2} 70% 48%)`,
    c: `hsl(${h3} 55% 42%)`,
    dim: `hsl(${h1} 30% 14%)`,
  };
}

export function rnd(seed: number) {
  return () => {
    seed = (seed * 1664525 + 1013904223) >>> 0;
    return seed / 4294967296;
  };
}

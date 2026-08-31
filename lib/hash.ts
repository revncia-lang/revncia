export function hash32(s: string) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h = Math.imul(h ^ s.charCodeAt(i), 16777619);
  }
  return h >>> 0;
}

export function palette(seed: number) {
  const hues = [211, 205, 220, 200, 215, 199];
  const h1 = hues[seed % hues.length];
  const h2 = hues[(seed * 3) % hues.length];
  const h3 = hues[(seed * 7) % hues.length];
  return {
    a: `hsl(${h1} 86% 46%)`,
    b: `hsl(${h2} 12% 58%)`,
    c: `hsl(${h3} 10% 42%)`,
    dim: `hsl(${h1} 24% 96%)`,
  };
}

export function rnd(seed: number) {
  return () => {
    seed = (seed * 1664525 + 1013904223) >>> 0;
    return seed / 4294967296;
  };
}

export function hash32(s: string) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h = Math.imul(h ^ s.charCodeAt(i), 16777619);
  }
  return h >>> 0;
}

export function palette(seed: number) {
  const h1 = (seed % 18) + (seed % 2 ? 352 : 4);
  const h2 = 8 + ((seed * 7) % 14);
  const h3 = 348 + ((seed * 13) % 18);
  return {
    a: `hsl(${h1} 72% 48%)`,
    b: `hsl(${h2} 64% 42%)`,
    c: `hsl(${h3} 48% 36%)`,
    dim: `hsl(${h2} 28% 95%)`,
  };
}

export function rnd(seed: number) {
  return () => {
    seed = (seed * 1664525 + 1013904223) >>> 0;
    return seed / 4294967296;
  };
}

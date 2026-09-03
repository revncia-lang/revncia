export function hash32(s: string) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h = Math.imul(h ^ s.charCodeAt(i), 16777619);
  }
  return h >>> 0;
}

export function palette(seed: number) {
  return {
    a: "#ffffff",
    b: "#a9b1b8",
    c: "#62d9ff",
    dim: "#05080a",
  };
}

export function rnd(seed: number) {
  return () => {
    seed = (seed * 1664525 + 1013904223) >>> 0;
    return seed / 4294967296;
  };
}

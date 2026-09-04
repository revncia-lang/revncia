export type HandPose = "down" | "out" | "up" | "wave";

export type MotionKeyframe = {
  atMs: number;
  open?: number;
  left?: HandPose;
  right?: HandPose;
};

export type RobotMotion = {
  text: string;
  durationMs: number;
  mouth: { atMs: number; open: number }[];
  leftHand: { atMs: number; pose: HandPose }[];
  rightHand: { atMs: number; pose: HandPose }[];
  source: "revncia-gateway" | "revncia-local";
};

const VOWELS = /[aeiouy]/i;

export function buildLocalMotion(text: string, gesture?: string): RobotMotion {
  const words = text.split(/\s+/).filter(Boolean);
  const durationMs = Math.max(3200, words.length * 520);
  const mouth: RobotMotion["mouth"] = [{ atMs: 0, open: 0.1 }];
  let t = 160;
  for (const w of words) {
    const open = Math.min(1, 0.28 + (w.match(VOWELS)?.length ?? 1) * 0.16);
    mouth.push({ atMs: t, open });
    t += Math.max(260, w.length * 95);
    mouth.push({ atMs: t, open: 0.14 });
    t += 120;
  }
  mouth.push({ atMs: durationMs, open: 0.08 });

  const leftHand: RobotMotion["leftHand"] = [
    { atMs: 0, pose: "down" },
    { atMs: 200, pose: gesture === "nod" ? "out" : "wave" },
    { atMs: durationMs * 0.55, pose: "out" },
    { atMs: durationMs, pose: "down" },
  ];
  const rightHand: RobotMotion["rightHand"] = [
    { atMs: 0, pose: "down" },
    { atMs: 280, pose: gesture === "wave" ? "wave" : "up" },
    { atMs: durationMs * 0.35, pose: gesture === "wave" ? "up" : "out" },
    { atMs: durationMs * 0.5, pose: gesture === "wave" ? "wave" : "out" },
    { atMs: durationMs * 0.65, pose: "out" },
    { atMs: durationMs, pose: "down" },
  ];

  return {
    text,
    durationMs,
    mouth,
    leftHand,
    rightHand,
    source: "revncia-local",
  };
}

export function sampleOpen(frames: { atMs: number; open: number }[], t: number) {
  if (!frames.length) return 0.1;
  let prev = frames[0];
  for (const f of frames) {
    if (f.atMs >= t) {
      const span = Math.max(1, f.atMs - prev.atMs);
      const u = (t - prev.atMs) / span;
      return prev.open + (f.open - prev.open) * u;
    }
    prev = f;
  }
  return frames[frames.length - 1].open;
}

export function samplePose(
  frames: { atMs: number; pose: HandPose }[],
  t: number,
): HandPose {
  let pose: HandPose = "down";
  for (const f of frames) {
    if (f.atMs <= t) pose = f.pose;
  }
  return pose;
}

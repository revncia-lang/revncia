import { NextResponse } from "next/server";
import {
  buildLocalMotion,
  type HandPose,
  type RobotMotion,
} from "@/lib/robotMotion";

const POSES = new Set<HandPose>(["down", "out", "up", "wave"]);

function pose(v: unknown, fallback: HandPose): HandPose {
  return typeof v === "string" && POSES.has(v as HandPose)
    ? (v as HandPose)
    : fallback;
}

export const dynamic = "force-dynamic";

function asMotion(data: unknown, fallbackText: string): RobotMotion | null {
  if (!data || typeof data !== "object") return null;
  const d = data as Record<string, unknown>;
  if (!Array.isArray(d.mouth) || !Array.isArray(d.leftHand)) return null;
  return {
    text: String(d.text || fallbackText),
    durationMs: Number(d.durationMs) || 2000,
    mouth: (d.mouth as RobotMotion["mouth"]).map((f) => ({
      atMs: Number(f.atMs) || 0,
      open: Math.min(1, Math.max(0, Number(f.open) || 0)),
    })),
    leftHand: (d.leftHand as RobotMotion["leftHand"]).map((f) => ({
      atMs: Number(f.atMs) || 0,
      pose: pose(f.pose, "down"),
    })),
    rightHand: ((d.rightHand as RobotMotion["rightHand"]) || []).map((f) => ({
      atMs: Number(f.atMs) || 0,
      pose: pose(f.pose, "down"),
    })),
    source: "revncia-gateway",
  };
}

export async function GET() {
  const upstream = process.env.REVNCIA_ROBOT_API_URL;
  return NextResponse.json({
    ok: true,
    service: "REVNCIA robot motion",
    upstream: Boolean(upstream),
  });
}

export async function POST(request: Request) {
  const body = (await request.json().catch(() => ({}))) as {
    text?: string;
    gesture?: string;
  };
  const text =
    body.text?.trim() ||
    "Welcome to REVNCIA. I am your AI attendant.";
  const gesture = body.gesture;

  const upstream = process.env.REVNCIA_ROBOT_API_URL;
  if (upstream) {
    try {
      const res = await fetch(`${upstream.replace(/\/$/, "")}/robot/motion`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(process.env.REVNCIA_ROBOT_API_KEY
            ? { Authorization: `Bearer ${process.env.REVNCIA_ROBOT_API_KEY}` }
            : {}),
        },
        body: JSON.stringify({ text, gesture }),
      });
      if (res.ok) {
        const parsed = asMotion(await res.json(), text);
        if (parsed) return NextResponse.json(parsed);
      }
    } catch {
      /* fall through to local motion engine */
    }
  }

  return NextResponse.json(buildLocalMotion(text, gesture));
}

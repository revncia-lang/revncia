"use client";

import Image from "next/image";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type PointerEvent,
} from "react";
import {
  sampleOpen,
  samplePose,
  type HandPose,
  type RobotMotion,
} from "@/lib/robotMotion";

function pickMaleVoice() {
  const voices = window.speechSynthesis.getVoices();
  const preferred = voices.find((v) =>
    /david|mark|daniel|george|male|baritone|guy/i.test(v.name),
  );
  return preferred || voices.find((v) => v.lang.startsWith("en")) || voices[0];
}

const HAND_STYLE: Record<HandPose, string> = {
  down: "rotate(8deg) translateY(6px)",
  out: "rotate(-28deg) translateX(-8px)",
  up: "rotate(-55deg) translateY(-10px)",
  wave: "rotate(-40deg) translateX(-12px)",
};

export function HumanoidRobot() {
  const [allowed, setAllowed] = useState(false);
  const [apiOk, setApiOk] = useState<boolean | null>(null);
  const [line, setLine] = useState(
    "Actions are off. Allow them to connect mouth and hands to the REVNCIA motion API.",
  );
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [mouth, setMouth] = useState(0.12);
  const [left, setLeft] = useState<HandPose>("down");
  const [right, setRight] = useState<HandPose>("down");
  const drag = useRef<{ px: number; py: number; ox: number; oy: number } | null>(
    null,
  );
  const playing = useRef(false);
  const raf = useRef(0);

  useEffect(() => {
    fetch("/api/robot/motion")
      .then((r) => r.json())
      .then((d) => setApiOk(Boolean(d.ok)))
      .catch(() => setApiOk(false));
  }, []);

  useEffect(() => {
    const load = () => pickMaleVoice();
    window.speechSynthesis?.getVoices();
    window.speechSynthesis?.addEventListener("voiceschanged", load);
    return () => window.speechSynthesis?.removeEventListener("voiceschanged", load);
  }, []);

  const playMotion = useCallback(async (text: string, gesture?: string) => {
    if (!allowed) return;
    playing.current = false;
    cancelAnimationFrame(raf.current);
    const res = await fetch("/api/robot/motion", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text, gesture }),
    });
    const motion = (await res.json()) as RobotMotion;
    setLine(
      `${motion.text} · motion from ${motion.source === "revncia-gateway" ? "your API" : "REVNCIA motion engine"}`,
    );

    const start = performance.now();
    playing.current = true;
    const tick = (now: number) => {
      const t = now - start;
      setMouth(sampleOpen(motion.mouth, t));
      setLeft(samplePose(motion.leftHand, t));
      setRight(samplePose(motion.rightHand, t));
      if (t < motion.durationMs && playing.current) {
        raf.current = requestAnimationFrame(tick);
      } else {
        playing.current = false;
        setMouth(0.12);
        setLeft("down");
        setRight("down");
      }
    };
    raf.current = requestAnimationFrame(tick);

    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(motion.text);
      u.rate = 0.92;
      u.pitch = 0.78;
      u.voice = pickMaleVoice();
      window.speechSynthesis.speak(u);
    }
  }, [allowed]);

  useEffect(() => {
    if (!allowed) {
      playing.current = false;
      cancelAnimationFrame(raf.current);
      window.speechSynthesis?.cancel();
      setMouth(0.12);
      setLeft("down");
      setRight("down");
      setLine(
        "Actions are off. Allow them to connect mouth and hands to the REVNCIA motion API.",
      );
      return;
    }
    const intro = window.setTimeout(() => {
      void playMotion(
        "Welcome to REVNCIA. My mouth and hands now follow the motion API.",
        "wave",
      );
    }, 500);
    return () => window.clearTimeout(intro);
  }, [allowed, playMotion]);

  function onPointerDown(e: PointerEvent) {
    (e.currentTarget as HTMLElement).setPointerCapture?.(e.pointerId);
    drag.current = { px: e.clientX, py: e.clientY, ox: offset.x, oy: offset.y };
  }
  function onPointerMove(e: PointerEvent) {
    if (!drag.current) return;
    setOffset({
      x: drag.current.ox + (e.clientX - drag.current.px),
      y: drag.current.oy + (e.clientY - drag.current.py),
    });
  }
  function onPointerUp() {
    drag.current = null;
  }

  return (
    <div className="relative">
      <div className="relative z-[80] mb-3 flex flex-wrap gap-2">
        <button
          type="button"
          className={`px-3 py-1.5 text-[0.68rem] tracking-[0.14em] uppercase ${
            allowed
              ? "bg-cyan-400 text-black"
              : "border border-cyan-400/40 text-cyan-200"
          }`}
          onClick={() => setAllowed((v) => !v)}
        >
          {allowed ? "Turn actions off" : "Allow actions"}
        </button>
        <button
          type="button"
          disabled={!allowed}
          className="border border-cyan-400/40 px-3 py-1.5 text-[0.68rem] tracking-[0.14em] uppercase text-cyan-200 disabled:opacity-30"
          onClick={() =>
            void playMotion(
              "REVNCIA Voice and WhatsApp operations are ready to commission.",
              "wave",
            )
          }
        >
          Speak
        </button>
        <button
          type="button"
          disabled={!allowed}
          className="border border-cyan-400/40 px-3 py-1.5 text-[0.68rem] tracking-[0.14em] uppercase text-cyan-200 disabled:opacity-30"
          onClick={() => void playMotion("Waving hello from REVNCIA AI.", "wave")}
        >
          Wave
        </button>
        <button
          type="button"
          disabled={!allowed}
          className="border border-cyan-400/40 px-3 py-1.5 text-[0.68rem] tracking-[0.14em] uppercase text-cyan-200 disabled:opacity-30"
          onClick={() => void playMotion("Acknowledged. I am listening.", "nod")}
        >
          Nod
        </button>
      </div>
      <div
        className="robot-stage relative select-none"
        style={{ transform: `translate(${offset.x}px, ${offset.y}px)` }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        <div
          className={`robot-figure relative mx-auto aspect-[3/4] w-full max-w-[280px] cursor-grab active:cursor-grabbing ${allowed ? "robot-live" : "still"}`}
        >
          <Image
            src="/images/revncia-mascot.jpg"
            alt="REVNCIA AI robot attendant"
            fill
            priority
            className="object-contain object-bottom"
            sizes="280px"
          />
          {allowed ? (
            <>
              <span
                className="robot-mouth pointer-events-none absolute left-1/2 rounded-full bg-cyan-300 shadow-[0_0_12px_#22d3ee] transition-[height] duration-75"
                style={{
                  top: "30%",
                  width: "16%",
                  height: `${4 + mouth * 12}%`,
                  transform: "translateX(-50%)",
                  opacity: 0.9,
                }}
              />
              <span
                className="pointer-events-none absolute rounded-full bg-white/80 shadow-[0_0_10px_#22d3ee] transition-transform duration-150"
                style={{
                  left: "2%",
                  top: "42%",
                  width: "16%",
                  height: "32%",
                  transform: HAND_STYLE[left],
                  transformOrigin: "top center",
                }}
              />
              <span
                className="pointer-events-none absolute rounded-full bg-white/80 shadow-[0_0_10px_#22d3ee] transition-transform duration-150"
                style={{
                  right: "2%",
                  top: "42%",
                  width: "16%",
                  height: "32%",
                  transform: HAND_STYLE[right],
                  transformOrigin: "top center",
                }}
              />
            </>
          ) : null}
        </div>
        <p className="mt-3 px-2 text-center text-xs leading-relaxed text-cyan-100/85">
          {line}
        </p>
        <p className="mt-1 text-center text-[0.65rem] uppercase tracking-widest text-slate-500">
          Drag to move · API {apiOk ? "connected" : apiOk === false ? "offline" : "…"} · Actions{" "}
          {allowed ? "on" : "off"}
        </p>
      </div>
    </div>
  );
}

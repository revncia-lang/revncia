"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState, type CSSProperties } from "react";
import { btnChip, btnPrimary } from "@/lib/ui";
import { buildLocalMotion, sampleOpen, type RobotMotion } from "@/lib/robotMotion";

function pickMaleVoice() {
  const voices = window.speechSynthesis.getVoices();
  const preferred = voices.find((v) =>
    /david|mark|daniel|george|male|baritone|guy/i.test(v.name),
  );
  return preferred || voices.find((v) => v.lang.startsWith("en")) || voices[0];
}

export function HumanoidRobot() {
  const [allowed, setAllowed] = useState(false);
  const [apiOk, setApiOk] = useState<boolean | null>(null);
  const [line, setLine] = useState(
    "Actions are off. Allow them so this attendant can speak. The head stays still — only the eyes on this figure follow the voice.",
  );
  const [mouth, setMouth] = useState(0.08);
  const [speaking, setSpeaking] = useState(false);
  const [gesture, setGesture] = useState<"idle" | "wave" | "nod">("idle");
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
    return () =>
      window.speechSynthesis?.removeEventListener("voiceschanged", load);
  }, []);

  const playMotion = useCallback(
    async (text: string, next?: string) => {
      if (!allowed) return;
      playing.current = false;
      cancelAnimationFrame(raf.current);
      window.speechSynthesis?.cancel();

      const local = buildLocalMotion(text, next);
      setLine(local.text);
      setGesture(next === "nod" ? "nod" : next === "wave" ? "wave" : "idle");
      setSpeaking(true);
      setMouth(0.55);

      const startTick = (motion: RobotMotion) => {
        const start = performance.now();
        playing.current = true;
        const tick = (now: number) => {
          const t = now - start;
          setMouth(Math.max(0.18, sampleOpen(motion.mouth, t)));
          if (t < motion.durationMs && playing.current) {
            raf.current = requestAnimationFrame(tick);
          } else {
            playing.current = false;
            setSpeaking(false);
            setMouth(0.08);
            setGesture("idle");
          }
        };
        raf.current = requestAnimationFrame(tick);
      };

      startTick(local);

      if (window.speechSynthesis) {
        const u = new SpeechSynthesisUtterance(local.text);
        u.rate = 0.92;
        u.pitch = 0.78;
        u.voice = pickMaleVoice();
        u.onstart = () => {
          setSpeaking(true);
          setMouth(0.62);
        };
        u.onend = () => {
          if (!playing.current) {
            setSpeaking(false);
            setMouth(0.08);
          }
        };
        window.speechSynthesis.speak(u);
      }

      void fetch("/api/robot/motion", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text, gesture: next }),
      }).catch(() => undefined);
    },
    [allowed],
  );

  useEffect(() => {
    if (!allowed) {
      playing.current = false;
      cancelAnimationFrame(raf.current);
      window.speechSynthesis?.cancel();
      setMouth(0.08);
      setSpeaking(false);
      setGesture("idle");
      setLine(
        "Actions are off. Allow them so this attendant can speak. The head stays still — only the eyes on this figure follow the voice.",
      );
      return;
    }
    const intro = window.setTimeout(() => {
      void playMotion(
        "Welcome to REVNCIA. Together we transform. Voice, WhatsApp, and the AI Gateway are ready to commission.",
        "idle",
      );
    }, 400);
    return () => window.clearTimeout(intro);
  }, [allowed, playMotion]);

  const talking = speaking;
  const figureClass = [
    !allowed ? "still" : "",
    talking ? "robot-eyes-talk" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="relative">
      <div className="robot-stage relative select-none">
        <div
          className={`robot-figure relative mx-auto w-full max-w-[min(100%,28rem)] aspect-[947/1024] md:max-w-none ${figureClass}`}
          style={{ ["--eye"]: talking ? mouth : 0.08 } as CSSProperties}
        >
          <Image
            src="/images/revncia-mascot.png"
            alt="REVNCIA AI attendant"
            fill
            priority
            unoptimized
            className="object-contain object-top"
            sizes="(min-width: 768px) 42rem, 28rem"
          />
          <div className="robot-face" aria-hidden>
            <span className="robot-eye-slit" />
            <span className="robot-eye-hud" />
            <span className="robot-nose" />
            <span className="robot-mouth" />
          </div>
        </div>
      </div>
      <div className="relative z-[80] mt-3 flex flex-wrap justify-center gap-2">
        <button
          type="button"
          className={
            allowed
              ? btnPrimary
              : `${btnChip} border-cyan-400/40 text-cyan-200`
          }
          onClick={() => setAllowed((v) => !v)}
        >
          {allowed ? "Turn actions off" : "Allow actions"}
        </button>
        <button
          type="button"
          disabled={!allowed}
          className={btnChip}
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
          className={btnChip}
          onClick={() => void playMotion("Waving hello from REVNCIA AI.", "wave")}
        >
          Wave
        </button>
        <button
          type="button"
          disabled={!allowed}
          className={btnChip}
          onClick={() => void playMotion("Acknowledged. I am listening.", "nod")}
        >
          Nod
        </button>
      </div>
      <p className="mt-2 px-2 text-center text-xs leading-relaxed text-pretty break-words text-slate-400">
        {line}
      </p>
      <p className="mt-1 text-center text-[0.65rem] uppercase tracking-widest text-slate-500">
        API {apiOk ? "connected" : apiOk === false ? "offline" : "…"} · Actions{" "}
        {allowed ? "on" : "off"}
      </p>
    </div>
  );
}

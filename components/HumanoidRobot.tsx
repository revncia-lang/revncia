"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { btnChip, btnPrimary } from "@/lib/ui";
import { sampleOpen, type RobotMotion } from "@/lib/robotMotion";

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
    "Actions are off. Allow them so this attendant can speak. The visor and existing hands move with the voice — nothing extra is drawn on top.",
  );
  const [mouth, setMouth] = useState(0.12);
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
      const res = await fetch("/api/robot/motion", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text, gesture: next }),
      });
      const motion = (await res.json()) as RobotMotion;
      setLine(motion.text);
      setGesture(next === "nod" ? "nod" : next === "wave" ? "wave" : "idle");

      const start = performance.now();
      playing.current = true;
      const tick = (now: number) => {
        const t = now - start;
        setMouth(sampleOpen(motion.mouth, t));
        if (t < motion.durationMs && playing.current) {
          raf.current = requestAnimationFrame(tick);
        } else {
          playing.current = false;
          setMouth(0.12);
          setGesture("idle");
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
    },
    [allowed],
  );

  useEffect(() => {
    if (!allowed) {
      playing.current = false;
      cancelAnimationFrame(raf.current);
      window.speechSynthesis?.cancel();
      setMouth(0.12);
      setGesture("idle");
      setLine(
        "Actions are off. Allow them so this attendant can speak. The visor and existing hands move with the voice — nothing extra is drawn on top.",
      );
      return;
    }
    const intro = window.setTimeout(() => {
      void playMotion(
        "Welcome to REVNCIA. Together we transform. Voice, WhatsApp, and the AI Gateway are ready to commission.",
        "wave",
      );
    }, 400);
    return () => window.clearTimeout(intro);
  }, [allowed, playMotion]);

  const talking = allowed && mouth > 0.22;
  const figureClass = !allowed
    ? "still"
    : gesture === "nod"
      ? "robot-acting-nod"
      : gesture === "wave"
        ? "robot-acting-wave"
        : talking
          ? "robot-acting-talk"
          : "robot-live";

  return (
    <div className="relative">
      <div className="robot-stage relative select-none">
        <div
          className={`robot-figure relative mx-auto h-[440px] w-full max-w-[280px] md:h-[560px] md:max-w-[340px] ${figureClass}`}
          style={
            allowed
              ? { filter: `brightness(${1 + mouth * 0.18})` }
              : undefined
          }
        >
          <Image
            src="/images/revncia-mascot.png"
            alt="REVNCIA AI attendant"
            fill
            priority
            unoptimized
            className="object-contain object-center"
            sizes="340px"
          />
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

"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { JarvisHud } from "@/components/JarvisHud";
import { btnChip, btnPrimary } from "@/lib/ui";
import { buildLocalMotion } from "@/lib/robotMotion";

function RevolvingEye({ id }: { id: string }) {
  return (
    <svg className="robot-eye-svg" viewBox="0 0 100 100" fill="none" aria-hidden>
      <defs>
        <radialGradient id={`${id}-glow`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.95)" />
          <stop offset="28%" stopColor="rgba(196,30,58,0.55)" />
          <stop offset="70%" stopColor="rgba(34,211,238,0.12)" />
          <stop offset="100%" stopColor="rgba(34,211,238,0)" />
        </radialGradient>
      </defs>
      <circle cx="50" cy="50" r="46" fill={`url(#${id}-glow)`} opacity="0.55" />
      <g className="spin spin-outer">
        <circle
          cx="50"
          cy="50"
          r="42"
          stroke="rgba(196,30,58,0.85)"
          strokeWidth="1.15"
        />
        <circle
          cx="50"
          cy="50"
          r="42"
          stroke="rgba(125,211,252,0.55)"
          strokeWidth="1.1"
          strokeDasharray="6 10 2 8"
          strokeLinecap="round"
        />
        {Array.from({ length: 24 }, (_, i) => {
          const a = ((i / 24) * 360 * Math.PI) / 180;
          const major = i % 6 === 0;
          const inner = major ? 36 : 38.5;
          const outer = 44.5;
          return (
            <line
              key={`${id}-t-${i}`}
              x1={50 + Math.cos(a) * inner}
              y1={50 + Math.sin(a) * inner}
              x2={50 + Math.cos(a) * outer}
              y2={50 + Math.sin(a) * outer}
              stroke={major ? "rgba(165,243,252,0.9)" : "rgba(196,30,58,0.7)"}
              strokeWidth={major ? 1.4 : 0.8}
            />
          );
        })}
      </g>
      <g className="spin spin-mid">
        <circle
          cx="50"
          cy="50"
          r="28"
          stroke="rgba(34,211,238,0.45)"
          strokeWidth="0.9"
          strokeDasharray="3 5"
        />
        <circle
          cx="50"
          cy="50"
          r="21"
          stroke="rgba(196,30,58,0.75)"
          strokeWidth="1"
        />
      </g>
      <g className="spin spin-scan">
        <path
          d="M50 50 L50 8 A42 42 0 0 1 86 28 Z"
          fill="rgba(34,211,238,0.14)"
        />
        <path
          d="M50 50 L86 28"
          stroke="rgba(186,230,253,0.85)"
          strokeWidth="1.1"
        />
      </g>
      <g className="orbit">
        <circle cx="50" cy="18" r="3.4" fill="#f8fafc" />
        <circle
          cx="50"
          cy="18"
          r="6.2"
          stroke="rgba(34,211,238,0.7)"
          strokeWidth="0.9"
        />
        <circle cx="50" cy="82" r="2.1" fill="rgba(196,30,58,0.95)" />
      </g>
      <circle className="robot-eye-core" cx="50" cy="50" r="7.5" fill="#fff" />
      <circle
        cx="50"
        cy="50"
        r="11"
        stroke="rgba(196,30,58,0.9)"
        strokeWidth="1.2"
      />
    </svg>
  );
}

const LINES = {
  idle: "Actions are off. The figure stays still.",
  welcome:
    "Welcome to REVNCIA. Together we transform. We help your callers get answers, your staff share one system, and the public keep a record they can trust. Voice, WhatsApp, CRM, and ERP are ready when you are. Write info@revncia.com to start.",
  speak:
    "REVNCIA Voice and WhatsApp keep every customer conversation answered. Pair them with the AI Gateway, CRM, and ERP your staff can actually run. Email info@revncia.com to start.",
  wave:
    "Hello from REVNCIA. Together we transform. We would be glad to help with Voice, WhatsApp, the AI Platform, CRM, and ERP. Write info@revncia.com.",
  nod:
    "Understood. We are ready to listen. Tell us who waits — callers, chats, files, or citizens — and write info@revncia.com.",
} as const;

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
  const [line, setLine] = useState(LINES.idle);
  const playing = useRef(false);

  const restTalk = useCallback(() => {
    playing.current = false;
  }, []);

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
      if (window.speechSynthesis?.speaking || window.speechSynthesis?.pending) {
        window.speechSynthesis.cancel();
      }

      const local = buildLocalMotion(text, next);
      setLine(local.text);

      if (window.speechSynthesis) {
        pickMaleVoice();
        const u = new SpeechSynthesisUtterance(local.text);
        u.rate = 0.78;
        u.pitch = 0.78;
        u.voice = pickMaleVoice();
        u.onstart = () => {
          playing.current = true;
        };
        u.onend = () => {
          playing.current = false;
        };
        u.onerror = () => {
          playing.current = false;
        };
        if (window.speechSynthesis.paused) window.speechSynthesis.resume();
        const start = () => window.speechSynthesis.speak(u);
        if (window.speechSynthesis.speaking || window.speechSynthesis.pending) {
          queueMicrotask(start);
        } else {
          start();
        }
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
      window.speechSynthesis?.cancel();
      restTalk();
      setLine(LINES.idle);
      return;
    }
    void playMotion(LINES.welcome, "idle");
  }, [allowed, playMotion, restTalk]);

  return (
    <div className="relative">
      <div className="robot-stage relative mx-auto w-full max-w-[min(100%,22rem)] select-none sm:max-w-[26rem] md:max-w-[32rem] lg:max-w-[34rem]">
        <JarvisHud />
        <div
          className={`robot-figure relative z-10 mx-auto w-full aspect-[904/1024] ${
            allowed ? "" : "still"
          }`}
        >
          <Image
            src="/images/revncia-mascot.png"
            alt="REVNCIA AI attendant"
            fill
            priority
            unoptimized
            className="z-10 object-contain object-top"
            sizes="(min-width: 1024px) 34rem, (min-width: 768px) 32rem, 26rem"
          />
          <div className="robot-eyes" aria-hidden>
            <div className="robot-eye robot-eye-l">
              <RevolvingEye id="eye-l" />
            </div>
            <div className="robot-eye robot-eye-r">
              <RevolvingEye id="eye-r" />
            </div>
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
          onClick={() => void playMotion(LINES.speak)}
        >
          Speak
        </button>
        <button
          type="button"
          disabled={!allowed}
          className={btnChip}
          onClick={() => void playMotion(LINES.wave)}
        >
          Wave
        </button>
        <button
          type="button"
          disabled={!allowed}
          className={btnChip}
          onClick={() => void playMotion(LINES.nod)}
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

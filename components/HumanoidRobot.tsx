"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { JarvisHud } from "@/components/JarvisHud";
import { btnChip, btnPrimary } from "@/lib/ui";
import { buildLocalMotion } from "@/lib/robotMotion";

const BRAIN_NODES: { x: number; y: number; r: number; hot?: boolean }[] = [
  { x: 120, y: 28, r: 2.3, hot: true },
  { x: 96, y: 36, r: 2.0 },
  { x: 144, y: 36, r: 2.0 },
  { x: 74, y: 48, r: 2.4, hot: true },
  { x: 166, y: 48, r: 2.4, hot: true },
  { x: 108, y: 52, r: 1.8 },
  { x: 132, y: 52, r: 1.8 },
  { x: 58, y: 68, r: 2.1 },
  { x: 182, y: 68, r: 2.1 },
  { x: 88, y: 70, r: 2.2, hot: true },
  { x: 152, y: 70, r: 2.2, hot: true },
  { x: 120, y: 74, r: 2.0 },
  { x: 70, y: 90, r: 1.9 },
  { x: 170, y: 90, r: 1.9 },
  { x: 100, y: 94, r: 2.3, hot: true },
  { x: 140, y: 94, r: 2.3, hot: true },
  { x: 120, y: 108, r: 1.8 },
  { x: 86, y: 114, r: 2.0 },
  { x: 154, y: 114, r: 2.0 },
  { x: 112, y: 128, r: 1.7 },
  { x: 128, y: 128, r: 1.7 },
];

const BRAIN_SYNAPSES: [number, number][] = [
  [0, 1],
  [0, 2],
  [1, 3],
  [2, 4],
  [1, 5],
  [2, 6],
  [3, 7],
  [4, 8],
  [3, 9],
  [4, 10],
  [5, 9],
  [6, 10],
  [5, 11],
  [6, 11],
  [7, 9],
  [8, 10],
  [9, 11],
  [10, 11],
  [9, 12],
  [10, 13],
  [9, 14],
  [10, 15],
  [11, 14],
  [11, 15],
  [12, 14],
  [13, 15],
  [14, 16],
  [15, 16],
  [14, 17],
  [15, 18],
  [16, 19],
  [16, 20],
  [17, 19],
  [18, 20],
];

function AiBrain() {
  return (
    <div className="robot-brain" aria-hidden>
      <svg className="robot-brain-svg" viewBox="0 0 240 160" fill="none">
        <defs>
          <clipPath id="robot-brain-cavity">
            <path d="M120 4 C68 6 22 32 16 78 C10 118 42 154 92 158 C112 160 128 160 148 158 C198 154 230 118 224 78 C218 32 172 6 120 4 Z" />
          </clipPath>
          <radialGradient id="robot-brain-halo" cx="50%" cy="46%" r="56%">
            <stop offset="0%" stopColor="rgba(253,186,116,0.82)" />
            <stop offset="38%" stopColor="rgba(249,115,22,0.52)" />
            <stop offset="68%" stopColor="rgba(251,191,36,0.22)" />
            <stop offset="100%" stopColor="rgba(249,115,22,0)" />
          </radialGradient>
          <radialGradient id="robot-brain-core" cx="50%" cy="48%" r="42%">
            <stop offset="0%" stopColor="rgba(255,237,213,0.78)" />
            <stop offset="42%" stopColor="rgba(251,146,60,0.45)" />
            <stop offset="100%" stopColor="rgba(249,115,22,0)" />
          </radialGradient>
          <linearGradient id="robot-brain-fold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="rgba(253,186,116,0.55)" />
            <stop offset="100%" stopColor="rgba(234,88,12,0.28)" />
          </linearGradient>
        </defs>
        <g clipPath="url(#robot-brain-cavity)">
          <ellipse
            className="robot-brain-halo"
            cx="120"
            cy="78"
            rx="108"
            ry="72"
            fill="url(#robot-brain-halo)"
          />
          <ellipse
            className="robot-brain-core"
            cx="120"
            cy="80"
            rx="72"
            ry="52"
            fill="url(#robot-brain-core)"
          />
          <path
            className="robot-brain-hemisphere"
            d="M120 20 C98 16 70 22 52 40 C32 60 26 86 34 108 C42 128 66 142 96 144 C110 145 118 136 120 124 V20 Z"
          />
          <path
            className="robot-brain-hemisphere"
            d="M120 20 C142 16 170 22 188 40 C208 60 214 86 206 108 C198 128 174 142 144 144 C130 145 122 136 120 124 V20 Z"
          />
          <path
            className="robot-brain-fissure"
            d="M120 24 V132"
          />
          <path
            className="robot-brain-sulcus"
            stroke="url(#robot-brain-fold)"
            d="M72 42 C84 54 86 70 74 86 C64 98 70 112 86 120"
          />
          <path
            className="robot-brain-sulcus"
            stroke="url(#robot-brain-fold)"
            d="M168 42 C156 54 154 70 166 86 C176 98 170 112 154 120"
          />
          <path
            className="robot-brain-sulcus"
            stroke="url(#robot-brain-fold)"
            d="M54 70 C66 74 78 68 90 78 C98 86 92 100 104 108"
          />
          <path
            className="robot-brain-sulcus"
            stroke="url(#robot-brain-fold)"
            d="M186 70 C174 74 162 68 150 78 C142 86 148 100 136 108"
          />
          <path
            className="robot-brain-sulcus"
            stroke="url(#robot-brain-fold)"
            d="M100 38 C108 52 112 66 104 84"
          />
          <path
            className="robot-brain-sulcus"
            stroke="url(#robot-brain-fold)"
            d="M140 38 C132 52 128 66 136 84"
          />
          {BRAIN_SYNAPSES.map(([a, b], i) => {
            const na = BRAIN_NODES[a];
            const nb = BRAIN_NODES[b];
            return (
              <line
                key={`syn-${i}`}
                className={`robot-brain-synapse${i % 3 === 0 ? " robot-brain-synapse-hot" : ""}`}
                x1={na.x}
                y1={na.y}
                x2={nb.x}
                y2={nb.y}
              />
            );
          })}
          {BRAIN_NODES.map((n, i) => (
            <circle
              key={`n-${i}`}
              className={`robot-brain-node${n.hot ? " robot-brain-node-hot" : ""}`}
              cx={n.x}
              cy={n.y}
              r={n.r}
              style={{ animationDelay: `${(i % 7) * 0.28}s` }}
            />
          ))}
        </g>
      </svg>
    </div>
  );
}

function RevolvingEye({ id }: { id: string }) {
  return (
    <svg className="robot-eye-svg" viewBox="0 0 100 100" fill="none" aria-hidden>
      <defs>
        <radialGradient id={`${id}-glow`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.95)" />
          <stop offset="28%" stopColor="rgba(249,115,22,0.58)" />
          <stop offset="70%" stopColor="rgba(249,115,22,0.18)" />
          <stop offset="100%" stopColor="rgba(249,115,22,0)" />
        </radialGradient>
      </defs>
      <circle cx="50" cy="50" r="46" fill={`url(#${id}-glow)`} opacity="0.55" />
      <g className="spin spin-outer">
        <circle
          cx="50"
          cy="50"
          r="42"
          stroke="rgba(234,88,12,0.88)"
          strokeWidth="1.15"
        />
        <circle
          cx="50"
          cy="50"
          r="42"
          stroke="rgba(251,146,60,0.7)"
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
              stroke={major ? "rgba(245,158,11,0.95)" : "rgba(234,88,12,0.72)"}
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
          stroke="rgba(249,115,22,0.5)"
          strokeWidth="0.9"
          strokeDasharray="3 5"
        />
        <circle
          cx="50"
          cy="50"
          r="21"
          stroke="rgba(234,88,12,0.78)"
          strokeWidth="1"
        />
      </g>
      <g className="spin spin-scan">
        <path
          d="M50 50 L50 8 A42 42 0 0 1 86 28 Z"
          fill="rgba(249,115,22,0.16)"
        />
        <path
          d="M50 50 L86 28"
          stroke="rgba(234,88,12,0.85)"
          strokeWidth="1.1"
        />
      </g>
      <g className="orbit">
        <circle cx="50" cy="18" r="3.4" fill="#f8fafc" />
        <circle
          cx="50"
          cy="18"
          r="6.2"
          stroke="rgba(249,115,22,0.75)"
          strokeWidth="0.9"
        />
        <circle cx="50" cy="82" r="2.1" fill="rgba(234,88,12,0.95)" />
      </g>
      <circle className="robot-eye-core" cx="50" cy="50" r="7.5" fill="#fff" />
      <circle
        cx="50"
        cy="50"
        r="11"
        stroke="rgba(234,88,12,0.92)"
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
  const [line, setLine] = useState<string>(LINES.idle);
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
            className="robot-mascot z-10 object-contain object-top"
            sizes="(min-width: 1024px) 34rem, (min-width: 768px) 32rem, 26rem"
          />
          <AiBrain />
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
              : `${btnChip} border-orange-400 text-stone-800`
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
      <p className="mt-2 px-2 text-center text-sm leading-relaxed text-pretty break-words text-stone-600">
        {line}
      </p>
      <p className="mt-1 text-center text-[0.65rem] uppercase tracking-widest text-stone-500">
        API {apiOk ? "connected" : apiOk === false ? "offline" : "…"} · Actions{" "}
        {allowed ? "on" : "off"}
      </p>
    </div>
  );
}

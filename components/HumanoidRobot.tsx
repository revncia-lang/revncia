"use client";

import { useCallback, useEffect, useRef, useState } from "react";

function pickMaleVoice() {
  const voices = window.speechSynthesis.getVoices();
  const preferred = voices.find((v) =>
    /david|mark|daniel|george|male|baritone|guy/i.test(v.name),
  );
  return preferred || voices.find((v) => v.lang.startsWith("en")) || voices[0];
}

export function HumanoidRobot() {
  const [on, setOn] = useState(true);
  const [action, setAction] = useState<"idle" | "speak" | "wave" | "nod">(
    "idle",
  );
  const [line, setLine] = useState(
    "REVNCIA online. I am the institutional attendant. Ask the assistant at lower right, or commission a programme.",
  );
  const speaking = useRef(false);

  const speak = useCallback(
    (text: string, next: "idle" | "wave" | "nod" = "idle") => {
      if (!on || typeof window === "undefined" || !window.speechSynthesis) return;
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.rate = 0.92;
      u.pitch = 0.78;
      u.voice = pickMaleVoice();
      speaking.current = true;
      setAction("speak");
      setLine(text);
      u.onend = () => {
        speaking.current = false;
        setAction(next);
        window.setTimeout(() => setAction("idle"), 1600);
      };
      window.speechSynthesis.speak(u);
    },
    [on],
  );

  useEffect(() => {
    const load = () => pickMaleVoice();
    window.speechSynthesis.getVoices();
    window.speechSynthesis.addEventListener("voiceschanged", load);
    return () => window.speechSynthesis.removeEventListener("voiceschanged", load);
  }, []);

  useEffect(() => {
    if (!on) {
      window.speechSynthesis?.cancel();
      setAction("idle");
      return;
    }
    const intro = window.setTimeout(() => {
      speak(
        "Welcome to REVNCIA. We build intelligent digital infrastructure for enterprises and public impact institutions.",
        "wave",
      );
    }, 900);
    const cycle = window.setInterval(() => {
      if (speaking.current) return;
      const scripts = [
        { t: "AI Gateway, Voice, WhatsApp, CRM and ERP are live service lines.", a: "nod" as const },
        { t: "I remain on station. The lower-right attendant can name you and guide every service.", a: "wave" as const },
        { t: "Governed AI. Measurable impact. Recurring operations.", a: "nod" as const },
      ];
      const pick = scripts[Math.floor(Math.random() * scripts.length)];
      speak(pick.t, pick.a);
    }, 22000);
    return () => {
      window.clearTimeout(intro);
      window.clearInterval(cycle);
    };
  }, [on, speak]);

  return (
    <div className="relative">
      <div
        className={`robot-stage relative overflow-hidden border border-cyan-400/30 bg-black/50 ${action}`}
      >
        <svg viewBox="0 0 220 320" className="mx-auto h-[420px] w-full max-w-sm">
          <defs>
            <linearGradient id="armor" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1e293b" />
              <stop offset="100%" stopColor="#020617" />
            </linearGradient>
          </defs>
          <ellipse cx="110" cy="300" rx="70" ry="10" fill="#22d3ee" opacity="0.15" />
          <g className="robot-torso">
            <rect x="70" y="128" width="80" height="100" rx="12" fill="url(#armor)" stroke="#67e8f9" strokeWidth="1.2" />
            <rect x="88" y="148" width="44" height="28" rx="4" fill="#083344" stroke="#22d3ee" />
            <circle cx="110" cy="162" r="6" fill="#22d3ee" className="core" />
          </g>
          <g className="robot-arm-l">
            <rect x="48" y="136" width="18" height="70" rx="8" fill="#0f172a" stroke="#67e8f9" />
            <rect x="50" y="206" width="14" height="36" rx="6" fill="#164e63" />
          </g>
          <g className="robot-arm-r">
            <rect x="154" y="136" width="18" height="70" rx="8" fill="#0f172a" stroke="#67e8f9" />
            <rect x="156" y="206" width="14" height="36" rx="6" fill="#164e63" />
          </g>
          <g className="robot-head">
            <rect x="78" y="48" width="64" height="70" rx="16" fill="url(#armor)" stroke="#67e8f9" strokeWidth="1.4" />
            <rect x="90" y="72" width="44" height="16" rx="3" fill="#022c22" />
            <rect className="visor" x="94" y="75" width="36" height="10" rx="2" fill="#22d3ee" />
            <rect className="mouth" x="100" y="98" width="20" height="6" rx="2" fill="#67e8f9" />
          </g>
          <rect x="82" y="228" width="22" height="58" rx="8" fill="#0f172a" stroke="#67e8f9" />
          <rect x="116" y="228" width="22" height="58" rx="8" fill="#0f172a" stroke="#67e8f9" />
        </svg>
        <p className="px-4 pb-4 text-center text-xs leading-relaxed text-cyan-100/80">
          {line}
        </p>
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        <button
          type="button"
          className="border border-cyan-400/40 px-3 py-1.5 text-[0.68rem] tracking-[0.14em] uppercase text-cyan-200"
          onClick={() => setOn((v) => !v)}
        >
          Actions {on ? "ON" : "OFF"}
        </button>
        <button
          type="button"
          className="border border-cyan-400/40 px-3 py-1.5 text-[0.68rem] tracking-[0.14em] uppercase text-cyan-200"
          onClick={() => speak("REVNCIA Voice and WhatsApp operations are ready to commission.", "wave")}
        >
          Speak
        </button>
        <button
          type="button"
          className="border border-cyan-400/40 px-3 py-1.5 text-[0.68rem] tracking-[0.14em] uppercase text-cyan-200"
          onClick={() => {
            setAction("wave");
            window.setTimeout(() => setAction("idle"), 1400);
          }}
        >
          Wave
        </button>
        <button
          type="button"
          className="border border-cyan-400/40 px-3 py-1.5 text-[0.68rem] tracking-[0.14em] uppercase text-cyan-200"
          onClick={() => {
            setAction("nod");
            window.setTimeout(() => setAction("idle"), 1200);
          }}
        >
          Nod
        </button>
      </div>
    </div>
  );
}

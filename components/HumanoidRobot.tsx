"use client";

import Image from "next/image";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type PointerEvent,
} from "react";

function pickMaleVoice() {
  const voices = window.speechSynthesis.getVoices();
  const preferred = voices.find((v) =>
    /david|mark|daniel|george|male|baritone|guy/i.test(v.name),
  );
  return preferred || voices.find((v) => v.lang.startsWith("en")) || voices[0];
}

export function HumanoidRobot() {
  const [allowed, setAllowed] = useState(false);
  const [action, setAction] = useState<"still" | "idle" | "speak" | "wave" | "nod">(
    "still",
  );
  const [line, setLine] = useState(
    "Actions are off. Allow them to let REVNCIA AI move, speak, and greet you.",
  );
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const drag = useRef<{ px: number; py: number; ox: number; oy: number } | null>(
    null,
  );
  const speaking = useRef(false);

  const speak = useCallback(
    (text: string, next: "idle" | "wave" | "nod" = "idle") => {
      if (!allowed || typeof window === "undefined" || !window.speechSynthesis) {
        return;
      }
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
    [allowed],
  );

  useEffect(() => {
    const load = () => pickMaleVoice();
    window.speechSynthesis?.getVoices();
    window.speechSynthesis?.addEventListener("voiceschanged", load);
    return () => window.speechSynthesis?.removeEventListener("voiceschanged", load);
  }, []);

  useEffect(() => {
    if (!allowed) {
      window.speechSynthesis?.cancel();
      setAction("still");
      setLine("Actions are off. Allow them to let REVNCIA AI move, speak, and greet you.");
      return;
    }
    setAction("idle");
    const intro = window.setTimeout(() => {
      speak(
        "Welcome to REVNCIA. I am your AI attendant. You allowed my actions. I can move and speak.",
        "wave",
      );
    }, 400);
    const cycle = window.setInterval(() => {
      if (speaking.current) return;
      const scripts = [
        { t: "I can walk you to Voice, WhatsApp, CRM, and the AI Gateway.", a: "nod" as const },
        { t: "The assistant at lower right can remember your name.", a: "wave" as const },
        { t: "Drag me if you wish. I stay on this page until you turn actions off.", a: "nod" as const },
      ];
      const pick = scripts[Math.floor(Math.random() * scripts.length)];
      speak(pick.t, pick.a);
    }, 24000);
    return () => {
      window.clearTimeout(intro);
      window.clearInterval(cycle);
    };
  }, [allowed, speak]);

  function onPointerDown(e: PointerEvent) {
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
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

  const live = allowed && action !== "still";

  return (
    <div className="relative">
      <div
        className={`robot-stage relative select-none ${live ? action : "still"}`}
        style={{ transform: `translate(${offset.x}px, ${offset.y}px)` }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        <div className="robot-figure relative mx-auto aspect-[3/4] w-full max-w-[280px] cursor-grab active:cursor-grabbing">
          <Image
            src="/images/revncia-mascot.jpg"
            alt="REVNCIA AI robot attendant"
            fill
            priority
            className="object-contain object-bottom"
            sizes="280px"
          />
        </div>
        <p className="mt-3 px-2 text-center text-xs leading-relaxed text-cyan-100/85">
          {line}
        </p>
        <p className="mt-1 text-center text-[0.65rem] uppercase tracking-widest text-slate-500">
          Drag to move · Actions {allowed ? "on" : "off"}
        </p>
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
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
            speak("REVNCIA Voice and WhatsApp operations are ready to commission.", "wave")
          }
        >
          Speak
        </button>
        <button
          type="button"
          disabled={!allowed}
          className="border border-cyan-400/40 px-3 py-1.5 text-[0.68rem] tracking-[0.14em] uppercase text-cyan-200 disabled:opacity-30"
          onClick={() => {
            setAction("wave");
            window.setTimeout(() => setAction("idle"), 1400);
          }}
        >
          Wave
        </button>
        <button
          type="button"
          disabled={!allowed}
          className="border border-cyan-400/40 px-3 py-1.5 text-[0.68rem] tracking-[0.14em] uppercase text-cyan-200 disabled:opacity-30"
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

"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { JarvisHud } from "@/components/JarvisHud";
import { btnChip, btnPrimary } from "@/lib/ui";
import { buildLocalMotion } from "@/lib/robotMotion";

const LINES = {
  idle: "Actions are off.",
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

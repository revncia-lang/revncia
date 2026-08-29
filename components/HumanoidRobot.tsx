"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { btnChip, btnPrimary } from "@/lib/ui";
import { buildLocalMotion } from "@/lib/robotMotion";

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
    "Actions are off. Allow them so this attendant can speak. The figure stays still.",
  );
  const playing = useRef(false);
  const actDelay = useRef(0);

  const restTalk = useCallback(() => {
    playing.current = false;
    window.clearTimeout(actDelay.current);
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
      window.speechSynthesis?.cancel();

      const local = buildLocalMotion(text, next);
      setLine(local.text);

      const speak = () => {
        if (!window.speechSynthesis) return;
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
        window.speechSynthesis.speak(u);
      };

      window.clearTimeout(actDelay.current);
      actDelay.current = window.setTimeout(speak, 720);

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
      window.clearTimeout(actDelay.current);
      restTalk();
      setLine(
        "Actions are off. Allow them so this attendant can speak. The figure stays still.",
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
  }, [allowed, playMotion, restTalk]);

  return (
    <div className="relative">
      <div className="robot-stage relative select-none">
        <div
          className={`robot-figure relative mx-auto w-full max-w-[min(100%,22rem)] aspect-[904/1024] sm:max-w-[26rem] md:max-w-[32rem] lg:max-w-[34rem] ${
            allowed ? "" : "still"
          }`}
        >
          <Image
            src="/images/revncia-mascot.png"
            alt="REVNCIA AI attendant"
            fill
            priority
            unoptimized
            className="object-contain object-top"
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
          onClick={() =>
            void playMotion(
              "REVNCIA Voice and WhatsApp operations are ready to commission.",
            )
          }
        >
          Speak
        </button>
        <button
          type="button"
          disabled={!allowed}
          className={btnChip}
          onClick={() => void playMotion("Waving hello from REVNCIA AI.")}
        >
          Wave
        </button>
        <button
          type="button"
          disabled={!allowed}
          className={btnChip}
          onClick={() => void playMotion("Acknowledged. I am listening.")}
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

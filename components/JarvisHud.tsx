"use client";

import { useEffect, useRef } from "react";

export function JarvisHud() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let raf = 0;
    let t = 0;

    const resize = () => {
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      canvas.width = Math.floor(canvas.clientWidth * dpr);
      canvas.height = Math.floor(canvas.clientHeight * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    const draw = () => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      t += 0.012;
      ctx.clearRect(0, 0, w, h);

      const cx = w * 0.72;
      const cy = h * 0.48;
      const maxR = Math.min(w, h) * 0.42;

      ctx.strokeStyle = "rgba(34, 211, 238, 0.07)";
      ctx.lineWidth = 1;
      const step = 28;
      for (let x = 0; x < w; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = 0; y < h; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      const rings = [0.28, 0.46, 0.64, 0.82, 1];
      rings.forEach((f, i) => {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(56, 189, 248, ${0.18 + i * 0.04})`;
        ctx.lineWidth = i === 2 ? 1.8 : 1;
        ctx.arc(cx, cy, maxR * f, 0, Math.PI * 2);
        ctx.stroke();
      });

      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(t);
      ctx.beginPath();
      ctx.strokeStyle = "rgba(103, 232, 249, 0.55)";
      ctx.lineWidth = 2;
      ctx.arc(0, 0, maxR * 0.82, 0.15, 1.05);
      ctx.stroke();
      ctx.beginPath();
      ctx.strokeStyle = "rgba(34, 211, 238, 0.35)";
      ctx.arc(0, 0, maxR * 0.64, 3.2, 4.4);
      ctx.stroke();
      ctx.restore();

      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(-t * 0.65);
      for (let i = 0; i < 36; i++) {
        const a = (i / 36) * Math.PI * 2;
        const inner = maxR * (i % 3 === 0 ? 0.88 : 0.93);
        ctx.beginPath();
        ctx.strokeStyle = "rgba(125, 211, 252, 0.45)";
        ctx.moveTo(Math.cos(a) * inner, Math.sin(a) * inner);
        ctx.lineTo(Math.cos(a) * maxR, Math.sin(a) * maxR);
        ctx.stroke();
      }
      ctx.restore();

      ctx.strokeStyle = "rgba(165, 243, 252, 0.35)";
      ctx.beginPath();
      ctx.moveTo(cx - maxR * 0.18, cy);
      ctx.lineTo(cx + maxR * 0.18, cy);
      ctx.moveTo(cx, cy - maxR * 0.18);
      ctx.lineTo(cx, cy + maxR * 0.18);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(cx, cy, 6, 0, Math.PI * 2);
      ctx.stroke();

      const sweep = (Math.sin(t * 1.4) + 1) / 2;
      ctx.fillStyle = "rgba(34, 211, 238, 0.06)";
      ctx.fillRect(0, h * sweep - 18, w, 36);

      ctx.font = "11px ui-monospace, SFMono-Regular, Menlo, monospace";
      ctx.fillStyle = "rgba(165, 243, 252, 0.7)";
      const lines = [
        "REVNCIA CORE  ·  ONLINE",
        "GATEWAY ROUTING  ·  STABLE",
        "VOICE / WHATSAPP  ·  READY",
        "GUARDRAILS  ·  ACTIVE",
      ];
      lines.forEach((line, i) => {
        ctx.fillText(line, 28, 36 + i * 18);
      });
      ctx.fillStyle = "rgba(103, 232, 249, 0.55)";
      ctx.fillText("COMMAND HUD  ·  SYSTEMS NOMINAL", 28, h - 28);

      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="jarvis-hud pointer-events-none absolute inset-0" aria-hidden>
      <canvas ref={ref} className="absolute inset-0 h-full w-full" />
      <div className="jarvis-vignette absolute inset-0" />
    </div>
  );
}

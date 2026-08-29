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
    const origin = performance.now();

    const resize = () => {
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      canvas.width = Math.floor(canvas.clientWidth * dpr);
      canvas.height = Math.floor(canvas.clientHeight * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    const draw = (now: number) => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      const elapsed = (now - origin) / 1000;
      const t = elapsed * 0.12;

      ctx.clearRect(0, 0, w, h);

      const cx = w * 0.72;
      const cy = h * 0.48;
      const maxR = Math.min(w, h) * 0.4;

      ctx.strokeStyle = "rgba(148, 163, 184, 0.045)";
      ctx.lineWidth = 1;
      const step = 48;
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

      const rings = [0.32, 0.52, 0.72, 0.92];
      rings.forEach((f, i) => {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(125, 211, 252, ${0.08 + i * 0.025})`;
        ctx.lineWidth = i === 2 ? 1.15 : 0.7;
        ctx.setLineDash(i === 1 ? [3, 10] : []);
        ctx.arc(cx, cy, maxR * f, 0, Math.PI * 2);
        ctx.stroke();
        ctx.setLineDash([]);
      });

      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(t);
      ctx.beginPath();
      ctx.strokeStyle = "rgba(186, 230, 253, 0.28)";
      ctx.lineWidth = 1.2;
      ctx.arc(0, 0, maxR * 0.72, 0.05, 0.72);
      ctx.stroke();
      ctx.restore();

      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(-t * 0.45);
      ctx.beginPath();
      ctx.strokeStyle = "rgba(34, 211, 238, 0.16)";
      ctx.lineWidth = 0.9;
      ctx.arc(0, 0, maxR * 0.52, 2.4, 3.35);
      ctx.stroke();
      ctx.restore();

      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(t * 0.22);
      for (let i = 0; i < 24; i++) {
        const a = (i / 24) * Math.PI * 2;
        const major = i % 6 === 0;
        const inner = maxR * (major ? 0.9 : 0.945);
        ctx.beginPath();
        ctx.strokeStyle = major
          ? "rgba(186, 230, 253, 0.28)"
          : "rgba(125, 211, 252, 0.14)";
        ctx.lineWidth = major ? 1.1 : 0.6;
        ctx.moveTo(Math.cos(a) * inner, Math.sin(a) * inner);
        ctx.lineTo(Math.cos(a) * maxR * 0.98, Math.sin(a) * maxR * 0.98);
        ctx.stroke();
      }
      ctx.restore();

      ctx.strokeStyle = "rgba(203, 213, 225, 0.22)";
      ctx.lineWidth = 0.8;
      ctx.beginPath();
      ctx.moveTo(cx - maxR * 0.1, cy);
      ctx.lineTo(cx + maxR * 0.1, cy);
      ctx.moveTo(cx, cy - maxR * 0.1);
      ctx.lineTo(cx, cy + maxR * 0.1);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(cx, cy, 3.5, 0, Math.PI * 2);
      ctx.stroke();

      const sweep = ((elapsed * 0.035) % 1 + 1) % 1;
      ctx.fillStyle = "rgba(56, 189, 248, 0.035)";
      ctx.fillRect(0, h * sweep - 10, w, 20);

      ctx.font = "10px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace";
      ctx.fillStyle = "rgba(148, 163, 184, 0.55)";
      const lines = [
        "REVNCIA  ·  OPERATIONS",
        "GATEWAY  ·  NOMINAL",
        "CHANNELS  ·  STANDBY",
        "OVERSIGHT  ·  ENGAGED",
      ];
      lines.forEach((line, i) => {
        ctx.fillText(line, 28, 32 + i * 16);
      });
      ctx.fillStyle = "rgba(148, 163, 184, 0.4)";
      ctx.fillText("COMMAND SURFACE  ·  READ ONLY", 28, h - 24);

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

"use client";

import { useEffect, useRef } from "react";

export function AiBackdrop() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let raf = 0;
    const nodes = Array.from({ length: 48 }, () => ({
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - 0.5) * 0.00035,
      vy: (Math.random() - 0.5) * 0.00035,
    }));

    const draw = () => {
      const { width, height } = canvas;
      ctx.fillStyle = "rgba(4, 8, 16, 0.35)";
      ctx.fillRect(0, 0, width, height);
      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > 1) n.vx *= -1;
        if (n.y < 0 || n.y > 1) n.vy *= -1;
      });
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const d = Math.hypot(dx, dy);
          if (d < 0.16) {
            ctx.strokeStyle = `rgba(56, 189, 248, ${0.12 - d})`;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x * width, nodes[i].y * height);
            ctx.lineTo(nodes[j].x * width, nodes[j].y * height);
            ctx.stroke();
          }
        }
        ctx.fillStyle = "rgba(125, 211, 252, 0.7)";
        ctx.beginPath();
        ctx.arc(nodes[i].x * width, nodes[i].y * height, 1.4, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);
    raf = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      className="pointer-events-none fixed inset-0 z-0 h-full w-full"
      aria-hidden="true"
    />
  );
}

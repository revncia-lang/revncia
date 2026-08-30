import { hash32, palette, rnd } from "@/lib/hash";

export function UniqueChart({ id, caption }: { id: string; caption: string }) {
  const seed = hash32(`chart-${id}`);
  const p = palette(seed ^ 0x9e3779b9);
  const r = rnd(seed);
  const kind = seed % 8;
  const series = Array.from({ length: 8 }, () => 20 + r() * 70);

  return (
    <figure className="min-w-0 w-full overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] p-4">
      <figcaption className="text-pretty text-[0.65rem] leading-relaxed tracking-[0.14em] uppercase text-slate-400">
        {caption}
      </figcaption>
      <svg viewBox="0 0 320 140" className="mt-3 aspect-[16/7] h-auto w-full" role="img" aria-label={caption} preserveAspectRatio="xMidYMid meet">
        {kind === 0 &&
          series.map((v, i) => (
            <rect
              key={i}
              x={20 + i * 36}
              y={120 - v}
              width="22"
              height={v}
              fill={i % 2 ? p.a : p.b}
            />
          ))}
        {kind === 1 && (
          <polyline
            fill="none"
            stroke={p.a}
            strokeWidth="2"
            points={series
              .map((v, i) => `${20 + i * 40},${120 - v}`)
              .join(" ")}
          />
        )}
        {kind === 2 && (
          <polygon
            fill={p.a}
            fillOpacity="0.25"
            stroke={p.a}
            points={`20,120 ${series
              .map((v, i) => `${20 + i * 40},${120 - v}`)
              .join(" ")} 300,120`}
          />
        )}
        {kind === 3 &&
          series.map((v, i) => (
            <circle
              key={i}
              cx={24 + i * 38}
              cy={120 - v}
              r="5"
              fill={p.b}
            />
          ))}
        {kind === 4 && (
          <g transform="translate(160,70)">
            {series.slice(0, 6).map((v, i) => {
              const a = (Math.PI * 2 * i) / 6;
              return (
                <line
                  key={i}
                  x1="0"
                  y1="0"
                  x2={(Math.cos(a) * v * 0.7).toFixed(2)}
                  y2={(Math.sin(a) * v * 0.55).toFixed(2)}
                  stroke={p.a}
                  strokeWidth="2"
                />
              );
            })}
          </g>
        )}
        {kind === 5 &&
          series.slice(0, 5).map((v, i) => (
            <polygon
              key={i}
              points={`${40 + i * 20},20 ${280 - i * 20},20 ${260 - i * 16},${40 + i * 22} ${60 + i * 16},${40 + i * 22}`}
              fill="none"
              stroke={p.c}
              strokeWidth="1.3"
            />
          ))}
        {kind === 6 && (
          <path
            d={`M10 70 ${series
              .map((v, i) => `L${20 + i * 38} ${70 - (v - 45)}`)
              .join(" ")}`}
            fill="none"
            stroke={p.b}
            strokeWidth="2"
          />
        )}
        {kind === 7 &&
          Array.from({ length: 5 }, (_, row) =>
            Array.from({ length: 8 }, (_, col) => (
              <rect
                key={`${row}-${col}`}
                x={20 + col * 36}
                y={18 + row * 22}
                width="30"
                height="16"
                fill={p.a}
                opacity={0.2 + ((seed >> (row * 8 + col)) % 70) / 100}
              />
            )),
          )}
      </svg>
    </figure>
  );
}

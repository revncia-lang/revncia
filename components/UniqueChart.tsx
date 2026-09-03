import { hash32, palette, rnd } from "@/lib/hash";
import { axisLabels } from "@/lib/visuals";

export function UniqueChart({
  id,
  caption,
  compact = false,
  embedded = false,
}: {
  id: string;
  caption: string;
  compact?: boolean;
  embedded?: boolean;
}) {
  const seed = hash32(`chart-${id}`);
  const p = palette(seed ^ 0x9e3779b9);
  const r = rnd(seed);
  const kind = seed % 16;
  const n = compact ? 6 : 8;
  const series = Array.from({ length: n }, () => 28 + r() * 64);
  const labels = axisLabels(seed);
  const h = compact ? 112 : 148;
  const padL = 36;
  const padR = 12;
  const padT = 10;
  const padB = 26;
  const plotW = 320 - padL - padR;
  const plotH = h - padT - padB;
  const max = Math.max(...series, 1);

  const xAt = (i: number, count = series.length) =>
    padL + (count <= 1 ? plotW / 2 : (i * plotW) / (count - 1));
  const yAt = (v: number) => padT + plotH - (v / max) * plotH;

  return (
    <figure
      className={
        embedded
          ? "min-w-0 w-full overflow-hidden bg-[#05080a] px-4 pb-3 pt-2"
          : "min-w-0 w-full overflow-hidden rounded-xl border border-[rgba(255,255,255,0.12)] bg-[#05080a] p-4 shadow-[0_10px_28px_rgba(90,46,36,0.05)]"
      }
    >
      <figcaption className="text-pretty text-[0.68rem] font-semibold leading-snug tracking-[0.08em] uppercase text-stone-600">
        {caption}
      </figcaption>
      <svg
        viewBox={`0 0 320 ${h}`}
        className={`mt-3 h-auto w-full ${compact ? "aspect-[16/6]" : "aspect-[16/7.4]"}`}
        role="img"
        aria-label={caption}
        preserveAspectRatio="xMidYMid meet"
      >
        {[0, 1, 2, 3].map((g) => {
          const y = padT + (g * plotH) / 3;
          return (
            <line
              key={g}
              x1={padL}
              y1={y}
              x2={320 - padR}
              y2={y}
              stroke="rgba(255,255,255,0.12)"
              strokeWidth="1"
            />
          );
        })}
        <line x1={padL} y1={padT} x2={padL} y2={h - padB} stroke="rgba(255,255,255,0.12)" />
        <line
          x1={padL}
          y1={h - padB}
          x2={320 - padR}
          y2={h - padB}
          stroke="rgba(255,255,255,0.12)"
        />

        {kind === 0 &&
          series.map((v, i) => (
            <rect
              key={i}
              x={padL + 6 + i * (plotW / series.length)}
              y={yAt(v)}
              width={Math.max(10, plotW / series.length - 10)}
              height={h - padB - yAt(v)}
              rx="2"
              fill={i % 2 ? p.a : p.b}
            />
          ))}

        {kind === 1 && (
          <>
            <polyline
              fill="none"
              stroke={p.a}
              strokeWidth="2.2"
              strokeLinejoin="round"
              points={series.map((v, i) => `${xAt(i)},${yAt(v)}`).join(" ")}
            />
            {series.map((v, i) => (
              <circle key={i} cx={xAt(i)} cy={yAt(v)} r="3.2" fill={p.b} />
            ))}
          </>
        )}

        {kind === 2 && (
          <polygon
            fill={p.a}
            fillOpacity="0.18"
            stroke={p.a}
            strokeWidth="2"
            points={`${padL},${h - padB} ${series
              .map((v, i) => `${xAt(i)},${yAt(v)}`)
              .join(" ")} ${320 - padR},${h - padB}`}
          />
        )}

        {kind === 3 &&
          series.map((v, i) => (
            <g key={i}>
              <line
                x1={xAt(i)}
                y1={h - padB}
                x2={xAt(i)}
                y2={yAt(v)}
                stroke={p.c}
                strokeWidth="1.4"
              />
              <circle cx={xAt(i)} cy={yAt(v)} r="4.5" fill={p.a} />
            </g>
          ))}

        {kind === 4 && (
          <g transform={`translate(168,${padT + plotH / 2})`}>
            {series.slice(0, 6).map((v, i) => {
              const a = (Math.PI * 2 * i) / 6 - Math.PI / 2;
              const len = (v / max) * 48;
              return (
                <g key={i}>
                  <line
                    x1="0"
                    y1="0"
                    x2={Math.cos(a) * 50}
                    y2={Math.sin(a) * 42}
                    stroke="rgba(255,255,255,0.12)"
                  />
                  <line
                    x1="0"
                    y1="0"
                    x2={Math.cos(a) * len}
                    y2={Math.sin(a) * len * 0.84}
                    stroke={p.a}
                    strokeWidth="2.2"
                  />
                </g>
              );
            })}
          </g>
        )}

        {kind === 5 &&
          series.slice(0, 5).map((v, i) => {
            const t = v / max;
            const inset = i * 14;
            return (
              <rect
                key={i}
                x={padL + 20 + inset}
                y={padT + 8 + i * (plotH / 6)}
                width={(plotW - 40 - inset * 2) * (0.45 + t * 0.5)}
                height="14"
                rx="2"
                fill={p.a}
                opacity={0.95 - i * 0.12}
              />
            );
          })}

        {kind === 6 && (
          <path
            d={`M${padL} ${yAt(series[0])} ${series
              .map((v, i) => `L${xAt(i)} ${yAt(v)}`)
              .join(" ")}`}
            fill="none"
            stroke={p.b}
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
        )}

        {kind === 7 &&
          Array.from({ length: 4 }, (_, row) =>
            Array.from({ length: series.length }, (_, col) => (
              <rect
                key={`${row}-${col}`}
                x={padL + 4 + col * (plotW / series.length)}
                y={padT + 6 + row * ((plotH - 8) / 4)}
                width={plotW / series.length - 6}
                height={(plotH - 8) / 4 - 4}
                rx="1.5"
                fill={p.a}
                opacity={0.18 + ((seed >> (row * 6 + col)) % 70) / 110}
              />
            )),
          )}

        {kind === 8 && (
          <g>
            {series.slice(0, 4).map((v, i) => {
              const w = 22;
              const x = padL + 18 + i * 68;
              return (
                <g key={i}>
                  <rect
                    x={x}
                    y={yAt(v)}
                    width={w}
                    height={h - padB - yAt(v)}
                    rx="2"
                    fill={p.a}
                  />
                  <rect
                    x={x + w + 5}
                    y={yAt(v * 0.72)}
                    width={w}
                    height={h - padB - yAt(v * 0.72)}
                    rx="2"
                    fill={p.b}
                    opacity="0.85"
                  />
                </g>
              );
            })}
          </g>
        )}

        {kind === 9 && (
          <g transform={`translate(168,${padT + plotH / 2 + 4})`}>
            {(() => {
              const parts = series.slice(0, 4);
              const tot = parts.reduce((a, b) => a + b, 0);
              let ang = -Math.PI / 2;
              return parts.map((v, i) => {
                const sweep = (v / tot) * Math.PI * 2;
                const x1 = Math.cos(ang) * 46;
                const y1 = Math.sin(ang) * 46;
                ang += sweep;
                const x2 = Math.cos(ang) * 46;
                const y2 = Math.sin(ang) * 46;
                const large = sweep > Math.PI ? 1 : 0;
                return (
                  <path
                    key={i}
                    d={`M0 0 L${x1} ${y1} A46 46 0 ${large} 1 ${x2} ${y2} Z`}
                    fill={i % 2 ? p.a : p.b}
                    opacity={0.92 - i * 0.08}
                  />
                );
              });
            })()}
            <circle r="20" fill="#05080a" />
          </g>
        )}

        {kind === 10 &&
          series.map((v, i) => (
            <rect
              key={i}
              x={padL}
              y={padT + 6 + i * (plotH / series.length)}
              width={(v / max) * (plotW - 8)}
              height={Math.max(7, plotH / series.length - 6)}
              rx="2"
              fill={i % 2 ? p.a : p.c}
            />
          ))}

        {kind === 11 && (
          <polyline
            fill="none"
            stroke={p.a}
            strokeWidth="2.2"
            strokeLinejoin="round"
            points={series
              .map((v, i) => `${xAt(i)},${yAt(i % 2 ? v * 0.7 : v)}`)
              .join(" ")}
          />
        )}

        {kind === 12 &&
          series.slice(0, 5).map((v, i) => {
            const x = padL + 24 + i * ((plotW - 20) / 4);
            return (
              <g key={i}>
                <rect
                  x={x}
                  y={padT + 8}
                  width="18"
                  height={plotH - 10}
                  rx="2"
                  fill="#0a0f12"
                />
                <rect
                  x={x}
                  y={yAt(v)}
                  width="18"
                  height={h - padB - yAt(v)}
                  rx="2"
                  fill={p.a}
                />
              </g>
            );
          })}

        {kind === 13 && (
          <>
            <path
              d={`M${padL} ${h - padB} ${series
                .map((v, i) => `L${xAt(i)} ${yAt(v)}`)
                .join(" ")} L${320 - padR} ${h - padB}`}
              fill={p.b}
              fillOpacity="0.14"
            />
            <polyline
              fill="none"
              stroke={p.b}
              strokeWidth="2"
              points={series.map((v, i) => `${xAt(i)},${yAt(v)}`).join(" ")}
            />
          </>
        )}

        {kind === 14 &&
          series.slice(0, 6).map((v, i) => {
            const x = padL + 16 + i * ((plotW - 12) / 6);
            const y = yAt(v);
            return (
              <g key={i}>
                <circle cx={x + 10} cy={y} r="5" fill={p.a} />
                <line
                  x1={x + 10}
                  y1={y}
                  x2={x + 10}
                  y2={h - padB}
                  stroke={p.c}
                  strokeWidth="1.2"
                />
              </g>
            );
          })}

        {kind === 15 && (
          <g>
            {series.slice(0, 4).map((v, i) => (
              <rect
                key={`s-${i}`}
                x={padL + 8 + i * 18}
                y={yAt(v)}
                width="14"
                height={h - padB - yAt(v)}
                fill={p.a}
                opacity={0.35 + i * 0.12}
              />
            ))}
            <polyline
              fill="none"
              stroke={p.b}
              strokeWidth="2.2"
              points={series.map((v, i) => `${xAt(i)},${yAt(v * 0.88)}`).join(" ")}
            />
          </g>
        )}

        {labels.map((lab, i) => (
          <text
            key={lab}
            x={padL + (i * plotW) / Math.max(labels.length - 1, 1)}
            y={h - 8}
            textAnchor="middle"
            fill="rgba(255,255,255,0.38)"
            fontSize="8"
            fontFamily="ui-sans-serif, system-ui"
          >
            {lab}
          </text>
        ))}
      </svg>
    </figure>
  );
}

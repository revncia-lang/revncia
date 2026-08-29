const outcomeBars = [
  { label: "Inquiry cycle time", value: 58, caption: "reduction target" },
  { label: "First-contact resolution", value: 72, caption: "assisted channel" },
  { label: "Document throughput", value: 81, caption: "straight-through" },
  { label: "Exception rate", value: 34, caption: "after human review" },
];

const channels = [
  { label: "Voice", share: 32, color: "#b0894d" },
  { label: "Digital chat", share: 28, color: "#3d5348" },
  { label: "Email / web", share: 24, color: "#1c2a38" },
  { label: "Counter / lobby", share: 16, color: "#8a7960" },
];

const maturity = [18, 24, 31, 38, 47, 55, 62, 68, 74, 79, 84, 88];

export function ProgramCharts() {
  const max = 88;
  const w = 320;
  const h = 140;
  const pad = 8;
  const points = maturity
    .map((v, i) => {
      const x = pad + (i * (w - pad * 2)) / (maturity.length - 1);
      const y = h - pad - (v / 100) * (h - pad * 2);
      return `${x},${y}`;
    })
    .join(" ");

  let acc = 0;
  const donutStops = channels
    .map((c) => {
      const start = acc;
      acc += c.share;
      return `${c.color} ${start}% ${acc}%`;
    })
    .join(", ");

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <figure className="border border-[color:var(--line)] bg-white p-5">
        <figcaption className="text-[0.7rem] tracking-[0.16em] uppercase text-[color:var(--copper)]">
          Example outcome profile
        </figcaption>
        <p className="mt-2 font-serif text-xl">Programme measures</p>
        <ul className="mt-5 space-y-4">
          {outcomeBars.map((bar) => (
            <li key={bar.label}>
              <div className="flex justify-between text-xs text-[color:var(--muted)]">
                <span>{bar.label}</span>
                <span>
                  {bar.value}% {bar.caption}
                </span>
              </div>
              <div className="mt-1.5 h-2 bg-[color:var(--paper)]">
                <div
                  className="h-2 bg-[color:var(--ink)]"
                  style={{ width: `${bar.value}%` }}
                />
              </div>
            </li>
          ))}
        </ul>
      </figure>

      <figure className="border border-[color:var(--line)] bg-white p-5">
        <figcaption className="text-[0.7rem] tracking-[0.16em] uppercase text-[color:var(--copper)]">
          Service mix
        </figcaption>
        <p className="mt-2 font-serif text-xl">Typical channel load</p>
        <div className="mt-6 flex items-center gap-6">
          <div
            className="h-28 w-28 shrink-0 rounded-full"
            style={{
              background: `conic-gradient(${donutStops})`,
              mask: "radial-gradient(circle, transparent 46%, black 47%)",
              WebkitMask: "radial-gradient(circle, transparent 46%, black 47%)",
            }}
            aria-hidden="true"
          />
          <ul className="space-y-2 text-sm">
            {channels.map((c) => (
              <li key={c.label} className="flex items-center gap-2">
                <span
                  className="inline-block h-2 w-2"
                  style={{ background: c.color }}
                />
                <span className="text-[color:var(--muted)]">
                  {c.label} · {c.share}%
                </span>
              </li>
            ))}
          </ul>
        </div>
      </figure>

      <figure className="border border-[color:var(--line)] bg-white p-5">
        <figcaption className="text-[0.7rem] tracking-[0.16em] uppercase text-[color:var(--copper)]">
          Twelve-month build
        </figcaption>
        <p className="mt-2 font-serif text-xl">Capability maturity</p>
        <svg
          viewBox={`0 0 ${w} ${h}`}
          className="mt-4 w-full"
          role="img"
          aria-label="Line chart of capability maturity rising across twelve months"
        >
          <polyline
            fill="none"
            stroke="#101820"
            strokeWidth="2"
            points={points}
          />
          {maturity.map((v, i) => {
            const x = pad + (i * (w - pad * 2)) / (maturity.length - 1);
            const y = h - pad - (v / 100) * (h - pad * 2);
            return <circle key={i} cx={x} cy={y} r="3" fill="#b0894d" />;
          })}
          <text x={pad} y={h - 2} fill="#5c6570" fontSize="10">
            M1
          </text>
          <text x={w - 28} y={h - 2} fill="#5c6570" fontSize="10">
            M12
          </text>
          <text x={w - 36} y={12} fill="#5c6570" fontSize="10">
            {max}%
          </text>
        </svg>
        <p className="mt-2 text-xs text-[color:var(--muted)]">
          Indicative path from discovery to governed production — not a client
          guarantee.
        </p>
      </figure>
    </div>
  );
}

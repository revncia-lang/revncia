const CX = 200;
const CY = 184;

/** Same digits on the server and in the browser — avoids hydration mismatches. */
function coord(n: number) {
  return n.toFixed(1);
}

function polar(r: number, deg: number) {
  const a = ((deg - 90) * Math.PI) / 180;
  return {
    x: coord(CX + Math.cos(a) * r),
    y: coord(CY + Math.sin(a) * r),
  };
}

function ticks(count: number, inner: number, outer: number, majorEvery: number) {
  return Array.from({ length: count }, (_, i) => {
    const deg = (i / count) * 360;
    const major = i % majorEvery === 0;
    const a = polar(major ? inner - 5 : inner, deg);
    const b = polar(outer, deg);
    return { i, major, x1: a.x, y1: a.y, x2: b.x, y2: b.y };
  });
}

function octagon(r: number) {
  return Array.from({ length: 8 }, (_, i) => {
    const p = polar(r, i * 45 + 22.5);
    return `${p.x},${p.y}`;
  }).join(" ");
}

const outerTicks = ticks(48, 168, 182, 6);
const innerTicks = ticks(24, 108, 116, 4);

export function JarvisHud() {
  return (
    <div className="jarvis-hud pointer-events-none absolute inset-0 z-0" aria-hidden>
      <div className="jarvis-os">
        <div className="jarvis-os-scan" />
        <div className="jarvis-os-sheen" />
        <svg
          className="jarvis-os-svg"
          viewBox="0 0 400 460"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id="jarvis-core-glow" cx="50%" cy="42%" r="48%">
              <stop offset="0%" stopColor="rgba(34,211,238,0)" />
              <stop offset="62%" stopColor="rgba(34,211,238,0.03)" />
              <stop offset="100%" stopColor="rgba(34,211,238,0)" />
            </radialGradient>
          </defs>

          <circle cx={CX} cy={CY} r="196" fill="url(#jarvis-core-glow)" />

          <g className="jarvis-os-grid">
            <circle cx={CX} cy={CY} r="72" />
            <circle cx={CX} cy={CY} r="128" />
            <line x1={CX} y1="8" x2={CX} y2="360" />
            <line x1="16" y1={CY} x2="384" y2={CY} />
          </g>

          <circle className="jarvis-ring jarvis-ring-soft" cx={CX} cy={CY} r="58" />
          <circle className="jarvis-ring jarvis-ring-soft" cx={CX} cy={CY} r="88" />
          <circle className="jarvis-ring jarvis-ring-mid" cx={CX} cy={CY} r="138" />
          <circle className="jarvis-ring jarvis-ring-outer" cx={CX} cy={CY} r="186" />

          <polygon className="jarvis-octagon" points={octagon(98)} />

          <g className="jarvis-spin-slow">
            <circle className="jarvis-ring-dash" cx={CX} cy={CY} r="118" />
            {outerTicks.map((t) => (
              <line
                key={`o-${t.i}`}
                className={t.major ? "jarvis-tick-major" : "jarvis-tick"}
                x1={t.x1}
                y1={t.y1}
                x2={t.x2}
                y2={t.y2}
              />
            ))}
            <path className="jarvis-arc jarvis-arc-a" d="M 246 78 A 138 138 0 0 1 334 198" />
          </g>

          <g className="jarvis-spin-reverse">
            <circle className="jarvis-ring-dash jarvis-ring-dash-fine" cx={CX} cy={CY} r="154" />
            {innerTicks.map((t) => (
              <line
                key={`i-${t.i}`}
                className={t.major ? "jarvis-tick-major" : "jarvis-tick"}
                x1={t.x1}
                y1={t.y1}
                x2={t.x2}
                y2={t.y2}
              />
            ))}
            <path className="jarvis-arc jarvis-arc-b" d="M 92 230 A 118 118 0 0 1 148 86" />
          </g>

          <g className="jarvis-spin-drift">
            <path className="jarvis-arc jarvis-arc-c" d="M 74 164 A 154 154 0 0 1 168 38" />
          </g>

          <g className="jarvis-brackets" strokeLinecap="square">
            <path d="M 28 48 H 62 V 48 M 28 48 V 78" />
            <path d="M 372 48 H 338 V 48 M 372 48 V 78" />
            <path d="M 28 348 H 62 M 28 348 V 318" />
            <path d="M 372 348 H 338 M 372 348 V 318" />
          </g>
        </svg>

        <div className="jarvis-os-chip jarvis-os-chip-sys">
          <span>SYS</span>
          <em>04 · NOMINAL</em>
        </div>
        <div className="jarvis-os-chip jarvis-os-chip-link">
          <span>LINK</span>
          <em>STANDBY</em>
        </div>
        <div className="jarvis-os-chip jarvis-os-chip-gate">
          <span>GATEWAY</span>
          <em>NODE A-7</em>
        </div>
        <div className="jarvis-os-chip jarvis-os-chip-ops">
          <span>OPS</span>
          <em>READ ONLY</em>
        </div>

        <ul className="jarvis-os-telemetry">
          <li>
            <span>LAT</span>
            <b>14ms</b>
          </li>
          <li>
            <span>PWR</span>
            <b>0.82</b>
          </li>
          <li>
            <span>SIG</span>
            <b>04</b>
          </li>
          <li>
            <span>CORE</span>
            <b>IDLE</b>
          </li>
        </ul>

        <p className="jarvis-os-mark">REVNCIA OS</p>
      </div>
      <div className="jarvis-vignette absolute inset-0" />
    </div>
  );
}

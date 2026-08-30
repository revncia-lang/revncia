import { hash32, palette, rnd } from "@/lib/hash";

function motif(id: string) {
  const s = id.toLowerCase();
  if (/voice|call/.test(s)) return "voice";
  if (/whatsapp|messag|chat|customer-op/.test(s)) return "chat";
  if (/crm|sales|retail|market/.test(s)) return "crm";
  if (/erp|finance|procure|hr/.test(s)) return "ledger";
  if (/document|knowledge|intel/.test(s)) return "docs";
  if (/govern|citizen|public|civic/.test(s)) return "civic";
  if (/health|educat/.test(s)) return "care";
  if (/cyber|governan|audit/.test(s)) return "shield";
  if (/cloud|data|integrat/.test(s)) return "cloud";
  if (/command|workforce|managed|platform|gateway/.test(s)) return "gate";
  return "net";
}

export function UniqueScene({
  id,
  title,
}: {
  id: string;
  title: string;
}) {
  const seed = hash32(id);
  const p = palette(seed);
  const r = rnd(seed);
  const kind = seed % 16;
  const mark = motif(id);
  const nodes = 7 + (seed % 6);
  const pts = Array.from({ length: nodes }, () => ({
    x: 28 + r() * 264,
    y: 22 + r() * 118,
    rad: 3 + r() * 7,
  }));

  return (
    <svg
      viewBox="0 0 320 190"
      className="block h-full w-full max-w-none"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label={title}
    >
      <defs>
        <linearGradient id={`${id}-g`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={p.dim} />
          <stop offset="100%" stopColor="#fff8f2" />
        </linearGradient>
        <radialGradient id={`${id}-r`} cx="78%" cy="18%" r="62%">
          <stop offset="0%" stopColor={p.a} stopOpacity="0.28" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>
      <rect width="320" height="190" fill={`url(#${id}-g)`} />
      <rect width="320" height="190" fill={`url(#${id}-r)`} />
      <rect x="12" y="12" width="296" height="166" rx="10" fill="#fffdf8" fillOpacity="0.62" />

      {kind === 0 &&
        pts.map((pt, i) => (
          <circle
            key={i}
            cx={pt.x}
            cy={pt.y}
            r={pt.rad}
            fill={i % 2 ? p.a : p.b}
            opacity="0.88"
          />
        ))}
      {kind === 1 &&
        pts.slice(0, -1).map((pt, i) => (
          <line
            key={i}
            x1={pt.x}
            y1={pt.y}
            x2={pts[i + 1].x}
            y2={pts[i + 1].y}
            stroke={p.a}
            strokeWidth="1.4"
          />
        ))}
      {kind === 2 && (
        <polygon
          points={pts.map((pt) => `${pt.x},${pt.y}`).join(" ")}
          fill={p.a}
          fillOpacity="0.12"
          stroke={p.b}
          strokeWidth="1.5"
        />
      )}
      {kind === 3 &&
        Array.from({ length: 6 }, (_, i) => (
          <rect
            key={i}
            x={28 + i * 44}
            y={42 + ((seed >> i) % 28)}
            width="28"
            height={96 - ((seed >> i) % 36)}
            rx="3"
            fill={i % 2 ? p.a : p.c}
            opacity="0.82"
          />
        ))}
      {kind === 4 &&
        [36, 58, 80].map((ry, i) => (
          <ellipse
            key={i}
            cx="160"
            cy="88"
            rx={48 + i * 26}
            ry={ry}
            fill="none"
            stroke={i % 2 ? p.a : p.b}
            strokeWidth="1.4"
          />
        ))}
      {kind === 5 && (
        <path
          d={`M24 132 ${pts.map((pt) => `L${pt.x} ${pt.y}`).join(" ")} L296 140`}
          fill="none"
          stroke={p.a}
          strokeWidth="2"
        />
      )}
      {kind === 6 &&
        pts.map((pt, i) => (
          <rect
            key={i}
            x={pt.x - 8}
            y={pt.y - 8}
            width="16"
            height="16"
            rx="3"
            fill={p.b}
            opacity="0.75"
          />
        ))}
      {kind === 7 &&
        Array.from({ length: 4 }, (_, i) => (
          <circle
            key={i}
            cx="160"
            cy="86"
            r={22 + i * 16}
            fill="none"
            stroke={p.c}
            strokeWidth="1.2"
          />
        ))}
      {kind === 8 &&
        pts.map((pt, i) => (
          <rect
            key={i}
            x={pt.x}
            y={pt.y}
            width="18"
            height="18"
            rx="2"
            fill="none"
            stroke={p.a}
            strokeWidth="1.3"
          />
        ))}
      {kind === 9 && (
        <>
          <path
            d={`M24 140 Q90 ${36 + (seed % 28)}, 160 88 T296 48`}
            fill="none"
            stroke={p.a}
            strokeWidth="2.1"
          />
          <path
            d={`M24 148 Q96 ${58 + (seed % 22)}, 168 104 T296 72`}
            fill="none"
            stroke={p.b}
            strokeWidth="1.5"
          />
        </>
      )}
      {kind === 10 &&
        pts.map((pt, i) => (
          <line
            key={i}
            x1="160"
            y1="86"
            x2={pt.x}
            y2={pt.y}
            stroke={p.b}
            strokeWidth="1"
          />
        ))}
      {kind === 11 &&
        Array.from({ length: 3 }, (_, row) =>
          Array.from({ length: 6 }, (_, col) => (
            <circle
              key={`${row}-${col}`}
              cx={40 + col * 46}
              cy={40 + row * 36}
              r={4 + ((seed >> (row + col)) % 5)}
              fill={(row + col) % 2 ? p.a : p.c}
              opacity="0.88"
            />
          )),
        )}
      {kind === 12 &&
        [0, 1, 2].map((col) => (
          <g key={col}>
            <rect
              x={28 + col * 94}
              y={32}
              width="84"
              height="108"
              rx="8"
              fill="#fffdf8"
              stroke={p.a}
              strokeOpacity="0.35"
            />
            <rect
              x={40 + col * 94}
              y={48}
              width="60"
              height="8"
              rx="2"
              fill={p.a}
              opacity="0.7"
            />
            <rect
              x={40 + col * 94}
              y={66}
              width={44 + (seed % 16)}
              height="6"
              rx="2"
              fill={p.b}
              opacity="0.45"
            />
            <rect
              x={40 + col * 94}
              y={82}
              width="52"
              height="6"
              rx="2"
              fill={p.c}
              opacity="0.35"
            />
          </g>
        ))}
      {kind === 13 &&
        Array.from({ length: 5 }, (_, i) => (
          <path
            key={i}
            d={`M${36 + i * 52} 138 V${48 + ((seed >> i) % 40)}`}
            stroke={p.a}
            strokeWidth="10"
            strokeLinecap="round"
            opacity={0.55 + (i % 3) * 0.12}
          />
        ))}
      {kind === 14 && (
        <>
          <rect x="36" y="36" width="248" height="100" rx="8" fill="#fffdf8" />
          <rect x="52" y="52" width="120" height="10" rx="2" fill={p.a} opacity="0.8" />
          <rect x="52" y="72" width="196" height="7" rx="2" fill={p.b} opacity="0.35" />
          <rect x="52" y="88" width="168" height="7" rx="2" fill={p.c} opacity="0.28" />
          <rect x="52" y="108" width="88" height="12" rx="3" fill={p.a} />
        </>
      )}
      {kind === 15 &&
        pts.slice(0, 8).map((pt, i) => (
          <circle
            key={i}
            cx={pt.x}
            cy={pt.y}
            r={pt.rad + 2}
            fill="none"
            stroke={p.a}
            strokeWidth="1.4"
          />
        ))}

      {mark === "voice" && (
        <g transform="translate(248,28)" fill="none" stroke={p.c} strokeWidth="1.6">
          <rect x="0" y="8" width="18" height="28" rx="9" />
          <path d="M-6 24 a15 15 0 0 0 30 0 M9 38 v8 h6 h-12" />
        </g>
      )}
      {mark === "chat" && (
        <g transform="translate(246,30)" fill={p.a} opacity="0.85">
          <rect x="0" y="0" width="36" height="24" rx="6" />
          <path d="M10 24 l4 8 l2 -8" fill={p.a} />
        </g>
      )}
      {mark === "docs" && (
        <g transform="translate(250,28)" fill="none" stroke={p.c} strokeWidth="1.5">
          <rect x="0" y="0" width="28" height="36" rx="3" />
          <path d="M6 10 h16 M6 16 h12 M6 22 h14" />
        </g>
      )}
      {mark === "shield" && (
        <path
          d="M262 28 l16 6 v12 c0 10 -8 16 -16 20 c-8 -4 -16 -10 -16 -20 V34 Z"
          fill={p.a}
          fillOpacity="0.2"
          stroke={p.c}
        />
      )}
      {mark === "gate" && (
        <g transform="translate(246,30)" fill="none" stroke={p.c} strokeWidth="1.5">
          <rect x="0" y="6" width="36" height="28" rx="4" />
          <path d="M8 20 h20 M18 12 v16" />
        </g>
      )}
      {mark === "civic" && (
        <g transform="translate(248,32)" fill={p.b} opacity="0.8">
          <rect x="8" y="10" width="20" height="22" />
          <path d="M4 12 L18 2 L32 12" />
        </g>
      )}
      {mark === "cloud" && (
        <path
          d="M250 48 c0 -10 10 -16 20 -14 c4 -10 22 -10 26 2 c10 0 16 10 10 18 h-50 c-8 0 -10 -4 -6 -6 z"
          fill={p.a}
          opacity="0.55"
        />
      )}
      {mark === "ledger" && (
        <g transform="translate(248,30)">
          <rect width="40" height="32" rx="4" fill="#fffdf8" stroke={p.c} />
          <path d="M8 10 h24 M8 16 h18 M8 22 h20" stroke={p.a} />
        </g>
      )}
      {mark === "care" && (
        <path
          d="M264 34 c6 -8 18 -2 14 10 c-4 10 -14 16 -14 16 s-10 -6 -14 -16 c-4 -12 8 -18 14 -10 z"
          fill={p.a}
          opacity="0.7"
        />
      )}
      {mark === "crm" && (
        <g transform="translate(250,32)" fill={p.a}>
          <circle cx="10" cy="8" r="6" />
          <circle cx="28" cy="10" r="5" opacity="0.7" />
          <path d="M0 26 q10 -10 20 0 q8 -8 18 2" fill="none" stroke={p.c} />
        </g>
      )}
      {mark === "net" && (
        <g transform="translate(252,34)" stroke={p.c} fill={p.a}>
          <circle cx="8" cy="8" r="3" />
          <circle cx="24" cy="6" r="3" />
          <circle cx="16" cy="22" r="3" />
          <path d="M8 8 L24 6 L16 22 Z" fill="none" />
        </g>
      )}

      <rect x="12" y="154" width="296" height="24" rx="0 0 10 10" fill="#fffdf8" fillOpacity="0.92" />
      <text
        x="22"
        y="170"
        fill="#2a221f"
        fontSize="10"
        fontFamily="ui-sans-serif, system-ui"
        fontWeight="600"
        letterSpacing="0.4"
      >
        {title}
      </text>
    </svg>
  );
}

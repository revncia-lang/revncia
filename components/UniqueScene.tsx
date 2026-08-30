import { hash32, palette, rnd } from "@/lib/hash";

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
  const kind = seed % 12;
  const nodes = 8 + (seed % 9);
  const pts = Array.from({ length: nodes }, (_, i) => ({
    x: 20 + r() * 280,
    y: 18 + r() * 150,
    rad: 3 + r() * 10,
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
          <stop offset="100%" stopColor="#fffaf5" />
        </linearGradient>
        <radialGradient id={`${id}-r`} cx="70%" cy="20%" r="70%">
          <stop offset="0%" stopColor={p.a} stopOpacity="0.45" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>
      <rect width="320" height="190" fill={`url(#${id}-g)`} />
      <rect width="320" height="190" fill={`url(#${id}-r)`} />
      {kind === 0 &&
        pts.map((pt, i) => (
          <circle
            key={i}
            cx={pt.x}
            cy={pt.y}
            r={pt.rad}
            fill={i % 2 ? p.a : p.b}
            opacity="0.85"
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
            strokeWidth="1.2"
          />
        ))}
      {kind === 2 && (
        <polygon
          points={pts.map((pt) => `${pt.x},${pt.y}`).join(" ")}
          fill="none"
          stroke={p.b}
          strokeWidth="1.4"
        />
      )}
      {kind === 3 &&
        Array.from({ length: 5 + (seed % 4) }, (_, i) => (
          <rect
            key={i}
            x={24 + i * 28}
            y={40 + ((seed >> i) % 40)}
            width="18"
            height={110 - ((seed >> i) % 50)}
            fill={i % 2 ? p.a : p.c}
            opacity="0.8"
          />
        ))}
      {kind === 4 &&
        [40, 70, 100, 130].map((ry, i) => (
          <ellipse
            key={i}
            cx="160"
            cy="95"
            rx={50 + i * 28}
            ry={18 + i * 8}
            fill="none"
            stroke={i % 2 ? p.a : p.b}
            strokeWidth="1.2"
            transform={`rotate(${(seed % 50) + i * 12} 160 95)`}
          />
        ))}
      {kind === 5 && (
        <path
          d={`M10 140 ${pts.map((pt) => `L${pt.x} ${pt.y}`).join(" ")} L310 150`}
          fill="none"
          stroke={p.a}
          strokeWidth="2"
        />
      )}
      {kind === 6 &&
        pts.map((pt, i) => (
          <polygon
            key={i}
            points={`${pt.x},${pt.y - pt.rad} ${pt.x + pt.rad},${pt.y + pt.rad * 0.6} ${pt.x - pt.rad},${pt.y + pt.rad * 0.6}`}
            fill={p.b}
            opacity="0.75"
          />
        ))}
      {kind === 7 &&
        Array.from({ length: 6 }, (_, i) => (
          <circle
            key={i}
            cx="160"
            cy="95"
            r={16 + i * 14}
            fill="none"
            stroke={p.c}
            strokeDasharray={`${4 + (seed % 8)} ${3 + i}`}
          />
        ))}
      {kind === 8 &&
        pts.map((pt, i) => (
          <rect
            key={i}
            x={pt.x}
            y={pt.y}
            width="22"
            height="22"
            fill="none"
            stroke={p.a}
            transform={`rotate(${(seed + i * 15) % 90} ${pt.x} ${pt.y})`}
          />
        ))}
      {kind === 9 && (
        <>
          <path
            d={`M20 160 Q80 ${30 + (seed % 40)}, 160 90 T300 40`}
            fill="none"
            stroke={p.a}
            strokeWidth="2"
          />
          <path
            d={`M20 150 Q90 ${50 + (seed % 30)}, 170 110 T300 70`}
            fill="none"
            stroke={p.b}
            strokeWidth="1.4"
          />
        </>
      )}
      {kind === 10 &&
        pts.map((pt, i) => (
          <line
            key={i}
            x1="160"
            y1="95"
            x2={pt.x}
            y2={pt.y}
            stroke={p.b}
            strokeWidth="0.8"
          />
        ))}
      {kind === 11 &&
        Array.from({ length: 4 }, (_, row) =>
          Array.from({ length: 7 }, (_, col) => (
            <circle
              key={`${row}-${col}`}
              cx={30 + col * 42}
              cy={35 + row * 38}
              r={3 + ((seed >> (row + col)) % 6)}
              fill={((row + col) % 2 ? p.a : p.c)}
              opacity="0.85"
            />
          )),
        )}
      <text x="16" y="178" fill={p.a} fontSize="9" letterSpacing="1.6">
        {id.toUpperCase()}
      </text>
    </svg>
  );
}

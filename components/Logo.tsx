export function Logo({ className = "", tone = "dark" }: { className?: string; tone?: "dark" | "light" }) {
  const text = tone === "light" ? "text-[#242424]" : "text-white";
  const mark = tone === "light" ? "#0078d4" : "#50e6ff";
  const markText = tone === "light" ? "#ffffff" : "#002436";

  return <span className={`inline-flex shrink-0 items-center gap-3 whitespace-nowrap ${className}`} aria-label="REVNCIA, AI, Digital Transformation and Public Impact Company">
    <span aria-hidden="true" className="relative flex h-10 w-10 shrink-0 items-center justify-center">
      <svg viewBox="0 0 40 40" className="h-10 w-10" role="presentation">
        <rect width="40" height="40" fill={mark} />
        <path d="M8 8h24M8 16h24M8 24h24M8 32h24M8 8v24M16 8v24M24 8v24M32 8v24" fill="none" stroke={markText} strokeOpacity=".16" strokeWidth=".7" />
        <circle cx="20" cy="20" r="11.5" fill="none" stroke={markText} strokeWidth="1.7" />
        <ellipse cx="20" cy="20" rx="5" ry="11.5" fill="none" stroke={markText} strokeOpacity=".7" strokeWidth="1" />
        <ellipse cx="20" cy="20" rx="9" ry="11.5" fill="none" stroke={markText} strokeOpacity=".7" strokeWidth="1" />
        <path d="M8.5 20h23M10.5 14.5h19M10.5 25.5h19" fill="none" stroke={markText} strokeOpacity=".7" strokeWidth="1" />
        <path d="M5 12l7 4M35 12l-7 4M5 28l7-4M35 28l-7-4" fill="none" stroke="#50e6ff" strokeWidth="1.4" />
        <circle cx="5" cy="12" r="2" fill="#50e6ff" />
        <circle cx="35" cy="12" r="2" fill="#50e6ff" />
        <circle cx="5" cy="28" r="2" fill="#50e6ff" />
        <circle cx="35" cy="28" r="2" fill="#50e6ff" />
        <circle cx="20" cy="20" r="2.5" fill="#50e6ff" />
      </svg>
    </span>
    <span aria-hidden="true"><span className={`logo-word block font-sans text-[1.08rem] font-bold tracking-[0.12em] leading-none ${text}`}>REVNCIA</span><span className={`logo-tag mt-1 block text-[.46rem] font-semibold uppercase tracking-[.16em] ${tone === "light" ? "text-[#616161]" : "text-white"}`}>AI · DIGITAL TRANSFORMATION · PUBLIC IMPACT</span></span>
  </span>;
}

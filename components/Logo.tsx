export function Logo({ className = "" }: { className?: string }) {
  return <span className={`inline-flex items-center gap-3 ${className}`}>
    <span className="relative flex h-8 w-8 items-center justify-center rounded-lg border border-white/25 bg-white/[.03] text-white">
      <span className="text-[13px] font-semibold tracking-[-.08em]">R</span>
      <span className="absolute -right-1 -top-1 h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(98,217,255,.9)]" />
    </span>
    <span><span className="block font-sans text-[1.05rem] font-semibold tracking-[0.1em] leading-none text-white">REVNCIA</span><span className="mt-1 block text-[.48rem] font-semibold uppercase tracking-[.22em] text-white/38">AI. AUTOMATION. INTELLIGENCE.</span></span>
  </span>;
}

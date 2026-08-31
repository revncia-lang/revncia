export function BetaLabel({
  tone = "on-apple",
}: {
  tone?: "on-apple" | "on-milk";
}) {
  return (
    <span
      className={
        tone === "on-milk"
          ? "inline-flex items-center rounded px-1.5 py-px text-[0.52rem] font-bold tracking-[0.14em] uppercase text-[#0071e3] ring-1 ring-[#0071e3]/30"
          : "inline-flex items-center rounded bg-white/25 px-1.5 py-px text-[0.52rem] font-bold tracking-[0.14em] uppercase text-white"
      }
    >
      Beta
    </span>
  );
}

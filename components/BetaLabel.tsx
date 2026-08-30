export function BetaLabel({
  tone = "on-apple",
}: {
  tone?: "on-apple" | "on-milk";
}) {
  return (
    <span
      className={
        tone === "on-milk"
          ? "inline-flex items-center rounded px-1.5 py-px text-[0.52rem] font-bold tracking-[0.14em] uppercase text-[#c41e3a] ring-1 ring-[#c41e3a]/30"
          : "inline-flex items-center rounded bg-white/25 px-1.5 py-px text-[0.52rem] font-bold tracking-[0.14em] uppercase text-white"
      }
    >
      Beta
    </span>
  );
}

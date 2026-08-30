/** Full page width with even gutters — header, footer, and every section share this. */
export const shell =
  "mx-auto w-full min-w-0 px-5 sm:px-8 lg:px-12 xl:px-16 2xl:px-20";

export const kicker =
  "heading-kicker text-[0.72rem] font-semibold tracking-[0.2em] uppercase text-[#b91c2c]";

export const display =
  "font-serif font-bold tracking-tight text-5xl leading-[1.08] md:text-6xl lg:text-[4.6rem]";

export const heading2 =
  "font-serif font-bold tracking-tight text-3xl leading-tight md:text-4xl";

export const heading3 =
  "font-serif font-semibold tracking-tight text-2xl leading-snug md:text-[1.75rem]";

const btnFocus =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c41e3a] focus-visible:ring-offset-2 focus-visible:ring-offset-[#fff8f2]";

export const btnPrimary =
  `inline-flex items-center justify-center gap-2 rounded-md bg-[#c41e3a] px-5 py-2.5 text-[0.72rem] font-semibold tracking-[0.14em] uppercase text-white shadow-[0_8px_18px_rgba(196,30,58,0.22)] transition hover:bg-[#9f1730] ${btnFocus}`;

export const btnSecondary =
  `inline-flex items-center justify-center rounded-md border border-[#c41e3a]/25 bg-[#fff8f2] px-5 py-2.5 text-[0.72rem] font-semibold tracking-[0.14em] uppercase text-[#8b1e2d] transition hover:border-[#c41e3a]/50 hover:bg-[#f6ebe3] ${btnFocus}`;

export const btnGhost =
  `inline-flex items-center justify-center rounded-md border border-[#c41e3a]/40 bg-[#fffdf8] px-5 py-2.5 text-[0.72rem] font-semibold tracking-[0.14em] uppercase text-[#8b1e2d] transition hover:bg-[#f6ebe3] ${btnFocus}`;

export const btnChip =
  `inline-flex items-center justify-center gap-1.5 rounded-md border border-[#c41e3a]/30 px-3 py-1.5 text-[0.65rem] font-semibold tracking-[0.12em] uppercase text-[#8b1e2d] transition hover:border-[#c41e3a]/55 hover:bg-[#f6ebe3] disabled:cursor-not-allowed disabled:opacity-40 ${btnFocus}`;

export const surface =
  "rounded-xl border border-[#e8d9ce] bg-[#fffdf8] shadow-[0_10px_28px_rgba(90,46,36,0.05)]";

export const surfaceHover =
  "rounded-xl border border-[#e8d9ce] bg-[#fffdf8] shadow-[0_10px_28px_rgba(90,46,36,0.05)] transition duration-300 hover:border-[#c41e3a]/35 hover:bg-[#fff8f2] hover:shadow-[0_14px_32px_rgba(196,30,58,0.08)]";

export const field =
  "w-full min-w-0 rounded-md border border-[#e0d2c6] bg-[#fffdf8] px-3.5 py-2.5 text-sm leading-relaxed text-[#2a221f] outline-none transition placeholder:text-stone-400 focus:border-[#c41e3a] focus:ring-1 focus:ring-[#c41e3a]/25";

export const band =
  "border-y border-[#e8d9ce] bg-[#f6efe6]/70";

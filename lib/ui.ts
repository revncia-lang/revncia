/** Full page width with even gutters — header, footer, and every section share this. */
export const shell =
  "mx-auto w-full min-w-0 px-5 sm:px-8 lg:px-12 xl:px-16 2xl:px-20";

export const kicker =
  "heading-kicker text-[0.72rem] font-semibold tracking-[0.18em] uppercase text-[#0071e3]";

export const display =
  "font-sans font-semibold tracking-tight text-5xl leading-[1.08] md:text-6xl lg:text-[4.6rem] text-[#1d1d1f]";

export const heading2 =
  "font-sans font-semibold tracking-tight text-3xl leading-tight md:text-4xl text-[#1d1d1f]";

export const heading3 =
  "font-sans font-semibold tracking-tight text-2xl leading-snug md:text-[1.75rem] text-[#1d1d1f]";

const btnFocus =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0071e3] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f5f5f7]";

export const btnPrimary =
  `inline-flex items-center justify-center gap-2 rounded-full bg-[#0071e3] px-5 py-2.5 text-[0.72rem] font-semibold tracking-[0.08em] text-white shadow-[0_8px_20px_rgba(0,113,227,0.28)] transition hover:bg-[#0077ed] ${btnFocus}`;

export const btnSecondary =
  `inline-flex items-center justify-center rounded-full border border-[#d2d2d7] bg-white px-5 py-2.5 text-[0.72rem] font-semibold tracking-[0.08em] text-[#1d1d1f] transition hover:border-[#86868b] hover:bg-[#f5f5f7] ${btnFocus}`;

export const btnGhost =
  `inline-flex items-center justify-center rounded-full border border-[#d2d2d7] bg-[#fbfbfd] px-5 py-2.5 text-[0.72rem] font-semibold tracking-[0.08em] text-[#1d1d1f] transition hover:bg-[#ececef] ${btnFocus}`;

export const btnChip =
  `inline-flex items-center justify-center gap-1.5 rounded-full border border-[#d2d2d7] px-3 py-1.5 text-[0.65rem] font-semibold tracking-[0.08em] text-[#1d1d1f] transition hover:border-[#86868b] hover:bg-[#ececef] disabled:cursor-not-allowed disabled:opacity-40 ${btnFocus}`;

export const surface =
  "rounded-2xl border border-[#d2d2d7] bg-white shadow-[0_10px_28px_rgba(0,0,0,0.04)]";

export const surfaceHover =
  "rounded-2xl border border-[#d2d2d7] bg-white shadow-[0_10px_28px_rgba(0,0,0,0.04)] transition duration-300 hover:border-[#86868b] hover:bg-[#fbfbfd] hover:shadow-[0_14px_32px_rgba(0,113,227,0.08)]";

export const field =
  "w-full min-w-0 rounded-xl border border-[#d2d2d7] bg-white px-3.5 py-2.5 text-sm leading-relaxed text-[#1d1d1f] outline-none transition placeholder:text-[#86868b] focus:border-[#0071e3] focus:ring-1 focus:ring-[#0071e3]/25";

export const band =
  "border-y border-[#d2d2d7] bg-[#ececef]/70";

/** Full page width with even gutters — header, footer, and every section share this. */
export const shell =
  "mx-auto w-full min-w-0 px-5 sm:px-8 lg:px-12 xl:px-16 2xl:px-20";

export const kicker =
  "heading-kicker text-[0.72rem] font-semibold tracking-[0.2em] uppercase text-orange-600";

export const display =
  "font-serif font-bold tracking-tight text-5xl leading-[1.08] md:text-6xl lg:text-[4.6rem]";

export const heading2 =
  "font-serif font-bold tracking-tight text-3xl leading-tight md:text-4xl";

export const heading3 =
  "font-serif font-semibold tracking-tight text-2xl leading-snug md:text-[1.75rem]";

const btnFocus =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2";

export const btnPrimary =
  `inline-flex items-center justify-center rounded-md bg-orange-500 px-5 py-2.5 text-[0.72rem] font-semibold tracking-[0.14em] uppercase text-white transition hover:bg-orange-600 ${btnFocus}`;

export const btnSecondary =
  `inline-flex items-center justify-center rounded-md border border-orange-300 bg-orange-50 px-5 py-2.5 text-[0.72rem] font-semibold tracking-[0.14em] uppercase text-orange-800 transition hover:border-orange-400 hover:bg-orange-100 ${btnFocus}`;

export const btnGhost =
  `inline-flex items-center justify-center rounded-md border border-orange-400 bg-white px-5 py-2.5 text-[0.72rem] font-semibold tracking-[0.14em] uppercase text-orange-800 transition hover:bg-orange-50 ${btnFocus}`;

export const btnChip =
  `inline-flex items-center justify-center rounded-md border border-orange-300 px-3 py-1.5 text-[0.65rem] font-semibold tracking-[0.12em] uppercase text-orange-800 transition hover:border-orange-400 hover:bg-orange-50 disabled:cursor-not-allowed disabled:opacity-40 ${btnFocus}`;

export const surface =
  "rounded-xl border border-stone-200 bg-white shadow-[0_10px_28px_rgba(28,25,23,0.05)]";

export const surfaceHover =
  "rounded-xl border border-stone-200 bg-white shadow-[0_10px_28px_rgba(28,25,23,0.05)] transition duration-300 hover:border-orange-400/60 hover:bg-orange-50/50 hover:shadow-[0_14px_32px_rgba(249,115,22,0.08)]";

export const field =
  "w-full min-w-0 rounded-md border border-stone-300 bg-white px-3.5 py-2.5 text-sm leading-relaxed text-stone-900 outline-none transition placeholder:text-stone-400 focus:border-orange-500 focus:ring-1 focus:ring-orange-400/30";

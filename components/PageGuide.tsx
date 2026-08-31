import Link from "next/link";
import { nav } from "@/lib/site";

export function PageGuide({
  sections,
}: {
  sections: readonly { title: string; text: string }[];
}) {
  return (
    <div className="mt-10 overflow-hidden rounded-xl border border-[#d2d2d7] bg-[#ffffff] shadow-[0_10px_28px_rgba(90,46,36,0.05)]">
      <div className="grid min-w-0 gap-8 p-5 md:p-6 lg:grid-cols-[1.1fr_0.9fr]">
        <section className="min-w-0" aria-labelledby="on-this-page">
          <h2
            id="on-this-page"
            className="heading-kicker text-[0.68rem] font-semibold tracking-[0.2em] uppercase"
          >
            Who this helps — and what you keep
          </h2>
          <ol className="mt-4 grid gap-3 sm:grid-cols-2">
            {sections.map((s, i) => (
              <li key={s.title} className="min-w-0">
                <h3 className="text-pretty font-serif font-semibold text-[1.15rem] leading-snug">
                  <span className="mr-1.5 text-[0.65rem] font-semibold text-[#0071e3]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {s.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-pretty break-words text-stone-600">
                  {s.text}
                </p>
              </li>
            ))}
          </ol>
        </section>
        <nav className="min-w-0 border-t border-[#d2d2d7] pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0" aria-labelledby="site-navigation-guide">
          <h2
            id="site-navigation-guide"
            className="heading-kicker text-[0.68rem] font-semibold tracking-[0.2em] uppercase"
          >
            If you need another door
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-pretty break-words text-stone-600">
            Voice and WhatsApp for callers, the AI your staff already use, your
            sector, or a message to the office.
          </p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  title={item.explain}
                  className="inline-flex rounded-md border border-[#0071e3]/25 bg-[#f5f5f7] px-2.5 py-1.5 text-[0.65rem] font-semibold tracking-[0.1em] uppercase text-[#0071e3] transition hover:border-[#0071e3]/50 hover:bg-[#e8f1ff]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

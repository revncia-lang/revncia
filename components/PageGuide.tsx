import Link from "next/link";
import { nav } from "@/lib/site";

export function PageGuide({
  sections,
}: {
  sections: readonly { title: string; text: string }[];
}) {
  return (
    <div className="mt-10 overflow-hidden rounded-xl border border-stone-200 bg-white">
      <div className="grid min-w-0 gap-8 p-5 md:p-6 lg:grid-cols-[1.1fr_0.9fr]">
        <section className="min-w-0" aria-labelledby="on-this-page">
          <h2
            id="on-this-page"
            className="text-[0.65rem] font-medium tracking-[0.2em] uppercase text-orange-600"
          >
            What you can start
          </h2>
          <ol className="mt-4 grid gap-3 sm:grid-cols-2">
            {sections.map((s, i) => (
              <li key={s.title} className="min-w-0">
                <h3 className="text-pretty font-serif text-[1.05rem] leading-snug">
                  <span className="mr-1.5 text-[0.65rem] text-orange-600">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {s.title}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-pretty break-words text-stone-500">
                  {s.text}
                </p>
              </li>
            ))}
          </ol>
        </section>
        <nav className="min-w-0 border-t border-stone-200 pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0" aria-labelledby="site-navigation-guide">
          <h2
            id="site-navigation-guide"
            className="text-[0.65rem] font-medium tracking-[0.2em] uppercase text-orange-600"
          >
            Need a different start
          </h2>
          <p className="mt-3 text-xs leading-relaxed text-pretty break-words text-stone-500">
            Voice and WhatsApp, the AI your staff use, your sector, or a
            message to the office.
          </p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  title={item.explain}
                  className="inline-flex rounded-md border border-stone-200 px-2.5 py-1 text-[0.65rem] tracking-[0.1em] uppercase text-stone-600 transition hover:border-orange-400/60 hover:text-orange-700"
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

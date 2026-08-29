import Link from "next/link";
import { nav } from "@/lib/site";

export function PageGuide({
  sections,
}: {
  sections: readonly { title: string; text: string }[];
}) {
  return (
    <div className="mt-10 overflow-hidden rounded-xl border border-white/10 bg-white/[0.03]">
      <div className="grid min-w-0 gap-8 p-5 md:p-6 lg:grid-cols-[1.1fr_0.9fr]">
        <section className="min-w-0" aria-labelledby="on-this-page">
          <h2
            id="on-this-page"
            className="text-[0.65rem] font-medium tracking-[0.2em] uppercase text-cyan-400/90"
          >
            On this page
          </h2>
          <ol className="mt-4 grid gap-3 sm:grid-cols-2">
            {sections.map((s, i) => (
              <li key={s.title} className="min-w-0">
                <h3 className="text-pretty font-serif text-[1.05rem] leading-snug">
                  <span className="mr-1.5 text-[0.65rem] text-cyan-400/80">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {s.title}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-pretty break-words text-slate-500">
                  {s.text}
                </p>
              </li>
            ))}
          </ol>
        </section>
        <nav className="min-w-0 border-t border-white/10 pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0" aria-labelledby="site-navigation-guide">
          <h2
            id="site-navigation-guide"
            className="text-[0.65rem] font-medium tracking-[0.2em] uppercase text-cyan-400/90"
          >
            Across the site
          </h2>
          <p className="mt-3 text-xs leading-relaxed text-pretty break-words text-slate-500">
            The same destinations appear in the header and footer. Hover a name
            for a short hint.
          </p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  title={item.explain}
                  className="inline-flex rounded-md border border-white/10 px-2.5 py-1 text-[0.65rem] tracking-[0.1em] uppercase text-slate-300 transition hover:border-cyan-400/35 hover:text-cyan-100"
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

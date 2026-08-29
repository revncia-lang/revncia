import { PageGuide } from "./PageGuide";

export function PageHero({
  kicker,
  title,
  lede,
  sections,
}: {
  kicker: string;
  title: string;
  lede: string;
  sections?: readonly { title: string; text: string }[];
}) {
  return (
    <section className="border-b border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent text-cyan-50">
      <div className="mx-auto max-w-6xl min-w-0 px-5 py-14 md:px-8 md:py-20">
        <p className="text-pretty text-[0.7rem] font-medium tracking-[0.2em] uppercase text-cyan-400/90">
          {kicker}
        </p>
        <h1 className="mt-4 max-w-3xl text-balance font-serif text-4xl leading-[1.14] md:text-5xl">
          {title}
        </h1>
        <p className="mt-6 max-w-3xl text-pretty text-base leading-relaxed break-words text-slate-300/95 md:text-lg">
          {lede}
        </p>
        {sections && sections.length > 0 ? <PageGuide sections={sections} /> : null}
      </div>
    </section>
  );
}

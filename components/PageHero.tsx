export function PageHero({
  kicker,
  title,
  lede,
}: {
  kicker: string;
  title: string;
  lede: string;
}) {
  return (
    <section className="border-b border-[color:var(--line)] bg-[color:var(--ink)] text-[color:var(--paper)]">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <p className="text-[0.72rem] tracking-[0.22em] uppercase text-[color:var(--copper)]">
          {kicker}
        </p>
        <h1 className="mt-4 max-w-3xl font-serif text-4xl leading-[1.12] md:text-5xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-[color:var(--paper-muted)] md:text-lg">
          {lede}
        </p>
      </div>
    </section>
  );
}

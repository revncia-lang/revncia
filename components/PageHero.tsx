import { shell } from "@/lib/ui";
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
    <section className="border-b border-stone-200 bg-gradient-to-b from-orange-50/80 to-transparent">
      <div className={`${shell} py-14 md:py-20`}>
        <p className="text-pretty text-[0.7rem] font-medium tracking-[0.2em] uppercase text-orange-600">
          {kicker}
        </p>
        <h1 className="mt-4 max-w-5xl text-balance font-serif font-bold text-4xl leading-[1.1] md:text-5xl lg:text-[3.35rem]">
          {title}
        </h1>
        <p className="mt-6 max-w-4xl text-pretty text-base leading-relaxed break-words text-stone-600 md:text-lg">
          {lede}
        </p>
        {sections && sections.length > 0 ? <PageGuide sections={sections} /> : null}
      </div>
    </section>
  );
}

import Link from "next/link";
import { shell, btnSecondary } from "@/lib/ui";
import { PageGuide } from "./PageGuide";
import { UniqueScene } from "./UniqueScene";

export function PageHero({
  kicker,
  title,
  lede,
  sections,
  sceneId = "page-hero",
  sceneTitle = "REVNCIA digital transformation system",
  cta,
}: {
  kicker: string;
  title: string;
  lede: string;
  sections?: readonly { title: string; text: string }[];
  sceneId?: string;
  sceneTitle?: string;
  cta?: { href: string; label: string };
}) {
  return (
    <section className="page-hero border-b border-white/10">
      <div className={`${shell} grid items-center gap-10 py-14 md:grid-cols-12 md:py-20`}>
        <div className="min-w-0 md:col-span-7">
          <div className="hero-kicker-row">
            <span className="hero-dot" />
            <p className="heading-kicker text-[0.68rem] font-semibold tracking-[0.22em] uppercase">{kicker}</p>
          </div>
          <h1 className="mt-5 max-w-5xl page-display">{title}</h1>
          <p className="mt-6 max-w-4xl text-pretty text-base leading-8 text-white/52 md:text-lg">{lede}</p>
          {cta ? <Link href={cta.href} className={`${btnSecondary} mt-8`}>{cta.label} <span>→</span></Link> : null}
          {sections && sections.length > 0 ? <PageGuide sections={sections} /> : null}
        </div>
        <div className="min-w-0 md:col-span-5">
          <div className="page-hero-visual">
            <UniqueScene id={sceneId} title={sceneTitle} />
            <div className="page-hero-corner page-hero-corner-a">REVNCIA / SYSTEM</div>
            <div className="page-hero-corner page-hero-corner-b">LIVE / GOVERNED</div>
          </div>
        </div>
      </div>
    </section>
  );
}

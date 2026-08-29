import type { Metadata } from "next";
import Link from "next/link";
import { MediaFrame } from "@/components/MediaFrame";
import { PageHero } from "@/components/PageHero";
import { UniqueScene } from "@/components/UniqueScene";
import { offerings } from "@/lib/catalog";
import { surfaceHover } from "@/lib/ui";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Thirty-six REVNCIA service lines from AI Platform and Voice to government, workforce, and academy.",
};

export default function ServicesIndex() {
  return (
    <main>
      <PageHero
        kicker="Catalogue"
        title="Every REVNCIA line is specified, staged, and ready to commission."
        lede="Thirty-six offerings. Each page uses simple English, a unique picture, unique graphs, and a list of problems customers face when they do not adopt that service."
        sections={[
          { title: "Grid", text: "Every line as a card. Picture on top, summary underneath — text wraps." },
          { title: "Open a card", text: "Specification, skip-this risks, graphs, and related lines." },
        ]}
      />
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {offerings.map((o) => (
            <Link
              key={o.slug}
              href={`/services/${o.slug}`}
              className={`${surfaceHover} flex min-w-0 flex-col overflow-hidden`}
            >
              <MediaFrame ratio="landscape" className="border-0 rounded-none rounded-t-xl">
                <UniqueScene id={`index-${o.slug}`} title={o.name} />
              </MediaFrame>
              <div className="min-w-0 p-4">
                <p className="text-[0.65rem] tracking-[0.16em] uppercase text-cyan-400/90">
                  {o.n} · Stage {o.stage} · {o.group}
                </p>
                <h2 className="mt-1 text-pretty font-serif text-xl text-cyan-50">{o.name}</h2>
                <p className="mt-2 text-sm leading-relaxed text-pretty break-words text-slate-400">
                  {o.summary}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

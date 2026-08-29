import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { UniqueScene } from "@/components/UniqueScene";
import { offerings } from "@/lib/catalog";

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
      />
      <section className="mx-auto max-w-6xl px-5 py-14 md:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {offerings.map((o) => (
            <Link
              key={o.slug}
              href={`/services/${o.slug}`}
              className="flex flex-col overflow-hidden border border-cyan-400/15 bg-black/35 hover:border-cyan-400/40"
            >
              <div className="relative h-36">
                <UniqueScene id={`index-${o.slug}`} title={o.name} />
              </div>
              <div className="p-4">
                <p className="text-[0.65rem] tracking-[0.16em] uppercase text-cyan-400">
                  {o.n} · Stage {o.stage} · {o.group}
                </p>
                <h2 className="mt-1 font-serif text-xl text-cyan-50">{o.name}</h2>
                <p className="mt-2 text-sm text-slate-400">{o.summary}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

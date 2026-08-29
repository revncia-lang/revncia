import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { UniqueChart } from "@/components/UniqueChart";
import { engagement, stages } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "Engagement",
  description: "Consulting, implementation, SaaS, managed AI, and usage — five revenue layers.",
};

export default function EngagementPage() {
  return (
    <main>
      <PageHero
        kicker="Commercial model"
        title="Services → solutions → platform → ecosystem."
        lede="REVNCIA is not built only on project fees. Five layers: consulting, implementation, SaaS, managed AI, and usage/API. WhatsApp and Voice typically combine setup, monthly platform, and usage. Customer Operations is charged monthly per organization. Figures in internal plans are scenarios, not quotes."
      />
      <section className="mx-auto max-w-6xl px-5 py-14 md:px-8">
        <div className="grid gap-4 md:grid-cols-5">
          {engagement.map((e) => (
            <article key={e.layer} className="border border-cyan-400/20 p-5">
              <h2 className="font-serif text-xl text-cyan-50">{e.layer}</h2>
              <p className="mt-2 text-sm text-slate-400">{e.cadence}</p>
            </article>
          ))}
        </div>
        <ul className="mt-12 space-y-4">
          {stages.map((s) => (
            <li key={s.id} className="border-l-2 border-cyan-400 pl-4">
              <h3 className="font-serif text-xl text-cyan-100">{s.title}</h3>
              <p className="text-sm text-slate-400">{s.text}</p>
            </li>
          ))}
        </ul>
        <div className="mt-10 max-w-xl">
          <UniqueChart id="engage-mix" caption="Illustrative revenue-layer mix" />
        </div>
        <Link
          href="/contact"
          className="mt-8 inline-block bg-cyan-400 px-5 py-3 text-[0.75rem] uppercase tracking-widest text-black"
        >
          Request a roadmap
        </Link>
      </section>
    </main>
  );
}

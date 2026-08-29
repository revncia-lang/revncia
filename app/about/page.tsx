import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { UniqueScene } from "@/components/UniqueScene";
import { company, principles, objectives } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "REVNCIA is a digital transformation and public impact company led by Muhammad Danish, Founder & CEO.",
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        kicker="About"
        title="Infrastructure for AI that can be audited, not just announced."
        lede="REVNCIA builds intelligent digital infrastructure for organizations, enterprises, governments, and public-impact institutions."
      />
      <section className="mx-auto max-w-6xl px-5 py-16 md:grid md:grid-cols-12 md:gap-12 md:px-8">
        <div className="md:col-span-7">
          <div className="mb-8 h-40 border border-cyan-400/20">
            <UniqueScene id="about-org" title="REVNCIA organization" />
          </div>
          <h2 className="font-serif text-3xl text-cyan-50">Who we are</h2>
          <p className="mt-5 text-[0.95rem] leading-relaxed text-slate-400">
            {company.name} is {company.descriptor.toLowerCase()}. The long-term
            core is the AI Platform: Gateway, identity, knowledge, memory,
            agents, tools, safety, observability, and cost-controlled AI.
            Delivery spans CRM, ERP, Voice, WhatsApp, automation, data, cloud,
            and citizen services.
          </p>
          <p className="mt-4 text-[0.95rem] leading-relaxed text-slate-400">
            Strategy is aligned to six objectives: client growth, operational
            excellence, innovation, security, financial sustainability, and
            public impact. We operate under written corporate policy covering
            ethics, information security, privacy, identity, risk, continuity,
            and records.
          </p>
        </div>
        <aside className="mt-12 border border-cyan-400/15 bg-black/40 p-6 md:col-span-5 md:mt-0">
          <p className="text-[0.7rem] tracking-[0.18em] uppercase text-cyan-400">
            Leadership
          </p>
          <p className="mt-3 font-serif text-2xl text-cyan-50">{company.founder}</p>
          <p className="mt-1 text-sm text-slate-400">{company.founderTitle}</p>
          <p className="mt-6 text-sm leading-relaxed text-slate-400">
            {company.address}
          </p>
          <a
            href={`mailto:${company.email}`}
            className="mt-3 inline-block text-sm text-cyan-200 underline"
          >
            {company.email}
          </a>
        </aside>
      </section>
      <section className="border-t border-cyan-400/15">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8">
          <h2 className="font-serif text-3xl text-cyan-50">Code of conduct</h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {principles.map((p) => (
              <li
                key={p}
                className="border border-cyan-400/15 px-4 py-3 font-serif text-xl text-cyan-100"
              >
                {p}
              </li>
            ))}
          </ul>
          <ol className="mt-12 grid gap-4 md:grid-cols-3">
            {objectives.map((item, i) => (
              <li key={item} className="border-t border-cyan-400/40 pt-4">
                <span className="text-[0.7rem] tracking-[0.16em] uppercase text-cyan-400">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-2 font-serif text-2xl text-cyan-50">{item}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  );
}

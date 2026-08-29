import type { Metadata } from "next";
import { MediaFrame } from "@/components/MediaFrame";
import { PageHero } from "@/components/PageHero";
import { UniqueScene } from "@/components/UniqueScene";
import { engagement } from "@/lib/catalog";
import { company, principles, objectives } from "@/lib/site";
import { kicker, shell, surface } from "@/lib/ui";

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
        sections={[
          { title: "Who we are", text: "Platform core, delivery scope, and the limits we state plainly." },
          { title: "Leadership", text: "Founder, office, and the published email." },
          { title: "Conduct", text: "Nine principles and six objectives." },
          { title: "Commercial layers", text: "Consulting through usage — how work is billed, not a separate site section." },
        ]}
      />
      <section className={`${shell} py-16 md:grid md:grid-cols-12 md:gap-12`}>
        <div className="min-w-0 md:col-span-7">
          <MediaFrame ratio="banner" className="mb-8">
            <UniqueScene id="about-org" title="REVNCIA organization" />
          </MediaFrame>
          <h2 className="font-serif text-3xl">Who we are</h2>
          <p className="mt-5 text-[0.95rem] leading-relaxed text-pretty break-words text-slate-400">
            {company.name} is {company.descriptor.toLowerCase()}. The long-term
            core is the AI Platform: Gateway, identity, knowledge, memory,
            agents, tools, safety, observability, and cost-controlled AI.
            Delivery spans CRM, ERP, Voice, WhatsApp, automation, data, cloud,
            and citizen services. Cybersecurity work starts with identity, access,
            logs, and AI-use rules; we partner for advanced security rather than
            claiming a full cyber firm. Healthcare delivery is administrative and
            communication-first, with privacy treated as a design constraint.
          </p>
          <p className="mt-4 text-[0.95rem] leading-relaxed text-pretty break-words text-slate-400">
            Strategy is aligned to six objectives: client growth, operational
            excellence, innovation, security, financial sustainability, and
            public impact. We operate under written corporate policy covering
            ethics, information security, privacy, identity, risk, continuity,
            and records.
          </p>
        </div>
        <aside className={`${surface} mt-12 p-6 md:col-span-5 md:mt-0`}>
          <p className={kicker}>Leadership</p>
          <p className="mt-3 font-serif text-2xl text-cyan-50">{company.founder}</p>
          <p className="mt-1 text-sm text-slate-400">{company.founderTitle}</p>
          <p className="mt-6 text-sm leading-relaxed text-pretty break-words text-slate-400">
            {company.address}
          </p>
          <a
            href={`mailto:${company.email}`}
            className="mt-3 inline-block break-all text-sm text-cyan-200 underline underline-offset-4"
          >
            {company.email}
          </a>
        </aside>
      </section>
      <section className="border-t border-white/10">
        <div className={`${shell} py-16`}>
          <h2 className="font-serif text-3xl">Code of conduct</h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {principles.map((p) => (
              <li key={p} className={`${surface} px-4 py-3 font-serif text-xl text-cyan-100`}>
                {p}
              </li>
            ))}
          </ul>
          <ol className="mt-12 grid gap-4 md:grid-cols-3">
            {objectives.map((item, i) => (
              <li key={item} className="border-t border-cyan-400/30 pt-4">
                <span className="text-[0.7rem] tracking-[0.16em] uppercase text-cyan-400/90">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-2 text-pretty font-serif text-2xl text-cyan-50">{item}</p>
              </li>
            ))}
          </ol>
          <p className={`${kicker} mt-16`}>Commercial layers</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 md:grid-cols-5">
            {engagement.map((e) => (
              <div key={e.layer} className={`${surface} p-4`}>
                <p className="font-serif text-lg text-cyan-100">{e.layer}</p>
                <p className="mt-1 text-xs leading-relaxed text-slate-500">{e.cadence}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

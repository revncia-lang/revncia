import type { Metadata } from "next";
import { BuyLayersGrid, HonestyCards, SupportDesk } from "@/components/CustomerFacilities";
import { MediaFrame } from "@/components/MediaFrame";
import { PageHero } from "@/components/PageHero";
import { UniqueScene } from "@/components/UniqueScene";
import { honestyLimits } from "@/lib/facilities";
import { company, principles, objectives } from "@/lib/site";
import { kicker, shell, surface } from "@/lib/ui";

export const metadata: Metadata = {
  title: "About",
  description:
    "REVNCIA is an AI digital transformation and public impact company led by Muhammad Danish. Office published, limits written, work owned.",
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        kicker="Who we are"
        title="A company you can introduce to a board — office published, limits written, work owned."
        lede="Customers get Voice, WhatsApp, CRM, ERP, documents, and citizen services they can actually operate. Together we transform how work gets done — with written limits, not a launch announcement. Cyber is implementation plus partners. Healthcare is administrative. Marketing is a capability, not our name."
        sections={[
          { title: "Who we serve", text: "Enterprises, governments, campuses, and mission organisations — and the callers, students, patients, and citizens they already serve." },
          { title: "Who to write", text: "Muhammad Danish, founder. Cheyenne office. info@revncia.com — email-first on ordinary US business days." },
          { title: "How we behave", text: "Nine principles and six objectives you can hold us to." },
          { title: "How you can buy", text: "Roadmap, implementation, monthly access, managed AI, or usage meters — no headline package price." },
        ]}
      />
      <section className={`${shell} py-16 md:grid md:grid-cols-12 md:gap-12`}>
        <div className="min-w-0 md:col-span-7">
          <MediaFrame ratio="banner" className="mb-8">
            <UniqueScene id="about-org" title="REVNCIA organization" />
          </MediaFrame>
          <h2 className="font-serif text-3xl">Who we serve — and what they keep</h2>
          <p className="mt-5 text-[0.95rem] leading-relaxed text-pretty break-words text-slate-400">
            {company.name} is {company.descriptor.toLowerCase()}. Customers keep
            a governed AI Platform: Gateway, identity, knowledge, memory,
            agents, tools, safety, observability, and cost-controlled AI.
            Delivery spans CRM, ERP, Voice, WhatsApp, automation, data, cloud,
            and citizen services. After go-live you receive accounts, runbooks,
            and — if you buy it — Managed AI so the system does not go stale.
            Human REVNCIA correspondence is email-first from the published
            Cheyenne office on ordinary US business days. We do not publish a
            reply-time SLA or a walk-in helpdesk.
          </p>
          <p className="mt-4 text-[0.95rem] leading-relaxed text-pretty break-words text-slate-400">
            Strategy is aligned to six objectives you can hold us to: client
            growth, operational excellence, innovation, security, financial
            sustainability, and public impact. We operate under written
            corporate policy covering ethics, information security, privacy,
            identity, risk, continuity, and records. Motto: {company.motto}.
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
          <h2 className="font-serif text-3xl">The standards we keep</h2>
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
          <p className={`${kicker} mt-16`}>How you can buy</p>
          <p className="mt-2 mb-6 max-w-2xl text-sm leading-relaxed text-slate-400">
            Five layers — consulting through usage. Fees follow scope. There is
            no PKR package or headline price.
          </p>
          <BuyLayersGrid />
          <p className={`${kicker} mt-16`}>Limits we state before you buy</p>
          <div className="mt-4">
            <HonestyCards items={[...honestyLimits]} />
          </div>
          <div className="mt-12">
            <SupportDesk />
          </div>
        </div>
      </section>
    </main>
  );
}

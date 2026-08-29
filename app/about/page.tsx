import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
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
        title="A company built for transformation that can be audited, not just announced."
        lede="REVNCIA exists to implement CRM, ERP, AI, and digital platforms that last — commercially and in the public sector."
      />

      <section className="mx-auto max-w-6xl px-5 py-16 md:grid md:grid-cols-12 md:gap-12 md:px-8 md:py-24">
        <div className="md:col-span-7">
          <h2 className="font-serif text-3xl">Who we are</h2>
          <p className="mt-5 text-[0.95rem] leading-relaxed text-[color:var(--muted)]">
            {company.name} is {company.descriptor.toLowerCase()}. We deliver
            complete digital transformation: customer and citizen platforms,
            enterprise resource planning, applied AI, systems integration, and
            the governance around them.
          </p>
          <p className="mt-4 text-[0.95rem] leading-relaxed text-[color:var(--muted)]">
            Strategy is aligned to six objectives: client growth, operational
            excellence, innovation, security, financial sustainability, and
            public impact. Planning is annual, reviewed quarterly, and executed
            with measurable KPIs.
          </p>
          <p className="mt-4 text-[0.95rem] leading-relaxed text-[color:var(--muted)]">
            We operate under written corporate policy covering ethics,
            information security, privacy, identity and access, risk,
            continuity, and records. That is how we expect to be judged by
            enterprise and public-sector clients.
          </p>
        </div>
        <aside className="mt-12 border border-[color:var(--line)] bg-white p-6 md:col-span-5 md:mt-0">
          <p className="text-[0.7rem] tracking-[0.18em] uppercase text-[color:var(--copper)]">
            Leadership
          </p>
          <p className="mt-3 font-serif text-2xl">{company.founder}</p>
          <p className="mt-1 text-sm text-[color:var(--muted)]">
            {company.founderTitle}
          </p>
          <p className="mt-6 text-sm leading-relaxed text-[color:var(--muted)]">
            {company.address}
          </p>
          <a
            href={`mailto:${company.email}`}
            className="mt-3 inline-block text-sm underline underline-offset-4"
          >
            {company.email}
          </a>
        </aside>
      </section>

      <section className="border-t border-[color:var(--line)] bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <h2 className="font-serif text-3xl">Code of conduct</h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[color:var(--muted)]">
            Directors, employees, contractors, and partners are held to these
            principles. Bribery and facilitation payments are prohibited.
            Confidential information is protected.
          </p>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {principles.map((p) => (
              <li
                key={p}
                className="border border-[color:var(--line)] px-4 py-3 font-serif text-xl"
              >
                {p}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <h2 className="font-serif text-3xl">What we optimize for</h2>
        <ol className="mt-8 grid gap-4 md:grid-cols-3">
          {objectives.map((item, i) => (
            <li key={item} className="border-t border-[color:var(--ink)] pt-4">
              <span className="text-[0.7rem] tracking-[0.16em] uppercase text-[color:var(--copper)]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-2 font-serif text-2xl">{item}</p>
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}

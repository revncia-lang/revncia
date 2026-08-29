import Image from "next/image";
import Link from "next/link";
import { ProgramCharts } from "@/components/ProgramCharts";
import { aiServices, company, objectives, solutions, steps } from "@/lib/site";

const serviceImages = [
  "/images/docs-ai.png",
  "/images/ops-room.png",
  "/images/boardroom.png",
  "/images/civic.png",
] as const;

export default function Home() {
  return (
    <main>
      <section className="relative overflow-hidden bg-[color:var(--ink)] text-[color:var(--paper)]">
        <Image
          src="/images/ops-room.png"
          alt=""
          fill
          priority
          className="object-cover opacity-35"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--ink)] via-[color:var(--ink)]/88 to-[color:var(--ink)]/55" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-12 md:px-8 md:py-20">
          <div className="md:col-span-7">
            <p className="text-[0.72rem] tracking-[0.24em] uppercase text-[color:var(--copper)]">
              {company.descriptor}
            </p>
            <h1 className="mt-5 font-serif text-4xl leading-[1.08] md:text-5xl lg:text-6xl">
              Institutional AI, CRM, and ERP — designed for clients who must
              govern every decision.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-[color:var(--paper-muted)] md:text-lg">
              REVNCIA serves enterprises, public bodies, and mission-driven
              organisations with a complete digital transformation practice:
              intelligent reception, contact centres, document intelligence,
              copilots, forecasting, automation, and the CRM/ERP backbone they
              run on.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="#ai-services"
                className="bg-[color:var(--copper)] px-6 py-3 text-[0.75rem] tracking-[0.16em] uppercase text-[color:var(--ink)]"
              >
                Review AI services
              </Link>
              <Link
                href="/contact"
                className="border border-[color:var(--paper-muted)] px-6 py-3 text-[0.75rem] tracking-[0.16em] uppercase text-[color:var(--paper)]"
              >
                Brief the practice
              </Link>
            </div>
          </div>
          <div className="relative md:col-span-5">
            <div className="relative aspect-[3/4] overflow-hidden border border-[color:var(--copper)]/50 shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
              <Image
                src="/images/hero-robot.png"
                alt="REVNCIA institutional AI: a professional humanoid systems attendant in an executive setting"
                fill
                priority
                className="object-cover object-top"
                sizes="(min-width: 768px) 40vw, 90vw"
              />
            </div>
            <p className="mt-3 text-[0.7rem] tracking-[0.14em] uppercase text-[color:var(--paper-muted)]">
              Intelligent reception · governed automation · human oversight
            </p>
          </div>
        </div>
      </section>

      <section
        id="ai-services"
        className="scroll-mt-24 border-b border-[color:var(--line)] paper-grid"
      >
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <p className="text-[0.72rem] tracking-[0.22em] uppercase text-[color:var(--copper)]">
            AI services for clientage
          </p>
          <h2 className="mt-3 max-w-3xl font-serif text-3xl md:text-4xl">
            A complete artificial intelligence catalogue — implemented as
            operating services, not experiments.
          </h2>
          <p className="mt-5 max-w-3xl text-[0.95rem] leading-relaxed text-[color:var(--muted)]">
            Each service is specified against your systems of record, identity
            model, privacy schedule, and escalation policy. The same practice
            delivers for commercial clientage and for public-impact mandates.
          </p>

          <div className="mt-12 grid gap-8">
            {aiServices.map((service, i) => (
              <article
                key={service.slug}
                id={service.slug}
                className="grid scroll-mt-24 overflow-hidden border border-[color:var(--line)] bg-white md:grid-cols-12"
              >
                <div className="relative min-h-[220px] md:col-span-4">
                  <Image
                    src={serviceImages[i % serviceImages.length]}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 30vw, 100vw"
                  />
                </div>
                <div className="md:col-span-8 px-6 py-7 md:px-8">
                  <p className="text-[0.7rem] tracking-[0.18em] uppercase text-[color:var(--copper)]">
                    {String(i + 1).padStart(2, "0")} · {service.name}
                  </p>
                  <h3 className="mt-2 font-serif text-2xl md:text-3xl">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm font-medium leading-relaxed text-[color:var(--ink)]">
                    {service.summary}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-[color:var(--muted)]">
                    {service.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[color:var(--line)] bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <p className="text-[0.72rem] tracking-[0.22em] uppercase text-[color:var(--copper)]">
            Measurement
          </p>
          <h2 className="mt-3 max-w-2xl font-serif text-3xl md:text-4xl">
            Boards and sponsors receive graphs, not slogans.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[color:var(--muted)]">
            The charts below describe the measurement framework REVNCIA uses on
            AI and transformation programmes. Figures are illustrative of method
            — live programmes report against your baseline.
          </p>
          <div className="mt-10">
            <ProgramCharts />
          </div>
        </div>
      </section>

      <section className="border-b border-[color:var(--line)]">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8">
          <p className="text-[0.72rem] tracking-[0.22em] uppercase text-[color:var(--copper)]">
            Platform practice
          </p>
          <h2 className="mt-3 mb-10 font-serif text-3xl">
            CRM, ERP, and the estate AI depends on.
          </h2>
        </div>
        <div className="mx-auto grid max-w-6xl gap-px bg-[color:var(--line)] sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((s) => (
            <Link
              key={s.slug}
              href={`/solutions#${s.slug}`}
              className="bg-[color:var(--paper)] px-6 py-8 transition-colors hover:bg-white"
            >
              <p className="text-[0.7rem] tracking-[0.18em] uppercase text-[color:var(--copper)]">
                {s.name}
              </p>
              <h3 className="mt-2 font-serif text-2xl">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[color:var(--muted)]">
                {s.summary}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <p className="text-[0.72rem] tracking-[0.22em] uppercase text-[color:var(--copper)]">
          How we work
        </p>
        <h2 className="mt-3 max-w-xl font-serif text-3xl md:text-4xl">
          A governed path from discovery to a system of record.
        </h2>
        <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.n}>
              <p className="font-serif text-3xl text-[color:var(--copper)]">
                {step.n}
              </p>
              <h3 className="mt-2 text-lg font-medium">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[color:var(--muted)]">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-[color:var(--line)]">
        <Image
          src="/images/civic.png"
          alt="Civic architecture representing REVNCIA public-impact work"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[color:var(--ink)]/78" />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-2 md:px-8 md:py-24">
          <div className="text-[color:var(--paper)]">
            <p className="text-[0.72rem] tracking-[0.22em] uppercase text-[color:var(--copper)]">
              Public impact
            </p>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl">
              Technology that serves institutions, not just markets.
            </h2>
            <p className="mt-5 text-[0.95rem] leading-relaxed text-[color:var(--paper-muted)]">
              Public-impact work means citizen-facing services, accountable
              records, and systems that survive leadership change. REVNCIA
              brings the same delivery standard to government, civic, and
              mission-driven organisations as we do to commercial clientage.
            </p>
            <Link
              href="/about"
              className="mt-6 inline-block text-[0.75rem] tracking-[0.16em] uppercase text-[color:var(--paper)] underline underline-offset-4"
            >
              About REVNCIA
            </Link>
          </div>
          <div className="text-[color:var(--paper)]">
            <p className="text-[0.72rem] tracking-[0.22em] uppercase text-[color:var(--copper)]">
              Strategic objectives
            </p>
            <ul className="mt-6 divide-y divide-white/15">
              {objectives.map((item) => (
                <li key={item} className="py-3 font-serif text-xl">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <Image
          src="/images/boardroom.png"
          alt=""
          fill
          className="object-cover opacity-25"
          sizes="100vw"
        />
        <div className="relative mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <div className="border border-[color:var(--line)] bg-[color:var(--ink)]/92 px-6 py-12 text-[color:var(--paper)] md:px-12">
            <h2 className="font-serif text-3xl md:text-4xl">
              Commission a scoped AI, CRM, or ERP programme.
            </h2>
            <p className="mt-4 max-w-xl text-[color:var(--paper-muted)]">
              Write to {company.email}. Describe the client operation, the
              systems in place, and the service you need stood up under
              governance.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-block bg-[color:var(--copper)] px-6 py-3 text-[0.75rem] tracking-[0.16em] uppercase text-[color:var(--ink)]"
            >
              Contact the practice
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

import Image from "next/image";
import Link from "next/link";
import { HumanoidRobot } from "@/components/HumanoidRobot";
import { UniqueChart } from "@/components/UniqueChart";
import { UniqueScene } from "@/components/UniqueScene";
import { engagement, flywheel, offerings, stages } from "@/lib/catalog";
import { company } from "@/lib/site";

const featured = [
  "ai-platform",
  "customer-operations",
  "whatsapp-ai",
  "voice-ai",
  "crm",
  "government",
] as const;

export default function Home() {
  const cards = featured
    .map((slug) => offerings.find((o) => o.slug === slug))
    .filter((o): o is NonNullable<typeof o> => Boolean(o));

  return (
    <main>
      <section className="relative overflow-hidden border-b border-cyan-400/15">
        <Image
          src="/images/scene-humanoid.png"
          alt=""
          fill
          priority
          className="object-cover opacity-25"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#05070d] via-[#05070d]/88 to-[#05070d]/40" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 md:grid-cols-12 md:px-8 md:py-20">
          <div className="md:col-span-7">
            <p className="text-[0.72rem] tracking-[0.24em] uppercase text-cyan-400">
              {company.descriptor}
            </p>
            <h1 className="mt-5 font-serif text-4xl leading-[1.08] text-cyan-50 md:text-5xl lg:text-6xl">
              Intelligent digital infrastructure for organizations that must
              govern AI, not just install it.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 md:text-lg">
              REVNCIA combines AI, automation, software, data, cybersecurity,
              and measurable public-impact outcomes. The core is the AI
              Gateway — routing, identity, knowledge, memory, agents, safety,
              observability, and cost control — underneath Voice, WhatsApp,
              CRM, ERP, and citizen services.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/services"
                className="bg-cyan-400 px-6 py-3 text-[0.75rem] tracking-[0.16em] uppercase text-black"
              >
                Full catalogue
              </Link>
              <Link
                href="/platform"
                className="border border-cyan-400/40 px-6 py-3 text-[0.75rem] tracking-[0.16em] uppercase text-cyan-100"
              >
                AI Platform
              </Link>
              <Link
                href="/contact"
                className="border border-white/20 px-6 py-3 text-[0.75rem] tracking-[0.16em] uppercase text-white"
              >
                Commission
              </Link>
            </div>
          </div>
          <div className="md:col-span-5">
            <HumanoidRobot />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <p className="text-[0.72rem] tracking-[0.22em] uppercase text-cyan-400">
          Build in stages
        </p>
        <h2 className="mt-3 font-serif text-3xl text-cyan-50">
          Not thirty-six logos on day one — a flywheel.
        </h2>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {stages.map((s) => (
            <article key={s.id} className="border border-cyan-400/15 bg-black/30 p-5">
              <h3 className="font-serif text-xl text-cyan-100">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{s.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-cyan-400/15 bg-black/25">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8">
          <p className="text-[0.72rem] tracking-[0.22em] uppercase text-cyan-400">
            Priority lines
          </p>
          <h2 className="mt-3 font-serif text-3xl text-cyan-50">
            Revenue engine and public-impact core.
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {cards.map((o) => (
              <Link
                key={o.slug}
                href={`/services/${o.slug}`}
                className="grid overflow-hidden border border-cyan-400/15 bg-black/40 md:grid-cols-5"
              >
                <div className="relative min-h-[140px] md:col-span-2">
                  <UniqueScene id={`home-${o.slug}`} title={o.name} />
                </div>
                <div className="md:col-span-3 p-5">
                  <p className="text-[0.68rem] tracking-[0.16em] uppercase text-cyan-400">
                    {o.n} · {o.group}
                  </p>
                  <h3 className="mt-1 font-serif text-2xl text-cyan-50">{o.name}</h3>
                  <p className="mt-2 text-sm text-slate-400">{o.summary}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <p className="text-[0.72rem] tracking-[0.22em] uppercase text-cyan-400">
          Guidance graphs
        </p>
        <h2 className="mt-3 mb-8 font-serif text-3xl text-cyan-50">
          Unique measures for each conversation — never a recycled chart.
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          <UniqueChart id="home-containment" caption="Illustrative containment path" />
          <UniqueChart id="home-cost-routing" caption="Cost-aware model mix" />
          <UniqueChart id="home-public-impact" caption="Public-impact cycle time" />
        </div>
      </section>

      <section className="border-y border-cyan-400/15">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8">
          <p className="text-[0.72rem] tracking-[0.22em] uppercase text-cyan-400">
            Flywheel
          </p>
          <ol className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {flywheel.map((item, i) => (
              <li key={item} className="border border-cyan-400/20 px-4 py-4">
                <span className="text-[0.65rem] text-cyan-400">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-1 font-serif text-xl text-cyan-50">{item}</p>
              </li>
            ))}
          </ol>
          <div className="mt-12 grid gap-3 md:grid-cols-5">
            {engagement.map((e) => (
              <div key={e.layer} className="border border-white/10 p-4">
                <p className="font-serif text-lg text-cyan-100">{e.layer}</p>
                <p className="mt-1 text-xs text-slate-400">{e.cadence}</p>
              </div>
            ))}
          </div>
          <Link
            href="/engagement"
            className="mt-8 inline-block text-[0.75rem] uppercase tracking-[0.16em] text-cyan-300 underline"
          >
            How we engage
          </Link>
        </div>
      </section>
    </main>
  );
}

import Link from "next/link";
import { AIEcosystem } from "@/components/AIEcosystem";
import { BetaLabel } from "@/components/BetaLabel";
import { HumanoidRobot } from "@/components/HumanoidRobot";
import { ServiceVisual } from "@/components/ServiceVisual";
import { UniqueChart } from "@/components/UniqueChart";
import { engagement, flywheel, offerings } from "@/lib/catalog";
import { company } from "@/lib/site";
import { band, btnPrimary, btnSecondary, display, kicker, shell, surfaceHover } from "@/lib/ui";

const featured = ["ai-transformation", "ai-chatbots", "whatsapp-ai", "voice-ai", "crm-customer-experience", "government-digital-transformation"] as const;

const industries = [
  ["Government", "Citizen access, case management, digital public services", "government"],
  ["Healthcare", "Administrative access, appointments, reminders and records", "healthcare"],
  ["Education", "Admissions, student services, attendance and communication", "education"],
  ["Finance", "Customer onboarding, operations, controls and analytics", "financial-services"],
  ["Manufacturing", "Operations, workflow, knowledge and connected systems", "industry-solutions"],
  ["Retail", "Customer engagement, commerce, support and automation", "retail"],
  ["Energy", "Operational intelligence, field workflows and asset data", "industry-solutions"],
  ["Logistics", "Orders, inventory, dispatch, field teams and visibility", "industry-solutions"],
] as const;

export default function Home() {
  const cards = featured.map((slug) => offerings.find((o) => o.slug === slug)).filter(Boolean);
  return (
    <main className="overflow-hidden">
      <section className="relative border-b border-white/10">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_70%_40%,rgba(98,217,255,.07),transparent_35%),linear-gradient(rgba(255,255,255,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.025)_1px,transparent_1px)] bg-[length:auto,56px_56px,56px_56px]" />
        <div className={`${shell} relative grid items-center gap-5 py-8 md:grid-cols-12 md:py-12 lg:min-h-[690px]`}>
          <div className="min-w-0 md:col-span-5 lg:pr-8">
            <div className="hero-kicker-row"><span className="hero-dot" /><p className={kicker}>{company.name} AI</p></div>
            <h1 className={`mt-5 ${display}`}>INTELLIGENCE THAT BUILDS.<br />AUTOMATION THAT DELIVERS.</h1>
            <p className="mt-6 max-w-xl text-pretty text-base leading-7 text-white/55 md:text-lg">
              REVNCIA helps organizations turn AI into practical operating capability — connecting people, processes, data and systems so customers get answers, staff get one system, and leaders can measure what changed.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/services" className={btnPrimary}>Explore services <span>→</span><BetaLabel /></Link>
              <Link href="/platform" className={btnSecondary}>Explore REVNCIA OS <span>→</span></Link>
            </div>
            <div className="mt-8 grid max-w-xl gap-3 sm:grid-cols-2">
              {["AI strategy to implementation", "Automation across real workflows", "Governed data, knowledge and AI", "Long-term managed operations"].map((x) => (
                <div key={x} className="flex items-center gap-2 text-xs text-white/50"><span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />{x}</div>
              ))}
            </div>
          </div>
          <div className="relative min-w-0 md:col-span-7 lg:-mr-10">
            <div className="grid items-center gap-0 lg:grid-cols-[1fr_1.08fr]">
              <div className="relative z-10 order-2 -mr-10 lg:order-1 lg:mr-[-80px]"><AIEcosystem /></div>
              <div className="relative z-20 order-1 lg:order-2"><HumanoidRobot /></div>
            </div>
          </div>
        </div>
      </section>

      <section className={`${shell} py-6 md:py-8`}>
        <div className="metric-strip">
          <div><div className="metric-value">AI</div><div className="metric-label">Strategy + execution</div></div>
          <div><div className="metric-value">112</div><div className="metric-label">Service capabilities</div></div>
          <div><div className="metric-value">OS</div><div className="metric-label">One operating layer</div></div>
          <div><div className="metric-value">24/7*</div><div className="metric-label">Automation capability</div></div>
        </div>
        <p className="mt-2 text-right text-[9px] uppercase tracking-[.14em] text-white/25">*Coverage depends on your configured operating model.</p>
      </section>

      <section className={`${band} py-20`}>
        <div className={shell}>
          <div className="max-w-3xl"><p className="site-section-label">Our services</p><h2 className="mt-4 page-display text-4xl md:text-5xl">Everything you need to transform how work gets done.</h2><p className="mt-5 text-base leading-7 text-white/50">From AI strategy and automation to cloud, cybersecurity, data, applications, customer operations and public-sector platforms — REVNCIA brings transformation into one coordinated delivery model.</p></div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {cards.map((o) => o && <Link key={o.slug} href={`/services/${o.slug}`} className="service-grid-card"><ServiceVisual slug={o.slug} name={o.name} /><div className="p-5"><p className="text-[.62rem] font-semibold uppercase tracking-[.16em] text-cyan-200/75">{o.n} · {o.group}</p><h3 className="mt-2 text-xl font-semibold text-white">{o.name}</h3><p className="mt-2 text-sm leading-6 text-white/45">{o.summary}</p><span className="mt-5 inline-flex text-[.65rem] font-semibold uppercase tracking-[.14em] text-white/70">Explore service →</span></div></Link>)}
          </div>
          <Link href="/services" className={`${btnSecondary} mt-8`}>View all services <span>→</span></Link>
        </div>
      </section>

      <section className={`${shell} py-20`}>
        <div className="grid gap-10 lg:grid-cols-[.95fr_1.05fr] lg:items-center">
          <div><p className="site-section-label">Our platform</p><h2 className="mt-4 page-display text-4xl md:text-5xl">One operating system for AI transformation.</h2><p className="mt-5 text-base leading-7 text-white/50">REVNCIA OS connects the intelligence layer to your organization’s workflows, knowledge, integrations, analytics and governance. It is designed to turn individual AI projects into an operating model your team can keep improving.</p><div className="mt-7 grid gap-3 sm:grid-cols-2">{["AI Core & model routing", "AI agents & digital workforce", "Workflow automation", "Knowledge & enterprise search", "Integrations & systems", "Analytics & governance"].map(x=><div key={x} className="tech-panel p-4 text-sm text-white/70"><span className="text-cyan-200">◈</span><span className="ml-3">{x}</span></div>)}</div><Link href="/platform" className={`${btnSecondary} mt-8`}>Explore the platform →</Link></div>
          <div className="tech-panel min-h-[480px] p-6"><AIEcosystem /></div>
        </div>
      </section>

      <section className={`${band} py-20`}>
        <div className={shell}><p className="site-section-label">Industries we serve</p><h2 className="mt-4 max-w-4xl page-display text-4xl md:text-5xl">AI solutions shaped around the people and outcomes your sector is responsible for.</h2><p className="mt-5 max-w-3xl text-base leading-7 text-white/50">The technology is shared. The operating context is not. REVNCIA adapts workflows, controls, language and delivery to the environment where your organization works.</p><div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">{industries.map(([name,text,slug])=><Link key={name} href={`/services/${slug}`} className="tech-panel p-5 transition hover:border-cyan-200/25"><div className="text-2xl text-white/80">◈</div><h3 className="mt-5 font-semibold text-white">{name}</h3><p className="mt-2 text-xs leading-5 text-white/40">{text}</p></Link>)}</div><Link href="/industries" className={`${btnSecondary} mt-8`}>View industries →</Link></div>
      </section>

      <section className={`${shell} py-20`}>
        <p className="site-section-label">Why REVNCIA</p><h2 className="mt-4 max-w-4xl page-display text-4xl md:text-5xl">Technology is useful only when people can operate it.</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-3">{[["01","Business-first transformation","We begin with the work, the people who own it, the friction they face and the outcome leadership needs."],["02","Governed AI by design","Identity, access, cost controls, knowledge, safety and observability are designed into the operating layer."],["03","Built for the long term","Strategy becomes implementation, implementation becomes a platform, and the platform becomes a continuously managed capability."]].map(([n,t,d])=><div key={n} className="tech-panel p-6"><span className="text-[.65rem] tracking-[.18em] text-cyan-200">{n}</span><h3 className="mt-5 text-2xl font-semibold text-white">{t}</h3><p className="mt-3 text-sm leading-7 text-white/45">{d}</p></div>)}</div>
      </section>

      <section className={`${band} py-20`}><div className={shell}><p className="site-section-label">Proof through measurement</p><h2 className="mt-4 max-w-4xl page-display text-4xl md:text-5xl">Transformation should be visible in the numbers.</h2><p className="mt-5 max-w-3xl text-base leading-7 text-white/50">Use operational metrics to see whether automation is actually improving service, cost, cycle time and public impact. The examples below illustrate the measurement model; your baseline is established during discovery.</p><div className="mt-10 grid gap-4 md:grid-cols-3"><UniqueChart id="home-containment" caption="Customer requests resolved without unnecessary handoff — example"/><UniqueChart id="home-cost-routing" caption="AI usage routed across approved models — example"/><UniqueChart id="home-public-impact" caption="Case cycle time after workflow redesign — example"/></div></div></section>

      <section className={`${shell} py-20`}><div className="grid gap-10 lg:grid-cols-2"><div><p className="site-section-label">Transformation journey</p><h2 className="mt-4 page-display text-4xl md:text-5xl">A roadmap that becomes a working system.</h2><p className="mt-5 text-base leading-7 text-white/50">REVNCIA can stay with you from strategy through implementation and managed operation. Each stage is designed to leave something useful behind.</p></div><div className="grid gap-3 sm:grid-cols-2">{flywheel.map((item,i)=><div key={item} className="tech-panel p-4"><span className="text-[.62rem] text-cyan-200">{String(i+1).padStart(2,"0")}</span><p className="mt-2 font-semibold text-white">{item}</p></div>)}</div></div><div className="mt-10 grid gap-3 sm:grid-cols-2 md:grid-cols-5">{engagement.map(e=><div key={e.layer} className="tech-panel p-4"><p className="font-semibold text-white">{e.layer}</p><p className="mt-2 text-xs leading-5 text-white/40">{e.cadence}</p></div>)}</div></section>

      <section className="border-t border-white/10"><div className={`${shell} py-16`}><div className="tech-panel grid gap-8 p-7 md:grid-cols-[1fr_auto] md:items-center md:p-10"><div><p className="site-section-label">Transform your business</p><h2 className="mt-4 page-display text-4xl md:text-5xl">Ready to turn AI into an operating capability?</h2><p className="mt-4 max-w-2xl text-base leading-7 text-white/45">Tell us what is waiting today — customer conversations, manual workflows, disconnected systems, knowledge, data or a transformation programme. We will help define the next practical step.</p></div><div className="flex flex-wrap gap-3"><Link href="/contact" className={btnPrimary}>Request a conversation →</Link><Link href="/services" className={btnSecondary}>Explore services →</Link></div></div></div></section>
    </main>
  );
}

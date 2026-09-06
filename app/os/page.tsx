import Link from "next/link";

const cards = [
  { label: "AI Core", value: "Ready", detail: "Governed intelligence layer", href: "/os/ai" },
  { label: "Active agents", value: "18", detail: "Configured workers", href: "/os/agents" },
  { label: "Workflows", value: "42", detail: "Automated operating paths", href: "/os/workflows" },
  { label: "Projects", value: "12", detail: "Active transformation work", href: "/os/projects" },
];

const activity = [
  ["Customer Service Agent", "Running", "98% successful handoffs"],
  ["Invoice Processing Workflow", "Running", "1,284 tasks completed"],
  ["Executive Insight Agent", "Ready", "12 approved knowledge sources"],
] as const;

export default function OSHome() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-12">
      <div className="flex flex-wrap items-end justify-between gap-5">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[.24em] text-cyan-200/60">Organization workspace</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Command Center</h1>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-white/50">Move from service discovery to governed delivery. Use the operating modules to understand capability, request work, and track outcomes.</p>
        </div>
        <Link href="/os/service-requests" className="inline-flex bg-white px-5 py-3 text-xs font-semibold uppercase tracking-[.12em] text-black transition hover:bg-cyan-100">New service request <span className="ml-2" aria-hidden>→</span></Link>
      </div>

      <section className="mt-10 grid gap-3 sm:grid-cols-2 xl:grid-cols-4" aria-label="Workspace overview">
        {cards.map((card) => (
          <Link key={card.href} href={card.href} className="border border-white/10 bg-white/[.035] p-5 transition hover:border-cyan-200/30 hover:bg-white/[.06]">
            <p className="text-xs font-medium text-white/45">{card.label}</p>
            <p className="mt-5 text-3xl font-semibold text-white">{card.value}</p>
            <p className="mt-2 text-xs text-cyan-100/60">{card.detail}</p>
          </Link>
        ))}
      </section>

      <section className="mt-10 grid gap-4 lg:grid-cols-[1.2fr_.8fr]">
        <div className="border border-white/10 bg-white/[.025] p-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[.2em] text-cyan-200/60">Live operations</p>
              <h2 className="mt-2 text-xl font-semibold text-white">AI Operations</h2>
            </div>
            <Link href="/os/analytics" className="text-xs text-cyan-100/70 hover:text-white">View analytics →</Link>
          </div>
          <div className="mt-6 divide-y divide-white/10">
            {activity.map(([name, status, detail]) => (
              <div key={name} className="flex flex-wrap items-center justify-between gap-3 py-4 first:pt-0 last:pb-0">
                <div><p className="text-sm font-medium text-white">{name}</p><p className="mt-1 text-xs text-white/40">{detail}</p></div>
                <span className="text-[10px] font-semibold uppercase tracking-[.12em] text-emerald-200">{status}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="border border-white/10 bg-white/[.025] p-6">
          <p className="text-[10px] font-semibold uppercase tracking-[.2em] text-cyan-200/60">Transformation workspace</p>
          <h2 className="mt-2 text-xl font-semibold text-white">A clear path to operating value</h2>
          <ol className="mt-6 space-y-4 text-sm text-white/55">
            <li><span className="mr-3 text-cyan-200">01</span>Choose a capability from the service catalog.</li>
            <li><span className="mr-3 text-cyan-200">02</span>Request an assessment and define scope.</li>
            <li><span className="mr-3 text-cyan-200">03</span>Track implementation, adoption, and KPIs.</li>
          </ol>
          <Link href="/os/services" className="mt-7 inline-flex text-sm font-semibold text-cyan-100 hover:text-white">Browse service catalog →</Link>
        </div>
      </section>
    </div>
  );
}

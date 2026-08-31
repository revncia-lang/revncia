import Link from "next/link";

const metrics = [
  {
    label: "AI Requests",
    value: "0",
    detail: "No activity yet",
  },
  {
    label: "Active Agents",
    value: "0",
    detail: "Ready to configure",
  },
  {
    label: "Workflows",
    value: "0",
    detail: "Automation not configured",
  },
  {
    label: "Knowledge",
    value: "0",
    detail: "Sources not connected",
  },
];

const modules = [
  {
    title: "AI Core",
    description:
      "Central intelligence layer for model routing, context, memory, tools and controlled AI execution.",
    href: "/os/ai",
    icon: "✦",
  },
  {
    title: "Agents",
    description:
      "Create specialized AI workers that can perform defined organizational tasks.",
    href: "/os/agents",
    icon: "◉",
  },
  {
    title: "Workflows",
    description:
      "Turn repetitive processes into governed, measurable automations.",
    href: "/os/workflows",
    icon: "◇",
  },
  {
    title: "Knowledge",
    description:
      "Connect documents, policies, SOPs and organizational knowledge to REVNCIA AI.",
    href: "/os/knowledge",
    icon: "▣",
  },
];

export default function OSHome() {
  return (
    <div className="relative min-h-[calc(100vh-72px)] overflow-hidden">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[15%] top-[-10%] h-[420px] w-[420px] rounded-full bg-cyan-400/[0.045] blur-[120px]" />
        <div className="absolute right-[-10%] top-[20%] h-[500px] w-[500px] rounded-full bg-blue-500/[0.035] blur-[140px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1500px] px-5 py-8 sm:px-8 lg:px-10 lg:py-10">
        {/* Hero */}
        <section>
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/15 bg-cyan-300/[0.045] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-200/70">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
                Operating System
              </div>

              <h1 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Your organization,
                <span className="block text-cyan-200/90">
                  intelligently connected.
                </span>
              </h1>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/45 sm:text-base">
                REVNCIA OS is the command layer for AI, people, workflows,
                knowledge, integrations and measurable organizational impact.
              </p>
            </div>

            <Link
              href="/os/ai"
              className="inline-flex w-fit items-center gap-2 rounded-xl border border-cyan-300/20 bg-cyan-300/10 px-5 py-3 text-sm font-medium text-cyan-100 transition hover:border-cyan-300/40 hover:bg-cyan-300/15"
            >
              <span>✦</span>
              Open REVNCIA AI
              <span>→</span>
            </Link>
          </div>
        </section>

        {/* Metrics */}
        <section className="mt-10 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-2xl border border-white/10 bg-white/[0.025] p-5 backdrop-blur-sm"
            >
              <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/30">
                {metric.label}
              </div>

              <div className="mt-3 text-3xl font-semibold tracking-tight text-white">
                {metric.value}
              </div>

              <div className="mt-1 text-xs text-white/35">
                {metric.detail}
              </div>
            </div>
          ))}
        </section>

        {/* AI command center */}
        <section className="mt-6 overflow-hidden rounded-3xl border border-cyan-300/10 bg-gradient-to-br from-cyan-300/[0.055] via-white/[0.02] to-transparent">
          <div className="p-6 sm:p-8 lg:p-10">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-xl text-cyan-200">
                ✦
              </div>

              <div>
                <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-cyan-300/60">
                  REVNCIA AI
                </div>

                <h2 className="mt-2 text-xl font-semibold text-white sm:text-2xl">
                  Ask REVNCIA
                </h2>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-white/40">
                  The AI command interface will become the central entry point
                  into your organization's knowledge, workflows, systems and
                  approved actions.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <div className="flex min-h-12 flex-1 items-center rounded-xl border border-white/10 bg-black/20 px-4 text-sm text-white/30">
                Ask about your organization...
              </div>

              <Link
                href="/os/ai"
                className="flex min-h-12 items-center justify-center rounded-xl bg-white px-6 text-sm font-semibold text-[#071014] transition hover:bg-cyan-100"
              >
                Start →
              </Link>
            </div>
          </div>
        </section>

        {/* Modules */}
        <section className="mt-10">
          <div className="flex items-end justify-between">
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/30">
                Core Platform
              </div>

              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white">
                Build your organization
              </h2>
            </div>
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {modules.map((module) => (
              <Link
                key={module.href}
                href={module.href}
                className="group rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition duration-200 hover:-translate-y-0.5 hover:border-cyan-300/20 hover:bg-white/[0.04]"
              >
                <div className="flex items-start justify-between gap-5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.035] text-lg text-cyan-200/80 transition group-hover:border-cyan-300/20 group-hover:bg-cyan-300/10">
                    {module.icon}
                  </div>

                  <span className="text-white/20 transition group-hover:text-cyan-200/70">
                    →
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-semibold text-white">
                  {module.title}
                </h3>

                <p className="mt-2 max-w-xl text-sm leading-6 text-white/40">
                  {module.description}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* Foundation status */}
        <section className="mt-10 rounded-2xl border border-white/10 bg-black/10 p-5 sm:p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="text-sm font-medium text-white/80">
                REVNCIA OS Foundation
              </div>

              <div className="mt-1 text-xs text-white/35">
                Core application shell initialized. AI services and
                organization infrastructure will be connected in subsequent
                stages.
              </div>
            </div>

            <div className="inline-flex items-center gap-2 text-xs text-emerald-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Foundation Ready
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
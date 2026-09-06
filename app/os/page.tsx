import Link from "next/link";

const modules = [
  ["AI Core", "/os/ai", "AI models, assistants and governed intelligence."],
  ["Agents", "/os/agents", "Deploy task-focused AI agents."],
  ["Workflows", "/os/workflows", "Automate repeatable organisational processes."],
  ["Projects", "/os/projects", "Manage transformation initiatives."],
  ["Service Requests", "/os/service-requests", "Track customer and internal requests."],
  ["Service Catalog", "/os/services", "Manage the REVNCIA service portfolio."],
  ["Knowledge", "/os/knowledge", "Centralise organisational knowledge."],
  ["Integrations", "/os/integrations", "Connect business systems and services."],
  ["Analytics", "/os/analytics", "Monitor operational performance."],
  ["Governance", "/os/governance", "Manage controls, access and oversight."],
];

export default function OSHomePage() {
  return (
    <main>

      <section className="border-b border-[#e1e1e1] bg-white">
        <div className="mx-auto w-full max-w-[1600px] px-4 py-14 sm:px-6 md:py-18 lg:px-8 xl:px-10">

          <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">

            <div className="max-w-[1600px]">
              <div className="inline-flex items-center border border-[#d9d9d9] bg-[#f5f5f5] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#555]">
                REVNCIA Operating System
              </div>

              <h1 className="mt-5 text-4xl font-semibold leading-[1.08] tracking-[-0.03em] text-[#242424] md:text-6xl">
                One command centre for your
                <span className="block text-[#0067b8]">
                  AI-powered organisation.
                </span>
              </h1>

              <p className="mt-5 max-w-3xl text-base leading-8 text-[#555] md:text-lg">
                REVNCIA OS brings AI, agents, workflows, projects, services,
                knowledge, integrations, analytics and governance into one
                professional operating environment.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/os/ai"
                  className="inline-flex min-h-[48px] items-center justify-center border border-[#0067b8] bg-[#0067b8] px-7 py-3 text-sm font-bold !text-white transition hover:bg-[#005a9f] hover:!text-white"
                >
                  Open AI Core
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex min-h-[48px] items-center justify-center border border-[#0067b8] bg-white px-7 py-3 text-sm font-bold text-[#0067b8] transition hover:bg-[#f3f8fc]"
                >
                  Discuss Your Requirements
                </Link>
              </div>
            </div>

            <div className="border border-[#d9d9d9] bg-[#f5f5f5] p-5 shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
              <div className="border border-[#dedede] bg-white p-5">
                <div className="flex items-center justify-between border-b border-[#e5e5e5] pb-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#777]">
                      REVNCIA OS
                    </p>
                    <p className="mt-1 text-lg font-semibold text-[#242424]">
                      Command Center
                    </p>
                  </div>

                  <span className="flex h-10 w-10 items-center justify-center bg-[#0067b8] text-sm font-bold !text-white">
                    R
                  </span>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="border border-[#e1e1e1] bg-[#fafafa] p-4">
                    <p className="text-xs font-semibold text-[#777]">AI</p>
                    <p className="mt-1 text-sm font-semibold">Core</p>
                  </div>

                  <div className="border border-[#e1e1e1] bg-[#fafafa] p-4">
                    <p className="text-xs font-semibold text-[#777]">WORK</p>
                    <p className="mt-1 text-sm font-semibold">Flows</p>
                  </div>

                  <div className="border border-[#e1e1e1] bg-[#fafafa] p-4">
                    <p className="text-xs font-semibold text-[#777]">DATA</p>
                    <p className="mt-1 text-sm font-semibold">Insights</p>
                  </div>

                  <div className="border border-[#e1e1e1] bg-[#fafafa] p-4">
                    <p className="text-xs font-semibold text-[#777]">CONTROL</p>
                    <p className="mt-1 text-sm font-semibold">Governance</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="bg-[#f5f5f5]">
        <div className="mx-auto w-full max-w-[1600px] px-4 py-14 sm:px-6 lg:px-8 xl:px-10">

          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#666]">
              OS Modules
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-[#242424] md:text-4xl">
              Everything is visible in one workspace.
            </h2>
          </div>

          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {modules.map(([title, href, description]) => (
              <Link
                key={href}
                href={href}
                className="group border border-[#dedede] bg-white p-5 shadow-[0_5px_18px_rgba(0,0,0,0.035)] transition hover:-translate-y-0.5 hover:border-[#b9d5e8] hover:shadow-[0_8px_24px_rgba(0,0,0,0.07)]"
              >
                <h3 className="text-base font-semibold text-[#242424] group-hover:text-[#0067b8]">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#666]">
                  {description}
                </p>

                <span className="mt-5 inline-flex text-sm font-bold text-[#0067b8]">
                  Open module
                </span>
              </Link>
            ))}
          </div>

        </div>
      </section>

    </main>
  );
}

import Link from "next/link";

export function RevnciaHero() {
  return (
    <section className="relative overflow-hidden border-b border-[#e1e1e1] bg-white">
      <div className="mx-auto w-full max-w-[1600px] px-4 py-16 sm:px-6 md:py-20 lg:px-8 xl:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">

          <div className="max-w-4xl">
            <div className="inline-flex items-center border border-[#d9d9d9] bg-[#f5f5f5] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#555]">
              REVNCIA AI Platform
            </div>

            <h1 className="mt-6 text-4xl font-semibold leading-[1.08] tracking-[-0.03em] text-[#242424] sm:text-5xl md:text-6xl lg:text-7xl">
              Transform your organisation with
              <span className="block text-[#0067b8]">
                AI, Automation and Digital Operations.
              </span>
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[#505050] md:text-lg">
              REVNCIA brings AI, intelligent automation, digital transformation,
              cloud, data, software, security and managed services together in
              one professional operating environment.
            </p>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-[#666] md:text-base">
              Build smarter workflows, improve service delivery, reduce
              operational friction and give your organisation a governed
              foundation for long-term digital growth.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex min-h-[50px] items-center justify-center border border-[#0067b8] bg-[#0067b8] px-8 py-3.5 text-sm font-bold !text-white shadow-[0_6px_18px_rgba(0,103,184,0.18)] transition hover:border-[#005a9f] hover:bg-[#005a9f] hover:!text-white focus:outline-none focus:ring-2 focus:ring-[#0067b8] focus:ring-offset-2"
              >
                Discuss Your Requirements
              </Link>

              <Link
                href="/services"
                className="inline-flex min-h-[50px] items-center justify-center border border-[#0067b8] bg-white px-8 py-3.5 text-sm font-bold text-[#0067b8] transition hover:bg-[#f3f8fc] focus:outline-none focus:ring-2 focus:ring-[#0067b8] focus:ring-offset-2"
              >
                Explore Services
              </Link>
            </div>

            <div className="mt-10 grid gap-4 border-t border-[#e5e5e5] pt-7 sm:grid-cols-3">
              <div>
                <p className="text-2xl font-semibold text-[#242424]">
                  AI
                </p>
                <p className="mt-1 text-sm leading-6 text-[#666]">
                  Governed AI infrastructure and intelligent assistants.
                </p>
              </div>

              <div>
                <p className="text-2xl font-semibold text-[#242424]">
                  Automation
                </p>
                <p className="mt-1 text-sm leading-6 text-[#666]">
                  Connected workflows that reduce repetitive work.
                </p>
              </div>

              <div>
                <p className="text-2xl font-semibold text-[#242424]">
                  Transformation
                </p>
                <p className="mt-1 text-sm leading-6 text-[#666]">
                  Digital operating models built for sustainable growth.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative min-h-[430px] overflow-hidden border border-[#d9d9d9] bg-[#f5f5f5] shadow-[0_12px_40px_rgba(0,0,0,0.07)] md:min-h-[520px]">

              <div className="absolute inset-0 bg-[linear-gradient(135deg,#ffffff_0%,#f5f8fb_55%,#edf4f9_100%)]" />

              <div className="absolute right-8 top-8 h-24 w-24 border border-[#c9dce9] bg-white/80" />
              <div className="absolute bottom-8 left-8 h-16 w-16 border border-[#c9dce9] bg-white/80" />

              <div className="absolute left-1/2 top-1/2 w-[82%] -translate-x-1/2 -translate-y-1/2">
                <div className="border border-[#cfdce5] bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
                  <div className="flex items-center justify-between border-b border-[#e5e5e5] pb-4">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#666]">
                        REVNCIA
                      </p>
                      <p className="mt-1 text-lg font-semibold text-[#242424]">
                        Digital Operations
                      </p>
                    </div>

                    <span className="flex h-10 w-10 items-center justify-center bg-[#0067b8] text-sm font-bold !text-white">
                      R
                    </span>
                  </div>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    <div className="border border-[#e1e1e1] bg-[#fafafa] p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#777]">
                        AI Core
                      </p>
                      <p className="mt-2 text-sm font-semibold text-[#242424]">
                        Intelligent systems
                      </p>
                    </div>

                    <div className="border border-[#e1e1e1] bg-[#fafafa] p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#777]">
                        Automation
                      </p>
                      <p className="mt-2 text-sm font-semibold text-[#242424]">
                        Connected workflows
                      </p>
                    </div>

                    <div className="border border-[#e1e1e1] bg-[#fafafa] p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#777]">
                        Data
                      </p>
                      <p className="mt-2 text-sm font-semibold text-[#242424]">
                        Actionable intelligence
                      </p>
                    </div>

                    <div className="border border-[#e1e1e1] bg-[#fafafa] p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#777]">
                        Governance
                      </p>
                      <p className="mt-2 text-sm font-semibold text-[#242424]">
                        Controlled operations
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 border-l-4 border-[#0067b8] bg-[#f3f8fc] p-4">
                    <p className="text-sm font-semibold text-[#242424]">
                      One operating environment for modern digital services.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <p className="mt-3 text-center text-xs text-[#777]">
              Enterprise AI and digital transformation environment
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

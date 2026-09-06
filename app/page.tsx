import HomeSearch from "@/components/HomeSearch";
import Link from "next/link";
import { shell } from "@/lib/ui";
import { ServiceGrid } from "@/components/ServiceGrid";

const solutions = [
  {
    title: "AI & Automation",
    text: "Design intelligent workflows, AI assistants and automation systems that reduce repetitive work and improve operational speed.",
  },
  {
    title: "Digital Transformation",
    text: "Modernise processes, customer journeys and organisational operations with practical digital transformation programmes.",
  },
  {
    title: "Cybersecurity & Protection",
    text: "Strengthen organisational resilience with security controls, risk visibility, governance and protection-focused technology.",
  },
  {
    title: "Enterprise Technology",
    text: "Connect applications, data, cloud infrastructure and business systems into a reliable technology foundation.",
  },
];

const platformCapabilities = [
  "AI Gateway & Cost Control",
  "Workflow Automation",
  "Customer AI Assistants",
  "Enterprise Integrations",
  "Knowledge & Document Systems",
  "Security & Governance",
  "Usage & Performance Monitoring",
  "Multi-tenant Platform Architecture",
];

const industries = [
  {
    title: "Government & Public Sector",
    text: "Digital services, workflow modernisation, citizen-facing systems and operational automation.",
    image: "/images/industries/government-public-sector.svg",
  },
  {
    title: "Banking & Financial Services",
    text: "Secure automation, customer experience, operational efficiency and technology transformation.",
    image: "/images/industries/banking-financial-services.svg",
  },
  {
    title: "Education & Universities",
    text: "Modern digital platforms, intelligent administration, student services and institutional automation.",
    image: "/images/industries/education-universities.svg",
  },
  {
    title: "Corporate & Industrial",
    text: "Connected operations, enterprise automation, data-driven decisions and technology optimisation.",
    image: "/images/industries/corporate-industrial.svg",
  },
];

const outcomes = [
  "Lower operating costs",
  "Faster service delivery",
  "Improved customer experience",
  "Stronger security and governance",
  "Better operational visibility",
  "Scalable digital infrastructure",
];

export default function HomePage() {
  return (
    <main className="min-w-0 bg-white text-[#242424]">

      {/* HERO */}
      <section className="border-b border-[#e6e6e6] bg-[#f7f9fb]">
        <div
          className={`${shell} grid min-h-[620px] items-center gap-12 py-16 lg:grid-cols-[1.05fr_.95fr] lg:py-20`}
        >
          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-bold tracking-[0.16em] text-[#5f6368]">
              REVNCIA AI PLATFORM
            </p>

            <h1 className="text-5xl font-bold leading-[1.05] tracking-[-0.035em] text-[#242424] sm:text-6xl lg:text-7xl">
              Transform your organisation with intelligent technology.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#5f6368] sm:text-xl">
              REVNCIA helps organisations modernise operations, automate
              workflows, deploy AI and build secure digital systems designed
              around measurable business outcomes.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center rounded-md bg-[#0078D4] px-7 text-base font-bold !text-white transition hover:bg-[#106ebe]"
              >
                Start a conversation
              </Link>

              <Link
                href="/services"
                className="inline-flex min-h-12 items-center justify-center rounded-md border border-[#8a8a8a] bg-white px-7 text-base font-bold text-[#242424] transition hover:bg-[#f3f3f3]"
              >
                Explore services
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm font-semibold text-[#5f6368]">
              <span>AI & Automation</span>
              <span>Digital Transformation</span>
              <span>Enterprise Technology</span>
              <span>Cybersecurity</span>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl border border-[#d9d9d9] bg-white shadow-[0_24px_70px_rgba(0,0,0,0.10)]">
              <div className="flex items-center gap-2 border-b border-[#e6e6e6] px-6 py-4">
                <div className="h-2.5 w-2.5 rounded-full bg-[#d13438]" />
                <div className="h-2.5 w-2.5 rounded-full bg-[#ffb900]" />
                <div className="h-2.5 w-2.5 rounded-full bg-[#107c10]" />
                <span className="ml-3 text-xs font-bold tracking-[0.12em] text-[#666]">
                  REVNCIA COMMAND CENTRE
                </span>
              </div>

              <div className="p-6 sm:p-8">
                <div className="rounded-xl bg-[#f5f7fa] p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#666]">
                        Organisation
                      </p>
                      <h2 className="mt-2 text-2xl font-bold text-[#242424]">
                        Digital Operations
                      </h2>
                    </div>
                    <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-[#d9e2ea] bg-white shadow-sm">
                      <svg
                        width="48"
                        height="48"
                        viewBox="0 0 48 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-label="REVNCIA Global AI"
                        role="img"
                      >
                        <circle
                          cx="24"
                          cy="24"
                          r="19"
                          stroke="#0078D4"
                          strokeWidth="2"
                        />

                        <ellipse
                          cx="24"
                          cy="24"
                          rx="8"
                          ry="19"
                          stroke="#00A4EF"
                          strokeWidth="1.5"
                        />

                        <ellipse
                          cx="24"
                          cy="24"
                          rx="19"
                          ry="8"
                          stroke="#00A4EF"
                          strokeWidth="1.5"
                        />

                        <path
                          d="M15 18L24 13L33 18L35 29L27 35L17 32L15 18Z"
                          stroke="#0078D4"
                          strokeWidth="1.7"
                          strokeLinejoin="round"
                        />

                        <path
                          d="M15 18L24 24L33 18"
                          stroke="#0078D4"
                          strokeWidth="1.5"
                        />

                        <path
                          d="M24 13V24L27 35"
                          stroke="#0078D4"
                          strokeWidth="1.5"
                        />

                        <path
                          d="M17 32L24 24L35 29"
                          stroke="#0078D4"
                          strokeWidth="1.5"
                        />

                        <circle cx="15" cy="18" r="3" fill="#0078D4" />
                        <circle cx="24" cy="13" r="3" fill="#00A4EF" />
                        <circle cx="33" cy="18" r="3" fill="#0078D4" />
                        <circle cx="24" cy="24" r="3.5" fill="#0078D4" />
                        <circle cx="17" cy="32" r="3" fill="#00A4EF" />
                        <circle cx="27" cy="35" r="3" fill="#0078D4" />
                        <circle cx="35" cy="29" r="3" fill="#00A4EF" />
                      </svg>
                    </div>
                  </div>

                  <div className="mt-7 grid gap-3 sm:grid-cols-2">
                    {[
                      ["AI Automation", "Active"],
                      ["Workflow Engine", "Ready"],
                      ["Security", "Protected"],
                      ["Analytics", "Connected"],
                    ].map(([label, status]) => (
                      <div
                        key={label}
                        className="rounded-lg border border-[#e1e5e9] bg-white p-4"
                      >
                        <p className="text-sm font-semibold text-[#242424]">
                          {label}
                        </p>
                        <p className="mt-1 text-xs font-semibold text-[#107c10]">
                          {status}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 rounded-xl border border-[#e1e5e9] bg-white p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#666]">
                    Platform principle
                  </p>
                  <p className="mt-2 text-base font-semibold leading-6 text-[#242424]">
                    Technology should simplify operations, protect the
                    organisation and create measurable value.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <HomeSearch />

      {/* INTRO */}
      <section>
        <div className={`${shell} py-16 lg:py-20`}>
          <div className="max-w-4xl">
            <p className="text-sm font-bold tracking-[0.14em] text-[#666]">
              ONE TECHNOLOGY PARTNER
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-[-0.025em] text-[#242424] sm:text-5xl">
              From business challenge to working digital solution.
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#5f6368]">
              REVNCIA brings strategy, artificial intelligence, automation,
              cybersecurity and enterprise technology together in one
              structured delivery model.
            </p>
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="border-y border-[#e6e6e6] bg-[#fafafa]">
        <div className={`${shell} py-16 lg:py-20`}>
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-bold tracking-[0.14em] text-[#666]">
              CORE SOLUTIONS
            </p>
            <h2 className="mt-3 text-4xl font-bold tracking-[-0.025em]">
              Built for real operational needs.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {solutions.map((item, index) => (
              <article
                key={item.title}
                className="rounded-xl border border-[#dedede] bg-white p-7 transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#e8f3fb] text-sm font-bold text-[#0078D4]">
                  0{index + 1}
                </div>

                <h3 className="mt-6 text-2xl font-bold text-[#242424]">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-[#5f6368]">
                  {item.text}
                </p>

                <Link
                  href="/services"
                  className="mt-6 inline-flex font-bold text-[#0078D4] hover:underline"
                >
                  Learn more →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE CATALOG */}
      <ServiceGrid />

      {/* PLATFORM */}
      <section className="bg-[#1f1f1f] text-white">
        <div className={`${shell} py-16 lg:py-20`}>
          <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm font-bold tracking-[0.14em] text-[#c8c8c8]">
                REVNCIA PLATFORM
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-[-0.025em] sm:text-5xl">
                One platform. Multiple capabilities.
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-[#d2d2d2]">
                A foundation for AI-enabled business operations, automation,
                integrations, security and scalable digital transformation.
              </p>

              <Link
                href="/platform"
                className="mt-8 inline-flex min-h-11 items-center rounded-md bg-[#0078D4] px-6 font-bold text-white hover:bg-[#106ebe]"
              >
                Explore REVNCIA Platform
              </Link>
            </div>

            <div className="grid gap-px overflow-hidden rounded-xl border border-[#444] bg-[#444] sm:grid-cols-2">
              {platformCapabilities.map((capability, index) => (
                <div
                  key={capability}
                  className="bg-[#292929] p-6"
                >
                  <span className="text-xs font-bold text-[#9f9f9f]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-base font-bold text-white">
                    {capability}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="border-t border-[#e6e6e6] bg-white">
        <div className={`${shell} py-16 lg:py-20`}>

          <div className="max-w-4xl">
            <p className="text-sm font-bold tracking-[0.14em] text-[#666]">
              INDUSTRIES
            </p>

            <h2 className="mt-3 text-4xl font-bold tracking-[-0.025em] text-[#242424] sm:text-5xl">
              Technology adapted to your environment.
            </h2>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-[#5f6368]">
              REVNCIA solutions are designed around the operational,
              security, regulatory and technology requirements of different
              industries.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">

            {/* GOVERNMENT */}
            <article className="group overflow-hidden rounded-xl border border-[#dedede] bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg">
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#f3f5f7]">
                <img
                  src="/images/industries/government-public-sector.svg"
                  alt="Government and Public Sector"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-300 group-hover:scale-[1.02]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

                <div className="absolute left-5 top-5 rounded-md border border-white/60 bg-white/90 px-3 py-1.5 text-xs font-bold tracking-[0.08em] text-[#242424] backdrop-blur-sm">
                  PUBLIC SECTOR
                </div>
              </div>

              <div className="p-7">
                <h3 className="text-2xl font-bold text-[#242424]">
                  Government &amp; Public Sector
                </h3>

                <p className="mt-3 leading-7 text-[#5f6368]">
                  Digital services, workflow modernisation, citizen-facing
                  systems and operational automation.
                </p>

                <Link
                  href="/industries"
                  className="mt-5 inline-flex font-bold text-[#0078D4] hover:underline"
                >
                  Explore industry solutions -&gt;
                </Link>
              </div>
            </article>

            {/* BANKING */}
            <article className="group overflow-hidden rounded-xl border border-[#dedede] bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg">
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#f3f5f7]">
                <img
                  src="/images/industries/banking-financial-services.svg"
                  alt="Banking and Financial Services"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-300 group-hover:scale-[1.02]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

                <div className="absolute left-5 top-5 rounded-md border border-white/60 bg-white/90 px-3 py-1.5 text-xs font-bold tracking-[0.08em] text-[#242424] backdrop-blur-sm">
                  FINANCIAL SERVICES
                </div>
              </div>

              <div className="p-7">
                <h3 className="text-2xl font-bold text-[#242424]">
                  Banking &amp; Financial Services
                </h3>

                <p className="mt-3 leading-7 text-[#5f6368]">
                  Secure automation, customer experience, operational
                  efficiency and technology transformation.
                </p>

                <Link
                  href="/industries"
                  className="mt-5 inline-flex font-bold text-[#0078D4] hover:underline"
                >
                  Explore industry solutions -&gt;
                </Link>
              </div>
            </article>

            {/* EDUCATION */}
            <article className="group overflow-hidden rounded-xl border border-[#dedede] bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg">
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#f3f5f7]">
                <img
                  src="/images/industries/education-universities.svg"
                  alt="Education and Universities"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-300 group-hover:scale-[1.02]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

                <div className="absolute left-5 top-5 rounded-md border border-white/60 bg-white/90 px-3 py-1.5 text-xs font-bold tracking-[0.08em] text-[#242424] backdrop-blur-sm">
                  EDUCATION
                </div>
              </div>

              <div className="p-7">
                <h3 className="text-2xl font-bold text-[#242424]">
                  Education &amp; Universities
                </h3>

                <p className="mt-3 leading-7 text-[#5f6368]">
                  Modern digital platforms, intelligent administration,
                  student services and institutional automation.
                </p>

                <Link
                  href="/industries"
                  className="mt-5 inline-flex font-bold text-[#0078D4] hover:underline"
                >
                  Explore industry solutions -&gt;
                </Link>
              </div>
            </article>

            {/* CORPORATE */}
            <article className="group overflow-hidden rounded-xl border border-[#dedede] bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg">
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#f3f5f7]">
                <img
                  src="/images/industries/corporate-industrial.svg"
                  alt="Corporate and Industrial"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-300 group-hover:scale-[1.02]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

                <div className="absolute left-5 top-5 rounded-md border border-white/60 bg-white/90 px-3 py-1.5 text-xs font-bold tracking-[0.08em] text-[#242424] backdrop-blur-sm">
                  ENTERPRISE
                </div>
              </div>

              <div className="p-7">
                <h3 className="text-2xl font-bold text-[#242424]">
                  Corporate &amp; Industrial
                </h3>

                <p className="mt-3 leading-7 text-[#5f6368]">
                  Connected operations, enterprise automation, data-driven
                  decisions and technology optimisation.
                </p>

                <Link
                  href="/industries"
                  className="mt-5 inline-flex font-bold text-[#0078D4] hover:underline"
                >
                  Explore industry solutions -&gt;
                </Link>
              </div>
            </article>

          </div>
        </div>
      </section>
      {/* OUTCOMES */}
      <section className="border-y border-[#e6e6e6] bg-[#f7f9fb]">
        <div className={`${shell} py-16 lg:py-20`}>
          <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr]">
            <div>
              <p className="text-sm font-bold tracking-[0.14em] text-[#666]">
                BUSINESS OUTCOMES
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-[-0.025em] sm:text-5xl">
                Technology that earns its place in the business.
              </h2>

              <p className="mt-6 text-lg leading-8 text-[#5f6368]">
                Every REVNCIA engagement should connect technology investment
                with a clear operational, financial, customer or risk outcome.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {outcomes.map((outcome) => (
                <div
                  key={outcome}
                  className="rounded-lg border border-[#dedede] bg-white p-5"
                >
                  <div className="flex gap-3">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0078D4] text-xs font-bold text-white">
                      ✓
                    </span>
                    <span className="font-bold text-[#242424]">
                      {outcome}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="border-t border-[#e1e1e1] bg-[#f5f7f9]">
        <div className={`${shell} py-14 sm:py-16 lg:py-20`}>
          <div className="overflow-hidden rounded-2xl border border-[#d9d9d9] bg-white shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
            <div className="grid lg:grid-cols-[1fr_auto] lg:items-center">

              {/* CTA CONTENT */}
              <div className="p-8 sm:p-10 lg:p-12">
                <p className="text-sm font-bold tracking-[0.14em] text-[#5f6368]">
                  READY TO MOVE FORWARD?
                </p>

                <h2 className="mt-4 max-w-3xl text-3xl font-bold leading-tight tracking-[-0.025em] text-[#242424] sm:text-4xl lg:text-5xl">
                  Let&apos;s build your next digital capability.
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-7 text-[#5f6368] sm:text-lg">
                  Tell REVNCIA what you are trying to improve, automate,
                  protect or build. We&apos;ll help turn the requirement into
                  a practical digital solution.
                </p>
              </div>

              {/* CTA ACTION */}
              <div className="border-t border-[#e1e1e1] bg-[#fafafa] p-8 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
                <Link
                  href="/contact"
                  className="inline-flex min-h-12 w-full items-center justify-center rounded-md bg-[#0078D4] px-7 text-base font-bold !text-white shadow-sm transition hover:bg-[#106ebe] focus:outline-none focus:ring-2 focus:ring-[#0078D4] focus:ring-offset-2 sm:w-auto"
                >
                  Contact REVNCIA
                  <span className="ml-3 text-lg">-&gt;</span>
                </Link>

                <p className="mt-4 max-w-xs text-sm leading-6 text-[#666]">
                  Discuss your organisation&apos;s technology, automation and
                  transformation requirements.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
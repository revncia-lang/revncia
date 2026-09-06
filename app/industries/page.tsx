import Link from "next/link";
import { shell } from "@/lib/ui";

const industries = [
  {
    title: "Government & Public Sector",
    image: "/images/industries/government-public-sector.svg",
    description:
      "Modernise public services with secure digital workflows, AI-assisted operations, citizen service platforms, automation and connected government systems.",
    services: [
      "Digital transformation",
      "AI automation",
      "Citizen service platforms",
      "Workflow automation",
      "Data and reporting systems",
    ],
  },
  {
    title: "Banking & Financial Services",
    image: "/images/industries/banking-financial-services.svg",
    description:
      "Improve financial operations through intelligent automation, secure digital processes, customer experience systems and operational intelligence.",
    services: [
      "AI-powered operations",
      "Customer service automation",
      "Digital onboarding",
      "Process optimisation",
      "Risk and compliance workflows",
    ],
  },
  {
    title: "Education & Universities",
    image: "/images/industries/education-universities.svg",
    description:
      "Create connected education ecosystems that improve administration, student services, communication, knowledge access and institutional workflows.",
    services: [
      "Student service automation",
      "Digital campus systems",
      "AI assistants",
      "Administrative automation",
      "Knowledge management",
    ],
  },
  {
    title: "Corporate & Industrial",
    image: "/images/industries/corporate-industrial.svg",
    description:
      "Transform enterprise operations with AI automation, cloud-connected workflows, intelligent service delivery and scalable digital infrastructure.",
    services: [
      "Enterprise automation",
      "AI workflow systems",
      "Cloud transformation",
      "Operations optimisation",
      "Digital process engineering",
    ],
  },
];

export default function IndustriesPage() {
  return (
    <main className="min-w-0 bg-white text-[#242424]">
      {/* HERO */}
      <section className="border-b border-[#e6e6e6] bg-[#f7f9fb]">
        <div
          className={`${shell} grid gap-10 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-24`}
        >
          <div className="min-w-0">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-[#616161]">
              REVNCIA INDUSTRY SOLUTIONS
            </p>

            <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-[#242424] sm:text-5xl lg:text-6xl">
              AI and digital transformation built for real-world industries.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#505050] sm:text-xl">
              REVNCIA helps organisations modernise operations, automate
              repetitive work, improve customer and citizen experiences, and
              build secure digital capabilities for long-term growth.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center rounded-md bg-[#0078d4] px-6 py-3 font-bold text-white transition hover:bg-[#106ebe]"
              >
                Discuss your transformation
              </Link>

              <Link
                href="/services"
                className="inline-flex min-h-12 items-center justify-center rounded-md border border-[#c8c8c8] bg-white px-6 py-3 font-bold text-[#242424] transition hover:bg-[#f3f3f3]"
              >
                Explore services
              </Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-[#d9e2e8] bg-white shadow-sm">
            <img
              src="/images/industries/corporate-industrial.svg"
              alt="REVNCIA AI-powered enterprise operations"
              className="h-auto w-full"
            />
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section>
        <div className={`${shell} py-14 sm:py-16 lg:py-20`}>
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#616161]">
              INDUSTRY-FOCUSED TRANSFORMATION
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#242424] sm:text-4xl">
              Technology aligned with the way your organisation actually
              operates.
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#505050]">
              Every organisation has different processes, customers,
              employees, regulations and operational priorities. REVNCIA
              combines AI, automation, cloud technologies and digital
              transformation practices to create solutions around those
              realities.
            </p>
          </div>
        </div>
      </section>

      {/* INDUSTRY CARDS */}
      <section className="border-y border-[#e6e6e6] bg-[#f7f9fb]">
        <div className={`${shell} py-14 sm:py-16 lg:py-20`}>
          <div className="grid gap-8 lg:grid-cols-2">
            {industries.map((industry) => (
              <article
                key={industry.title}
                className="overflow-hidden rounded-2xl border border-[#d9d9d9] bg-white shadow-sm"
              >
                <div className="border-b border-[#e6e6e6] bg-[#f8fafc]">
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="block h-auto w-full"
                  />
                </div>

                <div className="p-6 sm:p-8">
                  <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#616161]">
                    INDUSTRY SOLUTION
                  </p>

                  <h2 className="mt-2 text-2xl font-bold text-[#242424] sm:text-3xl">
                    {industry.title}
                  </h2>

                  <p className="mt-4 leading-7 text-[#505050]">
                    {industry.description}
                  </p>

                  <div className="mt-6">
                    <h3 className="text-base font-bold text-[#242424]">
                      REVNCIA capabilities
                    </h3>

                    <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                      {industry.services.map((service) => (
                        <li
                          key={service}
                          className="rounded-lg border border-[#e1e1e1] bg-[#fafafa] px-4 py-3 text-sm font-semibold text-[#404040]"
                        >
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href="/contact"
                    className="mt-7 inline-flex font-bold text-[#0078d4] hover:underline"
                  >
                    Discuss this industry solution →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BUSINESS VALUE */}
      <section>
        <div className={`${shell} py-14 sm:py-16 lg:py-20`}>
          <div className="grid gap-10 lg:grid-cols-3">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#616161]">
                BUSINESS VALUE
              </p>

              <h2 className="mt-3 text-3xl font-bold text-[#242424]">
                What customers can achieve
              </h2>
            </div>

            <div className="lg:col-span-2 grid gap-5 sm:grid-cols-2">
              <div className="rounded-xl border border-[#dedede] bg-white p-6">
                <h3 className="font-bold text-[#242424]">
                  Faster operations
                </h3>
                <p className="mt-2 leading-7 text-[#505050]">
                  Automate repetitive workflows and reduce unnecessary manual
                  effort.
                </p>
              </div>

              <div className="rounded-xl border border-[#dedede] bg-white p-6">
                <h3 className="font-bold text-[#242424]">
                  Better customer experiences
                </h3>
                <p className="mt-2 leading-7 text-[#505050]">
                  Make services easier to access through connected digital
                  channels and intelligent assistance.
                </p>
              </div>

              <div className="rounded-xl border border-[#dedede] bg-white p-6">
                <h3 className="font-bold text-[#242424]">
                  Stronger decision-making
                </h3>
                <p className="mt-2 leading-7 text-[#505050]">
                  Connect information and workflows so teams can act with
                  greater visibility.
                </p>
              </div>

              <div className="rounded-xl border border-[#dedede] bg-white p-6">
                <h3 className="font-bold text-[#242424]">
                  Scalable digital capability
                </h3>
                <p className="mt-2 leading-7 text-[#505050]">
                  Build technology foundations that can evolve as the
                  organisation grows.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[#e6e6e6] bg-[#f7f9fb]">
        <div
          className={`${shell} flex flex-col gap-6 py-12 sm:py-14 md:flex-row md:items-center md:justify-between lg:py-16`}
        >
          <div>
            <h2 className="text-3xl font-bold text-[#242424]">
              Ready to transform your organisation?
            </h2>

            <p className="mt-2 text-lg text-[#505050]">
              Tell REVNCIA what you want to improve, automate or build next.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-md bg-[#0078d4] px-7 py-3 font-bold text-white transition hover:bg-[#106ebe]"
          >
            Start a conversation
          </Link>
        </div>
      </section>
    </main>
  );
}
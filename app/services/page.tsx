import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { ServiceCatalogExplorer } from "@/components/ServiceCatalogExplorer";
import { offerings } from "@/lib/catalog";
import { shell, btnSecondary } from "@/lib/ui";

export const metadata: Metadata = {
  title: "Services | REVNCIA",
  description:
    "Explore REVNCIA AI, automation, transformation, cloud, data, security, software, public impact, and managed services.",
};

export default function ServicesIndex() {
  return (
    <main className="min-h-screen bg-white text-[#242424]">

      <PageHero
        kicker="REVNCIA Service Network"
        title="Capabilities designed to move your organization forward."
        lede="Every REVNCIA capability is explained in customer language: the problem it addresses, what REVNCIA delivers, how it can connect to REVNCIA OS, and what can be measured after implementation."
        cta={{
          href: "/contact",
          label: "Discuss Your Transformation",
        }}
        sections={[
          {
            title: "Start With the Outcome",
            text: "Reduce waiting, automate work, modernize systems, improve decisions, strengthen governance, or build a new digital capability.",
          },
          {
            title: "Follow the Delivery Path",
            text: "Discovery, assessment, solution design, implementation, adoption, measurement, and managed operation.",
          },
          {
            title: "Connect Everything",
            text: "Individual services can become projects, workflows, AI agents, and governed capabilities inside REVNCIA OS.",
          },
          {
            title: "Measure the Result",
            text: "Track operational improvements, adoption, service performance, risk reduction, and measurable business outcomes.",
          },
        ]}
      />

      <section className="border-b border-[#d5dfe7] bg-[#f7fafc]">
        <div
          className={`${shell} mx-auto w-full max-w-[1600px] px-4 py-14 sm:px-6 lg:px-8 xl:px-10`}
        >
          <div className="grid gap-5 md:grid-cols-3">

            <article className="border border-[#d2d2d2] bg-white p-6 shadow-[0_8px_25px_rgba(11,31,51,0.05)]">
              <span className="text-xs font-bold tracking-[0.16em] text-[#0067b8]">
                01
              </span>

              <h2 className="mt-4 text-xl font-bold text-[#242424]">
                Discover
              </h2>

              <p className="mt-3 text-sm leading-7 text-[#606060]">
                Understand your current processes, systems, people, data,
                constraints, and measurable business or public-impact
                outcomes.
              </p>
            </article>

            <article className="border border-[#d2d2d2] bg-white p-6 shadow-[0_8px_25px_rgba(11,31,51,0.05)]">
              <span className="text-xs font-bold tracking-[0.16em] text-[#0067b8]">
                02
              </span>

              <h2 className="mt-4 text-xl font-bold text-[#242424]">
                Build
              </h2>

              <p className="mt-3 text-sm leading-7 text-[#606060]">
                Configure technology, integrations, workflows, agents,
                controls, and operating processes against an agreed scope.
              </p>
            </article>

            <article className="border border-[#d2d2d2] bg-white p-6 shadow-[0_8px_25px_rgba(11,31,51,0.05)]">
              <span className="text-xs font-bold tracking-[0.16em] text-[#0067b8]">
                03
              </span>

              <h2 className="mt-4 text-xl font-bold text-[#242424]">
                Operate
              </h2>

              <p className="mt-3 text-sm leading-7 text-[#606060]">
                Monitor adoption, performance, cost, security, service
                quality, and KPIs, then continuously improve the operating
                model.
              </p>
            </article>

          </div>
        </div>
      </section>

      <section>
        <div
          className={`${shell} mx-auto w-full max-w-[1600px] px-4 py-14 sm:px-6 lg:px-8 xl:px-10`}
        >
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">

            <div className="max-w-[1600px]">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0067b8]">
                Customer-Readable Catalog
              </p>

              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#242424] md:text-5xl">
                Find the capability that moves your organization forward.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-[#606060]">
              Each service has a dedicated page with capabilities, delivery
              context, related services, and a direct request path.
            </p>

          </div>

          <div className="mt-10">
            <ServiceCatalogExplorer offerings={offerings} />
          </div>

          <div className="mt-10">
            <Link
              href="/contact"
              className={btnSecondary}
            >
              Build a Transformation Roadmap
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-[#d5dfe7] bg-[#f7fafc]">
        <div
          className={`${shell} mx-auto w-full max-w-[1600px] px-4 py-14 sm:px-6 lg:px-8 xl:px-10`}
        >
          <div className="max-w-[1600px]">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0067b8]">
              Business Value
            </p>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#242424] md:text-4xl">
              The advantage of choosing a structured transformation partner.
            </h2>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">

            <article className="border border-[#d2d2d2] bg-white p-6">
              <h3 className="text-xl font-bold text-[#242424]">
                Greater Efficiency
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#606060]">
                Automate repetitive work, reduce unnecessary handoffs, and
                create clearer operating workflows.
              </p>
            </article>

            <article className="border border-[#d2d2d2] bg-white p-6">
              <h3 className="text-xl font-bold text-[#242424]">
                Better Control
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#606060]">
                Establish clearer governance around systems, information,
                AI usage, access, security, and accountability.
              </p>
            </article>

            <article className="border border-[#d2d2d2] bg-white p-6">
              <h3 className="text-xl font-bold text-[#242424]">
                Measurable Progress
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#606060]">
                Connect transformation initiatives to defined operational,
                financial, customer, or public-impact outcomes.
              </p>
            </article>

          </div>

          <div className="mt-8 border border-[#d2d2d2] bg-white p-6">
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#c62828]">
              Risks of Delaying Transformation
            </p>

            <div className="mt-5 grid gap-5 md:grid-cols-3">

              <div>
                <h3 className="font-bold text-[#242424]">
                  Increasing Manual Work
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#606060]">
                  Repetitive processes can continue consuming valuable staff
                  capacity.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-[#242424]">
                  Fragmented Systems
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#606060]">
                  Disconnected applications and data can make operations
                  slower and harder to manage.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-[#242424]">
                  Growing Technology Gaps
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#606060]">
                  Legacy processes can become increasingly expensive and
                  difficult to modernize.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { FacilitiesOnService } from "@/components/CustomerFacilities";
import { PageHero } from "@/components/PageHero";
import { offerings } from "@/lib/catalog";
import { btnSecondary, shell, surface } from "@/lib/ui";

export const metadata: Metadata = {
  title: "AI Platform",
  description:
    "A governed AI operating platform for identity, knowledge, agents, workflows, security, observability and cost control.",
};

const advantages = [
  "One governed entry point for organizational AI.",
  "Centralized identity and access controls.",
  "Better visibility into AI usage and operational cost.",
  "Reusable knowledge, agents, workflows and tools.",
  "Clearer accountability for AI-enabled work.",
  "A foundation that can expand as the organization adopts more AI.",
];

const disadvantages = [
  "Employees may rely on disconnected personal AI accounts.",
  "AI usage and costs become harder to understand.",
  "Sensitive organizational knowledge can become fragmented.",
  "Different teams may create duplicate AI solutions.",
  "Security, governance and ownership become harder to enforce.",
  "Successful experiments may remain isolated instead of becoming organizational capability.",
];

export default function PlatformPage() {
  const core = offerings.find((o) => o.slug === "ai-transformation")!;

  return (
    <main className="bg-white text-[#242424]">
      <PageHero
        kicker="REVNCIA AI Platform"
        title="One governed operating layer for organizational AI."
        lede="REVNCIA brings AI access, identity, knowledge, agents, workflows, tools, safety, observability and cost control into a connected operating model. The objective is not simply to give employees another chatbot. It is to make AI useful, governable and measurable."
        cta={{
          href: "/contact",
          label: "Discuss your AI operating model",
        }}
        sections={[
          {
            title: "What you receive",
            text: "A governed foundation for AI-enabled work, with defined access, ownership, knowledge and operating controls.",
          },
          {
            title: "Who benefits",
            text: "Leadership, IT, operations, risk, employees and customer-facing teams can work from the same operating model.",
          },
          {
            title: "What improves",
            text: "AI becomes easier to adopt, manage, measure and extend across departments.",
          },
          {
            title: "What remains human",
            text: "REVNCIA supports people and processes. Organizational accountability and important decisions remain with authorized people.",
          },
        ]}
      />

      <section className={`${shell} py-14 md:py-20`}>
        <div className="max-w-[1600px]">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0067b8]">
            What REVNCIA provides
          </p>
          <h2 className="mt-3 text-3xl font-bold md:text-5xl">
            An AI foundation designed for real organizational work.
          </h2>
          <p className="mt-5 text-base leading-8 text-[#606060]">
            {core.summary}
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {core.capabilities.map((capability) => (
            <article
              key={capability}
              className="border border-[#d5dfe7] bg-[#f8fafc] p-5"
            >
              <span className="text-lg font-bold text-[#0078d4]">+</span>
              <p className="mt-3 text-sm font-semibold leading-6 text-[#333333]">
                {capability}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-[#d5dfe7] bg-[#f7fafc]">
        <div className={`${shell} py-14 md:py-20`}>
          <div className="grid gap-8 lg:grid-cols-2">
            <article className="border border-[#b9d9ee] bg-white p-7 md:p-9">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#0067b8]">
                Advantages
              </p>
              <h2 className="mt-3 text-2xl font-bold md:text-3xl">
                What your organization gains
              </h2>
              <ul className="mt-7 space-y-4">
                {advantages.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6 text-[#505050]">
                    <span className="font-bold text-[#0078d4]">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="border border-[#d8c9c9] bg-white p-7 md:p-9">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#8a3b3b]">
                Risks of inaction
              </p>
              <h2 className="mt-3 text-2xl font-bold md:text-3xl">
                What becomes harder without it
              </h2>
              <ul className="mt-7 space-y-4">
                {disadvantages.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6 text-[#505050]">
                    <span className="font-bold text-[#8a3b3b]">!</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className={`${shell} py-14 md:py-20`}>
        <div className="max-w-[1600px]">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0067b8]">
            Operating model
          </p>
          <h2 className="mt-3 text-3xl font-bold md:text-5xl">
            Start with one controlled capability and expand from there.
          </h2>
          <p className="mt-5 text-base leading-8 text-[#606060]">
            REVNCIA can connect AI platform capabilities with services,
            projects, workflows, customer operations, data, cloud and
            governance. The implementation scope is agreed before delivery.
          </p>
        </div>

        <FacilitiesOnService slug="ai-platform" />

        <Link href="/services/ai-platform" className={`${btnSecondary} mt-10`}>
          Explore the AI Platform service
        </Link>
      </section>
    </main>
  );
}



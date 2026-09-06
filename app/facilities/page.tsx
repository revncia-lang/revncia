import type { Metadata } from "next";
import Link from "next/link";
import {
  BuyLayersGrid,
  FacilityDetail,
  HonestyCards,
  SupportDesk,
} from "@/components/CustomerFacilities";
import { PageHero } from "@/components/PageHero";
import {
  customerFacilities,
  facilitiesIntro,
  honestyLimits,
} from "@/lib/facilities";

export const metadata: Metadata = {
  title: "Resources | REVNCIA",
  description:
    "Explore REVNCIA resources, customer facilities, delivery options, support, governance, and digital transformation capabilities.",
};

const container =
  "mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-8 xl:px-10";

const sectionLabel =
  "inline-flex items-center border border-[#ddd9d2] bg-[#f3f0ea] px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-[#66615a]";

const card =
  "border border-[#ddd9d2] bg-white shadow-[0_8px_28px_rgba(60,50,40,0.045)]";

export default function FacilitiesPage() {
  return (
    <main className="min-h-screen bg-white text-[#292929]">

      <PageHero
        kicker="REVNCIA Resources"
        title="Resources and facilities for your digital transformation."
        lede="Explore the capabilities, operating facilities, delivery options, support resources, and governance information available through REVNCIA."
        cta={{
          href: "/contact",
          label: "Plan Your Transformation",
        }}
        sections={[
          {
            title: "Digital Capabilities",
            text: "Explore AI, automation, communication, business systems, documents, and digital service capabilities.",
          },
          {
            title: "Implementation",
            text: "Move from discovery and roadmap design into implementation, onboarding, adoption, and managed operation.",
          },
          {
            title: "Support",
            text: "Access structured operating support, service guidance, and resources designed for long-term use.",
          },
          {
            title: "Governance",
            text: "Understand operating limits, security considerations, responsible AI practices, and service boundaries.",
          },
        ]}
      />

      {/* RESOURCE CENTRE */}
      <section className="border-b border-[#dedbd5] bg-[#faf8f4]">
        <div className={`${container} py-16`}>

          <div className="max-w-[1600px]">
            <span className={sectionLabel}>
              Resource Centre
            </span>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-[#292929] md:text-5xl">
              Everything organized around the customer journey.
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-8 text-[#686868]">
              Start with the capability you need, understand how it can be
              delivered, and connect it to a broader transformation programme.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">

            <Link
              href="/services"
              className={`${card} group p-6 transition duration-200 hover:-translate-y-1 hover:border-[#bbb5ac] hover:shadow-[0_14px_34px_rgba(60,50,40,0.09)]`}
            >
              <span className="text-xs font-bold tracking-[0.12em] text-[#858078]">
                01
              </span>

              <h3 className="mt-4 text-xl font-bold text-[#292929] transition group-hover:text-[#55504a]">
                Services
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#686868]">
                Explore the complete REVNCIA service catalogue and identify
                capabilities relevant to your organization.
              </p>

              <span className="mt-5 inline-block text-sm font-bold text-[#55504a]">
                Explore Services
              </span>
            </Link>

            <Link
              href="/plans"
              className={`${card} group p-6 transition duration-200 hover:-translate-y-1 hover:border-[#bbb5ac] hover:shadow-[0_14px_34px_rgba(60,50,40,0.09)]`}
            >
              <span className="text-xs font-bold tracking-[0.12em] text-[#858078]">
                02
              </span>

              <h3 className="mt-4 text-xl font-bold text-[#292929] transition group-hover:text-[#55504a]">
                Plans
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#686868]">
                Review service access models and choose an operating approach
                that matches your transformation requirements.
              </p>

              <span className="mt-5 inline-block text-sm font-bold text-[#55504a]">
                View Plans
              </span>
            </Link>

            <Link
              href="/os"
              className={`${card} group p-6 transition duration-200 hover:-translate-y-1 hover:border-[#bbb5ac] hover:shadow-[0_14px_34px_rgba(60,50,40,0.09)]`}
            >
              <span className="text-xs font-bold tracking-[0.12em] text-[#858078]">
                03
              </span>

              <h3 className="mt-4 text-xl font-bold text-[#292929] transition group-hover:text-[#55504a]">
                REVNCIA OS
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#686868]">
                Understand how AI, agents, workflows, projects, analytics,
                knowledge, and governance connect inside REVNCIA OS.
              </p>

              <span className="mt-5 inline-block text-sm font-bold text-[#55504a]">
                Open REVNCIA OS
              </span>
            </Link>

            <Link
              href="/contact"
  className="inline-flex min-h-[50px] items-center justify-center whitespace-nowrap border border-[#0067b8] bg-[#0067b8] px-8 py-3.5 text-sm font-bold !text-white shadow-[0_6px_18px_rgba(0,103,184,0.20)] transition hover:border-[#005a9f] hover:bg-[#005a9f] hover:!text-white focus:outline-none focus:ring-2 focus:ring-[#0067b8] focus:ring-offset-2"
>
  Discuss Your Requirements
</Link>

          </div>

          <div className="lg:col-span-5">
            <SupportDesk />
          </div>

        </div>
      </section>

      {/* LIGHT CTA */}
      <section className="border-t border-[#dedbd5] bg-[#eeeae3]">
        <div className={`${container} py-14`}>

          <div className="border border-[#d8d2c9] bg-[#fffdfa] px-6 py-10 shadow-[0_12px_35px_rgba(60,50,40,0.07)] sm:px-10 lg:px-12">

            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

              <div className="max-w-[1600px]">

                <span className={sectionLabel}>
                  Next Step
                </span>

                <h2 className="mt-5 text-3xl font-bold tracking-tight text-[#292929] md:text-4xl">
                  Turn the right resources into a working transformation plan.
                </h2>

                <p className="mt-4 max-w-3xl text-sm leading-7 text-[#686868]">
                  Tell REVNCIA what you are trying to improve, automate,
                  modernize, or build. We can map the requirement to an
                  appropriate service and delivery path.
                </p>

              </div>

              <Link
                href="/contact"
                className="inline-flex min-h-[50px] shrink-0 items-center justify-center whitespace-nowrap border border-[#0067b8] bg-[#0067b8] px-8 py-3.5 text-sm font-bold !text-white shadow-[0_5px_15px_rgba(0,103,184,0.18)] transition hover:border-[#005a9f] hover:bg-[#005a9f] hover:!text-white focus:outline-none focus:ring-2 focus:ring-[#0067b8] focus:ring-offset-2"
              >
                Start a Conversation
              </Link>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
}


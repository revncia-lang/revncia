import type { Metadata } from "next";
import Link from "next/link";
import { shell } from "@/lib/ui";
import { CheckoutButton } from "@/components/CheckoutButton";
import { subscriptionPlans } from "@/lib/plans";

export const metadata: Metadata = {
  title: "Plans and Secure Payments | REVNCIA",
  description:
    "Choose a REVNCIA service plan and request secure payment onboarding for AI and digital transformation services.",
};

const gateways = [
  [
    "Visa",
    "International card acceptance through an approved merchant gateway.",
  ],
  [
    "Mastercard",
    "Secure card processing with provider-managed authentication and settlement.",
  ],
  [
    "Google Pay",
    "Fast wallet checkout where supported by the selected payment provider.",
  ],
  [
    "Apple Pay",
    "Device-based wallet payments where supported by the selected payment provider.",
  ],
] as const;

export default function PlansPage() {
  return (
    <main className="min-h-screen bg-[#f5f9fc] text-[#505050]">

      <section className="border-b border-[#d2d2d2] bg-white">
        <div
          className={`${shell} mx-auto w-full max-w-[1600px] px-4 py-16 sm:px-6 lg:px-8 xl:px-10`}
        >
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0078d4]">
            REVNCIA Plans
          </p>

          <h1 className="mt-4 max-w-[1600px] text-4xl font-bold leading-[1.08] tracking-[-0.025em] text-[#242424] md:text-6xl">
            Choose the operating capacity your organization needs.
          </h1>

          <p className="mt-6 max-w-[1600px] text-base leading-8 text-[#606060] md:text-lg">
            Secure your operations, improve business performance, and move
            faster with AI and digital services explained in clear customer
            language. Plan prices below are one-time Service Access fees only.
            Project installation and monthly maintenance fees are communicated
            separately according to the size and requirements of the requested
            project or service.
          </p>
        </div>
      </section>

      <section>
        <div
          className={`${shell} mx-auto w-full max-w-[1600px] px-4 py-14 sm:px-6 lg:px-8 xl:px-10`}
        >
          <div className="mb-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0078d4]">
              Service Access Plans
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#242424] md:text-4xl">
              Select the level of service access that fits your organization.
            </h2>

            <p className="mt-3 max-w-[1600px] text-sm leading-7 text-[#606060] md:text-base">
              Every plan provides a structured starting point for REVNCIA
              services. Implementation, integration, customization, and
              managed-operation requirements are assessed separately.
            </p>
          </div>

          <div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-2 xl:grid-cols-4">
            {subscriptionPlans.map((plan) => (
              <article
                key={plan.name}
                className={`flex min-w-0 flex-col border bg-white p-6 shadow-[0_12px_35px_rgba(11,31,51,0.08)] ${
                  plan.name === "Corporate Premium Plus"
                    ? "border-[#0078d4] ring-2 ring-[#0078d4]/15"
                    : "border-[#d2d2d2]"
                }`}
              >
                <div className="min-h-[32px]">
                  {plan.name === "Corporate Premium Plus" ? (
                    <span className="inline-flex bg-[#0078d4] px-2 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-white">
                      Most Popular
                    </span>
                  ) : null}

                  {plan.discount ? (
                    <span className="inline-flex border border-[#107c10] px-2 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#107c10]">
                      {plan.discount}
                    </span>
                  ) : null}
                </div>

                <h3 className="mt-4 min-h-[56px] text-xl font-bold leading-7 text-[#242424]">
                  {plan.name}
                </h3>

                <div className="mt-4">
                  <p className="text-4xl font-bold tracking-tight text-[#0078d4]">
                    {plan.price}
                  </p>

                  <p className="mt-1 text-xs font-medium text-[#606060]">
                    One-time Service Access
                  </p>
                </div>

                <div className="mt-4 border-t border-[#edebe9] pt-4">
                  <p className="text-xs font-bold uppercase tracking-[0.1em] text-[#0078d4]">
                    Access Level
                  </p>

                  <p className="mt-2 text-sm font-semibold leading-6 text-[#505050]">
                    {plan.accessLabel}
                  </p>
                </div>

                <div className="mt-5 border-t border-[#edebe9] pt-5">
                  <p className="text-xs font-bold uppercase tracking-[0.1em] text-[#0078d4]">
                    Plan Benefits
                  </p>

                  <ul className="mt-3 grid gap-3 text-sm leading-6 text-[#606060]">
                    {plan.benefits.map((benefit) => (
                      <li
                        key={benefit}
                        className="border-l-2 border-[#0078d4] pl-3"
                      >
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 border-t border-[#edebe9] pt-5">
                  <p className="text-xs font-bold uppercase tracking-[0.1em] text-[#0078d4]">
                    Included Services
                  </p>

                  <ul className="mt-3 max-h-[260px] space-y-2 overflow-y-auto pr-1 text-sm leading-5 text-[#606060]">
                    {plan.services.map((service) => (
                      <li
                        key={service}
                        className="border-b border-[#f0f0f0] pb-2 last:border-0"
                      >
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-7">
                  <CheckoutButton plan={plan.id} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#d2d2d2] bg-white">
        <div
          className={`${shell} mx-auto grid w-full max-w-[1600px] gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:px-8 xl:px-10`}
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0078d4]">
              Payment Channels
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#242424] md:text-4xl">
              Professional checkout and protected settlement.
            </h2>

            <p className="mt-5 text-sm leading-7 text-[#606060] md:text-base">
              Card and wallet payments should be handled by a compliant
              payment provider. REVNCIA will confirm the available country,
              currency, tax, authentication, refund, and settlement terms
              before enabling checkout for your account.
            </p>

            <div className="mt-6 border-l-4 border-[#0078d4] bg-[#f5f9fc] p-5">
              <p className="text-sm leading-7 text-[#505050]">
                Customer information and bank settlement details are
                confidential. They are never displayed in public Website or OS
                pages, URLs, browser metadata, or payment instructions. A
                compliant provider should collect card data directly so
                REVNCIA does not store full card numbers or security codes.
              </p>
            </div>

            <Link
              href="/contact"
              className="mt-7 inline-flex border border-[#0078d4] bg-white px-5 py-3 text-sm font-bold text-[#242424] transition hover:bg-[#f5f9fc] hover:text-[#0078d4]"
            >
              Discuss Secure Payment Onboarding
            </Link>
          </div>

          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-[#0078d4]">
              Supported Payment Methods
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {gateways.map(([name, detail]) => (
                <article
                  key={name}
                  className="border border-[#d2d2d2] bg-[#f5f9fc] p-5"
                >
                  <h3 className="text-lg font-bold text-[#242424]">
                    {name}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#606060]">
                    {detail}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div
          className={`${shell} mx-auto w-full max-w-[1600px] px-4 py-14 sm:px-6 lg:px-8 xl:px-10`}
        >
          <div className="mb-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0078d4]">
              Business Outcomes
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#242424] md:text-4xl">
              Why organizations choose structured REVNCIA services.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <article className="border border-[#d2d2d2] bg-white p-6 shadow-[0_8px_25px_rgba(11,31,51,0.05)]">
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#0078d4]">
                Advantage 01
              </p>

              <h3 className="mt-3 text-xl font-bold text-[#242424]">
                More Secure
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#606060]">
                Govern access, AI usage, workflows, evidence, and
                accountability so security becomes part of everyday
                operations.
              </p>
            </article>

            <article className="border border-[#d2d2d2] bg-white p-6 shadow-[0_8px_25px_rgba(11,31,51,0.05)]">
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#0078d4]">
                Advantage 02
              </p>

              <h3 className="mt-3 text-xl font-bold text-[#242424]">
                More Profitable
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#606060]">
                Reduce rework, improve decisions, connect systems, and
                measure where digital transformation creates operational
                value.
              </p>
            </article>

            <article className="border border-[#d2d2d2] bg-white p-6 shadow-[0_8px_25px_rgba(11,31,51,0.05)]">
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#0078d4]">
                Advantage 03
              </p>

              <h3 className="mt-3 text-xl font-bold text-[#242424]">
                Faster Processes
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#606060]">
                Move requests, documents, customer conversations, and
                approvals through clear, owned, measurable workflows.
              </p>
            </article>
          </div>

          <div className="mt-8 border border-[#d2d2d2] bg-white p-6">
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#c62828]">
              Risks of Delaying Transformation
            </p>

            <div className="mt-4 grid gap-4 md:grid-cols-3">
              <div>
                <h3 className="font-bold text-[#242424]">
                  Higher Operating Costs
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#606060]">
                  Manual work and disconnected systems can continue consuming
                  staff time and resources.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-[#242424]">
                  Slower Customer Response
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#606060]">
                  Delayed workflows and fragmented information can make
                  customer and citizen services less responsive.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-[#242424]">
                  Growing Technology Gaps
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#606060]">
                  Legacy processes can become harder and more expensive to
                  modernize as requirements increase.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

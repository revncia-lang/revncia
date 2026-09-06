import type { Metadata } from "next";
import Link from "next/link";
import { shell } from "@/lib/ui";
import { CheckoutButton } from "@/components/CheckoutButton";
import { subscriptionPlans } from "@/lib/plans";

export const metadata: Metadata = {
  title: "Plans and secure payments | REVNCIA",
  description: "Choose a REVNCIA service plan and request secure payment onboarding for AI and digital transformation services.",
};

const gateways = [
  ["Visa", "International card acceptance through an approved merchant gateway."],
  ["Mastercard", "Secure card processing with provider-managed authentication and settlement."],
  ["Google Pay", "Fast wallet checkout where supported by the selected payment provider."],
  ["Apple Pay", "Device-based wallet payments where supported by the selected payment provider."],
] as const;

export default function PlansPage() {
  return <main className="bg-[#f5f9fc] text-[#505050]">
    <section className="border-b border-[#d2d2d2] bg-white py-16">
      <div className={`${shell} mx-auto max-w-7xl`}>
        <p className="text-xs font-semibold uppercase tracking-[.18em] text-[#0078d4]">REVNCIA plans</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-[#505050] md:text-6xl">Choose the operating capacity your organization needs.</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-[#606060]">Secure your operations, improve business performance, and move faster with AI and digital services explained in customer language. Plan prices below are one-time Service Access fees only. Project installation and monthly maintenance fees are communicated separately according to the size and requirements of the requested project or service.</p>
      </div>
    </section>

    <section className={`${shell} mx-auto max-w-7xl py-14`}>
      <div className="grid gap-5">
        {subscriptionPlans.map((plan) => <article key={plan.name} className={`flex flex-col border bg-white p-6 shadow-[0_12px_35px_rgba(11,31,51,.08)] ${plan.name === "Corporate Premium Plus" ? "border-[#0078d4] ring-2 ring-[#0078d4]/15" : "border-[#d2d2d2]"}`}>
          {plan.name === "Corporate Premium Plus" ? <span className="mb-4 w-fit bg-[#0078d4] px-2 py-1 text-[10px] font-semibold uppercase tracking-[.12em] text-white">Most popular</span> : null}
          {plan.discount ? <span className="mb-2 w-fit border border-[#107c10] px-2 py-1 text-[10px] font-semibold uppercase tracking-[.12em] text-[#107c10]">{plan.discount}</span> : null}
          <h2 className="text-xl font-semibold text-[#505050]">{plan.name}</h2>
          <p className="mt-4 text-4xl font-semibold text-[#0078d4]">{plan.price}<span className="text-sm font-normal text-[#606060]"> one-time</span></p>
          <p className="mt-2 text-sm font-semibold text-[#505050]">Service Access · {plan.accessLabel}</p>
          <ul className="mt-6 grid gap-3 border-t border-[#edebe9] pt-5 text-sm leading-6 text-[#606060]">{plan.benefits.map((benefit) => <li key={benefit}>✓ {benefit}</li>)}</ul>
          <div className="mt-6 border-t border-[#edebe9] pt-5"><p className="text-xs font-semibold uppercase tracking-[.12em] text-[#0078d4]">Included services</p><ul className="mt-3 max-h-56 space-y-1 overflow-y-auto text-sm text-[#606060]">{plan.services.map((service) => <li key={service}>✓ {service}</li>)}</ul></div>
          <CheckoutButton plan={plan.id} />
        </article>)}
      </div>
    </section>

    <section className="border-y border-[#d2d2d2] bg-white py-14">
      <div className={`${shell} mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1.1fr]`}>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[.18em] text-[#0078d4]">Payment channels</p>
          <h2 className="mt-3 text-3xl font-semibold text-[#505050]">Professional checkout, protected settlement.</h2>
          <p className="mt-4 text-sm leading-7 text-[#606060]">Card and wallet payments should be handled by a compliant payment provider. REVNCIA will confirm the available country, currency, tax, authentication, refund, and settlement terms before enabling checkout for your account.</p>
          <p className="mt-4 border-l-4 border-[#0078d4] bg-[#f5f9fc] p-4 text-sm leading-6 text-[#505050]">Customer information and bank settlement details are confidential. They are never displayed in public Website or OS pages, URLs, browser metadata, or payment instructions. A compliant provider should collect card data directly so REVNCIA does not store full card numbers or security codes.</p>
          <Link href="/contact" className="mt-6 inline-flex border border-[#0078d4] bg-white px-5 py-3 text-sm font-semibold text-[#505050] hover:bg-[#f5f5f5]">Discuss secure payment onboarding</Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {gateways.map(([name, detail]) => <article key={name} className="border border-[#d2d2d2] bg-[#f5f9fc] p-5"><h3 className="text-lg font-semibold text-[#505050]">{name}</h3><p className="mt-2 text-sm leading-6 text-[#606060]">{detail}</p></article>)}
        </div>
      </div>
    </section>

    <section className={`${shell} mx-auto max-w-7xl py-14`}>
      <div className="grid gap-5 md:grid-cols-3">
        <article className="border border-[#d2d2d2] bg-white p-6"><h2 className="font-semibold text-[#505050]">More secure</h2><p className="mt-3 text-sm leading-6 text-[#606060]">Govern access, AI usage, workflows, evidence, and accountability so security becomes an operating practice.</p></article>
        <article className="border border-[#d2d2d2] bg-white p-6"><h2 className="font-semibold text-[#505050]">More profitable</h2><p className="mt-3 text-sm leading-6 text-[#606060]">Reduce rework, improve decisions, connect systems, and measure where transformation creates value.</p></article>
        <article className="border border-[#d2d2d2] bg-white p-6"><h2 className="font-semibold text-[#505050]">Faster processes</h2><p className="mt-3 text-sm leading-6 text-[#606060]">Move requests, documents, customer conversations, and approvals through clear, owned workflows.</p></article>
      </div>
    </section>
  </main>;
}

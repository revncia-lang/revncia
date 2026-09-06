"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { btnPrimary, shell, field } from "@/lib/ui";
import { subscriptionPlans } from "@/lib/plans";

export default function SignupPage() {
  const [message, setMessage] = useState("");
  const [planId, setPlanId] = useState("basic");
  const selectedPlan = subscriptionPlans.find((plan) => plan.id === planId) ?? subscriptionPlans[0];

  function submitSignup(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("Your plan and workspace request are ready for secure payment onboarding. Access will be activated only after the payment provider confirms the transaction and REVNCIA provisions your account.");
  }

  return <main className="min-h-[70vh] bg-[#f5f5f5] py-16">
    <div className={`${shell} mx-auto max-w-4xl`}>
      <div className="grid gap-10">
      <section>
        <p className="text-xs font-semibold uppercase tracking-[.18em] text-[#0078d4]">Customer workspace</p>
        <h1 className="mt-4 text-4xl font-semibold text-[#505050]">Sign up with REVNCIA</h1>
        <p className="mt-4 max-w-xl leading-7 text-[#606060]">Create a customer workspace for your organization and prepare your team for secure, measurable digital transformation.</p>
        <form onSubmit={submitSignup} className="mt-8 grid gap-5 border-t-4 border-[#0078d4] border-x border-b border-[#d2d2d2] bg-white p-6 shadow-[0_12px_35px_rgba(11,31,51,.08)]">
          <label className="grid gap-2 text-sm font-semibold text-[#505050]">Your name<input required name="name" autoComplete="name" className={field} /></label>
          <label className="grid gap-2 text-sm font-semibold text-[#505050]">Work email<input required type="email" name="email" autoComplete="email" className={field} /></label>
          <label className="grid gap-2 text-sm font-semibold text-[#505050]">Organization<input required name="organization" autoComplete="organization" className={field} /></label>
          <label className="grid gap-2 text-sm font-semibold text-[#505050]">Plan<select required name="plan" value={planId} onChange={(event) => setPlanId(event.target.value)} className={field}>{subscriptionPlans.map((plan) => <option key={plan.id} value={plan.id}>{plan.name} — {plan.price} one-time · {plan.accessLabel}</option>)}</select></label>
          <button type="submit" className={btnPrimary}>Request secure checkout</button>
          <p className="text-xs leading-5 text-[#606060]">Privacy first: checkout payment fields must be hosted by the approved payment provider. This form does not collect payment credentials.</p>
          {message ? <p className="text-sm leading-6 text-[#505050]" role="status">{message}</p> : null}
        </form>
        <p className="mt-5 text-sm text-[#606060]">Already have access? <Link href="/login" className="font-semibold text-[#0078d4] hover:underline">Log in</Link></p>
      </section>
      <aside className="border border-[#d2d2d2] bg-white p-8 shadow-[0_12px_35px_rgba(11,31,51,.08)]">
        <div className="flex items-start justify-between gap-4 border-b border-[#edebe9] pb-5"><div><p className="text-xs font-semibold uppercase tracking-[.18em] text-[#0078d4]">Selected subscription</p><h2 className="mt-2 text-2xl font-semibold text-[#505050]">{selectedPlan.name}</h2></div><span className="border border-[#0078d4] px-3 py-2 text-xs font-semibold text-[#0078d4]">{selectedPlan.accessLabel}</span></div>
        <p className="mt-5 border-l-4 border-[#0078d4] bg-[#f5f9fc] p-4 text-sm leading-6 text-[#606060]"><strong className="text-[#505050]">Service Access fee:</strong> {selectedPlan.price} one-time. This charge covers access to the listed services only. Project installation is a separate one-time fee, and monthly maintenance is quoted separately according to the size and requirements of the requested project or service.</p>
        <p className="mt-4 text-sm leading-6 text-[#606060]">Your selected plan is activated after verified payment and account provisioning. This keeps access aligned with the services your organization has chosen.</p>
        <h3 className="mt-8 text-xs font-semibold uppercase tracking-[.16em] text-[#0078d4]">Subscription benefits</h3>
        <div className="mt-4 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">{selectedPlan.benefits.map((benefit) => <article key={benefit} className="border border-[#d2d2d2] bg-[#f5f9fc] p-4"><span className="text-lg font-semibold text-[#0078d4]">✓</span><p className="mt-2 text-sm font-semibold leading-5 text-[#505050]">{benefit}</p></article>)}</div>
        <div className="mt-8 flex items-center justify-between border-b border-[#edebe9] pb-3"><h3 className="text-xs font-semibold uppercase tracking-[.16em] text-[#0078d4]">Services included</h3><span className="text-xs text-[#606060]">{selectedPlan.services.length} available</span></div>
        <ol className="mt-4 grid max-h-72 grid-cols-1 gap-x-5 gap-y-2 overflow-y-auto text-sm leading-6 text-[#606060] sm:grid-cols-2">{selectedPlan.services.map((service, index) => <li key={service} className="border-b border-[#f0f0f0] pb-1"><span className="mr-2 font-semibold text-[#0078d4]">{String(index + 1).padStart(2, "0")}</span>{service}</li>)}</ol>
      </aside>
      </div>
    </div>
  </main>;
}

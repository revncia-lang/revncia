"use client";

import Link from "next/link";
import { useState } from "react";
import { subscriptionPlans } from "@/lib/plans";

type SubscriptionPlan = (typeof subscriptionPlans)[number];

export default function SignupPage() {
  const [selectedPlan, setSelectedPlan] =
    useState<SubscriptionPlan>(subscriptionPlans[0]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setMessage(
      "Your registration request has been prepared. REVNCIA will use the submitted requirements to continue the onboarding process."
    );
  }

  return (
    <main className="min-h-screen bg-white text-[#242424]">
      <section className="border-b border-[#dedede] bg-[#f7f7f7]">
        <div className="mx-auto w-full max-w-[1600px] px-4 py-14 sm:px-6 lg:px-8 xl:px-10 md:py-20">
          <div className="max-w-[1600px]">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#666]">
              REVNCIA ACCOUNT
            </p>

            <h1 className="mt-4 text-4xl font-bold leading-tight tracking-[-0.025em] md:text-6xl">
              Start your REVNCIA journey.
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[#555] md:text-lg">
              Select the service access level that best matches your
              organisation and submit your requirements for onboarding.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid w-full max-w-[1600px] gap-10 px-4 py-14 sm:px-6 lg:px-8 xl:px-10 lg:grid-cols-[0.85fr_1.15fr] md:py-20">
          <aside className="border border-[#dedede] bg-[#f7f7f7] p-7">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#666]">
              Selected Plan
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              {selectedPlan.name}
            </h2>

            <div className="mt-5 flex items-end gap-2">
              <span className="text-4xl font-bold">
                {selectedPlan.price}
              </span>

              <span className="pb-1 text-sm text-[#666]">
                one-time plan
              </span>
            </div>

            <p className="mt-3 text-sm font-semibold text-[#444]">
              {selectedPlan.accessLabel}
            </p>

            <div className="mt-7 border-t border-[#dedede] pt-6">
              <p className="text-sm font-bold text-[#242424]">
                Included benefits
              </p>

              <div className="mt-4 space-y-3">
                {selectedPlan.benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="border border-[#dedede] bg-white p-3 text-sm leading-6 text-[#555]"
                  >
                    {benefit}
                  </div>
                ))}
              </div>
            </div>

            <Link
              href="/plans"
              className="mt-7 inline-flex text-sm font-bold !text-[#0067b8] no-underline hover:underline"
            >
              Compare all plans
            </Link>
          </aside>

          <div className="border border-[#dedede] bg-white p-7 md:p-9">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#666]">
                Registration
              </p>

              <h2 className="mt-3 text-3xl font-bold">
                Tell us about your organisation.
              </h2>

              <p className="mt-3 text-sm leading-7 text-[#666]">
                Submit your basic information and select the service plan you
                want to explore.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div>
                <label
                  htmlFor="plan"
                  className="block text-sm font-bold text-[#242424]"
                >
                  Service plan
                </label>

                <select
                  id="plan"
                  value={selectedPlan.id}
                  onChange={(event) => {
                    const plan = subscriptionPlans.find(
                      (item) => item.id === event.target.value
                    );

                    if (plan) {
                      setSelectedPlan(plan);
                    }
                  }}
                  className="mt-2 w-full border border-[#999] bg-white px-4 py-3 text-sm text-[#242424] outline-none focus:border-[#0067b8]"
                >
                  {subscriptionPlans.map((plan) => (
                    <option key={plan.id} value={plan.id}>
                      {plan.name} - {plan.price} - {plan.accessLabel}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-bold text-[#242424]"
                  >
                    Full name
                  </label>

                  <input
                    id="name"
                    type="text"
                    required
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    className="mt-2 w-full border border-[#999] bg-white px-4 py-3 text-sm text-[#242424] outline-none focus:border-[#0067b8]"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-bold text-[#242424]"
                  >
                    Business email
                  </label>

                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    className="mt-2 w-full border border-[#999] bg-white px-4 py-3 text-sm text-[#242424] outline-none focus:border-[#0067b8]"
                    placeholder="name@company.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-bold text-[#242424]"
                >
                  Organisation
                </label>

                <input
                  id="company"
                  type="text"
                  required
                  value={company}
                  onChange={(event) => setCompany(event.target.value)}
                  className="mt-2 w-full border border-[#999] bg-white px-4 py-3 text-sm text-[#242424] outline-none focus:border-[#0067b8]"
                  placeholder="Organisation name"
                />
              </div>

              <div>
                <label
                  htmlFor="requirements"
                  className="block text-sm font-bold text-[#242424]"
                >
                  Requirements
                </label>

                <textarea
                  id="requirements"
                  rows={5}
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  className="mt-2 w-full resize-y border border-[#999] bg-white px-4 py-3 text-sm text-[#242424] outline-none focus:border-[#0067b8]"
                  placeholder="Tell us what you want REVNCIA to help you achieve."
                />
              </div>

              <button
                type="submit"
                className="inline-flex min-h-12 w-full items-center justify-center bg-[#0067b8] px-6 py-3 text-sm font-bold !text-white transition hover:bg-[#005a9e] md:w-auto"
              >
                Create REVNCIA Request
              </button>

              {message ? (
                <div className="border border-[#cfcfcf] bg-[#f7f7f7] p-4 text-sm leading-6 text-[#444]">
                  {message}
                </div>
              ) : null}
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
import Link from "next/link";
import { shell } from "@/lib/ui";

export default function ContactPage() {
  return (
    <main className="min-w-0 bg-white text-[#242424]">
      {/* HERO */}
      <section className="border-b border-[#e6e6e6] bg-[#f7f9fb]">
        <div
          className={`${shell} grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-24`}
        >
          <div className="min-w-0">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-[#616161]">
              CONTACT REVNCIA
            </p>

            <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-[#242424] sm:text-5xl lg:text-6xl">
              Let&apos;s build what your organisation needs next.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#505050] sm:text-xl">
              Tell us what you want to transform, automate, protect or
              improve. REVNCIA will help you identify the right technology,
              service and implementation path.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact-form"
                className="inline-flex min-h-12 items-center justify-center rounded-md bg-[#0078d4] px-6 py-3 font-bold text-white transition hover:bg-[#106ebe]"
              >
                Start a conversation
              </a>

              <Link
                href="/services"
                className="inline-flex min-h-12 items-center justify-center rounded-md border border-[#c8c8c8] bg-white px-6 py-3 font-bold text-[#242424] transition hover:bg-[#f3f3f3]"
              >
                Explore services
              </Link>
            </div>
          </div>

          {/* MICROSOFT-STYLE CONTACT PANEL */}
          <div className="rounded-2xl border border-[#d9e2e8] bg-white p-7 shadow-sm sm:p-9">
            <div className="border-l-4 border-[#0078d4] pl-5">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#616161]">
                REVNCIA DIGITAL TRANSFORMATION
              </p>

              <h2 className="mt-3 text-2xl font-bold text-[#242424] sm:text-3xl">
                One conversation can define the next step.
              </h2>

              <p className="mt-4 leading-7 text-[#505050]">
                Whether you need AI automation, digital transformation,
                enterprise technology, customer-service systems or a complete
                technology roadmap, start with your business challenge.
              </p>
            </div>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              <div className="rounded-lg bg-[#f7f9fb] p-4">
                <p className="text-sm font-bold text-[#242424]">
                  Understand
                </p>
                <p className="mt-1 text-sm leading-6 text-[#616161]">
                  Understand your current challenge.
                </p>
              </div>

              <div className="rounded-lg bg-[#f7f9fb] p-4">
                <p className="text-sm font-bold text-[#242424]">
                  Design
                </p>
                <p className="mt-1 text-sm leading-6 text-[#616161]">
                  Design the right solution.
                </p>
              </div>

              <div className="rounded-lg bg-[#f7f9fb] p-4">
                <p className="text-sm font-bold text-[#242424]">
                  Implement
                </p>
                <p className="mt-1 text-sm leading-6 text-[#616161]">
                  Implement technology around outcomes.
                </p>
              </div>

              <div className="rounded-lg bg-[#f7f9fb] p-4">
                <p className="text-sm font-bold text-[#242424]">
                  Improve
                </p>
                <p className="mt-1 text-sm leading-6 text-[#616161]">
                  Continuously improve and scale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT FORM + BUSINESS INFORMATION */}
      <section id="contact-form">
        <div
          className={`${shell} grid gap-12 py-16 sm:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:py-24`}
        >
          {/* LEFT */}
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#616161]">
              HOW WE CAN HELP
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#242424] sm:text-4xl">
              Tell us about your organisation.
            </h2>

            <p className="mt-5 max-w-xl leading-8 text-[#505050]">
              The more context you provide, the better REVNCIA can understand
              your requirements and identify an appropriate path forward.
            </p>

            <div className="mt-8 space-y-4">
              <div className="border-l-4 border-[#0078d4] bg-[#f7f9fb] p-5">
                <h3 className="font-bold text-[#242424]">
                  AI &amp; Automation
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#616161]">
                  Automate repetitive work, customer interactions and
                  operational workflows.
                </p>
              </div>

              <div className="border-l-4 border-[#0078d4] bg-[#f7f9fb] p-5">
                <h3 className="font-bold text-[#242424]">
                  Digital Transformation
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#616161]">
                  Modernise processes, systems and organisational capabilities.
                </p>
              </div>

              <div className="border-l-4 border-[#0078d4] bg-[#f7f9fb] p-5">
                <h3 className="font-bold text-[#242424]">
                  Enterprise Technology
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#616161]">
                  Plan and implement scalable technology across your
                  organisation.
                </p>
              </div>

              <div className="border-l-4 border-[#0078d4] bg-[#f7f9fb] p-5">
                <h3 className="font-bold text-[#242424]">
                  Managed Services
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#616161]">
                  Continue improving, operating and scaling your digital
                  environment.
                </p>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="rounded-2xl border border-[#d9d9d9] bg-white p-6 shadow-sm sm:p-8 lg:p-10">
            <div className="border-b border-[#e6e6e6] pb-6">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#616161]">
                CONTACT FORM
              </p>

              <h2 className="mt-2 text-2xl font-bold text-[#242424] sm:text-3xl">
                Start your REVNCIA conversation
              </h2>

              <p className="mt-3 leading-7 text-[#616161]">
                Share your requirements and we&apos;ll use the information to
                understand what you need next.
              </p>
            </div>

            <form className="mt-7 space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="firstName"
                    className="mb-2 block text-sm font-bold text-[#242424]"
                  >
                    First name
                  </label>

                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    className="min-h-12 w-full rounded-md border border-[#b8b8b8] bg-white px-4 text-[#242424] outline-none transition focus:border-[#0078d4] focus:ring-2 focus:ring-[#0078d4]/20"
                    placeholder="First name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="lastName"
                    className="mb-2 block text-sm font-bold text-[#242424]"
                  >
                    Last name
                  </label>

                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    className="min-h-12 w-full rounded-md border border-[#b8b8b8] bg-white px-4 text-[#242424] outline-none transition focus:border-[#0078d4] focus:ring-2 focus:ring-[#0078d4]/20"
                    placeholder="Last name"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-bold text-[#242424]"
                >
                  Business email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="min-h-12 w-full rounded-md border border-[#b8b8b8] bg-white px-4 text-[#242424] outline-none transition focus:border-[#0078d4] focus:ring-2 focus:ring-[#0078d4]/20"
                  placeholder="name@organisation.com"
                />
              </div>

              <div>
                <label
                  htmlFor="organisation"
                  className="mb-2 block text-sm font-bold text-[#242424]"
                >
                  Organisation
                </label>

                <input
                  id="organisation"
                  name="organisation"
                  type="text"
                  className="min-h-12 w-full rounded-md border border-[#b8b8b8] bg-white px-4 text-[#242424] outline-none transition focus:border-[#0078d4] focus:ring-2 focus:ring-[#0078d4]/20"
                  placeholder="Organisation name"
                />
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="mb-2 block text-sm font-bold text-[#242424]"
                >
                  What do you need help with?
                </label>

                <select
                  id="service"
                  name="service"
                  className="min-h-12 w-full rounded-md border border-[#b8b8b8] bg-white px-4 text-[#242424] outline-none transition focus:border-[#0078d4] focus:ring-2 focus:ring-[#0078d4]/20"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select a service area
                  </option>
                  <option value="ai-automation">AI &amp; Automation</option>
                  <option value="digital-transformation">
                    Digital Transformation
                  </option>
                  <option value="enterprise-technology">
                    Enterprise Technology
                  </option>
                  <option value="managed-services">
                    Managed Services
                  </option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-bold text-[#242424]"
                >
                  Tell us about your requirement
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows={7}
                  className="w-full resize-y rounded-md border border-[#b8b8b8] bg-white px-4 py-3 text-[#242424] outline-none transition focus:border-[#0078d4] focus:ring-2 focus:ring-[#0078d4]/20"
                  placeholder="Describe the challenge, opportunity or transformation you are considering."
                />
              </div>

              <div className="rounded-lg bg-[#f7f9fb] p-4 text-sm leading-6 text-[#616161]">
                By submitting this form, you are asking REVNCIA to review the
                information provided for the purpose of responding to your
                enquiry.
              </div>

              <button
                type="submit"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-md bg-[#0078d4] px-6 py-3 font-bold text-white transition hover:bg-[#106ebe] sm:w-auto"
              >
                Submit enquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* EXPECTATIONS */}
      <section className="border-y border-[#e6e6e6] bg-[#f7f9fb]">
        <div className={`${shell} py-14 sm:py-16 lg:py-20`}>
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#616161]">
                01
              </p>

              <h3 className="mt-3 text-xl font-bold text-[#242424]">
                Understand the requirement
              </h3>

              <p className="mt-3 leading-7 text-[#616161]">
                We start by understanding your business objectives, existing
                processes and priorities.
              </p>
            </div>

            <div>
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#616161]">
                02
              </p>

              <h3 className="mt-3 text-xl font-bold text-[#242424]">
                Identify the opportunity
              </h3>

              <p className="mt-3 leading-7 text-[#616161]">
                We identify practical opportunities for technology,
                automation and digital improvement.
              </p>
            </div>

            <div>
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#616161]">
                03
              </p>

              <h3 className="mt-3 text-xl font-bold text-[#242424]">
                Define the next step
              </h3>

              <p className="mt-3 leading-7 text-[#616161]">
                The next step can be a focused service, assessment, roadmap or
                broader transformation programme.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section>
        <div
          className={`${shell} flex flex-col gap-6 py-12 sm:py-14 md:flex-row md:items-center md:justify-between lg:py-16`}
        >
          <div>
            <h2 className="text-3xl font-bold text-[#242424]">
              Have a transformation idea?
            </h2>

            <p className="mt-2 text-lg text-[#505050]">
              Start with the challenge. We&apos;ll help define the technology
              path.
            </p>
          </div>

          <Link
            href="/services"
            className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-md border border-[#0078d4] bg-white px-7 py-3 font-bold text-[#0078d4] transition hover:bg-[#f3f9fd]"
          >
            View REVNCIA services
          </Link>
        </div>
      </section>
    </main>
  );
}
import Link from "next/link";
import { shell } from "@/lib/ui";

const sections = [
  {
    id: "privacy",
    title: "Privacy",
    text: "REVNCIA respects customer privacy and is committed to handling personal information responsibly. Customers should understand what information is collected, why it is needed, how it is used and the choices available to them.",
  },
  {
    id: "privacy-choices",
    title: "Your Privacy Choices",
    text: "Customers may contact REVNCIA to ask questions about their personal information, request clarification about data handling or discuss available privacy choices.",
  },
  {
    id: "data-privacy",
    title: "Customer Data Privacy",
    text: "Customer data should remain under appropriate customer control. REVNCIA services are designed to support secure processing, controlled access and responsible use of information.",
  },
  {
    id: "terms",
    title: "Terms of Use",
    text: "These terms describe the general conditions for using REVNCIA websites, services, software, platform capabilities and customer environments.",
  },
  {
    id: "trademarks",
    title: "Trademarks",
    text: "REVNCIA, REVNCIA OS, REVNCIA AI Platform and related names, logos and visual identities are REVNCIA brand assets. Third-party trademarks remain the property of their respective owners.",
  },
  {
    id: "safety",
    title: "Safety & Responsible AI",
    text: "REVNCIA is committed to responsible technology practices, appropriate human oversight, secure system design, transparency and practical safeguards when AI capabilities are used.",
  },
  {
    id: "responsible-ai",
    title: "Responsible AI",
    text: "REVNCIA aims to deploy AI systems with appropriate controls around authorization, security, privacy, reliability, human oversight and responsible use.",
  },
  {
    id: "security",
    title: "Security",
    text: "Security is an important part of the REVNCIA platform. Services may include access controls, authentication, authorization, monitoring, secure integrations, data protection and operational safeguards.",
  },
  {
    id: "accessibility",
    title: "Accessibility",
    text: "REVNCIA aims to make its website, software and digital experiences accessible and usable by as many customers as reasonably possible.",
  },
  {
    id: "cookies",
    title: "Cookies",
    text: "REVNCIA may use cookies or similar technologies to support website functionality, security, preferences, analytics and service improvement. Customers should review applicable browser and privacy controls.",
  },
  {
    id: "acceptable-use",
    title: "Acceptable Use",
    text: "REVNCIA services should be used lawfully, responsibly and in accordance with applicable agreements. Customers must not use REVNCIA systems to facilitate harmful, fraudulent, abusive or unlawful activities.",
  },
  {
    id: "legal",
    title: "Legal",
    text: "Legal information may vary depending on the service, customer agreement, jurisdiction and applicable law. Customers should review the applicable contractual documentation for specific services.",
  },
  {
    id: "services",
    title: "About Our Services",
    text: "REVNCIA provides AI, automation, digital transformation, cybersecurity, enterprise technology and related professional services designed around practical business outcomes.",
  },
];

export default function PoliciesPage() {
  return (
    <main className="bg-white text-[#242424]">

      <section className="border-b border-[#d9d9d9] bg-[#f5f7f9]">
        <div className={`${shell} py-16 sm:py-20`}>

          <span className="text-sm font-semibold tracking-wide text-[#0078D4]">
            REVNCIA TRUST & LEGAL
          </span>

          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Policies, privacy and responsible technology
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#5e5e5e]">
            Understand how REVNCIA approaches privacy, customer data,
            security, responsible AI, accessibility and use of its services.
          </p>

        </div>
      </section>

      <section>
        <div className={`${shell} py-14 sm:py-16`}>

          <div className="grid gap-10 lg:grid-cols-[260px_minmax(0,1fr)]">

            <aside className="lg:sticky lg:top-24 lg:self-start">
              <div className="rounded-xl border border-[#d9d9d9] bg-[#f7f9fb] p-5">

                <p className="text-xs font-semibold tracking-wide text-[#5e5e5e]">
                  ON THIS PAGE
                </p>

                <nav className="mt-4 space-y-2">
                  {sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="block rounded-md px-3 py-2 text-sm text-[#5e5e5e] hover:bg-white hover:text-[#0078D4]"
                    >
                      {section.title}
                    </a>
                  ))}
                </nav>

              </div>
            </aside>

            <div className="space-y-6">

              {sections.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-24 rounded-xl border border-[#d9d9d9] bg-white p-7 sm:p-8"
                >
                  <h2 className="text-2xl font-semibold">
                    {section.title}
                  </h2>

                  <p className="mt-4 max-w-4xl text-sm leading-7 text-[#5e5e5e]">
                    {section.text}
                  </p>
                </section>
              ))}

              <div className="rounded-xl bg-[#f5f7f9] p-8">
                <h2 className="text-xl font-semibold">
                  Questions about REVNCIA policies?
                </h2>

                <p className="mt-3 max-w-2xl text-sm leading-6 text-[#5e5e5e]">
                  Contact REVNCIA if you need clarification about privacy,
                  security, AI, customer data or the use of our services.
                </p>

                <Link
                  href="/contact"
                  className="mt-6 inline-flex rounded-md bg-[#0078D4] px-5 py-3 text-sm font-semibold !text-white hover:bg-[#106ebe]"
                >
                  Contact REVNCIA
                </Link>
              </div>

            </div>
          </div>

        </div>
      </section>

    </main>
  );
}
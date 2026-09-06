import Link from "next/link";
import { shell } from "@/lib/ui";

const groups = [
  {
    title: "REVNCIA",
    description: "Explore the REVNCIA company, platform and customer experience.",
    links: [
      ["Home", "/"],
      ["About REVNCIA", "/about"],
      ["Contact REVNCIA", "/contact"],
      ["Resources", "/facilities"],
    ],
  },
  {
    title: "AI PLATFORM",
    description: "Understand the core REVNCIA AI platform capabilities.",
    links: [
      ["REVNCIA AI Platform", "/platform"],
      ["REVNCIA OS", "/os"],
      ["AI Automation", "/services"],
      ["Digital Transformation", "/services"],
      ["Cybersecurity & Protection", "/services"],
      ["Enterprise Technology", "/services"],
    ],
  },
  {
    title: "SERVICES",
    description: "Explore technology services designed around business outcomes.",
    links: [
      ["Service Catalog", "/services"],
      ["Business Protection", "/services"],
      ["Fast Services", "/services"],
      ["Profitable Outcomes", "/services"],
      ["Plans & Pricing", "/plans"],
    ],
  },
  {
    title: "INDUSTRIES",
    description: "Industry-focused transformation and technology solutions.",
    links: [
      ["Government & Public Sector", "/industries"],
      ["Banking & Financial Services", "/industries"],
      ["Education & Universities", "/industries"],
      ["Corporate & Industrial", "/industries"],
      ["Industry Solutions", "/industries"],
    ],
  },
  {
    title: "REVNCIA OS",
    description: "Customer workspace and operating environment.",
    links: [
      ["OS Dashboard", "/os"],
      ["AI Workspace", "/os"],
      ["OS Services", "/os/services"],
      ["OS Projects", "/os/projects"],
      ["OS Resources", "/os/resources"],
      ["Sign Up", "/signup"],
    ],
  },
  {
    title: "POLICIES & TRUST",
    description: "Information about privacy, security, responsible AI and legal terms.",
    links: [
      ["Privacy", "/policies#privacy"],
      ["Terms of Use", "/policies#terms"],
      ["Security", "/policies#security"],
      ["AI & Data Policy", "/policies#data-privacy"],
      ["Responsible AI", "/policies#responsible-ai"],
      ["Cookies", "/policies#cookies"],
      ["Accessibility", "/policies#accessibility"],
    ],
  },
];

export default function SitemapPage() {
  return (
    <main className="bg-white text-[#242424]">

      <section className="border-b border-[#d9d9d9] bg-[#f5f7f9]">
        <div className={`${shell} py-16 sm:py-20`}>
          <span className="text-sm font-semibold tracking-wide text-[#0078D4]">
            REVNCIA SITE MAP
          </span>

          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Explore REVNCIA
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#5e5e5e]">
            Find REVNCIA services, platform capabilities, industries,
            REVNCIA OS, customer resources and important policies.
          </p>
        </div>
      </section>

      <section>
        <div className={`${shell} py-14 sm:py-16`}>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

            {groups.map((group) => (
              <section
                key={group.title}
                className="rounded-xl border border-[#d9d9d9] bg-white p-7 shadow-sm"
              >
                <h2 className="text-xl font-semibold">
                  {group.title}
                </h2>

                <p className="mt-3 text-sm leading-6 text-[#5e5e5e]">
                  {group.description}
                </p>

                <ul className="mt-6 space-y-3">
                  {group.links.map(([label, href]) => (
                    <li key={`${group.title}-${label}`}>
                      <Link
                        href={href}
                        className="text-sm font-medium text-[#0078D4] hover:underline"
                      >
                        {label}
                        <span className="ml-2">
                          -&gt;
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ))}

          </div>

          <div className="mt-10 rounded-xl bg-[#f5f7f9] p-8">
            <h2 className="text-xl font-semibold">
              Need help finding something?
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-[#5e5e5e]">
              If you cannot find the service, capability, policy or
              information you need, contact the REVNCIA team.
            </p>

            <Link
              href="/contact"
              className="mt-6 inline-flex rounded-md bg-[#0078D4] px-5 py-3 text-sm font-semibold !text-white hover:bg-[#106ebe]"
            >
              Contact REVNCIA
            </Link>
          </div>

        </div>
      </section>

    </main>
  );
}
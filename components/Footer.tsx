import Link from "next/link";
import { shell } from "@/lib/ui";
import { Logo } from "./Logo";

const footerColumns = [
  {
    title: "WHAT'S NEW",
    links: [
      ["REVNCIA AI Platform", "/platform"],
      ["REVNCIA OS", "/os"],
      ["AI Automation", "/services"],
      ["Digital Transformation", "/services"],
      ["Cybersecurity & Protection", "/services"],
      ["Enterprise Technology", "/services"],
      ["Explore REVNCIA Services", "/services"],
      ["Explore REVNCIA", "/about"],
    ],
  },
  {
    title: "REVNCIA PLATFORM",
    links: [
      ["AI Gateway", "/platform"],
      ["AI Assistants", "/platform"],
      ["Workflow Automation", "/platform"],
      ["Knowledge & Data", "/platform"],
      ["Enterprise Integrations", "/platform"],
      ["Security & Governance", "/platform"],
      ["Usage & Cost Control", "/platform"],
      ["Platform Overview", "/platform"],
    ],
  },
  {
    title: "INDUSTRIES",
    links: [
      ["Government & Public Sector", "/industries"],
      ["Banking & Financial Services", "/industries"],
      ["Education & Universities", "/industries"],
      ["Corporate & Industrial", "/industries"],
      ["Industry Solutions", "/industries"],
      ["Business Transformation", "/industries"],
      ["Enterprise Solutions", "/industries"],
      ["Request Industry Assessment", "/contact"],
    ],
  },
  {
    title: "BUSINESS",
    links: [
      ["AI & Automation", "/services"],
      ["Digital Transformation", "/services"],
      ["Cybersecurity", "/services"],
      ["Enterprise Technology", "/services"],
      ["Business Protection", "/services"],
      ["Fast Services", "/services"],
      ["Profitable Outcomes", "/services"],
      ["Plans & Pricing", "/plans"],
    ],
  },
  {
    title: "REVNCIA OS",
    links: [
      ["OS Dashboard", "/os"],
      ["AI Workspace", "/os"],
      ["Services", "/os/services"],
      ["Projects", "/os/projects"],
      ["Resources", "/os/resources"],
      ["Customer Workspace", "/os"],
      ["Account / Sign Up", "/signup"],
      ["Access REVNCIA OS", "/signup"],
    ],
  },
  {
    title: "DEVELOPER & IT",
    links: [
      ["REVNCIA AI Gateway", "/platform"],
      ["AI Integrations", "/platform"],
      ["Enterprise Integrations", "/platform"],
      ["Automation Systems", "/services"],
      ["Cloud Technology", "/services"],
      ["Security Architecture", "/services"],
      ["Technical Services", "/services"],
      ["Contact Technical Team", "/contact"],
    ],
  },
  {
    title: "COMPANY & SUPPORT",
    links: [
      ["About REVNCIA", "/about"],
      ["Contact REVNCIA", "/contact"],
      ["Resources", "/facilities"],
      ["Service Catalog", "/services"],
      ["Help & Support", "/contact"],
      ["Customer Support", "/contact"],
      ["Responsible AI", "/policies"],
      ["Accessibility", "/policies"],
    ],
  },
];

const legalLinks = [
  ["Privacy Policy", "/policies#privacy"],
  ["Terms of Use", "/policies#terms"],
  ["Cookie Policy", "/policies#cookies"],
  ["Security", "/policies#security"],
  ["AI & Data Policy", "/policies#data-privacy"],
  ["Acceptable Use", "/policies#acceptable-use"],
  ["Accessibility", "/policies#accessibility"],
  ["Legal", "/policies#legal"],
];

export function Footer() {
  return (
    <footer className="border-t border-[#d9d9d9] bg-[#f5f5f5] text-[#242424]">

      {/* Main Footer */}
      <div className={`${shell} py-14 sm:py-16 lg:py-20`}>

        {/* Brand */}
        <div className="mb-14 grid gap-10 lg:grid-cols-[1.4fr_3fr]">

          <div className="max-w-md">
            <Link
              href="/"
              className="inline-flex items-center"
              aria-label="REVNCIA Home"
            >
              <Logo tone="light" />
            </Link>

            <p className="mt-5 text-sm leading-6 text-[#5e5e5e]">
              REVNCIA is a global AI platform delivering intelligent
              automation, digital transformation, cybersecurity and
              enterprise technology solutions.
            </p>

            <p className="mt-4 text-sm leading-6 text-[#5e5e5e]">
              Intelligent technology. Practical transformation.
              Measurable outcomes.
            </p>

            <Link
              href="/contact"
              className="mt-7 inline-flex min-h-11 items-center justify-center rounded-md bg-[#0078D4] px-6 py-3 text-sm font-semibold !text-white transition-colors hover:bg-[#106ebe]"
            >
              Contact REVNCIA
              <span className="ml-2" aria-hidden="true">
                -&gt;
              </span>
            </Link>
          </div>

          {/* Footer Columns */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 xl:grid-cols-4">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h2 className="text-sm font-semibold tracking-wide text-[#242424]">
                  {column.title}
                </h2>

                <ul className="mt-5 space-y-3">
                  {column.links.map(([label, href]) => (
                    <li key={`${column.title}-${label}`}>
                      <Link
                        href={href}
                        className="text-[13px] leading-5 text-[#5e5e5e] transition-colors hover:text-[#0078D4] hover:underline"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Microsoft-style Utility / Legal Bar */}
      <div className="border-t border-[#d9d9d9] bg-[#f5f5f5]">

        <div className={`${shell} py-5`}>

          <div className="flex flex-col gap-5 text-[13px] text-[#5e5e5e] lg:flex-row lg:items-center lg:justify-between">

            {/* Language and Privacy */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">

              <Link
                href="/locale"
                className="transition-colors hover:text-[#242424]"
              >
                English (United States)
              </Link>

              <Link
                href="/policies#privacy-choices"
                className="inline-flex items-center gap-2 transition-colors hover:text-[#242424]"
              >
                <span
                  className="inline-flex h-4 w-4 items-center justify-center border border-[#5e5e5e]"
                  aria-hidden="true"
                >
                  ✓
                </span>
                Your Privacy Choices
              </Link>

              <Link
                href="/policies#data-privacy"
                className="transition-colors hover:text-[#242424]"
              >
                Customer Data Privacy
              </Link>

            </div>

            {/* REVNCIA Utility Navigation */}
            <nav
              aria-label="REVNCIA legal and company links"
              className="flex flex-wrap items-center gap-x-6 gap-y-3"
            >
              <Link
                href="/sitemap"
                className="transition-colors hover:text-[#242424]"
              >
                Sitemap
              </Link>

              <Link
                href="/contact"
                className="transition-colors hover:text-[#242424]"
              >
                Contact REVNCIA
              </Link>

              <Link
                href="/policies#privacy"
                className="transition-colors hover:text-[#242424]"
              >
                Privacy
              </Link>

              <Link
                href="/policies#terms"
                className="transition-colors hover:text-[#242424]"
              >
                Terms of use
              </Link>

              <Link
                href="/policies#trademarks"
                className="transition-colors hover:text-[#242424]"
              >
                Trademarks
              </Link>

              <Link
                href="/policies#safety"
                className="transition-colors hover:text-[#242424]"
              >
                Safety &amp; Responsible AI
              </Link>

              <Link
                href="/policies#accessibility"
                className="transition-colors hover:text-[#242424]"
              >
                Accessibility
              </Link>

              <Link
                href="/policies#cookies"
                className="transition-colors hover:text-[#242424]"
              >
                Cookies
              </Link>

              <Link
                href="/policies#services"
                className="transition-colors hover:text-[#242424]"
              >
                About our services
              </Link>
            </nav>

          </div>

          {/* Copyright */}
          <div className="mt-5 flex flex-col gap-2 text-[13px] text-[#5e5e5e] sm:flex-row sm:items-center sm:justify-between">

            <p>
              © {new Date().getFullYear()} REVNCIA. All rights reserved.
            </p>


          </div>

        </div>
      </div>

    </footer>
  );
}
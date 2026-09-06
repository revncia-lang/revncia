"use client";

import Link from "next/link";
import { useState } from "react";
import { shell } from "@/lib/ui";
import { Logo } from "./Logo";

const menuGroups = [
  {
    title: "Software & AI",
    links: [
      ["REVNCIA AI Platform", "/platform"],
      ["REVNCIA AI Assistants", "/platform"],
      ["AI Automation", "/services"],
      ["AI Gateway", "/platform"],
      ["Workflow Automation", "/platform"],
      ["Knowledge & Data", "/platform"],
      ["Enterprise Integrations", "/platform"],
    ],
  },
  {
    title: "REVNCIA OS",
    links: [
      ["REVNCIA OS", "/os"],
      ["AI Workspace", "/os"],
      ["Customer Workspace", "/os"],
      ["Projects", "/os/projects"],
      ["Services", "/os/services"],
      ["Resources", "/os/resources"],
      ["Account & Sign Up", "/signup"],
    ],
  },
  {
    title: "Industries",
    links: [
      ["Government & Public Sector", "/industries"],
      ["Banking & Financial Services", "/industries"],
      ["Education & Universities", "/industries"],
      ["Corporate & Industrial", "/industries"],
      ["Enterprise Solutions", "/industries"],
      ["Industry Transformation", "/industries"],
    ],
  },
  {
    title: "Business",
    links: [
      ["Digital Transformation", "/services"],
      ["Business Automation", "/services"],
      ["Business Protection", "/services"],
      ["Cybersecurity", "/services"],
      ["Enterprise Technology", "/services"],
      ["Cloud Technology", "/services"],
      ["Fast Services", "/services"],
      ["Profitable Outcomes", "/services"],
    ],
  },
  {
    title: "Developer & IT",
    links: [
      ["REVNCIA AI Gateway", "/platform"],
      ["AI Integrations", "/platform"],
      ["Automation Systems", "/services"],
      ["Enterprise Integrations", "/platform"],
      ["Security Architecture", "/services"],
      ["Cloud Technology", "/services"],
      ["Technical Services", "/contact"],
      ["Resources", "/facilities"],
    ],
  },
  {
    title: "Other",
    links: [
      ["Service Catalog", "/services"],
      ["Plans & Pricing", "/plans"],
      ["Resources", "/facilities"],
      ["About REVNCIA", "/about"],
      ["Contact REVNCIA", "/contact"],
      ["Customer Support", "/contact"],
      ["Responsible AI", "/policies#responsible-ai"],
      ["Privacy & Security", "/policies"],
    ],
  },
];

export function Header() {
  const [allOpen, setAllOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="relative z-50 border-b border-[#d9d9d9] bg-white">

      <div className={`${shell} flex min-h-[72px] items-center gap-5`}>

        {/* REVNCIA Logo */}
        <Link
          href="/"
          aria-label="REVNCIA Home"
          className="shrink-0"
        >
          <Logo tone="light" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex">

          <Link
            href="/"
            className="rounded-md px-3 py-2 text-sm text-[#242424] hover:bg-[#f5f5f5]"
          >
            Home
          </Link>

          <Link
            href="/services"
            className="rounded-md px-3 py-2 text-sm text-[#242424] hover:bg-[#f5f5f5]"
          >
            Services
          </Link>

          <Link
            href="/platform"
            className="rounded-md px-3 py-2 text-sm text-[#242424] hover:bg-[#f5f5f5]"
          >
            Platform
          </Link>

          <Link
            href="/industries"
            className="rounded-md px-3 py-2 text-sm text-[#242424] hover:bg-[#f5f5f5]"
          >
            Industries
          </Link>

          <Link
            href="/os"
            className="rounded-md px-3 py-2 text-sm text-[#242424] hover:bg-[#f5f5f5]"
          >
            REVNCIA OS
          </Link>

          {/* All REVNCIA */}
          <button
            type="button"
            onClick={() => setAllOpen((value) => !value)}
            aria-expanded={allOpen}
            className="ml-1 rounded-md px-3 py-2 text-sm text-[#242424] hover:bg-[#f5f5f5]"
          >
            All REVNCIA
            <span className="ml-2 inline-block text-[11px]">
              {allOpen ? "▲" : "▼"}
            </span>
          </button>

        </nav>

        {/* Right Navigation */}
        <div className="ml-auto hidden items-center gap-2 lg:flex">

          <Link
            href="/resources"
            className="rounded-md px-3 py-2 text-sm text-[#242424] hover:bg-[#f5f5f5]"
          >
            Resources
          </Link>

          <Link
            href="/plans"
            className="rounded-md px-3 py-2 text-sm text-[#242424] hover:bg-[#f5f5f5]"
          >
            Plans
          </Link>

          <Link
            href="/contact"
            className="rounded-md bg-[#0078D4] px-4 py-2 text-sm font-semibold !text-white hover:bg-[#106ebe]"
          >
            Contact
          </Link>

          <Link
            href="/signup"
            className="rounded-md border border-[#0078D4] bg-white px-4 py-2 text-sm font-semibold text-[#0078D4] hover:bg-[#f3f9fd]"
          >
            Sign in
          </Link>

        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileOpen((value) => !value)}
          aria-expanded={mobileOpen}
          aria-label="Open navigation"
          className="ml-auto rounded-md border border-[#d9d9d9] px-3 py-2 text-sm lg:hidden"
        >
          {mobileOpen ? "Close" : "Menu"}
        </button>

      </div>

      {/* ALL REVNCIA MEGA MENU */}
      {allOpen && (
        <div className="absolute left-0 right-0 top-full border-b border-[#d9d9d9] bg-white shadow-lg">
          <div className={`${shell} py-10`}>

            <div className="mb-8 flex items-end justify-between gap-6">
              <div>
                <p className="text-xs font-semibold tracking-[0.12em] text-[#0078D4]">
                  REVNCIA EXPLORER
                </p>

                <h2 className="mt-2 text-2xl font-semibold text-[#242424]">
                  Explore everything REVNCIA
                </h2>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-[#5e5e5e]">
                  Discover REVNCIA AI, services, industries, REVNCIA OS,
                  business solutions and technology capabilities.
                </p>
              </div>

              <Link
                href="/sitemap"
                onClick={() => setAllOpen(false)}
                className="hidden text-sm font-semibold text-[#0078D4] hover:underline md:block"
              >
                View sitemap -&gt;
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-x-10 gap-y-10 md:grid-cols-3 xl:grid-cols-6">

              {menuGroups.map((group) => (
                <div key={group.title}>

                  <h3 className="text-sm font-semibold text-[#242424]">
                    {group.title}
                  </h3>

                  <ul className="mt-4 space-y-3">

                    {group.links.map(([label, href]) => (
                      <li key={`${group.title}-${label}`}>

                        <Link
                          href={href}
                          onClick={() => setAllOpen(false)}
                          className="text-[13px] leading-5 text-[#5e5e5e] hover:text-[#0078D4] hover:underline"
                        >
                          {label}
                        </Link>

                      </li>
                    ))}

                  </ul>

                </div>
              ))}

            </div>

            <div className="mt-10 border-t border-[#e5e5e5] pt-6">
              <div className="flex flex-wrap items-center gap-5 text-sm">

                <Link
                  href="/about"
                  onClick={() => setAllOpen(false)}
                  className="font-medium text-[#0078D4] hover:underline"
                >
                  About REVNCIA
                </Link>

                <Link
                  href="/contact"
                  onClick={() => setAllOpen(false)}
                  className="font-medium text-[#0078D4] hover:underline"
                >
                  Contact REVNCIA
                </Link>

                <Link
                  href="/policies"
                  onClick={() => setAllOpen(false)}
                  className="font-medium text-[#0078D4] hover:underline"
                >
                  Trust & Policies
                </Link>

                <Link
                  href="/sitemap"
                  onClick={() => setAllOpen(false)}
                  className="font-medium text-[#0078D4] hover:underline md:hidden"
                >
                  Sitemap
                </Link>

              </div>
            </div>

          </div>
        </div>
      )}

      {/* MOBILE NAVIGATION */}
      {mobileOpen && (
        <div className="border-t border-[#d9d9d9] bg-white lg:hidden">

          <div className={`${shell} py-5`}>

            <nav className="space-y-1">

              {[
                ["Home", "/"],
                ["Services", "/services"],
                ["Platform", "/platform"],
                ["Industries", "/industries"],
                ["REVNCIA OS", "/os"],
                ["Resources", "/facilities"],
                ["Plans & Pricing", "/plans"],
                ["About REVNCIA", "/about"],
                ["Contact REVNCIA", "/contact"],
                ["Sign Up / Account", "/signup"],
                ["Sitemap", "/sitemap"],
              ].map(([label, href]) => (
                <Link
                  key={label}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-md px-4 py-3 text-sm text-[#242424] hover:bg-[#f5f5f5] hover:text-[#0078D4]"
                >
                  {label}
                </Link>
              ))}

            </nav>

            <div className="mt-5 border-t border-[#e5e5e5] pt-5">

              <p className="text-xs font-semibold tracking-wide text-[#5e5e5e]">
                REVNCIA
              </p>

              <p className="mt-2 text-sm leading-6 text-[#5e5e5e]">
                Intelligent technology. Practical transformation.
                Measurable outcomes.
              </p>

            </div>

          </div>

        </div>
      )}

    </header>
  );
}
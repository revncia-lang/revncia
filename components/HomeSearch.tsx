"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const suggestions = [
  {
    title: "AI Automation",
    description: "Automate repetitive business workflows with AI.",
    href: "/services",
  },
  {
    title: "Digital Transformation",
    description: "Modernize operations, systems and customer experiences.",
    href: "/services",
  },
  {
    title: "Cybersecurity",
    description: "Protect your organisation, systems and data.",
    href: "/services",
  },
  {
    title: "REVNCIA AI Platform",
    description: "Explore the core REVNCIA AI capabilities.",
    href: "/platform",
  },
  {
    title: "REVNCIA OS",
    description: "Access your intelligent digital workspace.",
    href: "/os",
  },
  {
    title: "Industry Solutions",
    description: "Explore solutions for your industry.",
    href: "/industries",
  },
  {
    title: "Plans & Pricing",
    description: "Review REVNCIA plans and service options.",
    href: "/plans",
  },
  {
    title: "Contact REVNCIA",
    description: "Talk with the REVNCIA team about your requirements.",
    href: "/contact",
  },
];

export function HomeSearch() {
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);

  const filteredSuggestions = useMemo(() => {
    const value = query.trim().toLowerCase();

    if (!value) {
      return suggestions.slice(0, 5);
    }

    return suggestions
      .filter((item) =>
        `${item.title} ${item.description}`
          .toLowerCase()
          .includes(value)
      )
      .slice(0, 6);
  }, [query]);

  return (
    <section className="border-y border-[#d9d9d9] bg-white">
      <div className="mx-auto w-full max-w-[1600px] px-4 py-8 sm:px-6 lg:px-8 xl:px-10">

        <div className="mx-auto max-w-5xl">

          <div className="text-center">
            <p className="text-sm font-semibold tracking-wide text-[#0078D4]">
              REVNCIA EXPLORER
            </p>

            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[#242424] sm:text-3xl">
              Hi there, welcome to REVNCIA
            </h2>

            <p className="mt-3 text-sm text-[#5e5e5e] sm:text-base">
              Find what you need faster with REVNCIA-powered suggestions.
            </p>
          </div>

          {/* Search */}
          <div className="relative mt-7">

            <div
              className={[
                "flex min-h-14 items-center rounded-md border bg-white",
                focused
                  ? "border-[#0078D4] ring-2 ring-[#0078D4]/20"
                  : "border-[#8a8886]",
              ].join(" ")}
            >

              <span
                className="ml-4 flex h-5 w-5 shrink-0 items-center justify-center text-[#5e5e5e]"
                aria-hidden="true"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-5 w-5"
                >
                  <circle cx="11" cy="11" r="7" />
                  <path d="m20 20-4-4" />
                </svg>
              </span>

              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => {
                  setTimeout(() => setFocused(false), 150);
                }}
                type="search"
                placeholder="Search REVNCIA"
                aria-label="Search REVNCIA"
                className="min-w-0 flex-1 bg-transparent px-4 py-4 text-base text-[#242424] outline-none placeholder:text-[#737373]"
              />

              {query && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  aria-label="Clear search"
                  className="mr-2 rounded-md px-3 py-2 text-sm text-[#5e5e5e] hover:bg-[#f5f5f5]"
                >
                  Clear
                </button>
              )}

              <Link
                href="/services"
                className="mr-2 hidden rounded-md bg-[#0078D4] px-5 py-3 text-sm font-semibold !text-white hover:bg-[#106ebe] sm:block"
              >
                Search
              </Link>

            </div>

            {/* Suggestions */}
            {focused && (
              <div className="absolute left-0 right-0 top-[calc(100%+8px)] z-40 rounded-md border border-[#d9d9d9] bg-white p-3 shadow-xl">

                <p className="px-3 py-2 text-xs font-semibold tracking-wide text-[#5e5e5e]">
                  {query.trim()
                    ? "SUGGESTED RESULTS"
                    : "EXPLORE REVNCIA"}
                </p>

                {filteredSuggestions.length > 0 ? (
                  <div className="grid gap-1 sm:grid-cols-2">

                    {filteredSuggestions.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        onClick={() => setFocused(false)}
                        className="rounded-md p-3 hover:bg-[#f5f7f9]"
                      >
                        <span className="block text-sm font-semibold text-[#242424]">
                          {item.title}
                        </span>

                        <span className="mt-1 block text-xs leading-5 text-[#5e5e5e]">
                          {item.description}
                        </span>
                      </Link>
                    ))}

                  </div>
                ) : (
                  <div className="px-3 py-5 text-sm text-[#5e5e5e]">
                    No matching REVNCIA suggestions found.
                    <Link
                      href="/contact"
                      className="ml-1 font-semibold text-[#0078D4] hover:underline"
                    >
                      Contact REVNCIA
                    </Link>
                  </div>
                )}

              </div>
            )}

          </div>

          {/* Quick Actions */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm">

            <Link
              href="/platform"
              className="font-medium text-[#0078D4] hover:underline"
            >
              Explore REVNCIA
            </Link>

            <Link
              href="/services"
              className="font-medium text-[#0078D4] hover:underline"
            >
              Find a Service
            </Link>

            <Link
              href="/os"
              className="font-medium text-[#0078D4] hover:underline"
            >
              Explore REVNCIA OS
            </Link>

            <Link
              href="/industries"
              className="font-medium text-[#0078D4] hover:underline"
            >
              Explore Industries
            </Link>

            <Link
              href="/plans"
              className="font-medium text-[#0078D4] hover:underline"
            >
              Plans &amp; Pricing
            </Link>

            <Link
              href="/signup"
              className="font-medium text-[#0078D4] hover:underline"
            >
              Sign in to my account
            </Link>

          </div>

        </div>
      </div>
    </section>
  );
}
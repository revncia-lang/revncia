"use client";

import Link from "next/link";
import { useState } from "react";

const suggestions = [
  ["AI Automation", "/services"],
  ["Digital Transformation", "/services"],
  ["Cybersecurity & Protection", "/services"],
  ["REVNCIA AI Platform", "/platform"],
  ["REVNCIA OS", "/os"],
  ["Industry Solutions", "/industries"],
  ["Plans & Pricing", "/plans"],
  ["Contact REVNCIA", "/contact"],
];

export default function HomeSearch() {
  const [query, setQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const filteredSuggestions = suggestions.filter(([label]) =>
    label.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="mx-auto w-full max-w-[1600px] px-4 py-8 sm:px-6 lg:px-8 xl:px-10">
        <div className="max-w-4xl">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.16em] text-[#0078D4]">
            REVNCIA EXPLORER
          </p>

          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Hi there, welcome to REVNCIA
          </h2>

          <p className="mt-3 text-base text-slate-600 sm:text-lg">
            Find what you need faster with REVNCIA-powered suggestions.
          </p>

          <div className="relative mt-6">
            <div className="flex min-h-[56px] items-center overflow-hidden rounded-md border border-slate-300 bg-white shadow-sm transition focus-within:border-[#0078D4] focus-within:ring-2 focus-within:ring-[#0078D4]/20">
              <svg
                aria-hidden="true"
                className="ml-4 h-5 w-5 shrink-0 text-slate-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3.5-3.5" />
              </svg>

              <input
                value={query}
                onChange={(event) => {
                  setQuery(event.target.value);
                  setShowSuggestions(true);
                }}
                onFocus={() => setShowSuggestions(true)}
                placeholder="Search REVNCIA"
                aria-label="Search REVNCIA"
                className="min-w-0 flex-1 border-0 bg-transparent px-4 py-4 text-base text-slate-900 outline-none placeholder:text-slate-500"
              />

              <Link
                href={
                  query.trim()
                    ? `/search?q=${encodeURIComponent(query.trim())}`
                    : "/search"
                }
                className="mr-2 rounded-md bg-[#0078D4] px-5 py-3 text-sm font-semibold !text-white transition hover:bg-[#106ebe]"
              >
                Search
              </Link>
            </div>

            {showSuggestions && filteredSuggestions.length > 0 && (
              <div className="absolute z-30 mt-2 w-full overflow-hidden rounded-md border border-slate-200 bg-white shadow-xl">
                {filteredSuggestions.map(([label, href]) => (
                  <Link
                    key={label}
                    href={href}
                    onClick={() => setShowSuggestions(false)}
                    className="block border-b border-slate-100 px-5 py-3 text-sm font-medium text-slate-700 transition last:border-b-0 hover:bg-slate-50 hover:text-[#0078D4]"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/services"
              className="rounded-md border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-[#0078D4] hover:text-[#0078D4]"
            >
              Find a Service
            </Link>

            <Link
              href="/os"
              className="rounded-md border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-[#0078D4] hover:text-[#0078D4]"
            >
              Explore REVNCIA OS
            </Link>

            <Link
              href="/industries"
              className="rounded-md border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-[#0078D4] hover:text-[#0078D4]"
            >
              Explore Industries
            </Link>

            <Link
              href="/plans"
              className="rounded-md border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-[#0078D4] hover:text-[#0078D4]"
            >
              Plans & Pricing
            </Link>

            <Link
              href="/signup"
              className="rounded-md border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-[#0078D4] hover:text-[#0078D4]"
            >
              Sign in to my account
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
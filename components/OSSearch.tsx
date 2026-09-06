"use client";

import { useState } from "react";
import Link from "next/link";

export default function OSSearch() {
  const [query, setQuery] = useState("");

  return (
    <div className="mb-6 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search REVNCIA OS"
          className="min-w-0 flex-1 rounded-md border border-slate-300 px-4 py-3 text-sm outline-none focus:border-[#0078D4] focus:ring-2 focus:ring-[#0078D4]/20"
        />

        <Link
          href={
            query.trim()
              ? `/search?q=${encodeURIComponent(query.trim())}`
              : "/search"
          }
          className="rounded-md bg-[#0078D4] px-5 py-3 text-center text-sm font-semibold !text-white hover:bg-[#106ebe]"
        >
          Search
        </Link>
      </div>
    </div>
  );
}
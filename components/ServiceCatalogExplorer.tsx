"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { Offering } from "@/lib/catalog";

type Props = {
  offerings: Offering[];
  os?: boolean;
};

export function ServiceCatalogExplorer({ offerings, os = false }: Props) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = useMemo(() => {
    const values = offerings.map((item) => item.group);
    return ["All", ...Array.from(new Set(values))];
  }, [offerings]);

  const results = useMemo(() => {
    const text = search.trim().toLowerCase();

    return offerings.filter((item) => {
      const categoryMatch =
        category === "All" || item.group === category;

      const searchable = [
        item.name,
        item.title,
        item.summary,
        item.group,
        ...item.capabilities,
      ]
        .join(" ")
        .toLowerCase();

      const searchMatch =
        text === "" || searchable.includes(text);

      return categoryMatch && searchMatch;
    });
  }, [offerings, search, category]);

  return (
    <div className="w-full">
      <div className="border-y border-[#d9e2ea] bg-[#f8fafc] p-4">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex min-h-12 w-full items-center gap-3 border border-[#c8d4df] bg-white px-4 lg:max-w-2xl">
            <span
              aria-hidden="true"
              className="text-xl font-semibold text-[#0067b8]"
            >
              ⌕
            </span>

            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search services, capabilities or outcomes..."
              aria-label="Search services"
              className="min-w-0 flex-1 bg-transparent text-sm text-[#242424] outline-none placeholder:text-[#707070]"
            />

            {search !== "" && (
              <button
                type="button"
                onClick={() => setSearch("")}
                className="text-xs font-bold text-[#616161] hover:text-[#0067b8]"
              >
                Clear
              </button>
            )}
          </div>

          <div className="text-sm text-[#505050]">
            Showing{" "}
            <strong className="text-[#0067b8]">
              {results.length}
            </strong>{" "}
            of {offerings.length} services
          </div>
        </div>
      </div>

      <div className="mt-5 flex gap-2 overflow-x-auto pb-2">
        {categories.map((item) => {
          const active = item === category;

          return (
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              className={
                active
                  ? "shrink-0 border border-[#0067b8] bg-[#0067b8] px-4 py-2.5 text-xs font-bold uppercase tracking-[0.08em] text-white"
                  : "shrink-0 border border-[#c8d4df] bg-white px-4 py-2.5 text-xs font-bold uppercase tracking-[0.08em] text-[#505050] hover:border-[#0067b8] hover:text-[#0067b8]"
              }
            >
              {item}
            </button>
          );
        })}
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {results.map((item) => {
          const servicePath = os
            ? "/os/services/" + item.slug
            : "/services/" + item.slug;

          const imagePath =
            "/images/services/" + item.slug + ".svg";

          return (
            <Link
              key={item.slug}
              href={servicePath}
              className="group flex min-w-0 flex-col overflow-hidden border border-[#d5dfe7] bg-white text-[#242424] shadow-[0_8px_28px_rgba(20,45,70,0.07)] transition duration-300 hover:-translate-y-1 hover:border-[#0078d4] hover:shadow-[0_18px_42px_rgba(20,45,70,0.13)]"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#eef5fa]">
                <Image
                  src={imagePath}
                  alt={item.name + " - REVNCIA service"}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
                />

                <div className="absolute left-3 top-3 border border-white bg-white px-2 py-1 text-[9px] font-bold uppercase tracking-[0.15em] text-[#0067b8]">
                  REVNCIA
                </div>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[9px] font-bold uppercase tracking-[0.14em] text-[#0067b8]">
                    {item.group}
                  </span>

                  <span className="text-[9px] font-semibold uppercase tracking-[0.1em] text-[#777777]">
                    Stage {item.stage}
                  </span>
                </div>

                <h3 className="mt-3 text-lg font-bold leading-snug text-[#242424] group-hover:text-[#0067b8]">
                  {item.name}
                </h3>

                <p className="mt-2 text-xs font-semibold uppercase leading-5 tracking-[0.04em] text-[#616161]">
                  {item.title}
                </p>

                <p className="mt-3 text-sm leading-6 text-[#505050]">
                  {item.summary}
                </p>

                <div className="mt-5 flex items-center justify-between border-t border-[#e2e7eb] pt-4">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.1em] text-[#777777]">
                    Explore capability
                  </span>

                  <span
                    aria-hidden="true"
                    className="text-lg font-bold text-[#0067b8]"
                  >
                    →
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {results.length === 0 && (
        <div className="mt-8 border border-[#d5dfe7] bg-[#f8fafc] px-6 py-14 text-center">
          <h3 className="text-xl font-bold text-[#242424]">
            No matching capability
          </h3>

          <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-[#616161]">
            Try AI, automation, data, cloud, security,
            transformation, operations or customer experience.
          </p>

          <button
            type="button"
            onClick={() => {
              setSearch("");
              setCategory("All");
            }}
            className="mt-5 border border-[#0078d4] bg-[#0078d4] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#106ebe]"
          >
            Show all services
          </button>
        </div>
      )}
    </div>
  );
}

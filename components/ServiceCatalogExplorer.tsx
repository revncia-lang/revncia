"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { Offering } from "@/lib/catalog";
import { ServiceVisual } from "@/components/ServiceVisual";

export function ServiceCatalogExplorer({ offerings, os = false }: { offerings: Offering[]; os?: boolean }) {
  const groups = ["All", ...Array.from(new Set(offerings.map((o) => o.group)))];
  const [query, setQuery] = useState("");
  const [group, setGroup] = useState("All");
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return offerings.filter((o) => {
      const matchesGroup = group === "All" || o.group === group;
      const haystack = `${o.name} ${o.title} ${o.summary} ${o.group} ${o.capabilities.join(" ")}`.toLowerCase();
      return matchesGroup && (!q || haystack.includes(q));
    });
  }, [offerings, query, group]);

  return <div>
    <div className="catalog-toolbar">
      <label className="catalog-search"><span>⌕</span><input className="border border-[#8a8886] bg-white text-black placeholder:text-[#616161] focus:border-[#0078d4]" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search services, capabilities or outcomes..." aria-label="Search services" /></label>
      <div className="catalog-count">Showing <strong>{filtered.length}</strong> of {offerings.length}</div>
    </div>
    <div className="catalog-filters" aria-label="Service categories">
      {groups.map((g) => <button type="button" key={g} onClick={() => setGroup(g)} className={`catalog-filter ${group === g ? "is-active" : ""}`}>{g}</button>)}
    </div>
    <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {filtered.map((o) => <Link key={o.slug} href={os ? `/os/services/${o.slug}` : `/services/${o.slug}`} className="service-grid-card group overflow-hidden border border-[#d2d2d2] bg-white text-[#505050] shadow-[0_12px_35px_rgba(11,31,51,.08)] transition hover:-translate-y-0.5 hover:border-[#0078d4]">
        <ServiceVisual slug={o.slug} name={o.name}/>
        <div className="p-5">
          <p className="text-[.58rem] font-semibold uppercase tracking-[.16em] text-[#0078d4]">{o.n} · {o.group}</p>
          <h3 className="mt-2 text-lg font-semibold leading-snug text-[#505050]">{o.name}</h3>
          <p className="mt-2 text-xs font-medium leading-5 uppercase tracking-[.04em] text-[#606060]">{o.title}</p>
          <p className="mt-3 text-sm leading-6 text-[#606060]">{o.summary}</p>
          <div className="mt-5 flex items-center justify-between border-t border-[#d2d2d2] pt-4 text-[.61rem] font-semibold uppercase tracking-[.12em] text-[#606060]"><span>Stage {o.stage}</span><span className="text-[#0078d4] transition group-hover:underline">Explore →</span></div>
        </div>
      </Link>)}
    </div>
    {filtered.length === 0 && <div className="tech-panel mt-8 p-10 text-center"><div className="text-2xl text-cyan-200">⌕</div><h3 className="mt-3 text-xl font-semibold">No matching capability</h3><p className="mt-2 text-sm text-white/40">Try a broader term such as AI, automation, data, cloud, security or operations.</p></div>}
  </div>;
}

import Link from "next/link";
import { ServiceCatalogExplorer } from "@/components/ServiceCatalogExplorer";
import { offerings } from "@/lib/catalog";
import { shell } from "@/lib/ui";

export default function OSServiceCatalog() {
  return <div className="min-h-[calc(100vh-72px)] bg-[radial-gradient(ellipse_70%_40%_at_70%_0%,rgba(98,217,255,.07),transparent_65%)]">
    <div className={`${shell} py-10 lg:py-14`}>
      <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div><div className="text-[9px] font-semibold uppercase tracking-[0.25em] text-cyan-200/55">REVNCIA OS / Services</div><h1 className="mt-3 page-display text-4xl md:text-5xl">Service Command Catalog</h1><p className="mt-4 max-w-3xl text-sm leading-7 text-white/42">The same 112-service catalog powers the public site and REVNCIA OS. Search, inspect a capability, start a request and move it into an accountable project.</p></div>
        <Link href="/os/service-requests" className="inline-flex w-fit rounded-xl border border-white/20 bg-white px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-black">New service request →</Link>
      </div>
      <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4"><div className="tech-panel p-5"><div className="text-[9px] uppercase tracking-[.18em] text-white/30">Catalog</div><div className="mt-2 text-3xl">112</div><div className="mt-1 text-xs text-white/35">Capabilities</div></div><div className="tech-panel p-5"><div className="text-[9px] uppercase tracking-[.18em] text-white/30">Lifecycle</div><div className="mt-2 text-3xl">7</div><div className="mt-1 text-xs text-white/35">Delivery stages</div></div><div className="tech-panel p-5"><div className="text-[9px] uppercase tracking-[.18em] text-white/30">Connected</div><div className="mt-2 text-3xl">OS</div><div className="mt-1 text-xs text-white/35">Operating layer</div></div><div className="tech-panel p-5"><div className="text-[9px] uppercase tracking-[.18em] text-white/30">Control</div><div className="mt-2 text-3xl">RBAC</div><div className="mt-1 text-xs text-white/35">Governed access</div></div></div>
      <div className="mt-10"><ServiceCatalogExplorer offerings={offerings} os /></div>
    </div>
  </div>;
}

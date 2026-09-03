import Link from "next/link";
import { notFound } from "next/navigation";
import { offerings, offeringBySlug } from "@/lib/catalog";
import { shell } from "@/lib/ui";
import { ServiceVisual } from "@/components/ServiceVisual";

export function generateStaticParams(){ return offerings.map((o)=>({slug:o.slug})); }

export default async function OSServiceDetail({ params }: { params: Promise<{slug:string}> }) {
  const { slug } = await params;
  const service = offeringBySlug(slug);
  if (!service) notFound();
  const related = offerings.filter((o)=>o.group===service.group && o.slug!==service.slug).slice(0,4);
  return <div className="min-h-[calc(100vh-72px)]"><div className={`${shell} py-10 lg:py-14`}>
    <Link href="/os/services" className="text-[10px] uppercase tracking-[.16em] text-white/35 hover:text-white">← Service Catalog</Link>
    <div className="mt-6 grid gap-8 xl:grid-cols-[1.1fr_.9fr] xl:items-start"><div><p className="site-section-label">Service {service.n} · {service.group}</p><h1 className="mt-4 page-display text-4xl md:text-6xl">{service.name}</h1><p className="mt-5 max-w-3xl text-lg leading-8 text-white/55">{service.title}</p><p className="mt-6 max-w-3xl text-sm leading-7 text-white/42">{service.body}</p><div className="mt-7 flex flex-wrap gap-3"><Link href={`/os/service-requests?service=${encodeURIComponent(service.name)}`} className="rounded-xl border border-white/20 bg-white px-5 py-3 text-[10px] font-semibold uppercase tracking-[.13em] text-black">Request this service →</Link><Link href="/os/projects" className="rounded-xl border border-white/12 px-5 py-3 text-[10px] font-semibold uppercase tracking-[.13em] text-white/65 hover:text-white">View projects</Link></div></div><div className="tech-panel p-4"><ServiceVisual slug={service.slug} name={service.name}/></div></div>
    <div className="mt-12 grid gap-4 md:grid-cols-2"><div className="tech-panel p-6"><p className="site-section-label">Included capability</p><ul className="mt-5 space-y-3">{service.capabilities.map((x)=><li key={x} className="flex gap-3 text-sm leading-6 text-white/60"><span className="text-cyan-200">◇</span>{x}</li>)}</ul></div><div className="tech-panel p-6"><p className="site-section-label">Operating model</p><div className="mt-5 grid gap-3 sm:grid-cols-2">{[["Assess","Baseline the current state"],["Design","Define target capability"],["Implement","Configure and integrate"],["Adopt","Enable owners and users"],["Measure","Track agreed KPIs"],["Operate","Manage and improve"]].map(([a,b])=><div key={a} className="rounded-xl border border-white/8 bg-white/[.018] p-4"><div className="font-semibold text-white">{a}</div><div className="mt-1 text-xs leading-5 text-white/35">{b}</div></div>)}</div></div></div>
    <div className="mt-12"><p className="site-section-label">Related capabilities</p><div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{related.map(o=><Link key={o.slug} href={`/os/services/${o.slug}`} className="tech-panel p-5 hover:border-cyan-200/20"><div className="text-[9px] tracking-[.16em] text-cyan-200/60">{o.n}</div><h3 className="mt-3 font-semibold">{o.name}</h3><p className="mt-2 text-xs leading-5 text-white/35">{o.summary}</p></Link>)}</div></div>
  </div></div>;
}

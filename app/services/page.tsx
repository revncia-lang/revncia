import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ServiceCatalogExplorer } from "@/components/ServiceCatalogExplorer";
import { offerings } from "@/lib/catalog";
import { shell, btnSecondary } from "@/lib/ui";
import Link from "next/link";

export const metadata: Metadata = { title: "Services | REVNCIA", description: "112 AI, automation, transformation, cloud, data, security, software, public impact and managed services from REVNCIA." };

export default function ServicesIndex() {
  return <main>
    <PageHero kicker="REVNCIA service network" title="112 capabilities. One transformation partner." lede="Every capability is explained in customer language: what problem it solves, what REVNCIA delivers, how it connects to REVNCIA OS, and what can be measured after implementation. Search the catalog by service, technology, function or business outcome." sceneId="services-hero" sceneTitle="REVNCIA service ecosystem" cta={{href:"/contact",label:"Discuss your transformation"}} sections={[{title:"Start with the outcome",text:"Reduce waiting, automate work, modernize systems, improve decisions, strengthen governance or build a new digital capability."},{title:"See the delivery path",text:"Discovery → assessment → solution design → implementation → adoption → measurement → managed operation."},{title:"Connect everything",text:"Individual services can become projects, workflows, AI agents and governed capabilities inside REVNCIA OS."}]} />
    <section className={`${shell} py-12 md:py-16`}>
      <div className="grid gap-4 md:grid-cols-3">
        {[["01","Discover","Understand your current process, systems, people, data and measurable outcome."],["02","Build","Configure technology, integrations, workflows, agents and controls against an agreed scope."],["03","Operate","Monitor adoption, performance, cost, security and KPIs — then improve continuously."]].map(([n,t,d])=><div className="tech-panel p-6" key={n}><span className="text-[.62rem] tracking-[.2em] text-cyan-200">{n}</span><h2 className="mt-4 text-xl font-semibold">{t}</h2><p className="mt-2 text-sm leading-6 text-white/42">{d}</p></div>)}
      </div>
      <div className="mt-14 flex flex-col gap-3 md:flex-row md:items-end md:justify-between"><div><p className="site-section-label">Customer-readable catalog</p><h2 className="mt-3 page-display text-4xl md:text-5xl">Find the capability that moves your organization forward.</h2></div><p className="max-w-md text-sm leading-6 text-white/40">Each service has a dedicated page with capabilities, delivery context, related services and a direct request path.</p></div>
      <div className="mt-8"><ServiceCatalogExplorer offerings={offerings} /></div>
      <Link href="/contact" className={`${btnSecondary} mt-10`}>Build a transformation roadmap →</Link>
    </section>
  </main>;
}

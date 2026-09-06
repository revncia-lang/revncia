import Link from "next/link";
import { offeringBySlug } from "@/lib/catalog";
import { serviceCatalog } from "@/lib/services";
export function ServiceGrid() {
  return <section id="services" className="rv-section"><div className="rv-section-head"><span className="rv-kicker">REVNCIA SERVICE CATALOG</span><h2>Technology services built around outcomes.</h2><p>Browse the complete catalog interface and connect every service to the REVNCIA request, assessment, project and managed-service journey.</p></div><div className="rv-service-grid">{serviceCatalog.map(s=>{const offering=offeringBySlug(s.id);return <article className="rv-service-card" key={s.id}><div className="rv-icon">✦</div><span className="rv-card-label">{s.category}</span><h3>{s.name}</h3><p>{s.description}</p><div className="rv-tags">{s.tags.map(t=><span key={t}>{t}</span>)}</div><Link href={`/services/${offering?.slug ?? s.id}`}>Explore service <span>→</span></Link></article>})}</div></section>;
}

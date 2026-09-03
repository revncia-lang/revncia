import Link from "next/link";
import { policies } from "@/lib/policies";
import { company, nav } from "@/lib/site";
import { Logo } from "./Logo";
import { btnPrimary, btnSecondary, shell } from "@/lib/ui";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-white/10 bg-black text-white">
      <div className={`${shell} grid gap-5 py-16 sm:grid-cols-2 lg:grid-cols-4`}>
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
          <Logo />
          <p className="mt-5 text-sm leading-7 text-white/45">AI transformation, automation, intelligence and measurable public impact — delivered as systems people can actually run.</p>
          <p className="mt-5 text-[0.62rem] font-semibold tracking-[0.2em] uppercase text-cyan-200/70">{company.motto}</p>
        </div>
        <nav className="rounded-2xl border border-white/10 bg-white/[0.02] p-6" aria-label="Footer">
          <p className="text-[0.62rem] font-semibold tracking-[0.2em] uppercase text-white/35">Explore</p>
          <ul className="mt-5 space-y-3">{nav.map(item => <li key={item.href}><Link href={item.href} className="text-sm text-white/55 transition hover:text-white">{item.label}</Link></li>)}</ul>
        </nav>
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
          <p className="text-[0.62rem] font-semibold tracking-[0.2em] uppercase text-white/35">Move forward</p>
          <div className="mt-5 grid gap-3"><Link href="/services" className={btnPrimary}>Explore all services →</Link><Link href="/platform" className={btnSecondary}>Explore platform →</Link><Link href="/contact" className={btnSecondary}>Talk to an expert →</Link></div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
          <p className="text-[0.62rem] font-semibold tracking-[0.2em] uppercase text-white/35">REVNCIA</p>
          <p className="mt-5 text-sm leading-7 text-white/55">{company.address}</p>
          <a href={`mailto:${company.email}`} className="mt-4 block break-all text-sm text-cyan-200/80 hover:text-cyan-100">{company.email}</a>
          <p className="mt-6 text-xs leading-6 text-white/30">© 2026 {company.name}. All rights reserved.</p>
        </div>
      </div>
      <div className="border-t border-white/10"><div className={`${shell} flex flex-wrap items-center justify-center gap-x-5 gap-y-2 py-5 text-xs text-white/30`}><Link href="/policies">Policies</Link>{policies.map(p => <Link key={p.slug} href={`/policies/${p.slug}`}>{p.navLabel}</Link>)}</div></div>
    </footer>
  );
}

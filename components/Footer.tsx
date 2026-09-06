import Link from "next/link";
import { policies } from "@/lib/policies";
import { company, nav } from "@/lib/site";
import { Logo } from "./Logo";
import { shell } from "@/lib/ui";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-[#d2d2d2] bg-[#f5f5f5] text-[#242424]">
      <div className={`${shell} grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4`}>
        <div>
          <Logo tone="light" />
          <p className="mt-5 max-w-xs text-sm leading-6 text-[#616161]">AI transformation, automation, intelligence and measurable public impact, delivered as systems people can actually run.</p>
          <p className="mt-5 text-xs font-semibold tracking-[0.12em] uppercase text-[#0067b8]">{company.motto}</p>
        </div>
        <nav aria-label="Footer navigation">
          <p className="text-sm font-semibold">Explore</p>
          <ul className="mt-5 space-y-3">{nav.map(item => <li key={item.href}><Link href={item.href} className="text-sm text-[#616161] transition hover:text-[#0067b8]">{item.label}</Link></li>)}</ul>
        </nav>
        <div>
          <p className="text-sm font-semibold">Move forward</p>
          <div className="mt-5 grid justify-start gap-3 text-sm"><Link href="/services" className="text-[#0067b8] hover:underline">Explore all services →</Link><Link href="/platform" className="text-[#0067b8] hover:underline">Explore platform →</Link><Link href="/contact" className="text-[#0067b8] hover:underline">Talk to an expert →</Link></div>
        </div>
        <div>
          <p className="text-sm font-semibold">Contact</p>
          <p className="mt-5 text-sm leading-6 text-[#616161]">{company.address}</p>
          <Link href="/contact" className="mt-4 block text-sm text-[#0067b8] hover:underline">Use the secure contact form →</Link>
        </div>
      </div>
      <div className="border-t border-[#d2d2d2]"><div className={`${shell} flex flex-wrap items-center justify-between gap-x-5 gap-y-2 py-5 text-xs text-[#616161]`}><span>© 2026 {company.name}. All rights reserved.</span><span className="flex flex-wrap gap-x-5 gap-y-2"><Link href="/policies" className="hover:text-[#0067b8]">Policies</Link>{policies.map(p => <Link key={p.slug} href={`/policies/${p.slug}`} className="hover:text-[#0067b8]">{p.navLabel}</Link>)}</span></div></div>
    </footer>
  );
}

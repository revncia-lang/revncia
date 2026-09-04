"use client";
import type { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const groups = [
  { title: "Command Center", href: "/os", icon: "⌂" },
  { title: "AI Core", href: "/os/ai", icon: "✦" },
  { title: "Service Catalog", href: "/os/services", icon: "◈" },
  { title: "Service Requests", href: "/os/service-requests", icon: "↗" },
  { title: "Active Projects", href: "/os/projects", icon: "◫" },
  { title: "Implementations", href: "/os/implementations", icon: "◇" },
  { title: "Managed Services", href: "/os/managed-services", icon: "∞" },
  { title: "Agents", href: "/os/agents", icon: "◉" },
  { title: "Workflows", href: "/os/workflows", icon: "⌁" },
  { title: "Knowledge", href: "/os/knowledge", icon: "▣" },
  { title: "CRM", href: "/os/crm", icon: "◎" },
  { title: "ERP", href: "/os/erp", icon: "▤" },
  { title: "Documents", href: "/os/documents", icon: "▧" },
  { title: "Integrations", href: "/os/integrations", icon: "⇄" },
  { title: "Analytics", href: "/os/analytics", icon: "◌" },
  { title: "Governance", href: "/os/governance", icon: "⬡" },
  { title: "Security", href: "/os/security", icon: "◇" },
  { title: "Settings", href: "/os/settings", icon: "⚙" },
];

export default function OSLayout({ children }: { children: ReactNode }) {
  const path = usePathname();
  return <div className="min-h-screen bg-black text-white">
    <div className="flex min-h-screen">
      <aside className="hidden w-[268px] shrink-0 border-r border-white/10 bg-[#030506] lg:flex lg:flex-col">
        <div className="border-b border-white/10 px-6 py-6"><Link href="/os" className="block"><div className="text-xl font-semibold tracking-[.22em]">REVNCIA</div><div className="mt-1 text-[9px] font-semibold uppercase tracking-[.28em] text-cyan-200/55">AI OPERATING SYSTEM</div></Link></div>
        <div className="px-4 pt-5"><div className="rounded-xl border border-white/10 bg-white/[.025] p-3"><div className="text-[9px] uppercase tracking-[.22em] text-white/30">Workspace</div><div className="mt-2 flex items-center justify-between"><div><div className="text-sm font-medium">REVNCIA Organization</div><div className="mt-0.5 text-xs text-white/35">Administrator</div></div><span className="h-1.5 w-1.5 rounded-full bg-cyan-200 shadow-[0_0_12px_rgba(98,217,255,.8)]"/></div></div></div>
        <nav className="flex-1 overflow-y-auto px-4 py-6"><div className="mb-3 px-3 text-[9px] font-semibold uppercase tracking-[.24em] text-white/25">Operating modules</div><div className="space-y-1">{groups.map(item=>{const on=item.href==="/os"?path==="/os":path===item.href||path.startsWith(item.href+"/");return <Link key={item.href} href={item.href} className={`group flex items-center gap-3 rounded-xl px-3 py-2 text-[13px] transition ${on?"border border-cyan-200/15 bg-cyan-200/[.07] text-white":"text-white/50 hover:bg-white/[.045] hover:text-white"}`}><span className={`flex h-7 w-7 items-center justify-center rounded-lg border text-cyan-200/70 ${on?"border-cyan-200/20 bg-cyan-200/[.08]":"border-white/7 bg-white/[.02]"}`}>{item.icon}</span><span>{item.title}</span></Link>})}</div></nav>
        <div className="border-t border-white/10 p-4"><div className="rounded-xl border border-cyan-200/10 bg-cyan-200/[.025] p-3"><div className="flex items-center gap-2 text-xs font-medium text-cyan-100/80"><span className="h-1.5 w-1.5 rounded-full bg-cyan-200"/>System Online</div><div className="mt-2 text-[10px] leading-relaxed text-white/30">REVNCIA OS · Governed operating layer</div></div></div>
      </aside>
      <div className="min-w-0 flex-1">
        <header className="sticky top-0 z-30 border-b border-white/10 bg-black/85 backdrop-blur-2xl"><div className="flex h-[72px] items-center justify-between px-5 sm:px-8"><div><div className="text-[9px] uppercase tracking-[.25em] text-cyan-200/50">REVNCIA OS</div><div className="mt-1 text-sm font-medium text-white/78">Organization Command Center</div></div><div className="flex items-center gap-3"><Link href="/" className="hidden rounded-lg border border-white/10 px-3 py-2 text-[10px] uppercase tracking-[.12em] text-white/45 hover:text-white sm:block">Public site ↗</Link><div className="hidden rounded-lg border border-white/10 bg-white/[.025] px-3 py-2 text-xs text-white/35 sm:block">⌘ K</div><div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/[.04] text-[10px] font-semibold">AD</div></div></div></header>
        <div className="border-b border-white/10 bg-[#030506] px-4 py-3 lg:hidden"><div className="flex gap-2 overflow-x-auto">{groups.map(item=><Link key={item.href} href={item.href} className="whitespace-nowrap rounded-lg border border-white/10 bg-white/[.025] px-3 py-2 text-[10px] uppercase tracking-[.08em] text-white/55">{item.icon} {item.title}</Link>)}</div></div>
        <main>{children}</main>
      </div>
    </div>
  </div>;
}

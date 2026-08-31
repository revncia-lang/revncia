import type { ReactNode } from "react";
import Link from "next/link";

const navigation = [
  {
    label: "Command Center",
    href: "/os",
    icon: "⌂",
  },
  {
    label: "AI Core",
    href: "/os/ai",
    icon: "✦",
  },
  {
    label: "Agents",
    href: "/os/agents",
    icon: "◉",
  },
  {
    label: "Workflows",
    href: "/os/workflows",
    icon: "◇",
  },
  {
    label: "Knowledge",
    href: "/os/knowledge",
    icon: "▣",
  },
  {
    label: "Integrations",
    href: "/os/integrations",
    icon: "◎",
  },
  {
    label: "Analytics",
    href: "/os/analytics",
    icon: "◌",
  },
  {
    label: "Security",
    href: "/os/security",
    icon: "⬡",
  },
];

const systemNavigation = [
  {
    label: "Settings",
    href: "/os/settings",
    icon: "⚙",
  },
];

export default function OSLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#071014] text-white">
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <aside className="hidden w-[270px] shrink-0 border-r border-white/10 bg-[#091419] lg:flex lg:flex-col">
          {/* Brand */}
          <div className="border-b border-white/10 px-6 py-6">
            <Link href="/os" className="group block">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 shadow-[0_0_30px_rgba(34,211,238,0.08)]">
                  ✦
                </div>

                <div>
                  <div className="text-lg font-semibold tracking-[0.18em]">
                    REVNCIA
                  </div>

                  <div className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.28em] text-cyan-300/70">
                    Operating System
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Organization */}
          <div className="px-4 pt-5">
            <div className="rounded-xl border border-white/10 bg-white/[0.035] p-3">
              <div className="text-[10px] uppercase tracking-[0.2em] text-white/35">
                Workspace
              </div>

              <div className="mt-2 flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium">
                    REVNCIA Organization
                  </div>
                  <div className="mt-0.5 text-xs text-white/40">
                    Administrator
                  </div>
                </div>

                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
              </div>
            </div>
          </div>

          {/* Main navigation */}
          <nav className="flex-1 overflow-y-auto px-4 py-6">
            <div className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/30">
              Platform
            </div>

            <div className="space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-white/60 transition hover:bg-white/[0.05] hover:text-white"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/5 bg-white/[0.025] text-sm text-cyan-300/70 transition group-hover:border-cyan-300/20 group-hover:bg-cyan-300/10 group-hover:text-cyan-200">
                    {item.icon}
                  </span>

                  <span>{item.label}</span>
                </Link>
              ))}
            </div>

            <div className="mb-3 mt-8 px-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/30">
              System
            </div>

            <div className="space-y-1">
              {systemNavigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-white/60 transition hover:bg-white/[0.05] hover:text-white"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/5 bg-white/[0.025] text-sm text-white/40 transition group-hover:bg-white/[0.05] group-hover:text-white/70">
                    {item.icon}
                  </span>

                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
          </nav>

          {/* System status */}
          <div className="border-t border-white/10 p-4">
            <div className="rounded-xl border border-emerald-400/10 bg-emerald-400/[0.035] p-3">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <span className="text-xs font-medium text-emerald-300">
                  System Online
                </span>
              </div>

              <div className="mt-2 text-[11px] leading-relaxed text-white/35">
                REVNCIA OS Foundation
              </div>
            </div>
          </div>
        </aside>

        {/* Main */}
        <div className="min-w-0 flex-1">
          {/* Topbar */}
          <header className="sticky top-0 z-30 border-b border-white/10 bg-[#071014]/90 backdrop-blur-xl">
            <div className="flex h-[72px] items-center justify-between px-5 sm:px-8">
              <div>
                <div className="text-[10px] uppercase tracking-[0.24em] text-cyan-300/60">
                  REVNCIA OS
                </div>

                <div className="mt-1 text-sm font-medium text-white/80">
                  Organization Command Center
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  className="hidden rounded-xl border border-white/10 bg-white/[0.035] px-3 py-2 text-xs text-white/50 transition hover:border-white/20 hover:text-white sm:block"
                >
                  ⌘ K
                </button>

                <button
                  type="button"
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.035] text-white/50 transition hover:bg-white/[0.07] hover:text-white"
                  aria-label="Notifications"
                >
                  ♢
                </button>

                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-300/10 text-xs font-semibold text-cyan-200">
                  AD
                </div>
              </div>
            </div>
          </header>

          {/* Mobile navigation */}
          <div className="border-b border-white/10 bg-[#091419] px-4 py-3 lg:hidden">
            <div className="flex gap-2 overflow-x-auto">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="whitespace-nowrap rounded-lg border border-white/10 bg-white/[0.035] px-3 py-2 text-xs text-white/60"
                >
                  {item.icon} {item.label}
                </Link>
              ))}
            </div>
          </div>

          <main>{children}</main>
        </div>
      </div>
    </div>
  );
}
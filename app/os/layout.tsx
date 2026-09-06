import { shell } from "@/lib/ui";
import Link from "next/link";
import type { ReactNode } from "react";

const groups = [
  { title: "Command Center", href: "/os", icon: "CC" },
  { title: "AI Core", href: "/os/ai", icon: "AI" },
  { title: "Service Catalog", href: "/os/services", icon: "SC" },
  { title: "Service Requests", href: "/os/service-requests", icon: "SR" },
  { title: "Agents", href: "/os/agents", icon: "AG" },
  { title: "Workflows", href: "/os/workflows", icon: "WF" },
  { title: "Projects", href: "/os/projects", icon: "PR" },
  { title: "Knowledge", href: "/os/knowledge", icon: "KN" },
  { title: "Integrations", href: "/os/integrations", icon: "IN" },
  { title: "Analytics", href: "/os/analytics", icon: "AN" },
  { title: "Governance", href: "/os/governance", icon: "GV" },
];

export default function OSLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#f5f5f5] text-[#242424]">

      {/* Microsoft-style top application bar */}
      <header className="sticky top-0 z-50 border-b border-[#e1e1e1] bg-white">
        <div className={`${shell} flex min-h-[64px] items-center justify-between`}>

          <div className="flex items-center gap-4">
            <Link
              href="/os"
              className="flex items-center gap-3"
            >
              <span className="flex h-9 w-9 items-center justify-center bg-[#0067b8] text-xs font-bold !text-white">
                R
              </span>

              <div>
                <div className="text-lg font-semibold tracking-tight text-[#242424]">
                  REVNCIA
                </div>

                <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#666]">
                  Operating System
                </div>
              </div>
            </Link>

            <span className="hidden h-7 w-px bg-[#dedede] md:block" />

            <span className="hidden text-sm font-semibold text-[#555] md:block">
              Command Center
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="hidden min-h-[40px] items-center justify-center border border-[#0067b8] bg-[#0067b8] px-5 py-2 text-sm font-semibold !text-white transition hover:bg-[#005a9f] hover:!text-white sm:inline-flex"
            >
              REVNCIA Website
            </Link>

            <Link
              href="/contact"
              className="inline-flex min-h-[40px] items-center justify-center border border-[#0067b8] bg-[#0067b8] px-5 py-2 text-sm font-semibold !text-white transition hover:bg-[#005a9f] hover:!text-white"
            >
              Contact
            </Link>
          </div>
        </div>
      </header>

      {/* Application workspace */}
      <div className={`${shell} grid lg:grid-cols-[280px_minmax(0,1fr)]`}>

        {/* Left navigation */}
        <aside className="border-b border-[#e1e1e1] bg-white lg:min-h-[calc(100vh-64px)] lg:border-b-0 lg:border-r">

          <div className="p-4 sm:p-5">

            <div className="mb-5 border-b border-[#e5e5e5] pb-5">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#666]">
                REVNCIA OS
              </p>

              <p className="mt-2 text-sm leading-6 text-[#555]">
                Manage AI, services, workflows, projects, knowledge and governance from one workspace.
              </p>
            </div>

            <p className="mb-2 px-3 text-[11px] font-bold uppercase tracking-[0.14em] text-[#777]">
              Workspace
            </p>

            <nav className="space-y-1">
              {groups.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex min-h-[48px] items-center gap-3 border border-transparent px-3 py-2.5 text-sm font-semibold text-[#444] transition hover:border-[#e1e1e1] hover:bg-[#f3f3f3] hover:text-[#0067b8]"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center border border-[#dedede] bg-[#fafafa] text-[10px] font-bold text-[#555] transition group-hover:border-[#b8d6ea] group-hover:bg-[#eef7fd] group-hover:text-[#0067b8]">
                    {item.icon}
                  </span>

                  <span className="min-w-0 flex-1 truncate">
                    {item.title}
                  </span>
                </Link>
              ))}
            </nav>

            <div className="mt-7 border-t border-[#e5e5e5] pt-5">
              <p className="px-3 text-[11px] font-bold uppercase tracking-[0.14em] text-[#777]">
                Quick Actions
              </p>

              <div className="mt-3 space-y-2">
                <Link
                  href="/contact"
                  className="flex min-h-[44px] items-center justify-center border border-[#0067b8] bg-[#0067b8] px-4 py-2.5 text-sm font-semibold !text-white transition hover:bg-[#005a9f] hover:!text-white"
                >
                  Start a Request
                </Link>

                <Link
                  href="/services"
                  className="flex min-h-[44px] items-center justify-center border border-[#0067b8] bg-[#0067b8] px-4 py-2.5 text-sm font-semibold !text-white transition hover:bg-[#005a9f] hover:!text-white"
                >
                  Explore Services
                </Link>
              </div>
            </div>

          </div>
        </aside>

        {/* Main application area */}
        <main className="min-w-0 bg-[#f5f5f5]">
          <div className="min-h-[calc(100vh-64px)]">
            {children}
          </div>
        </main>

      </div>
    </div>
  );
}

import Link from "next/link";
import { shell } from "@/lib/ui";

const navigation = [
  {
    heading: "WORKSPACE",
    items: [
      ["Command Center", "/os"],
      ["AI Workspace", "/os/ai"],
      ["AI Agents", "/os/agents"],
    ],
  },
  {
    heading: "BUSINESS",
    items: [
      ["CRM", "/os/crm"],
      ["ERP", "/os/erp"],
      ["Projects", "/os/projects"],
      ["Workflows", "/os/workflows"],
    ],
  },
  {
    heading: "KNOWLEDGE",
    items: [
      ["Documents", "/os/documents"],
      ["Knowledge", "/os/knowledge"],
      ["Resources", "/facilities"],
    ],
  },
  {
    heading: "TECHNOLOGY",
    items: [
      ["Integrations", "/os/integrations"],
      ["Security", "/os/security"],
      ["Governance", "/os/governance"],
      ["Analytics", "/os/analytics"],
    ],
  },
  {
    heading: "REVNCIA SERVICES",
    items: [
      ["Service Requests", "/os/service-requests"],
      ["Implementations", "/os/implementations"],
      ["Managed Services", "/os/managed-services"],
      ["Services", "/os/services"],
    ],
  },
  {
    heading: "ADMINISTRATION",
    items: [
      ["Settings", "/os/settings"],
      ["Plans & Pricing", "/plans"],
      ["Account", "/signup"],
      ["Help & Support", "/contact"],
    ],
  },
];

export default function OSLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#f5f7f9] text-slate-900">

      <header className="border-b border-slate-200 bg-white">
        <div className={`${shell} flex min-h-[68px] items-center justify-between gap-4`}>
          <Link href="/os" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-[#0078D4] text-sm font-bold !text-white">
              R
            </div>

            <div>
              <div className="text-lg font-semibold tracking-tight">
                REVNCIA
              </div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                OS
              </div>
            </div>
          </Link>

          <div className="flex items-center gap-3">
            <Link
              href="/os/ai"
              className="hidden rounded-md border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:border-[#0078D4] hover:text-[#0078D4] sm:inline-flex"
            >
              AI Workspace
            </Link>

            <Link
              href="/contact"
              className="rounded-md bg-[#0078D4] px-4 py-2 text-sm font-semibold !text-white hover:bg-[#106ebe]"
            >
              Support
            </Link>
          </div>
        </div>
      </header>

      <div className={`${shell} grid min-w-0 lg:grid-cols-[280px_minmax(0,1fr)]`}>

        <aside className="border-b border-slate-200 bg-white py-6 lg:min-h-[calc(100vh-68px)] lg:border-b-0 lg:border-r lg:pr-5">
          <nav className="space-y-7">
            {navigation.map((group) => (
              <div key={group.heading}>
                <div className="mb-2 px-3 text-[11px] font-bold uppercase tracking-[0.14em] text-slate-400">
                  {group.heading}
                </div>

                <div className="space-y-1">
                  {group.items.map(([label, href]) => (
                    <Link
                      key={label}
                      href={href}
                      className="block rounded-md px-3 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-[#f0f6fb] hover:text-[#0078D4]"
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </nav>
        </aside>

        <section className="min-w-0 py-6 lg:pl-7">
          {children}
        </section>

      </div>
    </div>
  );
}
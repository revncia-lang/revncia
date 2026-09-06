import OSSearch from "@/components/OSSearch";
import Link from "next/link";

const modules = [
  {
    title: "AI Workspace",
    description: "Use REVNCIA AI for business analysis, content, knowledge, documents and decision support.",
    href: "/os/ai",
    label: "Open AI Workspace",
  },
  {
    title: "AI Agents",
    description: "Create, configure and manage specialized AI agents for authorized business tasks.",
    href: "/os/agents",
    label: "Manage AI Agents",
  },
  {
    title: "CRM",
    description: "Manage customers, leads, opportunities, relationships and follow-up activities.",
    href: "/os/crm",
    label: "Open CRM",
  },
  {
    title: "ERP",
    description: "Manage finance, operations, vendors, purchasing and business records.",
    href: "/os/erp",
    label: "Open ERP",
  },
  {
    title: "Projects",
    description: "Manage projects, milestones, tasks, delivery, teams and implementation activities.",
    href: "/os/projects",
    label: "Open Projects",
  },
  {
    title: "Workflows",
    description: "Design business workflows, approvals, automation and operational processes.",
    href: "/os/workflows",
    label: "Open Workflows",
  },
  {
    title: "Documents",
    description: "Organize, manage and work with controlled business documents and records.",
    href: "/os/documents",
    label: "Open Documents",
  },
  {
    title: "Knowledge",
    description: "Create a centralized business knowledge environment for teams and AI.",
    href: "/os/knowledge",
    label: "Open Knowledge",
  },
  {
    title: "Integrations",
    description: "Connect approved business systems, APIs, communication platforms and technology.",
    href: "/os/integrations",
    label: "Manage Integrations",
  },
  {
    title: "Security",
    description: "Monitor security controls, access, protection and security operations.",
    href: "/os/security",
    label: "Open Security",
  },
  {
    title: "Governance",
    description: "Manage policies, controls, approvals, governance and organizational accountability.",
    href: "/os/governance",
    label: "Open Governance",
  },
  {
    title: "Analytics",
    description: "Review business performance, operational information and actionable insights.",
    href: "/os/analytics",
    label: "Open Analytics",
  },
];

const services = [
  ["Service Requests", "/os/service-requests"],
  ["Implementations", "/os/implementations"],
  ["Managed Services", "/os/managed-services"],
  ["REVNCIA Services", "/os/services"],
];

const admin = [
  ["Settings", "/os/settings"],
  ["Account", "/signup"],
  ["Plans & Billing", "/plans"],
  ["Help & Support", "/contact"],
];

export default function RevnciaOSPage() {
  return (
    <main className="min-h-screen bg-[#f5f7f9] text-slate-900">
      <OSSearch />
      <div className="mx-auto w-full max-w-[1600px] px-4 py-8 sm:px-6 lg:px-8 xl:px-10">

        <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0078D4]">
                REVNCIA OS
              </p>

              <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
                Your digital business workspace
              </h1>

              <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600">
                Manage AI, customers, projects, workflows, documents,
                knowledge, security, governance and REVNCIA services from one
                connected workspace.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/os/ai"
                className="rounded-md bg-[#0078D4] px-5 py-3 text-sm font-semibold !text-white hover:bg-[#106ebe]"
              >
                Open AI Workspace
              </Link>

              <Link
                href="/os/service-requests"
                className="rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 hover:border-[#0078D4] hover:text-[#0078D4]"
              >
                Request a Service
              </Link>
            </div>
          </div>
        </section>

        <section className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {[
            ["12", "Core OS Modules"],
            ["AI", "Intelligent Workspace"],
            ["24/7", "Digital Operations"],
            ["1", "Connected Client Workspace"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="text-2xl font-semibold text-slate-900">
                {value}
              </div>
              <div className="mt-1 text-sm text-slate-500">
                {label}
              </div>
            </div>
          ))}
        </section>

        <section className="mt-10">
          <div className="mb-5">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#0078D4]">
              WORKSPACE
            </p>

            <h2 className="mt-1 text-2xl font-semibold">
              Business applications
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {modules.map((module) => (
              <article
                key={module.title}
                className="flex min-h-[230px] flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"
              >
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-slate-900">
                    {module.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {module.description}
                  </p>
                </div>

                <Link
                  href={module.href}
                  className="mt-6 inline-flex w-fit rounded-md bg-[#0078D4] px-4 py-2.5 text-sm font-semibold !text-white hover:bg-[#106ebe]"
                >
                  {module.label}
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <div className="mb-5">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#0078D4]">
              REVNCIA SERVICES
            </p>

            <h2 className="mt-1 text-2xl font-semibold">
              Get more from REVNCIA
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {services.map(([title, href]) => (
              <Link
                key={title}
                href={href}
                className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-[#0078D4] hover:shadow-md"
              >
                <div className="text-base font-semibold text-slate-900">
                  {title}
                </div>

                <div className="mt-2 text-sm font-medium text-[#0078D4]">
                  Open →
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#0078D4]">
                ADMINISTRATION
              </p>

              <h2 className="mt-1 text-2xl font-semibold">
                Account and organization
              </h2>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
                Manage your REVNCIA account, organization settings, plans,
                billing and support.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {admin.map(([title, href]) => (
                <Link
                  key={title}
                  href={href}
                  className="rounded-md border border-slate-300 px-4 py-3 text-center text-sm font-semibold text-slate-700 hover:border-[#0078D4] hover:text-[#0078D4]"
                >
                  {title}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-10 rounded-xl bg-[#0078D4] p-7 text-white shadow-sm sm:p-9">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-white/80">
                NEED HELP?
              </p>

              <h2 className="mt-2 text-2xl font-semibold">
                Let REVNCIA help you transform your operations.
              </h2>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-white/85">
                Request an AI, automation, transformation, cybersecurity or
                enterprise technology service directly from your workspace.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex w-fit rounded-md bg-white px-5 py-3 text-sm font-semibold text-[#0078D4] hover:bg-slate-100"
            >
              Contact REVNCIA →
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
}
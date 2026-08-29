import Link from "next/link";
import Link from "next/link";
import { policies } from "@/lib/policies";
import { company, nav } from "@/lib/site";
import { Logo } from "./Logo";

const actions = [
  {
    href: "/contact",
    label: "Commission",
    hint: "Inquiry form for Voice, WhatsApp, or a roadmap.",
  },
  {
    href: "/services",
    label: "All services",
    hint: "Thirty-six lines in plain English.",
  },
  {
    href: "/about",
    label: "Company",
    hint: "Leadership, conduct, and commercial layers.",
  },
] as const;

const col =
  "flex h-full min-h-0 min-w-0 flex-col rounded-xl border border-white/10 bg-white/[0.03] p-5";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-white/10 bg-[#060a12]/80 text-cyan-50">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-stretch gap-4 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5 lg:px-8">
        <div className={col}>
          <Logo />
          <p className="mt-4 flex-1 text-sm leading-relaxed text-pretty break-words text-slate-400">
            Intelligent digital infrastructure for enterprises, governments, and
            public-impact institutions.
          </p>
          <p className="mt-4 text-[0.7rem] font-medium tracking-[0.16em] uppercase text-cyan-400/90">
            {company.motto}
          </p>
        </div>

        <nav className={col} aria-label="Footer">
          <p className="shrink-0 text-[0.7rem] tracking-[0.18em] uppercase text-cyan-400">
            Navigate
          </p>
          <ul className="mt-4 flex flex-1 flex-col gap-2.5">
            {nav.map((item) => (
              <li key={item.href} className="min-w-0">
                <Link
                  href={item.href}
                  title={item.explain}
                  className="block text-sm leading-snug text-cyan-100 hover:text-cyan-300"
                >
                  {item.label}
                </Link>
                <p className="mt-0.5 text-[0.7rem] leading-snug text-pretty break-words text-slate-500">
                  {item.hint}
                </p>
              </li>
            ))}
          </ul>
        </nav>

        <div className={col}>
          <p className="shrink-0 text-[0.7rem] tracking-[0.18em] uppercase text-cyan-400">
            Actions
          </p>
          <ul className="mt-4 flex flex-1 flex-col gap-4">
            {actions.map((item) => (
              <li key={item.href} className="min-w-0">
                <Link
                  href={item.href}
                  className="flex w-full items-center justify-center rounded-md border border-cyan-400/30 px-3 py-2 text-center text-[0.68rem] tracking-[0.12em] uppercase text-cyan-200 transition hover:border-cyan-300/60 hover:bg-cyan-400/10"
                >
                  {item.label}
                </Link>
                <p className="mt-2 text-[0.7rem] leading-snug text-pretty break-words text-slate-500">
                  {item.hint}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className={col}>
          <p className="shrink-0 text-[0.7rem] tracking-[0.18em] uppercase text-cyan-400">
            Contact
          </p>
          <p className="mt-4 text-sm leading-relaxed text-pretty break-words text-slate-400">
            {company.name}
          </p>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-pretty break-words text-slate-400">
            {company.address}
          </p>
          <a
            href={`mailto:${company.email}`}
            className="mt-3 break-all text-sm leading-snug text-cyan-200 underline-offset-4 hover:underline"
          >
            {company.email}
          </a>
          <p className="mt-3 text-[0.7rem] leading-snug text-pretty break-words text-slate-500">
            Email is the action. Name the service line in the subject so we
            route it correctly.
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-4 px-5 py-6 text-xs leading-relaxed text-pretty break-words text-slate-500 md:grid-cols-3 md:px-8">
          <p className="min-w-0">
            © 2026 {company.name}. All rights reserved.
          </p>
          <nav className="min-w-0" aria-label="Policies">
            <p className="text-[0.65rem] tracking-[0.16em] uppercase text-slate-600">
              Policies
            </p>
            <ul className="mt-2 flex flex-wrap gap-x-3 gap-y-1">
              <li>
                <Link href="/policies" className="text-slate-400 hover:text-cyan-200">
                  Overview
                </Link>
              </li>
              {policies.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/policies/${p.slug}`}
                    className="text-slate-400 hover:text-cyan-200"
                  >
                    {p.navLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <p className="min-w-0 md:text-right">
            Founded and led by {company.founder}, {company.founderTitle}.
          </p>
        </div>
      </div>
    </footer>
  );
}

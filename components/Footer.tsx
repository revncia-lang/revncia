import Link from "next/link";
import { company, nav } from "@/lib/site";
import { Logo } from "./Logo";

const actions = [
  {
    href: "/contact",
    label: "Commission",
    hint: "Open the inquiry form for Voice, WhatsApp, or a roadmap.",
  },
  {
    href: "/services",
    label: "All services",
    hint: "Thirty-six lines with plain English and skip-this risks.",
  },
  {
    href: "/engagement",
    label: "How we engage",
    hint: "Consulting, implementation, SaaS, managed AI, and usage.",
  },
] as const;

export function Footer() {
  return (
    <footer className="mt-auto border-t border-cyan-400/15 bg-black/60 text-cyan-50">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="min-w-0">
          <Logo />
          <p className="mt-4 text-sm leading-relaxed break-words text-slate-400">
            Intelligent digital infrastructure for enterprises, governments, and
            public-impact institutions. {company.motto}.
          </p>
        </div>
        <nav className="min-w-0" aria-label="Footer">
          <p className="text-[0.7rem] tracking-[0.18em] uppercase text-cyan-400">
            Navigate
          </p>
          <ul className="mt-4 space-y-3">
            {nav.map((item) => (
              <li key={item.href} className="min-w-0">
                <Link
                  href={item.href}
                  className="block text-sm text-cyan-100 hover:text-cyan-300"
                >
                  {item.label}
                </Link>
                <p className="mt-0.5 text-xs leading-relaxed break-words text-slate-500">
                  {item.hint}
                </p>
              </li>
            ))}
          </ul>
        </nav>
        <div className="min-w-0">
          <p className="text-[0.7rem] tracking-[0.18em] uppercase text-cyan-400">
            Actions
          </p>
          <ul className="mt-4 space-y-3">
            {actions.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-flex border border-cyan-400/35 px-3 py-1.5 text-[0.68rem] tracking-[0.12em] uppercase text-cyan-200 hover:border-cyan-300"
                >
                  {item.label}
                </Link>
                <p className="mt-1.5 text-xs leading-relaxed break-words text-slate-500">
                  {item.hint}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div className="min-w-0">
          <p className="text-[0.7rem] tracking-[0.18em] uppercase text-cyan-400">
            Contact
          </p>
          <p className="mt-4 text-sm leading-relaxed break-words text-slate-400">
            {company.name}
            <br />
            {company.address}
          </p>
          <a
            href={`mailto:${company.email}`}
            className="mt-3 inline-block break-all text-sm text-cyan-200 underline-offset-4 hover:underline"
          >
            {company.email}
          </a>
          <p className="mt-3 text-xs leading-relaxed text-slate-500">
            Email is the action. Name the service line in the subject so we
            route it correctly.
          </p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs leading-relaxed text-slate-500 md:flex-row md:items-start md:justify-between md:px-8">
          <p className="min-w-0 break-words">
            © 2026 {company.name}. All rights reserved.
          </p>
          <p className="min-w-0 break-words md:text-right">
            Founded and led by {company.founder}, {company.founderTitle}.
          </p>
        </div>
      </div>
    </footer>
  );
}

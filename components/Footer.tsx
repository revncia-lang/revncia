import Link from "next/link";
import { company, nav } from "@/lib/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-[color:var(--line)] bg-[color:var(--ink)] text-[color:var(--paper)]">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3 md:px-8">
        <div>
          <Logo className="text-[color:var(--paper)] [&_rect]:fill-[#1c2a38]" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-[color:var(--paper-muted)]">
            {company.descriptor}. CRM, ERP, AI, and complete digital
            transformation for enterprise and public-impact work.
          </p>
        </div>
        <div>
          <p className="text-[0.7rem] tracking-[0.18em] uppercase text-[color:var(--copper)]">
            Navigate
          </p>
          <ul className="mt-4 space-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-[color:var(--paper-muted)] hover:text-[color:var(--paper)]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[0.7rem] tracking-[0.18em] uppercase text-[color:var(--copper)]">
            Contact
          </p>
          <p className="mt-4 text-sm leading-relaxed text-[color:var(--paper-muted)]">
            {company.address}
          </p>
          <a
            href={`mailto:${company.email}`}
            className="mt-3 inline-block text-sm text-[color:var(--paper)] underline-offset-4 hover:underline"
          >
            {company.email}
          </a>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-[color:var(--paper-muted)] md:flex-row md:justify-between md:px-8">
          <p>© 2026 {company.name}. All rights reserved.</p>
          <p>Founded and led by {company.founder}, {company.founderTitle}.</p>
        </div>
      </div>
    </footer>
  );
}

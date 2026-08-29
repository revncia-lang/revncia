import Link from "next/link";
import { company, nav } from "@/lib/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-cyan-400/15 bg-black/60 text-cyan-50">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3 md:px-8">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
            Intelligent digital infrastructure for enterprises, governments, and
            public-impact institutions.
          </p>
        </div>
        <div>
          <p className="text-[0.7rem] tracking-[0.18em] uppercase text-cyan-400">
            Navigate
          </p>
          <ul className="mt-4 space-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-slate-400 hover:text-cyan-200"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/services" className="text-sm text-slate-400 hover:text-cyan-200">
                All services
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-[0.7rem] tracking-[0.18em] uppercase text-cyan-400">
            Contact
          </p>
          <p className="mt-4 text-sm leading-relaxed text-slate-400">
            {company.address}
          </p>
          <a
            href={`mailto:${company.email}`}
            className="mt-3 inline-block text-sm text-cyan-200 underline-offset-4 hover:underline"
          >
            {company.email}
          </a>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-slate-500 md:flex-row md:justify-between md:px-8">
          <p>© 2026 {company.name}. All rights reserved.</p>
          <p>
            Founded and led by {company.founder}, {company.founderTitle}.
          </p>
        </div>
      </div>
    </footer>
  );
}

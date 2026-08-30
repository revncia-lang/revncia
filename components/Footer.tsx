import Link from "next/link";
import { policies } from "@/lib/policies";
import { company, nav } from "@/lib/site";
import { Logo } from "./Logo";
import { shell } from "@/lib/ui";

const actions = [
  {
    href: "/contact",
    label: "Talk with us",
    hint: "Name who waits — callers, chats, files, or a plan.",
  },
  {
    href: "/services",
    label: "See every service",
    hint: "Pick the work that is waiting — callers, chats, files, or a plan.",
  },
  {
    href: "/about",
    label: "Who we are",
    hint: "Who leads the work, and how we work with you.",
  },
] as const;

const col =
  "flex h-full min-h-0 min-w-0 flex-col rounded-xl border border-white/10 bg-white/[0.03] p-5";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-white/10 bg-[#060a12]/80 text-cyan-50">
      <div className={`${shell} grid grid-cols-1 items-stretch gap-4 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5`}>
        <div className={col}>
          <Logo />
          <p className="mt-4 flex-1 text-sm leading-relaxed text-pretty break-words text-slate-400">
            Customers get answers. Staff get one system. The public gets a
            record they can trust. Together we transform.
          </p>
          <p className="mt-4 text-[0.7rem] font-medium tracking-[0.16em] uppercase text-cyan-400/90">
            {company.motto}
          </p>
        </div>

        <nav className={col} aria-label="Footer">
          <p className="shrink-0 text-[0.7rem] tracking-[0.18em] uppercase text-cyan-400">
            Where to start
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
            Next step
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
            Email is how we start. Name the work in the subject so the right
            person replies.
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div
          className={`${shell} flex flex-col items-center py-6 text-center text-xs leading-relaxed text-pretty break-words text-slate-500`}
        >
          <p className="min-w-0">
            © 2026 {company.name}. All rights reserved.
          </p>
          <nav className="mt-4 min-w-0 w-full" aria-label="Policies">
            <p className="text-[0.65rem] tracking-[0.16em] uppercase text-slate-600">
              Policies
            </p>
            <ul className="mt-2 flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
              <li>
                <Link href="/policies" className="text-slate-400 hover:text-cyan-200">
                  All policies
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
        </div>
      </div>
    </footer>
  );
}

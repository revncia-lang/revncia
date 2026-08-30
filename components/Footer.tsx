import Link from "next/link";
import { policies } from "@/lib/policies";
import { company, nav } from "@/lib/site";
import { BetaLabel } from "@/components/BetaLabel";
import { Logo } from "./Logo";
import { btnPrimary, btnSecondary, shell } from "@/lib/ui";

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
  "flex h-full min-h-0 min-w-0 flex-col rounded-xl border border-[#e8d9ce] bg-[#fffdf8] p-5";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-[#e8d9ce] bg-[#fff8f2]/92 text-[#2a221f]">
      <div className={`${shell} grid grid-cols-1 items-stretch gap-4 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5`}>
        <div className={col}>
          <Logo />
          <p className="mt-4 flex-1 text-sm leading-relaxed text-pretty break-words text-stone-600">
            Customers get answers. Staff get one system. The public gets a
            record they can trust. Together we transform.
          </p>
          <p className="mt-4 text-[0.7rem] font-semibold tracking-[0.16em] uppercase text-[#b91c2c]">
            {company.motto}
          </p>
        </div>

        <nav className={col} aria-label="Footer">
          <p className="shrink-0 text-[0.7rem] font-semibold tracking-[0.18em] uppercase text-[#b91c2c]">
            Where to start
          </p>
          <ul className="mt-4 flex flex-1 flex-col gap-2.5">
            {nav.map((item) => (
              <li key={item.href} className="min-w-0">
                <Link
                  href={item.href}
                  title={item.explain}
                  className="block text-sm leading-snug text-stone-800 hover:text-[#8b1e2d]"
                >
                  {item.label}
                </Link>
                <p className="mt-0.5 text-[0.7rem] leading-snug text-pretty break-words text-stone-500">
                  {item.hint}
                </p>
              </li>
            ))}
          </ul>
        </nav>

        <div className={col}>
          <p className="shrink-0 text-[0.7rem] font-semibold tracking-[0.18em] uppercase text-[#b91c2c]">
            Next step
          </p>
          <ul className="mt-4 flex flex-1 flex-col gap-4">
            {actions.map((item, idx) => (
              <li key={item.href} className="min-w-0">
                <Link
                  href={item.href}
                  className={`${idx === 0 ? btnPrimary : btnSecondary} w-full`}
                >
                  {item.label}
                  {idx === 0 ? <BetaLabel /> : null}
                </Link>
                <p className="mt-2 text-[0.7rem] leading-snug text-pretty break-words text-stone-500">
                  {item.hint}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className={col}>
          <p className="shrink-0 text-[0.7rem] font-semibold tracking-[0.18em] uppercase text-[#b91c2c]">
            Contact
          </p>
          <p className="mt-4 text-sm leading-relaxed text-pretty break-words text-stone-700">
            {company.name}
          </p>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-pretty break-words text-stone-600">
            {company.address}
          </p>
          <a
            href={`mailto:${company.email}`}
            className="mt-3 break-all text-sm leading-snug text-[#8b1e2d] underline-offset-4 hover:underline"
          >
            {company.email}
          </a>
          <p className="mt-3 text-[0.7rem] leading-snug text-pretty break-words text-stone-500">
            Email is how we start. Name the work in the subject so the right
            person replies.
          </p>
        </div>
      </div>

      <div className="border-t border-[#e8d9ce]">
        <div
          className={`${shell} flex flex-col items-center py-6 text-center text-xs leading-relaxed text-pretty break-words text-stone-500`}
        >
          <p className="min-w-0">
            © 2026 {company.name}. All rights reserved.
          </p>
          <nav className="mt-4 min-w-0 w-full" aria-label="Policies">
            <p className="text-[0.65rem] font-semibold tracking-[0.16em] uppercase text-stone-500">
              Policies
            </p>
            <ul className="mt-2 flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
              <li>
                <Link href="/policies" className="text-stone-500 hover:text-[#8b1e2d]">
                  All policies
                </Link>
              </li>
              {policies.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/policies/${p.slug}`}
                    className="text-stone-500 hover:text-[#8b1e2d]"
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

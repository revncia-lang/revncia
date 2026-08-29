"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { HeaderMenu } from "./HeaderMenu";
import { nav } from "@/lib/site";
import { btnPrimary, shell } from "@/lib/ui";

export function Header() {
  const path = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#060a12]/75 backdrop-blur-xl">
      <div className={`relative ${shell} flex items-center justify-between gap-3 py-3.5 md:gap-4`}>
        <Link href="/" className="min-w-0 shrink-0 text-cyan-50">
          <Logo />
        </Link>

        <nav
          className="hidden min-w-0 flex-1 flex-wrap items-center justify-center gap-x-1 gap-y-1 lg:flex"
          aria-label="Primary"
        >
          {nav.map((item) => {
            const on =
              item.href === "/"
                ? path === "/"
                : path === item.href || path.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                title={item.hint}
                className={`rounded-md px-2.5 py-1.5 text-[0.68rem] tracking-[0.1em] uppercase transition ${
                  on
                    ? "bg-white/[0.08] text-cyan-100"
                    : "text-slate-400 hover:bg-white/5 hover:text-cyan-100"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/contact"
          title="Open the inquiry form"
          className={`${btnPrimary} hidden shrink-0 lg:inline-flex`}
        >
          Start a conversation
        </Link>

        <HeaderMenu />
      </div>
    </header>
  );
}

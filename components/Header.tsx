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
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-white/90 backdrop-blur-xl">
      <div className={`relative ${shell} flex items-center justify-between gap-3 py-3.5 md:gap-4`}>
        <Link href="/" className="min-w-0 shrink-0 text-stone-900">
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
                    ? "bg-orange-50 text-orange-800"
                    : "text-stone-500 hover:bg-orange-50 hover:text-orange-700"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/contact"
          title="Tell us what you need"
          className={`${btnPrimary} hidden shrink-0 lg:inline-flex`}
        >
          Start a conversation
        </Link>

        <HeaderMenu />
      </div>
    </header>
  );
}

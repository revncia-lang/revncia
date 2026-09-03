"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { HeaderMenu } from "./HeaderMenu";
import { nav } from "@/lib/site";
import { btnPrimary, shell, tabItem } from "@/lib/ui";

export function Header() {
  const path = usePathname();

  return (
    <header className="site-header relative sticky top-0 z-50 border-b border-white/15 bg-black text-white">
      <div className={`${shell} flex min-h-[76px] items-center justify-between gap-4`}>
        <Link href="/" className="min-w-0 shrink-0 text-white">
          <Logo />
        </Link>
        <nav className="hidden min-w-0 flex-1 items-center justify-center gap-1 lg:flex" aria-label="Primary">
          {nav.map((item) => {
            const on = item.href === "/" ? path === "/" : path === item.href || path.startsWith(`${item.href}/`);
            return (
              <Link key={item.href} href={item.href} title={item.hint}
                className={`${tabItem} relative ${on ? "is-on" : ""}`}>
                {item.label}
                <span className={`absolute inset-x-3 -bottom-[1px] h-px bg-white transition ${on ? "opacity-100" : "opacity-0"}`} />
              </Link>
            );
          })}
        </nav>
        <Link href="/contact" className={`${btnPrimary} hidden shrink-0 lg:inline-flex`}>Request demo <span aria-hidden>→</span></Link>
        <HeaderMenu />
      </div>
    </header>
  );
}

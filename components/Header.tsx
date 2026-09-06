"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { HeaderMenu } from "./HeaderMenu";
import { nav } from "@/lib/site";
import { shell } from "@/lib/ui";

export function Header() {
  const path = usePathname();
  const [accountHolder, setAccountHolder] = useState(false);

  useEffect(() => {
    setAccountHolder(window.localStorage.getItem("revncia-account-session") === "active");
  }, []);

  return (
    <header className="site-header relative sticky top-0 z-50 border-b border-[#d2d2d2] bg-white text-[#242424]">
      <div className={`${shell} mx-auto flex min-h-[64px] max-w-[1600px] items-center justify-between gap-4`}>
        <Link href="/" aria-label="REVNCIA home" className="min-w-0 shrink-0 text-[#242424]">
          <Logo tone="light" />
        </Link>
        <nav className="hidden min-w-0 flex-1 items-center justify-center gap-1 lg:flex" aria-label="Primary navigation">
          {nav.map((item) => {
            const on = item.href === "/" ? path === "/" : path === item.href || path.startsWith(`${item.href}/`);
            return (
              <Link key={item.href} href={item.href} title={item.hint}
                className={`relative whitespace-nowrap px-3 py-5 text-[0.8rem] font-semibold text-[#242424] transition hover:bg-[#f5f5f5] hover:text-[#0067b8] ${on ? "text-[#0067b8]" : ""}`}>
                {item.label}
                <span className={`absolute inset-x-3 bottom-0 h-0.5 bg-[#0067b8] transition ${on ? "opacity-100" : "opacity-0"}`} />
              </Link>
            );
          })}
          {accountHolder ? <Link href="/os" title="Open REVNCIA OS" className={`relative whitespace-nowrap px-3 py-5 text-[0.8rem] font-semibold text-[#242424] transition hover:bg-[#f5f5f5] hover:text-[#0067b8] ${path === "/os" || path.startsWith("/os/") ? "text-[#0067b8]" : ""}`}>
            REVNCIA OS
            <span className={`absolute inset-x-3 bottom-0 h-0.5 bg-[#0067b8] transition ${path === "/os" || path.startsWith("/os/") ? "opacity-100" : "opacity-0"}`} />
          </Link> : null}
        </nav>
        <div className="flex shrink-0 items-center gap-2">
          <Link href="/login" className="hidden px-3 py-2 text-sm font-semibold text-[#505050] hover:bg-[#f5f5f5] hover:text-[#0078d4] sm:inline-flex">Log in</Link>
          <Link href="/signup" className="hidden border border-[#0078d4] bg-[#0078d4] px-4 py-2.5 text-sm font-semibold text-white transition hover:border-[#106ebe] hover:bg-[#106ebe] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0078d4] focus-visible:ring-offset-2 sm:inline-flex">Sign up</Link>
          <HeaderMenu />
        </div>
      </div>
    </header>
  );
}

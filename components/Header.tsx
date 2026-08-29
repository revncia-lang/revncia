"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { nav } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--line)] bg-[color:var(--paper)]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4 md:px-8">
        <Link
          href="/"
          className="text-[color:var(--ink)]"
          onClick={() => setOpen(false)}
        >
          <Logo />
        </Link>

        <nav className="hidden items-center gap-5 lg:flex" aria-label="Primary">
          {nav.map((item) => {
            const path = item.href.split("#")[0] || "/";
            const active =
              ready &&
              (item.href.includes("#")
                ? false
                : path === "/"
                  ? pathname === "/"
                  : pathname.startsWith(path));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[0.8rem] tracking-[0.12em] uppercase transition-colors ${
                  active
                    ? "text-[color:var(--ink)]"
                    : "text-[color:var(--muted)] hover:text-[color:var(--ink)]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/contact"
          className="hidden rounded-sm bg-[color:var(--ink)] px-4 py-2 text-[0.75rem] tracking-[0.14em] uppercase text-[color:var(--paper)] lg:inline-flex"
        >
          Start a conversation
        </Link>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center text-[color:var(--ink)] lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            {open ? (
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="1.6"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="1.6"
              />
            )}
          </svg>
        </button>
      </div>

      {open ? (
        <div className="border-t border-[color:var(--line)] px-5 py-4 lg:hidden">
          <nav className="flex flex-col gap-3" aria-label="Mobile">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="py-1 text-sm tracking-[0.08em] uppercase text-[color:var(--ink)]"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}

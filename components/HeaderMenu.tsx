"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { nav } from "@/lib/site";
import { BetaLabel } from "@/components/BetaLabel";
import { btnPrimary } from "@/lib/ui";

export function HeaderMenu() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-10 w-10 lg:hidden" aria-hidden />;
  }

  return (
    <>
      <button
        type="button"
        className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[#0071e3]/30 bg-[#e8f1ff] text-[#0071e3] transition hover:bg-[#e8f1ff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0071e3] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f5f5f7] lg:hidden"
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
      {open ? (
        <div className="absolute left-0 right-0 top-full border-t border-[#d2d2d7] bg-[#f5f5f7]/96 px-5 py-5 backdrop-blur-xl lg:hidden">
          <nav className="flex flex-col gap-3" aria-label="Mobile">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-1"
                onClick={() => setOpen(false)}
              >
                <span className="text-sm font-semibold tracking-[0.08em] uppercase text-stone-800">
                  {item.label}
                </span>
                <span className="mt-0.5 block text-xs font-normal normal-case tracking-normal text-stone-600">
                  {item.hint}
                </span>
              </Link>
            ))}
            <Link
              href="/contact"
              className={`${btnPrimary} mt-2 w-full`}
              onClick={() => setOpen(false)}
            >
              Start a conversation
              <BetaLabel />
            </Link>
          </nav>
        </div>
      ) : null}
    </>
  );
}

"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { nav } from "@/lib/site";

export function HeaderMenu() {
  const [open, setOpen] = useState(false);
  const [accountHolder, setAccountHolder] = useState(false);

  useEffect(() => {
    setAccountHolder(window.localStorage.getItem("revncia-account-session") === "active");
  }, []);

  return (
    <>
      <button
        type="button"
        className="inline-flex h-10 w-10 items-center justify-center border border-[#0078d4] bg-white p-0 text-[#242424] transition hover:bg-[#f5f5f5] hover:text-[#0078d4] lg:hidden"
        aria-expanded={open}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-controls="revncia-mobile-menu"
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
        <>
          <button
            type="button"
            aria-label="Close menu"
            className="fixed inset-0 z-40 bg-[#242424]/35 lg:hidden"
            onClick={() => setOpen(false)}
          />
          <aside id="revncia-mobile-menu" className="fixed inset-y-0 right-0 z-50 w-[min(24rem,88vw)] overflow-y-auto border-l border-[#d2d2d2] bg-white px-6 py-6 text-[#242424] shadow-2xl lg:hidden">
            <div className="flex items-center justify-between border-b border-[#edebe9] pb-5">
              <div>
                <p className="text-sm font-semibold tracking-[0.12em]">REVNCIA</p>
                <p className="mt-1 text-xs text-[#616161]">Navigation</p>
              </div>
              <button type="button" className="inline-flex h-9 w-9 items-center justify-center border border-[#0078d4] text-xl text-[#242424] hover:bg-[#f5f5f5] hover:text-[#0078d4]" aria-label="Close menu" onClick={() => setOpen(false)}>×</button>
            </div>
            <nav className="mt-5 flex flex-col gap-1" aria-label="Mobile navigation">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="w-full border-b border-[#edebe9] py-3 text-left"
                onClick={() => setOpen(false)}
              >
                <span className="text-sm font-semibold text-[#242424]">
                  {item.label}
                </span>
                <span className="mt-0.5 block text-xs font-normal text-[#616161]">
                  {item.hint}
                </span>
              </Link>
            ))}
            {accountHolder ? <Link
              href="/os"
              className="w-full border-b border-[#edebe9] py-3 text-left"
              onClick={() => setOpen(false)}
            >
              <span className="text-sm font-semibold text-[#242424]">REVNCIA OS</span>
              <span className="mt-0.5 block text-xs text-[#616161]">Open the operating workspace.</span>
            </Link> : null}
            <div className="mt-4 grid grid-cols-2 gap-2">
              <Link href="/login" className="border border-[#d2d2d2] px-4 py-3 text-center text-sm font-semibold text-[#505050] hover:border-[#0078d4] hover:text-[#0078d4]" onClick={() => setOpen(false)}>Log in</Link>
              <Link href="/signup" className="border border-[#0078d4] bg-[#0078d4] px-4 py-3 text-center text-sm font-semibold text-white hover:bg-[#106ebe]" onClick={() => setOpen(false)}>Sign up</Link>
            </div>
            <Link
              href="/contact"
              className="mt-3 inline-flex w-full justify-center bg-[#0078d4] px-5 py-3 text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              Start a conversation
            </Link>
            </nav>
          </aside>
        </>
      ) : null}
    </>
  );
}

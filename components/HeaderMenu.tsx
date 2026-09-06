"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { nav } from "@/lib/site";

export function HeaderMenu() {
  const [open, setOpen] = useState(false);
  const [accountHolder, setAccountHolder] = useState(false);

  useEffect(() => {
    setAccountHolder(
      window.localStorage.getItem("revncia-account-session") === "active"
    );
  }, []);

  return (
    <>
      <button
        type="button"
        className="inline-flex h-11 w-11 shrink-0 items-center justify-center border border-[#0078d4] bg-white p-0 text-[#242424] transition duration-200 hover:bg-[#f5f5f5] hover:text-[#0078d4] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0078d4] focus-visible:ring-offset-2"
        aria-expanded={open}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-controls="revncia-mobile-menu"
        onClick={() => setOpen((value) => !value)}
      >
        <span className="sr-only">
          {open ? "Close menu" : "Open menu"}
        </span>

        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          {open ? (
            <>
              <path
                d="M6 6L18 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </>
          ) : (
            <>
              <path
                d="M4 7H20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M4 12H20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M4 17H20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </>
          )}
        </svg>
      </button>

      {open && (
        <>
          <button
            type="button"
            aria-label="Close menu"
            className="fixed inset-0 z-[80] bg-black/35"
            onClick={() => setOpen(false)}
          />

          <aside
            id="revncia-mobile-menu"
            className="fixed inset-y-0 right-0 z-[90] w-[min(420px,90vw)] overflow-y-auto border-l border-[#d2d2d2] bg-white px-7 py-7 text-[#242424] shadow-2xl"
            aria-label="REVNCIA navigation menu"
          >
            <div className="flex items-center justify-between border-b border-[#edebe9] pb-5">
              <div>
                <p className="text-base font-bold tracking-[0.14em]">
                  REVNCIA
                </p>
                <p className="mt-1 text-xs text-[#616161]">
                  Navigation
                </p>
              </div>

              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center border border-[#0078d4] text-xl text-[#242424] transition hover:bg-[#f5f5f5] hover:text-[#0078d4]"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
              >
                ×
              </button>
            </div>

            <nav
              className="mt-6 flex flex-col"
              aria-label="REVNCIA navigation"
            >
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="border-b border-[#edebe9] px-1 py-4 transition hover:bg-[#f5f5f5]"
                  onClick={() => setOpen(false)}
                >
                  <span className="block text-sm font-bold text-[#242424]">
                    {item.label}
                  </span>

                  <span className="mt-1 block text-xs leading-5 text-[#616161]">
                    {item.hint}
                  </span>
                </Link>
              ))}

              {accountHolder && (
                <Link
                  href="/os"
                  className="border-b border-[#edebe9] px-1 py-4 transition hover:bg-[#f5f5f5]"
                  onClick={() => setOpen(false)}
                >
                  <span className="block text-sm font-bold text-[#0067b8]">
                    REVNCIA OS
                  </span>

                  <span className="mt-1 block text-xs leading-5 text-[#616161]">
                    Open the REVNCIA operating workspace.
                  </span>
                </Link>
              )}

              <div className="mt-6 grid grid-cols-2 gap-3">
                <Link
                  href="/login"
                  className="border border-[#d2d2d2] px-4 py-3 text-center text-sm font-semibold text-[#505050] transition hover:border-[#0078d4] hover:text-[#0078d4]"
                  onClick={() => setOpen(false)}
                >
                  Log in
                </Link>

                <Link
                  href="/signup"
                  className="border border-[#0078d4] bg-[#0078d4] px-4 py-3 text-center text-sm font-semibold text-white transition hover:border-[#106ebe] hover:bg-[#106ebe]"
                  onClick={() => setOpen(false)}
                >
                  Sign up
                </Link>
              </div>

              <Link
                href="/contact"
                className="mt-4 inline-flex w-full justify-center bg-[#0078d4] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-[#106ebe]"
                onClick={() => setOpen(false)}
              >
                Start a conversation
              </Link>
            </nav>
          </aside>
        </>
      )}
    </>
  );
}

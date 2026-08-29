import Link from "next/link";
import { Logo } from "./Logo";
import { HeaderMenu } from "./HeaderMenu";
import { nav } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-cyan-400/15 bg-[#060a12]/90 backdrop-blur-md">
      <div className="relative mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4 md:px-8">
        <Link href="/" className="text-cyan-50">
          <Logo />
        </Link>

        <nav
          className="hidden items-center gap-2 lg:flex lg:flex-wrap"
          aria-label="Primary"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[0.72rem] tracking-[0.1em] uppercase text-slate-400 transition-colors hover:text-cyan-100"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="hidden rounded-sm bg-cyan-400 px-4 py-2 text-[0.75rem] tracking-[0.14em] uppercase text-black lg:inline-flex"
        >
          Start a conversation
        </Link>

        <HeaderMenu />
      </div>
    </header>
  );
}

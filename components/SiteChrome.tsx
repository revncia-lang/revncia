"use client";

import { usePathname } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isOs = pathname === "/os" || pathname.startsWith("/os/");

  if (isOs) return <>{children}</>;

  return (
    <div className="website-shell">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

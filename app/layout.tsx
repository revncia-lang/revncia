import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AiBackdrop } from "@/components/AiBackdrop";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { VirtualAssistant } from "@/components/VirtualAssistant";
import { company } from "@/lib/site";

const sans = Inter({
  variable: "--font-source",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${company.name} — Together we transform`,
    template: `%s — ${company.name}`,
  },
  description:
    "REVNCIA is an AI digital transformation and public impact company. Customers get Voice, WhatsApp, CRM, ERP, documents, and citizen services they can run — with honest limits, not invented SLAs.",
  metadataBase: new URL("https://revncia.com"),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${sans.variable} h-full antialiased`}
    >
      <body className="relative flex min-h-full flex-col overflow-x-clip font-sans">
        <AiBackdrop />
        <div className="relative z-10 flex min-h-full flex-col pb-24">
          <Header />
          {children}
          <Footer />
        </div>
        <VirtualAssistant />
      </body>
    </html>
  );
}

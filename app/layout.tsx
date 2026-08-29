import type { Metadata } from "next";
import { Cormorant_Garamond, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { AiBackdrop } from "@/components/AiBackdrop";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { VirtualAssistant } from "@/components/VirtualAssistant";
import { company } from "@/lib/site";

const sans = Source_Sans_3({
  variable: "--font-source",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const serif = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: `${company.name} — Intelligent digital infrastructure`,
    template: `%s — ${company.name}`,
  },
  description:
    "REVNCIA builds intelligent digital infrastructure for organizations, enterprises, governments, and public-impact institutions — AI, automation, software, data, cybersecurity, and measurable outcomes.",
  metadataBase: new URL("https://revncia.com"),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${serif.variable} h-full antialiased`}
    >
      <body className="relative flex min-h-full flex-col font-sans">
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

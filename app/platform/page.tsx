import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { UniqueChart } from "@/components/UniqueChart";
import { offerings } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "AI Platform",
  description:
    "REVNCIA AI Gateway: multi-model routing, cost control, identity, knowledge, memory, agents, guardrails, observability.",
};

export default function PlatformPage() {
  const core = offerings.find((o) => o.slug === "ai-platform")!;
  return (
    <main>
      <PageHero
        kicker="REVNCIA Blueprint"
        title="The AI Gateway is the core of the company."
        lede={core.body}
      />
      <section className="relative mx-auto max-w-6xl px-5 py-14 md:px-8">
        <div className="relative mb-10 aspect-[16/9] overflow-hidden border border-cyan-400/20">
          <Image
            src="/images/scene-gateway.png"
            alt="REVNCIA AI Gateway core"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>
        <ul className="grid gap-3 sm:grid-cols-2">
          {core.capabilities.map((c) => (
            <li key={c} className="border border-cyan-400/15 bg-black/30 px-4 py-3 text-sm">
              {c}
            </li>
          ))}
        </ul>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <UniqueChart id="platform-routing" caption="Multi-model routing load" />
          <UniqueChart id="platform-tokens" caption="Token and cost envelope" />
        </div>
        <Link
          href="/services/ai-platform"
          className="mt-8 inline-block text-sm uppercase tracking-widest text-cyan-300 underline"
        >
          Full platform specification
        </Link>
      </section>
    </main>
  );
}

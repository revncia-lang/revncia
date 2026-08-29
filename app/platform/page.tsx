import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MediaFrame } from "@/components/MediaFrame";
import { PageHero } from "@/components/PageHero";
import { UniqueChart } from "@/components/UniqueChart";
import { offerings } from "@/lib/catalog";
import { btnSecondary, shell, surface } from "@/lib/ui";

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
        kicker="AI Platform"
        title="The AI Gateway is the core of the company."
        lede={core.body}
        sections={[
          { title: "Photograph", text: "The Gateway scene — sized to the content width." },
          { title: "Capabilities", text: "What the platform actually does, in tiles." },
          { title: "Graphs", text: "Routing load and token envelope — illustrative, not a quote." },
          { title: "Specification", text: "Opens the full AI Platform service page." },
        ]}
      />
      <section className={`relative ${shell} py-16`}>
        <MediaFrame>
          <Image
            src="/images/scene-gateway.png"
            alt="REVNCIA AI Gateway core"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 72rem, 100vw"
            priority
          />
        </MediaFrame>
        <ul className="mt-10 grid gap-3 sm:grid-cols-2">
          {core.capabilities.map((c) => (
            <li key={c} className={`${surface} px-4 py-3 text-sm leading-relaxed text-pretty break-words`}>
              {c}
            </li>
          ))}
        </ul>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <UniqueChart id="platform-routing" caption="Multi-model routing load" />
          <UniqueChart id="platform-tokens" caption="Token and cost envelope" />
        </div>
        <Link href="/services/ai-platform" className={`${btnSecondary} mt-8`}>
          Full platform specification
        </Link>
      </section>
    </main>
  );
}

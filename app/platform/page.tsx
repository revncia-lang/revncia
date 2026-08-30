import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FacilitiesOnService } from "@/components/CustomerFacilities";
import { MediaFrame } from "@/components/MediaFrame";
import { PageHero } from "@/components/PageHero";
import { UniqueChart } from "@/components/UniqueChart";
import { offerings } from "@/lib/catalog";
import { btnSecondary, shell, surface } from "@/lib/ui";

export const metadata: Metadata = {
  title: "AI Platform",
  description:
    "Run every staff AI through one governed door — cost, identity, knowledge, and a log you can show. After go-live your owner sees who asked what.",
};

export default function PlatformPage() {
  const core = offerings.find((o) => o.slug === "ai-platform")!;
  return (
    <main>
      <PageHero
        kicker="AI Platform"
        title="Your staff run AI through one door — with cost, identity, and a log you can show."
        lede="Customers and employees should not depend on personal chatbot logins. You receive an AI Gateway: the right model, the right access, a cost envelope your owner can defend, and a trail a board can read. After go-live new assistants reuse the same door. Together we transform how the organisation runs AI — without losing the audit trail. We do not publish a token price list or a public API key."
        sections={[
          { title: "What staff get", text: "One door for models, identity, cost, and a log you can show — not another personal chatbot login." },
          { title: "What you receive", text: "Gateway, identity, cost, knowledge, agents — the controls your owner can read." },
          { title: "What owners can defend", text: "How spend and routing usually look after go-live — examples, not a quote." },
          { title: "Who it helps", text: "IT, risk, and operations owners who must explain AI — and the limits we state before you buy." },
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
        <h2 className="mt-10 font-serif text-2xl text-cyan-50">What your organisation keeps</h2>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-pretty break-words text-slate-400">
          {core.summary} After go-live your owner sees who asked what and what
          it cost. Unused personal ChatGPT logins are out of scope unless you
          connect them yourself.
        </p>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {core.capabilities.map((c) => (
            <li key={c} className={`${surface} px-4 py-3 text-sm leading-relaxed text-pretty break-words`}>
              {c}
            </li>
          ))}
        </ul>
        <FacilitiesOnService slug="ai-platform" />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <UniqueChart id="platform-routing" caption="Multi-model routing load" />
          <UniqueChart id="platform-tokens" caption="Token and cost envelope" />
        </div>
        <Link href="/services/ai-platform" className={`${btnSecondary} mt-8`}>
          What the platform includes
        </Link>
      </section>
    </main>
  );
}

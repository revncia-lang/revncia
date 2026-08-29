import type { Metadata } from "next";
import Link from "next/link";
import { MediaFrame } from "@/components/MediaFrame";
import { PageHero } from "@/components/PageHero";
import { UniqueChart } from "@/components/UniqueChart";
import { UniqueScene } from "@/components/UniqueScene";
import { btnSecondary, surface } from "@/lib/ui";

export const metadata: Metadata = {
  title: "Blueprint",
  description:
    "REVNCIA Blueprint: AI Gateway, identity, knowledge, memory, agents, tools, safety, observability, cost control.",
};

const layers = [
  ["Identity", "Organization, authentication, permissions, authorization."],
  ["Gateway", "Multi-model routing, selection, cost-aware dispatch."],
  ["Knowledge", "Documents, policies, CRM, ERP — authorized retrieval."],
  ["Memory", "Context management for assistants and agents."],
  ["Agents", "Department agents under defined tools and workflows."],
  ["Safety", "Guardrails, evaluation, human oversight."],
  ["Observe", "Logging, analytics, usage, and token control."],
];

export default function BlueprintPage() {
  return (
    <main>
      <PageHero
        kicker="Architecture"
        title="The Blueprint is the technological foundation under every service."
        lede="REVNCIA builds intelligent digital infrastructure — combining AI, automation, software, data, cybersecurity, and measurable outcomes — not an automation agency with a new coat of paint."
        sections={[
          { title: "Stack picture", text: "A unique diagram sized to the page width." },
          { title: "Layers", text: "Identity through observe — each in a card." },
          { title: "Maturity", text: "An illustrative adoption curve, then a link to Platform." },
        ]}
      />
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <MediaFrame ratio="banner">
          <UniqueScene id="blueprint-stack" title="Blueprint stack" />
        </MediaFrame>
        <ol className="mt-10 grid gap-4 md:grid-cols-2">
          {layers.map(([n, t], i) => (
            <li key={n} className={`${surface} p-5`}>
              <p className="text-[0.65rem] uppercase tracking-widest text-cyan-400/90">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h2 className="text-pretty font-serif text-2xl text-cyan-50">{n}</h2>
              <p className="mt-2 text-sm leading-relaxed text-pretty break-words text-slate-400">
                {t}
              </p>
            </li>
          ))}
        </ol>
        <div className="mt-10">
          <UniqueChart id="blueprint-maturity" caption="Blueprint adoption curve" />
        </div>
        <Link href="/platform" className={`${btnSecondary} mt-8`}>
          Open AI Platform
        </Link>
      </section>
    </main>
  );
}

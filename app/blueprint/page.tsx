import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { UniqueChart } from "@/components/UniqueChart";
import { UniqueScene } from "@/components/UniqueScene";

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
      />
      <section className="mx-auto max-w-6xl px-5 py-14 md:px-8">
        <div className="h-48 border border-cyan-400/20">
          <UniqueScene id="blueprint-stack" title="Blueprint stack" />
        </div>
        <ol className="mt-10 grid gap-4 md:grid-cols-2">
          {layers.map(([n, t], i) => (
            <li key={n} className="border border-white/10 p-5">
              <p className="text-[0.65rem] uppercase tracking-widest text-cyan-400">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h2 className="font-serif text-2xl text-cyan-50">{n}</h2>
              <p className="mt-2 text-sm text-slate-400">{t}</p>
            </li>
          ))}
        </ol>
        <div className="mt-10">
          <UniqueChart id="blueprint-maturity" caption="Blueprint adoption curve" />
        </div>
        <Link href="/platform" className="mt-8 inline-block text-sm uppercase tracking-widest text-cyan-300 underline">
          Open AI Platform
        </Link>
      </section>
    </main>
  );
}

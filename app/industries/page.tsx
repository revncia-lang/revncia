import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { UniqueScene } from "@/components/UniqueScene";

export const metadata: Metadata = {
  title: "Industries",
  description: "Government, education, healthcare, financial services, retail, enterprise, NGOs.",
};

const rows = [
  { slug: "government", name: "Government & public sector", text: "Citizen assistants, cases, portals, measured public impact." },
  { slug: "education", name: "Education", text: "Student and teacher AI, admissions, analytics, administration." },
  { slug: "healthcare", name: "Healthcare", text: "Admin AI, appointments, and communication — not a clinical-care product. Privacy is a design constraint." },
  { slug: "financial-services", name: "Financial services", text: "Onboarding, copilots, documents, risk, compliance." },
  { slug: "retail", name: "Retail & commerce", text: "Assistants, inventory, WhatsApp commerce, forecasting." },
  { slug: "industry-solutions", name: "Enterprise & NGOs", text: "Packaged REVNCIA for Enterprises and NGOs." },
] as const;

export default function IndustriesPage() {
  return (
    <main>
      <PageHero
        kicker="Industries"
        title="Same platform. Different mandates."
        lede="Commercial clients need growth and control. Public-sector clients need service, records, and trust. Packaged industry solutions reduce one-off custom work."
      />
      <section className="mx-auto max-w-6xl px-5 py-14 md:px-8">
        <div className="grid gap-5 md:grid-cols-2">
          {rows.map((r) => (
            <Link
              key={r.slug}
              href={`/services/${r.slug}`}
              className="overflow-hidden border border-cyan-400/15 bg-black/30"
            >
              <div className="h-32">
                <UniqueScene id={`ind-${r.slug}`} title={r.name} />
              </div>
              <div className="p-5">
                <h2 className="font-serif text-2xl text-cyan-50">{r.name}</h2>
                <p className="mt-2 text-sm text-slate-400">{r.text}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

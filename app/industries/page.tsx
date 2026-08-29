import type { Metadata } from "next";
import Link from "next/link";
import { MediaFrame } from "@/components/MediaFrame";
import { PageHero } from "@/components/PageHero";
import { UniqueScene } from "@/components/UniqueScene";
import { surfaceHover } from "@/lib/ui";

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
        sections={[
          { title: "Six mandates", text: "Each tile is a full-width picture plus a short brief. Text wraps." },
          { title: "Open a tile", text: "Goes to the matching service specification." },
        ]}
      />
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <div className="grid gap-5 md:grid-cols-2">
          {rows.map((r) => (
            <Link
              key={r.slug}
              href={`/services/${r.slug}`}
              className={`${surfaceHover} min-w-0 overflow-hidden`}
            >
              <MediaFrame ratio="banner" className="border-0 rounded-none rounded-t-xl">
                <UniqueScene id={`ind-${r.slug}`} title={r.name} />
              </MediaFrame>
              <div className="p-5">
                <h2 className="text-pretty font-serif text-2xl text-cyan-50">{r.name}</h2>
                <p className="mt-2 text-sm leading-relaxed text-pretty break-words text-slate-400">
                  {r.text}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

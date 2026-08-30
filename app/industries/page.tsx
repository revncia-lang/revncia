import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { ServiceVisual } from "@/components/ServiceVisual";
import { shell, surfaceHover } from "@/lib/ui";

export const metadata: Metadata = {
  title: "Your sector",
  description:
    "The same platform, shaped for citizens, students, patients’ admin, bank customers, shoppers, enterprises, and NGOs — with honest limits per sector.",
};

const rows = [
  {
    slug: "government",
    name: "Government & public sector",
    text: "Citizens see case status and book help. Offices keep an auditable file. Measures you choose to publish — people served, time, access — not invented KPIs. REVNCIA does not issue benefits.",
  },
  {
    slug: "education",
    name: "Education",
    text: "Parents, students, and teachers get answers so staff can teach. Admissions, attendance, and admin — not a replacement for teaching, and not a safeguarding product.",
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    text: "Appointments, reminders, documents, portals, and call handling — privacy first. Administrative only. We do not diagnose, treat, or prescribe. Clinical care stays with clinicians.",
  },
  {
    slug: "financial-services",
    name: "Financial services",
    text: "Faster onboarding and a fuller customer file, with a compliance trail. Fraud signals for your risk owners — not a guarantee against loss. Not investment advice.",
  },
  {
    slug: "retail",
    name: "Retail & commerce",
    text: "Shoppers get a reply on web and WhatsApp. Stock the store and the site can share. Repeat customers recognised in CRM. No invented WhatsApp tokens.",
  },
  {
    slug: "industry-solutions",
    name: "Enterprise & NGOs",
    text: "A pack you can compare — not a blank custom project every time. Starting kit, then a written statement of work. Sector limits still apply.",
  },
] as const;

export default function IndustriesPage() {
  return (
    <main>
      <PageHero
        kicker="Your sector"
        title="The people you serve already have a mandate — we shape the platform to it."
        lede="Citizens need status. Students need answers so teachers can teach. Patients need reminders — not a clinical product. Bank customers need a file you can defend. Shoppers need a reply. Enterprises and NGOs need a pack they can compare. Together we transform the work your sector is already responsible for."
        sections={[
          { title: "Who you serve", text: "Citizens, students, patients’ admin, bank customers, shoppers, enterprises, and NGOs — with the limit that applies." },
          { title: "Start in your sector", text: "What people in that world receive after go-live, and what we will not claim." },
        ]}
      />
      <section className={`${shell} py-16`}>
        <div className="grid w-full gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {rows.map((r) => (
            <Link
              key={r.slug}
              href={`/services/${r.slug}`}
              className={`${surfaceHover} min-w-0 overflow-hidden`}
            >
              <ServiceVisual slug={`ind-${r.slug}`} name={r.name} />
              <div className="p-5">
                <h2 className="text-pretty font-serif font-bold text-2xl md:text-3xl">{r.name}</h2>
                <p className="mt-2 text-sm leading-relaxed text-pretty break-words text-stone-600">
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

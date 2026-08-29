import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { industries } from "@/lib/site";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "REVNCIA serves government, enterprise, healthcare, education, finance, and operations.",
};

export default function IndustriesPage() {
  return (
    <main>
      <PageHero
        kicker="Industries"
        title="Same delivery standard. Different mandates."
        lede="Commercial clients need growth and operational control. Public-sector clients need service, records, and trust. We design for both."
      />
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-px bg-[color:var(--line)] sm:grid-cols-2">
          {industries.map((item) => (
            <article key={item.name} className="bg-[color:var(--paper)] p-8">
              <h2 className="font-serif text-2xl">{item.name}</h2>
              <p className="mt-3 text-sm leading-relaxed text-[color:var(--muted)]">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

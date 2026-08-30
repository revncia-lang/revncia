import type { Metadata } from "next";
import Link from "next/link";
import { FacilitiesServicesBlock } from "@/components/CustomerFacilities";
import { PageHero } from "@/components/PageHero";
import { ServiceVisual } from "@/components/ServiceVisual";
import { offerings } from "@/lib/catalog";
import { shell, surfaceHover } from "@/lib/ui";

export const metadata: Metadata = {
  title: "What we deliver",
  description:
    "Voice, WhatsApp, AI Platform, CRM, ERP, government, and more. Each service says what you receive, who it helps, and what happens after go-live.",
};

export default function ServicesIndex() {
  return (
    <main>
      <PageHero
        kicker="What we deliver"
        title="Choose the outcome your customers need first."
        lede="Pick the work that is already waiting. Each service says who it helps — callers, staff, citizens — what you receive, what happens after go-live, and the limits we state honestly. Together we transform the work people already wait for — not by adding another tool."
        sections={[
          { title: "What you can run", text: "Voice, WhatsApp, Gateway, CRM and ERP, documents, citizen services, and operating support." },
          { title: "Choose a service", text: "What you get, who it helps, what usually goes wrong if you wait, and how to write in." },
        ]}
      />
      <FacilitiesServicesBlock />
      <section className={`${shell} py-16`}>
        <div className="grid w-full gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {offerings.map((o) => (
            <Link
              key={o.slug}
              href={`/services/${o.slug}`}
              className={`${surfaceHover} flex min-w-0 flex-col overflow-hidden`}
            >
              <ServiceVisual slug={o.slug} name={o.name} />
              <div className="min-w-0 p-4">
                <p className="text-[0.65rem] font-semibold tracking-[0.16em] uppercase text-orange-600">
                    {o.n} · {o.group}
                </p>
                <h2 className="mt-1 text-pretty font-serif font-bold text-xl md:text-2xl">{o.name}</h2>
                <p className="mt-1 text-sm leading-snug text-pretty font-medium text-stone-800">{o.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-pretty break-words text-stone-600">
                  {o.summary}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

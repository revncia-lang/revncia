import type { Metadata } from "next";
import Link from "next/link";
import { BuyLayersGrid, FacilityDetail, HonestyCards, SupportDesk } from "@/components/CustomerFacilities";
import { MediaFrame } from "@/components/MediaFrame";
import { PageHero } from "@/components/PageHero";
import { UniqueChart } from "@/components/UniqueChart";
import { UniqueScene } from "@/components/UniqueScene";
import { customerFacilities, facilitiesIntro, honestyLimits } from "@/lib/facilities";
import { BetaLabel } from "@/components/BetaLabel";
import { band, btnPrimary, kicker, shell } from "@/lib/ui";

export const metadata: Metadata = {
  title: "What you get",
  description:
    "Customer facilities at REVNCIA: Voice, WhatsApp, AI Gateway, CRM and ERP access, documents, citizen services, hours, and how you can buy.",
};

export default function FacilitiesPage() {
  return (
    <main>
      <PageHero
        kicker={facilitiesIntro.kicker}
        title={facilitiesIntro.title}
        lede={facilitiesIntro.lede}
        sections={[
          { title: "What you can use", text: "Voice, WhatsApp, Gateway, CRM and ERP, documents, citizen access, and operating support." },
          { title: "How you buy", text: "A roadmap, a working facility, monthly access, managed AI, or usage meters — no headline package price." },
          { title: "Hours and honesty", text: "Email-first from Cheyenne. Cyber, healthcare, and marketing limits stated before you buy." },
        ]}
      />

      <section className={`${shell} py-16`}>
        <MediaFrame ratio="banner" className="mb-12">
          <UniqueScene id="facilities-access" title="What callers, staff, and citizens can use" />
        </MediaFrame>
        <div className="mb-12 grid gap-4 md:grid-cols-2">
          <UniqueChart id="facilities-access-wait" caption="How waiting usually falls once a facility is live (example)" />
          <UniqueChart id="facilities-access-use" caption="Who uses Voice, WhatsApp, and staff systems (example mix)" />
        </div>
        <p className={kicker}>What you can use</p>
        <h2 className="mt-3 max-w-3xl font-serif font-bold text-3xl md:text-4xl text-stone-900">
          What your callers, staff, and citizens can use after go-live.
        </h2>
        <div className="mt-10 space-y-6">
          {customerFacilities.map((facility) => (
            <FacilityDetail key={facility.id} facility={facility} />
          ))}
        </div>
      </section>

      <section className={band}>
        <div className={`${shell} py-16`}>
          <p className={kicker}>How you can buy</p>
          <h2 className="mt-3 max-w-3xl font-serif font-bold text-3xl md:text-4xl text-stone-900">
            Five layers — not a single package price.
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-pretty break-words text-stone-600">
            Fees follow the statement of work. We do not publish a PKR headline
            figure, a token price list, or invented WhatsApp rates.
          </p>
          <div className="mt-8">
            <BuyLayersGrid />
          </div>
        </div>
      </section>

      <section className={`${shell} grid gap-8 py-16 lg:grid-cols-12`}>
        <div className="lg:col-span-7">
          <p className={kicker}>Stated limits</p>
          <h2 className="mt-3 font-serif font-bold text-3xl md:text-4xl text-stone-900">
            Limits we state before you buy.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-pretty break-words text-stone-600">
            Cyber work starts with identity and logs. Healthcare is
            administrative. Marketing is a capability. Nothing here is a
            medical or legal diagnosis.
          </p>
          <div className="mt-8">
            <HonestyCards items={honestyLimits} />
          </div>
          <Link href="/contact" className={`${btnPrimary} mt-10`}>
            Write to us about a facility
            <BetaLabel />
          </Link>
        </div>
        <div className="lg:col-span-5">
          <SupportDesk />
        </div>
      </section>
    </main>
  );
}

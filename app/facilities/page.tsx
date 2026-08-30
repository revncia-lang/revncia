import type { Metadata } from "next";
import Link from "next/link";
import { BuyLayersGrid, FacilityDetail, HonestyCards, SupportDesk } from "@/components/CustomerFacilities";
import { MediaFrame } from "@/components/MediaFrame";
import { PageHero } from "@/components/PageHero";
import { UniqueScene } from "@/components/UniqueScene";
import { customerFacilities, facilitiesIntro, honestyLimits } from "@/lib/facilities";
import { btnPrimary, kicker, shell } from "@/lib/ui";

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
          <UniqueScene id="facilities-access" title="Customer facilities" />
        </MediaFrame>
        <p className={kicker}>What you can use</p>
        <h2 className="mt-3 max-w-3xl font-serif text-3xl text-cyan-50">
          What your callers, staff, and citizens can use after go-live.
        </h2>
        <div className="mt-10 space-y-6">
          {customerFacilities.map((facility) => (
            <FacilityDetail key={facility.id} facility={facility} />
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className={`${shell} py-16`}>
          <p className={kicker}>How you can buy</p>
          <h2 className="mt-3 max-w-3xl font-serif text-3xl text-cyan-50">
            Five layers — not a single package price.
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-pretty break-words text-slate-400">
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
          <h2 className="mt-3 font-serif text-3xl text-cyan-50">
            Limits we state before you buy.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-pretty break-words text-slate-400">
            Cyber work starts with identity and logs. Healthcare is
            administrative. Marketing is a capability. Nothing here is a
            medical or legal diagnosis.
          </p>
          <div className="mt-8">
            <HonestyCards items={honestyLimits} />
          </div>
          <Link href="/contact" className={`${btnPrimary} mt-10`}>
            Write to us about a facility
          </Link>
        </div>
        <div className="lg:col-span-5">
          <SupportDesk />
        </div>
      </section>
    </main>
  );
}

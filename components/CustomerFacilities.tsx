import Link from "next/link";
import { offeringBySlug } from "@/lib/catalog";
import {
  buyLayers,
  customerFacilities,
  customerSupport,
  facilitiesForSlug,
  facilitiesIntro,
  honestyForSlug,
  honestyLimits,
  type CustomerFacility,
  type HonestyLimit,
} from "@/lib/facilities";
import { btnSecondary, kicker, shell, surface, surfaceHover } from "@/lib/ui";

function RelatedLines({ slugs }: { slugs: string[] }) {
  return (
    <ul className="mt-3 flex flex-wrap gap-2">
      {slugs.map((slug) => {
        const o = offeringBySlug(slug);
        if (!o) return null;
        return (
          <li key={slug}>
            <Link
              href={`/services/${slug}`}
              className="text-xs text-orange-700 underline underline-offset-4"
            >
              {o.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

function ListBlock({
  heading,
  items,
  tone = "default",
}: {
  heading: string;
  items: string[];
  tone?: "default" | "omit";
}) {
  const box =
    tone === "omit"
      ? "border-amber-300 bg-amber-50 text-amber-950"
      : "border-orange-200 bg-orange-50 text-stone-700";
  return (
    <div>
      <h4 className="text-[0.68rem] tracking-[0.14em] uppercase text-orange-600">
        {heading}
      </h4>
      <ul className="mt-2 space-y-2">
        {items.map((item) => (
          <li key={item} className={`border px-3 py-2 text-sm leading-relaxed ${box}`}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function FacilityDetail({
  facility,
  compact = false,
}: {
  facility: CustomerFacility;
  compact?: boolean;
}) {
  return (
    <article id={facility.id} className={`${surface} min-w-0 scroll-mt-24 p-5 md:p-6`}>
      <p className="text-[0.65rem] tracking-[0.16em] uppercase text-orange-600">
        {facility.n} · Facility
      </p>
      <h3 className="mt-1 text-pretty font-serif text-2xl text-stone-900">
        {facility.name}
      </h3>
      <p className="mt-1 text-sm text-stone-700">{facility.title}</p>
      <p className="mt-3 text-sm leading-relaxed text-pretty break-words text-stone-600">
        {facility.summary}
      </p>
      {compact ? (
        <ul className="mt-4 space-y-2">
          {facility.youReceive.slice(0, 3).map((item) => (
            <li
              key={item}
              className="border-l-2 border-orange-500 pl-3 text-sm leading-relaxed text-stone-700"
            >
              {item}
            </li>
          ))}
        </ul>
      ) : (
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <ListBlock heading="What you receive" items={facility.youReceive} />
          <ListBlock heading="How you access it" items={facility.howYouAccess} />
          <ListBlock heading="Included when scoped" items={facility.included} />
          <ListBlock heading="Not included" items={facility.notIncluded} tone="omit" />
        </div>
      )}
      <p className={`${kicker} mt-5`}>Related service lines</p>
      <RelatedLines slugs={facility.relatedSlugs} />
    </article>
  );
}

export function BuyLayersGrid({
  compact = false,
  stacked = false,
}: {
  compact?: boolean;
  stacked?: boolean;
}) {
  return (
    <div
      className={
        stacked
          ? "grid gap-3"
          : "grid gap-3 sm:grid-cols-2 lg:grid-cols-5"
      }
    >
      {buyLayers.map((layer) => (
        <div key={layer.id} className={`${surface} p-4`}>
          <p className="text-[0.65rem] tracking-[0.14em] uppercase text-orange-600">
            {layer.cadence}
          </p>
          <p className="mt-1 font-serif text-lg text-stone-800">{layer.layer}</p>
          <p className="mt-2 text-sm leading-relaxed text-pretty break-words text-stone-600">
            {layer.whatYouGet}
          </p>
          {compact ? null : (
            <>
              <p className="mt-3 text-xs leading-relaxed text-pretty text-stone-500">
                {layer.howYouUseIt}
              </p>
              <p className="mt-2 text-xs leading-relaxed text-pretty text-stone-500">
                Typical when: {layer.typicalWhen}
              </p>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export function HonestyCards({ items }: { items: HonestyLimit[] }) {
  if (items.length === 0) return null;
  return (
    <ul className="grid gap-3 md:grid-cols-2">
      {items.map((item) => (
        <li key={item.id} className="border border-amber-400/25 bg-amber-950/20 p-4">
          <p className="font-serif text-lg text-amber-50">{item.title}</p>
          <p className="mt-2 text-sm leading-relaxed text-pretty break-words text-amber-100/85">
            {item.text}
          </p>
        </li>
      ))}
    </ul>
  );
}

export function SupportDesk() {
  return (
    <div className={`${surface} p-6`}>
      <p className={kicker}>Hours and channels</p>
      <h3 className="mt-2 font-serif text-2xl text-stone-900">How you reach us</h3>
      <p className="mt-3 text-sm leading-relaxed text-pretty break-words text-stone-600">
        {customerSupport.hours}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-pretty break-words text-stone-600">
        {customerSupport.channelNote}
      </p>
      <ul className="mt-5 space-y-3">
        {customerSupport.channels.map((ch) => (
          <li key={ch.name} className="border-l-2 border-orange-500 pl-3">
            <p className="text-sm text-stone-800">{ch.name}</p>
            <p className="mt-1 text-sm leading-relaxed text-pretty break-words text-stone-600">
              {ch.detail}
            </p>
          </li>
        ))}
      </ul>
      <p className="mt-5 text-sm text-stone-600">
        Office: {customerSupport.office}
      </p>
      <a
        href={`mailto:${customerSupport.email}`}
        className="mt-2 inline-block break-all text-sm text-orange-700 underline underline-offset-4"
      >
        {customerSupport.email}
      </a>
    </div>
  );
}

export function FacilitiesHomeSection() {
  return (
    <section className="border-y border-stone-200 bg-white/[0.02]">
      <div className={`${shell} py-20`}>
        <p className={kicker}>{facilitiesIntro.kicker}</p>
        <h2 className="mt-3 max-w-3xl font-serif text-3xl md:text-[2.1rem]">
          {facilitiesIntro.title}
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-pretty break-words text-stone-600 md:text-[0.95rem]">
          {facilitiesIntro.lede}
        </p>
        <div className="mt-10 grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {customerFacilities.map((f) => (
            <Link
              key={f.id}
              href={`/facilities#${f.id}`}
              className={`${surfaceHover} min-w-0 p-5`}
            >
              <p className="text-[0.65rem] tracking-[0.16em] uppercase text-orange-600">
                {f.n} · Facility
              </p>
              <h3 className="mt-1 text-pretty font-serif text-xl text-stone-900">
                {f.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-pretty break-words text-stone-600">
                {f.summary}
              </p>
            </Link>
          ))}
        </div>
        <p className={`${kicker} mt-14`}>How you can buy</p>
        <p className="mt-2 mb-6 max-w-2xl text-sm leading-relaxed text-stone-600">
          Five commercial layers — consulting through usage. Fees follow scope.
          There is no headline package price.
        </p>
        <BuyLayersGrid compact />
        <Link href="/facilities" className={`${btnSecondary} mt-8`}>
          Everything you can use after go-live
        </Link>
      </div>
    </section>
  );
}

export function FacilitiesServicesBlock() {
  return (
    <section className="border-b border-stone-200 bg-white/[0.02]">
      <div className={`${shell} py-14`}>
        <p className={kicker}>What you can run</p>
        <h2 className="mt-3 max-w-3xl font-serif text-3xl text-stone-900">
          Voice, WhatsApp, CRM, and the channels callers already use.
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-pretty break-words text-stone-600">
          Voice, WhatsApp, the AI Gateway, CRM and ERP logins, documents,
          citizen portals, and operating support — what callers, staff, and
          citizens can actually use after go-live.
        </p>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {customerFacilities.map((f) => (
            <Link
              key={f.id}
              href={`/facilities#${f.id}`}
              className={`${surfaceHover} p-4`}
            >
              <p className="font-serif text-lg text-stone-800">{f.name}</p>
              <p className="mt-1 text-xs leading-relaxed text-pretty text-stone-500">
                {f.title}
              </p>
            </Link>
          ))}
        </div>
        <p className={`${kicker} mt-12`}>How you can buy</p>
        <div className="mt-4">
          <BuyLayersGrid compact />
        </div>
      </div>
    </section>
  );
}

export function FacilitiesContactBlock() {
  return (
    <section className="border-t border-stone-200">
      <div className={`${shell} py-16`}>
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className={kicker}>What you can use</p>
            <h2 className="mt-3 font-serif text-3xl text-stone-900">
              Name what you need to run — Voice, WhatsApp, or a portal.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-pretty break-words text-stone-600">
              Tell us whether you need Voice, WhatsApp, Gateway access, CRM or
              ERP, documents, a citizen portal, or someone to operate the system
              after go-live. Pick a buy layer if you already know — consulting,
              implementation, monthly platform, managed AI, or usage.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {customerFacilities.map((f) => (
                <Link
                  key={f.id}
                  href={`/facilities#${f.id}`}
                  className={`${surfaceHover} p-4`}
                >
                  <p className="font-serif text-lg text-stone-800">{f.name}</p>
                  <p className="mt-1 text-xs leading-relaxed text-pretty text-stone-500">
                    {f.summary}
                  </p>
                </Link>
              ))}
            </div>
            <div className="mt-8">
              <HonestyCards items={honestyLimits} />
            </div>
          </div>
          <div className="lg:col-span-5">
            <SupportDesk />
            <p className={`${kicker} mt-8`}>How you can buy</p>
            <div className="mt-4">
              <BuyLayersGrid stacked />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FacilitiesOnService({ slug }: { slug: string }) {
  const matched = facilitiesForSlug(slug);
  const limits = honestyForSlug(slug);
  if (matched.length === 0 && limits.length === 0) return null;

  return (
    <div className="mt-12">
      <h2 className="font-serif text-2xl">What you can use after go-live</h2>
      <p className="mt-2 text-sm leading-relaxed text-stone-600">
        Access, what is included, and honest limits for callers, staff, or
        citizens.
      </p>
      <div className="mt-6 space-y-5">
        {matched.map((facility) => (
          <FacilityDetail key={facility.id} facility={facility} compact />
        ))}
      </div>
      {limits.length > 0 ? (
        <div className="mt-6">
          <HonestyCards items={limits} />
        </div>
      ) : null}
      <Link href="/facilities" className={`${btnSecondary} mt-6`}>
        Everything you can use after go-live
      </Link>
    </div>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BetaLabel } from "@/components/BetaLabel";
import { FacilitiesOnService } from "@/components/CustomerFacilities";
import { MediaFrame } from "@/components/MediaFrame";
import { PageHero } from "@/components/PageHero";
import { UniqueChart } from "@/components/UniqueChart";
import { UniqueScene } from "@/components/UniqueScene";
import { offeringBySlug, offerings } from "@/lib/catalog";
import { detailBlocks } from "@/lib/details";
import { painPoints, plainWhy } from "@/lib/pains";
import { btnPrimary, shell } from "@/lib/ui";
import { chartCaption, pictureCaption } from "@/lib/visuals";

export function generateStaticParams() {
  return offerings.map((o) => ({ slug: o.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const o = offeringBySlug(slug);
  return { title: o?.title ?? o?.name ?? "Service" };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const o = offeringBySlug(slug);
  if (!o) notFound();
  const i = offerings.findIndex((x) => x.slug === slug);
  const prev = offerings[(i + offerings.length - 1) % offerings.length];
  const next = offerings[(i + 1) % offerings.length];
  const related = offerings.filter((x) => x.group === o.group && x.slug !== o.slug).slice(0, 4);
  const blocks = detailBlocks[o.slug] ?? [];
  const pains = painPoints[o.slug] ?? [];
  const why = plainWhy[o.slug] ?? o.body;

  return (
    <main>
      <PageHero
        kicker={`${o.n} · ${o.name}`}
        title={o.title}
        lede={o.summary}
        sections={[
          { title: "What you receive", text: "Who it helps — callers, staff, or citizens — and what you can use after go-live." },
          { title: "If nothing changes", text: "Problems organisations report before they put this in place." },
          { title: "After go-live", text: "How waiting, rework, and trust usually move — examples, not a quote." },
          { title: "How to write in", text: "Name this work in a message to info@revncia.com so the right person replies." },
        ]}
      />
      <section className={`${shell} grid gap-10 py-14 md:grid-cols-12`}>
        <div className="md:col-span-7">
          <MediaFrame className="mb-8">
            <UniqueScene id={`pic-${o.slug}`} title={pictureCaption(o.name)} />
          </MediaFrame>
          {o.image ? (
            <MediaFrame className="mb-8" ratio="photo">
              <Image
                src={o.image}
                alt={`${o.name} — photograph of this kind of work`}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </MediaFrame>
          ) : null}

          <p className="mt-8 text-[1.08rem] leading-relaxed text-pretty break-words text-stone-800">{why}</p>
          <p className="mt-4 text-[0.98rem] leading-relaxed text-pretty break-words text-stone-600">{o.body}</p>
          {o.note ? (
            <p className="mt-4 border border-amber-300 bg-amber-50 p-4 text-sm text-amber-950">
              {o.note}
            </p>
          ) : null}

          <FacilitiesOnService slug={o.slug} />

          <h2 className="mt-12 font-serif font-bold text-3xl md:text-4xl">
            What your customers and staff still struggle with if you skip this
          </h2>
          <p className="mt-3 text-[0.98rem] leading-relaxed text-stone-600">
            These are everyday problems organisations report before they adopt
            this kind of service. They are not a medical or legal diagnosis —
            they are operational patterns we see in business life.
          </p>
          <ul className="mt-5 space-y-3">
            {pains.map((p) => (
              <li
                key={p}
                className="border border-rose-200 bg-rose-50 px-4 py-3 text-sm leading-relaxed text-rose-900"
              >
                {p}
              </li>
            ))}
          </ul>

          {blocks.map((block) => (
            <div key={block.heading} className="mt-10">
              <h2 className="font-serif font-bold text-3xl">{block.heading}</h2>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {block.items.map((item) => (
                  <li
                    key={item}
                    className="border border-[#c41e3a]/20 bg-[#f6ebe3] px-3 py-2 text-sm text-stone-700"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <h2 className="mt-12 font-serif font-bold text-3xl">What you can use after go-live</h2>
          <ul className="mt-4 space-y-2">
            {o.capabilities.map((c) => (
              <li key={c} className="border-l-2 border-orange-500 pl-3 text-[0.98rem] text-stone-700">
                {c}
              </li>
            ))}
          </ul>

          {related.length > 0 ? (
            <div className="mt-12">
              <h2 className="font-serif font-bold text-3xl">Other lines customers pair with this</h2>
              <ul className="mt-4 space-y-2">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link
                      href={`/services/${r.slug}`}
                      className="text-sm font-semibold text-orange-700 underline underline-offset-4"
                    >
                      {r.n} · {r.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          <Link
            href="/contact"
            className={`${btnPrimary} mt-10`}
          >
            Talk to REVNCIA about this
            <BetaLabel />
          </Link>
        </div>
        <aside className="space-y-4 md:col-span-5">
          <div className="mb-4">
            <MediaFrame>
              <UniqueScene id={`${o.slug}-side`} title={`${o.name} — how the pieces sit together`} />
            </MediaFrame>
          </div>
          <UniqueChart
            id={`${o.slug}-work`}
            caption={chartCaption(o.name, "work")}
          />
          <UniqueChart
            id={`${o.slug}-wait`}
            caption={chartCaption(o.name, "wait")}
          />
          <UniqueChart
            id={`${o.slug}-trust`}
            caption={chartCaption(o.name, "trust")}
          />
          <div className="flex min-w-0 justify-between gap-3 text-sm font-semibold text-orange-700">
            <Link href={`/services/${prev.slug}`} className="min-w-0 text-pretty break-words">
              ← {prev.name}
            </Link>
            <Link href={`/services/${next.slug}`} className="min-w-0 text-right text-pretty break-words">
              {next.name} →
            </Link>
          </div>
        </aside>
      </section>
    </main>
  );
}

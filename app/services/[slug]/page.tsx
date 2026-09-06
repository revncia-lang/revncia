import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FacilitiesOnService } from "@/components/CustomerFacilities";
import { MediaFrame } from "@/components/MediaFrame";
import { PageHero } from "@/components/PageHero";
import { UniqueScene } from "@/components/UniqueScene";
import { offeringBySlug, offerings } from "@/lib/catalog";
import { detailBlocks } from "@/lib/details";
import { painPoints, plainWhy } from "@/lib/pains";
import { btnPrimary, shell } from "@/lib/ui";
import { pictureCaption } from "@/lib/visuals";

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
  const customerRisks = pains.length > 0 ? pains : [
    `Work connected to ${o.name.toLowerCase()} remains slower, less visible, or more dependent on manual effort.`,
    "Teams may keep working across disconnected tools, creating avoidable rework, delays, and inconsistent information.",
    "Without an agreed owner, process, and measurement plan, improvement is difficult to sustain after launch.",
  ];
  const deliverySteps = [
    ["Discover", "Understand the current process, people, systems, data, risks, and desired outcome."],
    ["Design", "Define the target experience, operating model, scope, ownership, controls, and success measures."],
    ["Build", "Configure the capability, connect agreed systems, prepare approved data, and document decisions."],
    ["Validate", "Test real scenarios with named users, review exceptions, confirm access, and agree acceptance criteria."],
    ["Adopt", "Train owners and users, provide operating guidance, and establish the handover and support rhythm."],
    ["Improve", "Review agreed KPIs, feedback, risks, and usage so the service remains useful after go-live."],
  ] as const;

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
            <p className="mt-4 border border-[#0071e3]/25 bg-[#e8f1ff] p-4 text-sm text-stone-800">
              {o.note}
            </p>
          ) : null}

          <FacilitiesOnService slug={o.slug} />

          <h2 className="mt-12 font-serif font-bold text-3xl md:text-4xl">
            Disadvantages if you do not get this service
          </h2>
          <p className="mt-3 text-[0.98rem] leading-relaxed text-stone-600">
            These are practical business and institutional risks that may remain
            when the capability, ownership, and operating process are not in
            place. The impact depends on your systems, people, controls, and
            agreed scope.
          </p>
          <ul className="mt-5 space-y-3">
            {customerRisks.map((p) => (
              <li
                key={p}
                className="border border-[#0071e3]/20 bg-[#e8f1ff] px-4 py-3 text-sm leading-relaxed text-stone-800"
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
                    className="border border-[#0071e3]/20 bg-[#e8f1ff] px-3 py-2 text-sm text-stone-700"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <h2 className="mt-12 font-serif font-bold text-3xl">Advantages when you get this service</h2>
          <p className="mt-3 text-[0.98rem] leading-relaxed text-stone-600">
            The advantages below describe what customers can gain when the
            service is correctly scoped, adopted by named owners, and measured
            against agreed outcomes.
          </p>
          <ul className="mt-4 space-y-2">
            {o.capabilities.map((c) => (
              <li key={c} className="border-l-2 border-[#0071e3] pl-3 text-[0.98rem] text-stone-700">
                {c}
              </li>
            ))}
          </ul>

          <h2 className="mt-12 font-serif font-bold text-3xl">How REVNCIA delivers this service</h2>
          <p className="mt-3 text-[0.98rem] leading-relaxed text-stone-600">
            The exact scope is agreed with you before work begins. These steps explain the usual path from a customer question to an owned, measurable capability.
          </p>
          <ol className="mt-5 grid gap-3 sm:grid-cols-2">
            {deliverySteps.map(([step, detail], index) => (
              <li key={step} className="border border-[#0071e3]/20 bg-[#e8f1ff] p-4">
                <span className="text-xs font-semibold tracking-[0.12em] text-[#0078d4]">0{index + 1} · {step}</span>
                <p className="mt-2 text-sm leading-relaxed text-stone-700">{detail}</p>
              </li>
            ))}
          </ol>

          {related.length > 0 ? (
            <div className="mt-12">
              <h2 className="font-serif font-bold text-3xl">Other lines customers pair with this</h2>
              <ul className="mt-4 space-y-2">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link
                      href={`/services/${r.slug}`}
                      className="text-sm font-semibold text-[#0071e3] underline underline-offset-4"
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
          </Link>
        </div>
        <aside className="space-y-4 md:col-span-5">
          <div className="mb-4">
            <MediaFrame>
              <UniqueScene id={`${o.slug}-side`} title={`${o.name} — how the pieces sit together`} />
            </MediaFrame>
          </div>
          <div className="flex min-w-0 justify-between gap-3 text-sm font-semibold text-[#0071e3]">
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

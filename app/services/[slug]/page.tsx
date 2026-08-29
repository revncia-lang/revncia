import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MediaFrame } from "@/components/MediaFrame";
import { PageHero } from "@/components/PageHero";
import { UniqueChart } from "@/components/UniqueChart";
import { UniqueScene } from "@/components/UniqueScene";
import { offeringBySlug, offerings } from "@/lib/catalog";
import { detailBlocks } from "@/lib/details";
import { painPoints, plainWhy } from "@/lib/pains";
import { btnPrimary, shell } from "@/lib/ui";

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
  return { title: o?.name ?? "Service" };
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
        kicker={`${o.n} · ${o.group} · Stage ${o.stage}`}
        title={o.name}
        lede={o.title}
        sections={[
          { title: "Picture", text: "A unique scene or photograph for this line, fitted to the column." },
          { title: "Plain English", text: "What it is, then the longer specification." },
          { title: "Skip-this", text: "Operational problems customers report when they wait." },
          { title: "Graphs", text: "Three unique charts in the side column. Prev / next at the foot." },
        ]}
      />
      <section className={`${shell} grid gap-10 py-14 md:grid-cols-12`}>
        <div className="md:col-span-7">
          {o.image ? (
            <MediaFrame className="mb-8">
              <Image
                src={o.image}
                alt={`${o.name} — visual for this service line`}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </MediaFrame>
          ) : (
            <MediaFrame className="mb-8">
              <UniqueScene id={o.slug} title={o.name} />
            </MediaFrame>
          )}

          <h2 className="mt-8 font-serif text-2xl">In plain English</h2>
          <p className="mt-3 text-[1.05rem] leading-relaxed text-pretty break-words text-slate-200">{why}</p>
          <p className="mt-4 text-sm leading-relaxed text-pretty break-words text-slate-400">{o.body}</p>
          {o.note ? (
            <p className="mt-4 border border-amber-400/30 bg-amber-400/5 p-4 text-sm text-amber-100">
              {o.note}
            </p>
          ) : null}

          <h2 className="mt-12 font-serif text-2xl">
            What customers struggle with if they skip this
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            These are everyday problems organisations report before they adopt
            this kind of service. They are not a medical or legal diagnosis —
            they are operational patterns we see in business life.
          </p>
          <ul className="mt-5 space-y-3">
            {pains.map((p) => (
              <li
                key={p}
                className="border border-rose-400/25 bg-rose-950/20 px-4 py-3 text-sm leading-relaxed text-rose-50"
              >
                {p}
              </li>
            ))}
          </ul>

          {blocks.map((block) => (
            <div key={block.heading} className="mt-10">
              <h2 className="font-serif text-2xl">{block.heading}</h2>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {block.items.map((item) => (
                  <li
                    key={item}
                    className="border border-cyan-400/15 bg-black/30 px-3 py-2 text-sm text-slate-200"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <h2 className="mt-12 font-serif text-2xl">Core capabilities</h2>
          <ul className="mt-4 space-y-2">
            {o.capabilities.map((c) => (
              <li key={c} className="border-l-2 border-cyan-400 pl-3 text-sm text-slate-200">
                {c}
              </li>
            ))}
          </ul>

          {related.length > 0 ? (
            <div className="mt-12">
              <h2 className="font-serif text-2xl">Often bought with</h2>
              <ul className="mt-4 space-y-2">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link
                      href={`/services/${r.slug}`}
                      className="text-sm text-cyan-300 underline underline-offset-4"
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
              <UniqueScene id={`${o.slug}-side`} title={`${o.name} map`} />
            </MediaFrame>
          </div>
          <UniqueChart
            id={`${o.slug}-work`}
            caption="How work usually improves after go-live (example method)"
          />
          <UniqueChart
            id={`${o.slug}-wait`}
            caption="Waiting and rework when this is missing (example pattern)"
          />
          <UniqueChart
            id={`${o.slug}-trust`}
            caption="Trust and audit readiness over time (example path)"
          />
          <div className="flex min-w-0 justify-between gap-3 text-sm text-cyan-300">
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

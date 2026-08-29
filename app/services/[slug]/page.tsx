import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { UniqueChart } from "@/components/UniqueChart";
import { UniqueScene } from "@/components/UniqueScene";
import { offeringBySlug, offerings } from "@/lib/catalog";

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

  return (
    <main>
      <PageHero kicker={`${o.n} · ${o.group} · Stage ${o.stage}`} title={o.name} lede={o.title} />
      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-12 md:px-8">
        <div className="md:col-span-7">
          {o.image ? (
            <div className="relative mb-8 aspect-[16/9] overflow-hidden border border-cyan-400/20">
              <Image src={o.image} alt="" fill className="object-cover" sizes="60vw" />
            </div>
          ) : (
            <div className="mb-8 h-52 border border-cyan-400/20">
              <UniqueScene id={o.slug} title={o.name} />
            </div>
          )}
          <p className="text-[0.95rem] leading-relaxed text-slate-300">{o.body}</p>
          {o.note ? (
            <p className="mt-4 border border-amber-400/30 bg-amber-400/5 p-4 text-sm text-amber-100">
              {o.note}
            </p>
          ) : null}
          <ul className="mt-8 space-y-2">
            {o.capabilities.map((c) => (
              <li key={c} className="border-l-2 border-cyan-400 pl-3 text-sm text-slate-200">
                {c}
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            className="mt-10 inline-block bg-cyan-400 px-5 py-3 text-[0.75rem] uppercase tracking-[0.16em] text-black"
          >
            Commission this line
          </Link>
        </div>
        <aside className="md:col-span-5 space-y-4">
          <UniqueChart id={`${o.slug}-primary`} caption={`${o.name} operating graph`} />
          <UniqueChart id={`${o.slug}-secondary`} caption={`${o.name} guidance signal`} />
          <div className="flex justify-between text-sm text-cyan-300">
            <Link href={`/services/${prev.slug}`}>← {prev.name}</Link>
            <Link href={`/services/${next.slug}`}>{next.name} →</Link>
          </div>
        </aside>
      </section>
    </main>
  );
}

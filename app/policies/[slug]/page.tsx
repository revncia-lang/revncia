import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { policies, policyBySlug } from "@/lib/policies";
import { company } from "@/lib/site";
import { btnSecondary, shell, surface } from "@/lib/ui";

export function generateStaticParams() {
  return policies.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = policyBySlug(slug);
  return {
    title: p?.title ?? "Policy",
    description: p?.summary,
  };
}

export default async function PolicyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = policyBySlug(slug);
  if (!p) notFound();
  const i = policies.findIndex((x) => x.slug === slug);
  const prev = policies[(i + policies.length - 1) % policies.length];
  const next = policies[(i + 1) % policies.length];

  return (
    <main>
      <PageHero
        kicker="Policy"
        title={p.title}
        lede={`${p.summary} Last updated ${p.updated}. © 2026 ${company.name}. All rights reserved.`}
        sections={p.sections.map((s) => ({
          title: s.heading,
          text: "Full wording is in the column below.",
        }))}
      />
      <section className={`${shell} py-16`}>
        <p className="text-sm leading-relaxed text-pretty break-words text-slate-500">
          {company.name} · {company.address} ·{" "}
          <a className="break-all text-cyan-200 underline underline-offset-4" href={`mailto:${company.email}`}>
            {company.email}
          </a>
        </p>
        <div className="mt-10 space-y-6">
          {p.sections.map((s) => (
            <article key={s.heading} className={`${surface} p-6`}>
              <h2 className="text-pretty font-serif text-2xl">{s.heading}</h2>
              <p className="mt-3 text-sm leading-relaxed text-pretty break-words text-slate-300">
                {s.body}
              </p>
            </article>
          ))}
        </div>
        <div className="mt-10 flex min-w-0 flex-wrap justify-between gap-4 text-sm text-cyan-300">
          <Link href={`/policies/${prev.slug}`} className="min-w-0 text-pretty break-words">
            ← {prev.title}
          </Link>
          <Link href={`/policies/${next.slug}`} className="min-w-0 text-right text-pretty break-words">
            {next.title} →
          </Link>
        </div>
        <Link href="/policies" className={`${btnSecondary} mt-10`}>
          All policies
        </Link>
      </section>
    </main>
  );
}

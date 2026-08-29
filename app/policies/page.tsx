import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { policies } from "@/lib/policies";
import { company } from "@/lib/site";
import { surfaceHover } from "@/lib/ui";

export const metadata: Metadata = {
  title: "Policies",
  description: `Copyright, privacy, terms, and confidentiality for ${company.name}. All rights reserved.`,
};

export default function PoliciesIndex() {
  return (
    <main>
      <PageHero
        kicker="Legal"
        title="Policies. Copyright reserved."
        lede={`© 2026 ${company.name}. All rights reserved. These four statements sit with the copyright line in the footer. Commissioned work is also governed by the signed agreement.`}
        sections={[
          { title: "Copyright", text: "Marks, site assets, and who owns delivered work." },
          { title: "Privacy", text: "Inquiry mail, the attendant, and programme data." },
          { title: "Terms", text: "How to use this site and when a contract starts." },
          { title: "Confidentiality", text: "Client files, identity, and security limits." },
        ]}
      />
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <ul className="grid gap-4 sm:grid-cols-2">
          {policies.map((p) => (
            <li key={p.slug}>
              <Link href={`/policies/${p.slug}`} className={`${surfaceHover} block h-full min-w-0 p-6`}>
                <p className="text-[0.65rem] tracking-[0.16em] uppercase text-cyan-400/90">
                  Policy
                </p>
                <h2 className="mt-2 text-pretty font-serif text-2xl text-cyan-50">{p.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-pretty break-words text-slate-400">
                  {p.summary}
                </p>
                <p className="mt-4 text-[0.65rem] uppercase tracking-widest text-slate-500">
                  Updated {p.updated}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

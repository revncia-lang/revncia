import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { policies } from "@/lib/policies";
import { company } from "@/lib/site";
import { shell, surfaceHover } from "@/lib/ui";

export const metadata: Metadata = {
  title: "Policies",
  description: `Copyright, privacy, terms, and confidentiality for ${company.name}. All rights reserved.`,
};

export default function PoliciesIndex() {
  return (
    <main>
      <PageHero
        kicker="Your protection"
        title="What you can expect when you write, buy, or send us a file."
        lede={`When you write, buy, or send a file: who owns the work, how we use your mail, when a programme starts, and how we treat your files. © 2026 ${company.name}. All rights reserved. Signed work also follows the agreement you sign. Example pictures and graphs are not a quote or an SLA.`}
        sections={[
          { title: "Copyright", text: "Our marks stay ours. Work we deliver to you follows the agreement you sign." },
          { title: "Privacy", text: "Inquiry mail is for a reply. Voice, WhatsApp, CRM, and citizen programmes follow your instructions and the law." },
          { title: "Terms", text: "What you read here is information. A programme starts only when both sides accept scope in writing." },
          { title: "Confidentiality", text: "Your files stay confidential. Cyber is implementation plus partners — not a full cyber firm." },
        ]}
      />
      <section className={`${shell} py-16`}>
        <ul className="grid gap-4 sm:grid-cols-2">
          {policies.map((p) => (
            <li key={p.slug}>
              <Link href={`/policies/${p.slug}`} className={`${surfaceHover} block h-full min-w-0 p-6`}>
                <p className="text-[0.65rem] tracking-[0.16em] uppercase text-[#0071e3]">
                  Policy
                </p>
                <h2 className="mt-2 text-pretty font-serif text-2xl">{p.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-pretty break-words text-stone-600">
                  {p.summary}
                </p>
                <p className="mt-4 text-[0.65rem] uppercase tracking-widest text-stone-500">
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

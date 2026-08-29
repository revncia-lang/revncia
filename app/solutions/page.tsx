import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { aiServices, solutions } from "@/lib/site";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "CRM, ERP, AI, digital transformation, integration, and governance from REVNCIA.",
};

export default function SolutionsPage() {
  return (
    <main>
      <PageHero
        kicker="Solutions"
        title="The full stack of digital transformation — not a single product pitch."
        lede="From CRM and ERP to applied AI and governed integration. Each engagement is scoped to the outcome, the data, and the institution that will run it."
      />
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-8">
          {solutions.map((s) => (
            <article
              key={s.slug}
              id={s.slug}
              className="scroll-mt-24 border-b border-[color:var(--line)] pb-10"
            >
              <p className="text-[0.7rem] tracking-[0.18em] uppercase text-[color:var(--copper)]">
                {s.name}
              </p>
              <h2 className="mt-2 font-serif text-3xl">{s.title}</h2>
              <p className="mt-4 max-w-3xl text-[0.95rem] leading-relaxed text-[color:var(--muted)]">
                {s.body}
              </p>
            </article>
          ))}
        </div>

        <div id="ai-catalogue" className="mt-20 scroll-mt-24">
          <p className="text-[0.72rem] tracking-[0.22em] uppercase text-[color:var(--copper)]">
            AI catalogue
          </p>
          <h2 className="mt-3 font-serif text-3xl">
            Artificial intelligence services for clientage
          </h2>
          <div className="mt-10 grid gap-8">
            {aiServices.map((s) => (
              <article
                key={s.slug}
                className="border-b border-[color:var(--line)] pb-8"
              >
                <p className="text-[0.7rem] tracking-[0.18em] uppercase text-[color:var(--copper)]">
                  {s.name}
                </p>
                <h3 className="mt-2 font-serif text-2xl">{s.title}</h3>
                <p className="mt-3 max-w-3xl text-sm font-medium leading-relaxed">
                  {s.summary}
                </p>
                <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[color:var(--muted)]">
                  {s.body}
                </p>
              </article>
            ))}
          </div>
        </div>
        <p className="mt-10 text-sm text-[color:var(--muted)]">
          Need a scoped proposal?{" "}
          <Link href="/contact" className="text-[color:var(--ink)] underline underline-offset-4">
            Contact REVNCIA
          </Link>
          .
        </p>
      </section>
    </main>
  );
}

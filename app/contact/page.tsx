import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact REVNCIA in Cheyenne, Wyoming or by email at info@revncia.com.",
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        kicker="Contact"
        title="Tell us the system you need to stand up."
        lede="CRM, ERP, AI, or a full transformation program. We respond from the same address we publish."
      />
      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-2 md:px-8 md:py-20">
        <div>
          <h2 className="font-serif text-2xl">Inquiry</h2>
          <p className="mt-3 mb-8 text-sm text-[color:var(--muted)]">
            Submitting opens your email client with a draft to {company.email}.
          </p>
          <ContactForm />
        </div>
        <div>
          <h2 className="font-serif text-2xl">Office</h2>
          <p className="mt-4 text-[0.95rem] leading-relaxed text-[color:var(--muted)]">
            {company.name}
            <br />
            {company.address}
          </p>
          <p className="mt-6 text-sm">
            <a
              className="underline underline-offset-4"
              href={`mailto:${company.email}`}
            >
              {company.email}
            </a>
          </p>
          <p className="mt-10 max-w-sm text-sm leading-relaxed text-[color:var(--muted)]">
            For partnership, vendor, or media inquiries, use the same address
            and mark the subject line accordingly.
          </p>
        </div>
      </section>
    </main>
  );
}

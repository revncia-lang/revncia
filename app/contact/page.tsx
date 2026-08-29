import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { UniqueScene } from "@/components/UniqueScene";
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
        title="Commission a platform, a voice line, or a transformation audit."
        lede="We respond from the published address. Name the service line in your brief."
      />
      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-2 md:px-8">
        <div>
          <h2 className="font-serif text-2xl text-cyan-50">Inquiry</h2>
          <p className="mt-3 mb-8 text-sm text-slate-400">
            Submitting opens your email client with a draft to {company.email}.
          </p>
          <ContactForm />
        </div>
        <div>
          <div className="mb-6 h-36 border border-cyan-400/20">
            <UniqueScene id="contact-desk" title="Contact" />
          </div>
          <h2 className="font-serif text-2xl text-cyan-50">Office</h2>
          <p className="mt-4 text-[0.95rem] leading-relaxed text-slate-400">
            {company.name}
            <br />
            {company.address}
          </p>
          <p className="mt-6 text-sm">
            <a className="text-cyan-200 underline underline-offset-4" href={`mailto:${company.email}`}>
              {company.email}
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}

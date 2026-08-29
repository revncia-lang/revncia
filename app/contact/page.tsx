import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { MediaFrame } from "@/components/MediaFrame";
import { PageHero } from "@/components/PageHero";
import { UniqueScene } from "@/components/UniqueScene";
import { company } from "@/lib/site";
import { surface } from "@/lib/ui";

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
        sections={[
          { title: "Inquiry", text: "Name, organisation, email, interest, and a wrapping message field." },
          { title: "Office", text: "Cheyenne address and mailto — the action is email." },
        ]}
      />
      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-2 md:px-8">
        <div className="min-w-0">
          <h2 className="font-serif text-2xl text-cyan-50">Inquiry</h2>
          <p className="mt-3 mb-8 text-sm leading-relaxed text-pretty break-words text-slate-400">
            Submitting opens your email client with a draft to {company.email}.
          </p>
          <ContactForm />
        </div>
        <div className="min-w-0">
          <MediaFrame ratio="banner" className="mb-6">
            <UniqueScene id="contact-desk" title="Contact" />
          </MediaFrame>
          <div className={`${surface} p-6`}>
            <h2 className="font-serif text-2xl text-cyan-50">Office</h2>
            <p className="mt-4 text-[0.95rem] leading-relaxed text-pretty break-words text-slate-400">
              {company.name}
              <br />
              {company.address}
            </p>
            <p className="mt-6 text-sm">
              <a className="break-all text-cyan-200 underline underline-offset-4" href={`mailto:${company.email}`}>
                {company.email}
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

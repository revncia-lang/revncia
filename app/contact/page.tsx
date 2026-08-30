import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { FacilitiesContactBlock } from "@/components/CustomerFacilities";
import { MediaFrame } from "@/components/MediaFrame";
import { PageHero } from "@/components/PageHero";
import { UniqueScene } from "@/components/UniqueScene";
import { company } from "@/lib/site";
import { shell, surface } from "@/lib/ui";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact REVNCIA in Cheyenne, Wyoming or by email at info@revncia.com.",
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        kicker="Talk with us"
        title="Tell us who waits today — callers, WhatsApp chats, unread files, or a board that wants a plan."
        lede="Write from the published office. Name who waits and the work you need so we can reply. Together we transform — and that starts with a message, not a pitch deck. We do not publish a phone tree, a WhatsApp token, or a guaranteed reply-time SLA."
        sections={[
          { title: "What to tell us", text: "Your name, organisation, email, who waits, and the outcome you need." },
          { title: "How we reply", text: "info@revncia.com from Cheyenne on ordinary US business days — email-first." },
        ]}
      />
      <section className={`${shell} grid gap-12 py-16 md:grid-cols-2`}>
        <div className="min-w-0">
          <h2 className="font-serif text-2xl">What to tell us</h2>
          <p className="mt-3 mb-8 text-sm leading-relaxed text-pretty break-words text-stone-400">
            Sending opens a draft to {company.email} so you can review it before
            it leaves your inbox.
          </p>
          <ContactForm />
        </div>
        <div className="min-w-0">
          <MediaFrame ratio="banner" className="mb-6">
            <UniqueScene id="contact-desk" title="Contact" />
          </MediaFrame>
          <div className={`${surface} p-6`}>
            <h2 className="font-serif text-2xl">How customers reach us</h2>
            <p className="mt-4 text-[0.95rem] leading-relaxed text-pretty break-words text-stone-400">
              {company.name}
              <br />
              {company.address}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-pretty break-words text-stone-400">
              Email-first from this office on ordinary US business days. Name
              who waits in the subject. Voice and WhatsApp that your callers
              use after go-live are your channels — not a promise that a
              REVNCIA person answers at all hours.
            </p>
            <p className="mt-6 text-sm">
              <a className="break-all text-orange-700 underline underline-offset-4" href={`mailto:${company.email}`}>
                {company.email}
              </a>
            </p>
          </div>
        </div>
      </section>
      <FacilitiesContactBlock />
    </main>
  );
}

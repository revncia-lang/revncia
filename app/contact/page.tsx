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
  description: "Contact REVNCIA securely through the Website contact form.",
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        sceneId="contact-hero" sceneTitle="REVNCIA customer connection" 
        kicker="Talk with us"
        title="Tell us who waits today — callers, WhatsApp chats, unread files, or a board that wants a plan."
        lede="Write from the published office. Name who waits and the work you need so we can reply. Together we transform — and that starts with a message, not a pitch deck. We do not publish a phone tree, a WhatsApp token, or a guaranteed reply-time SLA."
        sections={[
          { title: "What to tell us", text: "Your name, organisation, email, who waits, and the outcome you need." },
          { title: "How we reply", text: "Submit the form securely and our team will review your request from the published office." },
        ]}
      />
      <section className={`${shell} grid gap-12 py-16 md:grid-cols-2`}>
        <div className="min-w-0">
          <h2 className="text-2xl font-semibold">What to tell us</h2>
          <p className="mt-3 mb-8 text-sm leading-relaxed text-pretty break-words text-[#606060]">
            Your message is submitted through the secure Website form for review by our team.
          </p>
          <ContactForm />
        </div>
        <div className="min-w-0">
          <MediaFrame ratio="banner" className="mb-6">
            <UniqueScene id="contact-desk" title="Contact" />
          </MediaFrame>
          <div className={`${surface} p-6`}>
            <h2 className="text-2xl font-semibold">How customers reach us</h2>
            <p className="mt-4 text-[0.95rem] leading-relaxed text-pretty break-words text-[#606060]">
              {company.name}
              <br />
              {company.address}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-pretty break-words text-[#606060]">
              Use the secure form to tell us who waits, what process is slow,
              and what outcome you need. Our team reviews each request from the
              published office and follows up through the contact details you
              provide.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-pretty break-words text-white/45">
              Your message is routed through a protected server endpoint. Do
              not include passwords, card numbers, CVV codes, or bank
              credentials in the message.
            </p>
          </div>
        </div>
      </section>
      <FacilitiesContactBlock />
    </main>
  );
}

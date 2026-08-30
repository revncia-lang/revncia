import Link from "next/link";
import { BetaLabel } from "@/components/BetaLabel";
import { FacilitiesHomeSection } from "@/components/CustomerFacilities";
import { HumanoidRobot } from "@/components/HumanoidRobot";
import { PageGuide } from "@/components/PageGuide";
import { ServiceVisual } from "@/components/ServiceVisual";
import { UniqueChart } from "@/components/UniqueChart";
import { engagement, flywheel, offerings } from "@/lib/catalog";
import { company } from "@/lib/site";
import { band, btnPrimary, btnSecondary, display, kicker, shell, surface, surfaceHover } from "@/lib/ui";

const featured = [
  "ai-platform",
  "customer-operations",
  "whatsapp-ai",
  "voice-ai",
  "crm",
  "government",
] as const;

const homeGuide = [
  { title: "Who gets answers first", text: "Callers, WhatsApp chats, and cases that currently have no owner." },
  { title: "What you can run", text: "Voice, WhatsApp, the Gateway, CRM and ERP, documents, citizen services, and someone to stay after go-live." },
  { title: "What usually changes", text: "Service, cost, and public wait times after go-live — examples, not a quote." },
  { title: "How we work with you", text: "A system you can run: consulting through monthly operation. Write info@revncia.com to start." },
] as const;

export default function Home() {
  const cards = featured
    .map((slug) => offerings.find((o) => o.slug === slug))
    .filter((o): o is NonNullable<typeof o> => Boolean(o));

  return (
    <main>
      <section className="relative border-b border-[#e8d9ce]">
        <div className={`${shell} grid items-start gap-6 pt-[0.2in] pb-12 md:grid-cols-12 md:pb-16`}>
          <div className="min-w-0 md:col-span-5">
            <p className={kicker}>{company.descriptor}</p>
            <h1 className={`mt-5 ${display}`}>
              Your customers get answers. Your staff get one system. The public gets a record they can trust.
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed break-words text-stone-600 md:text-lg">
              REVNCIA is an AI digital transformation and public impact company.
              Together we transform how work reaches the people you serve:
              callers, WhatsApp chats, unread files, and citizen cases — on one
              governed platform. Humans still own the hard decisions. Cyber is
              implementation plus partners, not a full cyber firm. Healthcare is
              administrative, not clinical. Marketing is a capability, not our
              name. We do not invent WhatsApp tokens or publish a headline
              package price.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/services" className={btnPrimary}>
                See every service
                <BetaLabel />
              </Link>
              <Link href="/platform" className={btnSecondary}>
                How we run AI
              </Link>
              <Link href="/contact" className={btnPrimary}>
                Start a conversation
                <BetaLabel />
              </Link>
            </div>
            <PageGuide sections={homeGuide} />
          </div>
          <div className="min-w-0 md:col-span-7">
            <HumanoidRobot />
          </div>
        </div>
      </section>

      <section className={band}>
        <div className={`${shell} py-20`}>
          <p className={kicker}>Start where people already wait</p>
          <h2 className="mt-3 font-serif font-bold text-3xl md:text-4xl">
            Calls, WhatsApp, cases, and the AI your staff already use.
          </h2>
          <div className="mt-10 grid w-full gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {cards.map((o) => (
              <Link
                key={o.slug}
                href={`/services/${o.slug}`}
                className={`${surfaceHover} flex min-w-0 flex-col overflow-hidden`}
              >
                <ServiceVisual slug={o.slug} name={o.name} />
                <div className="min-w-0 p-5">
                  <p className="text-[0.65rem] font-semibold tracking-[0.16em] uppercase text-orange-600">
                    {o.n} · {o.group}
                  </p>
                  <h3 className="mt-1 text-pretty font-serif font-semibold text-2xl">{o.name}</h3>
                  <p className="mt-1 text-sm leading-snug text-pretty text-stone-700">{o.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-pretty break-words text-stone-600">
                    {o.summary}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FacilitiesHomeSection />

      <section className={`${shell} py-20`}>
        <p className={kicker}>What usually changes</p>
        <h2 className="mt-3 mb-10 max-w-3xl font-serif font-bold text-3xl md:text-4xl">
          How service, cost, and public wait times usually move after go-live — examples, not a quote.
        </h2>
        <div className="grid w-full gap-4 md:grid-cols-3">
          <UniqueChart id="home-containment" caption="Callers finished without a callback (example path)" />
          <UniqueChart id="home-cost-routing" caption="How spend is shared across approved models (example)" />
          <UniqueChart id="home-public-impact" caption="How long a citizen case usually takes (example)" />
        </div>
      </section>

      <section className={band}>
        <div className={`${shell} py-20`}>
          <p className={kicker}>What you keep</p>
          <h2 className="mt-3 font-serif font-bold text-3xl md:text-4xl">
            After each stage you keep a system you can run — not a one-off project.
          </h2>
          <ol className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {flywheel.map((item, i) => (
              <li key={item} className={`${surface} px-4 py-4`}>
                <span className="text-[0.65rem] font-semibold text-orange-600">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-1 text-pretty font-serif font-semibold text-xl text-stone-900">{item}</p>
              </li>
            ))}
          </ol>
          <p className={`${kicker} mt-12`}>How we work with you</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 md:grid-cols-5">
            {engagement.map((e) => (
              <div key={e.layer} className={`${surface} p-4`}>
                <p className="text-pretty font-serif text-lg text-stone-800">{e.layer}</p>
                <p className="mt-1 text-sm leading-relaxed text-stone-600">{e.cadence}</p>
              </div>
            ))}
          </div>
          <Link href="/about" className={`${btnSecondary} mt-8`}>
            How we work with you
          </Link>
        </div>
      </section>

      <section className={`${shell} py-20`}>
        <p className={kicker}>Every service you can start</p>
        <h2 className="mt-3 max-w-3xl font-serif font-bold text-3xl text-stone-900 md:text-4xl">
          Pick the work that is already waiting — callers, chats, files, cases, or a plan.
        </h2>
        <div className="mt-10 grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {offerings.map((o) => (
            <Link
              key={o.slug}
              href={`/services/${o.slug}`}
              className={`${surfaceHover} overflow-hidden`}
            >
              <ServiceVisual slug={`all-${o.slug}`} name={o.name} />
              <div className="p-4">
                <p className="text-[0.65rem] font-semibold tracking-[0.14em] uppercase text-orange-600">
                  {o.n} · {o.name}
                </p>
                <p className="mt-2 text-sm leading-snug text-pretty font-medium text-stone-800">{o.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-pretty break-words text-stone-600">
                  {o.summary}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

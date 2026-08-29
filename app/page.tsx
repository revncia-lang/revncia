import Link from "next/link";
import { HumanoidRobot } from "@/components/HumanoidRobot";
import { JarvisHud } from "@/components/JarvisHud";
import { MediaFrame } from "@/components/MediaFrame";
import { PageGuide } from "@/components/PageGuide";
import { UniqueChart } from "@/components/UniqueChart";
import { UniqueScene } from "@/components/UniqueScene";
import { engagement, flywheel, offerings } from "@/lib/catalog";
import { company } from "@/lib/site";
import { btnGhost, btnPrimary, btnSecondary, kicker, shell, surface, surfaceHover } from "@/lib/ui";

const featured = [
  "ai-platform",
  "customer-operations",
  "whatsapp-ai",
  "voice-ai",
  "crm",
  "government",
] as const;

const homeGuide = [
  { title: "Attendant", text: "Wireframe REVNCIA attendant. Allow actions to hear a spoken welcome; the picture stays still." },
  { title: "Priority lines", text: "Six core offerings with a picture and a short brief." },
  { title: "Graphs & flywheel", text: "Illustrative charts, then the operating cycle and commercial layers." },
  { title: "Catalogue", text: "All thirty-six services. Open any card for the full specification." },
] as const;

export default function Home() {
  const cards = featured
    .map((slug) => offerings.find((o) => o.slug === slug))
    .filter((o): o is NonNullable<typeof o> => Boolean(o));

  return (
    <main>
      <section className="relative min-h-[100svh] border-b border-white/10">
        <div className="absolute inset-0 overflow-hidden">
          <JarvisHud />
        </div>
        <div className={`relative ${shell} grid items-start gap-6 pt-[3in] pb-12 md:grid-cols-12 md:pb-16`}>
          <div className="min-w-0 md:col-span-5">
            <p className={kicker}>{company.descriptor}</p>
            <h1 className="mt-5 text-balance font-serif text-4xl leading-[1.14] md:text-5xl lg:text-[3.35rem]">
              AI, CRM, ERP, and public-impact systems that your organisation can actually run.
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed break-words text-slate-300/95 md:text-lg">
              REVNCIA is an AI digital transformation and public impact company.
              We help enterprises and governments replace scattered tools,
              missed calls, and unread files with a governed platform: Voice,
              WhatsApp, CRM, ERP, documents, and citizen services — with humans
              still in charge of the hard decisions. Marketing automation is a
              capability we deliver — it is not the company identity.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/services" className={btnPrimary}>
                Full catalogue
              </Link>
              <Link href="/platform" className={btnSecondary}>
                AI Platform
              </Link>
              <Link href="/contact" className={btnGhost}>
                Commission
              </Link>
            </div>
            <PageGuide sections={homeGuide} />
          </div>
          <div className="min-w-0 md:col-span-7">
            <HumanoidRobot />
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className={`${shell} py-20`}>
          <p className={kicker}>Priority lines</p>
          <h2 className="mt-3 font-serif text-3xl md:text-[2.1rem]">
            Revenue engine and public-impact core.
          </h2>
          <div className="mt-10 grid w-full gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {cards.map((o) => (
              <Link
                key={o.slug}
                href={`/services/${o.slug}`}
                className={`${surfaceHover} flex min-w-0 flex-col overflow-hidden`}
              >
                <MediaFrame ratio="landscape" className="w-full border-0 rounded-none rounded-t-xl">
                  <UniqueScene id={`home-${o.slug}`} title={o.name} />
                </MediaFrame>
                <div className="min-w-0 p-5">
                  <p className="text-[0.65rem] tracking-[0.16em] uppercase text-cyan-400/90">
                    {o.n} · {o.group}
                  </p>
                  <h3 className="mt-1 text-pretty font-serif text-2xl">{o.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-pretty break-words text-slate-400">
                    {o.summary}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={`${shell} py-20`}>
        <p className={kicker}>Guidance graphs</p>
        <h2 className="mt-3 mb-10 max-w-3xl font-serif text-3xl md:text-[2.1rem]">
          Simple graphs so a customer can see the idea — each chart is unique to this page.
        </h2>
        <div className="grid w-full gap-4 md:grid-cols-3">
          <UniqueChart id="home-containment" caption="Illustrative containment path" />
          <UniqueChart id="home-cost-routing" caption="Cost-aware model mix" />
          <UniqueChart id="home-public-impact" caption="Public-impact cycle time" />
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className={`${shell} py-20`}>
          <p className={kicker}>Flywheel</p>
          <ol className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {flywheel.map((item, i) => (
              <li key={item} className={`${surface} px-4 py-4`}>
                <span className="text-[0.65rem] text-cyan-400/90">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-1 text-pretty font-serif text-xl text-cyan-50">{item}</p>
              </li>
            ))}
          </ol>
          <p className={`${kicker} mt-12`}>Commercial layers</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 md:grid-cols-5">
            {engagement.map((e) => (
              <div key={e.layer} className={`${surface} p-4`}>
                <p className="text-pretty font-serif text-lg text-cyan-100">{e.layer}</p>
                <p className="mt-1 text-xs leading-relaxed text-slate-500">{e.cadence}</p>
              </div>
            ))}
          </div>
          <Link href="/about" className={`${btnSecondary} mt-8`}>
            Company and commercial model
          </Link>
        </div>
      </section>

      <section className={`${shell} py-20`}>
        <p className={kicker}>All 36 services</p>
        <h2 className="mt-3 max-w-3xl font-serif text-3xl text-cyan-50 md:text-[2.1rem]">
          Every line from the REVNCIA brief — open a card for pictures, graphs, and what goes wrong if you wait.
        </h2>
        <div className="mt-10 grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {offerings.map((o) => (
            <Link
              key={o.slug}
              href={`/services/${o.slug}`}
              className={`${surfaceHover} overflow-hidden`}
            >
              <MediaFrame ratio="landscape" className="w-full border-0 rounded-none rounded-t-xl">
                <UniqueScene id={`all-${o.slug}`} title={o.name} />
              </MediaFrame>
              <div className="p-4">
                <p className="text-[0.65rem] tracking-[0.14em] uppercase text-cyan-400/90">
                  {o.n} · {o.name}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-pretty break-words text-slate-400">
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

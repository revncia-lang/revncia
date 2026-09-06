import Link from "next/link";
import { shell, btnPrimary } from "@/lib/ui";

type HeroSection = {
  title: string;
  text: string;
};

type Props = {
  kicker?: string;
  title: string;
  lede?: string;
  cta?: {
    href: string;
    label: string;
  };
  sections?: HeroSection[];
  sceneId?: string;
  sceneTitle?: string;
};

export function PageHero({
  kicker,
  title,
  lede,
  cta,
  sections = [],
  sceneId,
  sceneTitle,
}: Props) {
  return (
    <section className="border-b border-[#d9d9d9] bg-white text-[#242424]">
      <div className={`${shell} mx-auto w-full max-w-[1600px] py-14 md:py-20`}>
        <div className="max-w-5xl">
          {kicker ? (
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#666]">
              {kicker}
            </p>
          ) : null}

          <h1 className="mt-4 max-w-5xl text-4xl font-bold leading-[1.08] tracking-[-0.025em] text-[#242424] md:text-6xl lg:text-7xl">
            {title}
          </h1>

          {lede ? (
            <p className="mt-6 max-w-4xl text-base leading-8 text-[#505050] md:text-lg">
              {lede}
            </p>
          ) : null}

          {cta ? (
            <div className="mt-8">
              <Link href={cta.href} className={btnPrimary}>
                {cta.label}
              </Link>
            </div>
          ) : null}
        </div>

        {sceneTitle ? (
          <div className="mt-10 border border-[#dedede] bg-[#f7f7f7] p-6">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#666]">
              {sceneId ? `${sceneId} / ` : ""}REVNCIA
            </p>
            <p className="mt-2 text-lg font-bold text-[#242424]">
              {sceneTitle}
            </p>
          </div>
        ) : null}

        {sections.length > 0 ? (
          <div className="mt-12 grid gap-4 border-t border-[#dedede] pt-8 md:grid-cols-2 xl:grid-cols-4">
            {sections.map((section) => (
              <article
                key={section.title}
                className="border border-[#dedede] bg-[#f7f7f7] p-5"
              >
                <h2 className="text-sm font-bold text-[#242424]">
                  {section.title}
                </h2>

                <p className="mt-3 text-sm leading-6 text-[#606060]">
                  {section.text}
                </p>
              </article>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
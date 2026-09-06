import Link from "next/link";
import { shell } from "@/lib/ui";

export default function LocalePage() {
  return (
    <main className="bg-white text-[#242424]">

      <section className="border-b border-[#d9d9d9] bg-[#f5f7f9]">
        <div className={`${shell} py-16 sm:py-20`}>
          <span className="text-sm font-semibold tracking-wide text-[#0078D4]">
            REVNCIA LANGUAGE & REGION
          </span>

          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Language and regional preferences
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#5e5e5e]">
            Choose the language and regional experience that best matches
            your organisation and location.
          </p>
        </div>
      </section>

      <section>
        <div className={`${shell} py-14 sm:py-16`}>
          <div className="max-w-3xl rounded-xl border border-[#d9d9d9] bg-white p-8 shadow-sm">

            <h2 className="text-2xl font-semibold">
              Current language
            </h2>

            <div className="mt-6 rounded-lg border border-[#d9d9d9] bg-[#f7f9fb] p-5">
              <p className="text-sm font-semibold">
                English (United States)
              </p>

              <p className="mt-2 text-sm leading-6 text-[#5e5e5e]">
                REVNCIA currently provides its primary website and platform
                experience in English (United States).
              </p>
            </div>

            <h2 className="mt-10 text-2xl font-semibold">
              Regional experience
            </h2>

            <p className="mt-4 text-sm leading-6 text-[#5e5e5e]">
              Product availability, services, pricing, legal requirements
              and customer support may vary by country or region.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/"
                className="rounded-md bg-[#0078D4] px-5 py-3 text-sm font-semibold !text-white hover:bg-[#106ebe]"
              >
                Return to REVNCIA
              </Link>

              <Link
                href="/contact"
                className="rounded-md border border-[#0078D4] bg-white px-5 py-3 text-sm font-semibold text-[#0078D4] hover:bg-[#f3f9fd]"
              >
                Contact REVNCIA
              </Link>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
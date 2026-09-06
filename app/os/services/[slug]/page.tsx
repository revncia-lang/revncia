import Link from "next/link";
import { offerings } from "@/lib/catalog";

export default function OSServicesPage() {
  return (
    <main className="min-h-screen bg-[#f5f5f5] text-[#242424]">
      <section className="border-b border-[#e1e1e1] bg-white">
        <div className="mx-auto w-full max-w-[1600px] px-4 py-14 sm:px-6 lg:px-8 xl:px-10">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#666]">
            REVNCIA OS
          </p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
            Service Command Catalog
          </h1>

          <p className="mt-4 max-w-3xl text-base leading-8 text-[#555]">
            Explore the REVNCIA service portfolio and connect customer
            requirements with the appropriate delivery capability.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex min-h-[48px] items-center justify-center border border-[#0067b8] bg-[#0067b8] px-7 py-3 text-sm font-bold !text-white transition hover:bg-[#005a9f] hover:!text-white"
            >
              New Service Request
            </Link>

            <Link
              href="/services"
              className="inline-flex min-h-[48px] items-center justify-center border border-[#0067b8] bg-white px-7 py-3 text-sm font-bold text-[#0067b8] transition hover:bg-[#f3f8fc]"
            >
              Public Service Catalog
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#f5f5f5]">
        <div className="mx-auto w-full max-w-[1600px] px-4 py-12 sm:px-6 lg:px-8 xl:px-10">

          <div className="mb-8 grid gap-4 md:grid-cols-3">
            <div className="border border-[#dedede] bg-white p-5">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#666]">
                Catalog
              </p>
              <p className="mt-2 text-3xl font-semibold">
                {offerings.length}
              </p>
              <p className="mt-1 text-sm text-[#666]">
                Available service capabilities
              </p>
            </div>

            <div className="border border-[#dedede] bg-white p-5">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#666]">
                Delivery
              </p>
              <p className="mt-2 text-xl font-semibold">
                Digital First
              </p>
              <p className="mt-1 text-sm text-[#666]">
                Structured and scalable delivery
              </p>
            </div>

            <div className="border border-[#dedede] bg-white p-5">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#666]">
                Outcome
              </p>
              <p className="mt-2 text-xl font-semibold">
                Business Value
              </p>
              <p className="mt-1 text-sm text-[#666]">
                Focused on practical results
              </p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {offerings.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group border border-[#dedede] bg-white p-6 shadow-[0_5px_18px_rgba(0,0,0,0.035)] transition hover:-translate-y-0.5 hover:border-[#b8d6ea] hover:shadow-[0_8px_24px_rgba(0,0,0,0.07)]"
              >
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#666]">
                  REVNCIA Service
                </p>

                <h2 className="mt-3 text-lg font-semibold group-hover:text-[#0067b8]">
                  {service.title}
                </h2>

                <p className="mt-3 text-sm leading-7 text-[#555]">
                  {service.summary}
                </p>

                <span className="mt-5 inline-flex min-h-[40px] items-center justify-center border border-[#0067b8] bg-[#0067b8] px-5 py-2 text-sm font-bold !text-white transition group-hover:bg-[#005a9f]">
                  Explore Service
                </span>
              </Link>
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}
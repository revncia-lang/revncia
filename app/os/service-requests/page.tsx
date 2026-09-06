import Link from "next/link";

export default function ServiceRequestsPage() {
  return (
    <main className="min-h-screen bg-[#f5f5f5] text-[#242424]">
      <section className="border-b border-[#e1e1e1] bg-white">
        <div className="mx-auto w-full max-w-[1600px] px-4 py-14 sm:px-6 lg:px-8 xl:px-10">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#666]">
            REVNCIA OS
          </p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
            Service Requests
          </h1>

          <p className="mt-4 max-w-3xl text-base leading-8 text-[#555]">
            Manage customer requirements, service requests and delivery
            activities through the REVNCIA operating environment.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/services"
              className="inline-flex min-h-[48px] items-center justify-center border border-[#0067b8] bg-[#0067b8] px-7 py-3 text-sm font-bold !text-white transition hover:bg-[#005a9f] hover:!text-white"
            >
              Browse Service Catalog
            </Link>

            <Link
              href="/contact"
              className="inline-flex min-h-[48px] items-center justify-center border border-[#0067b8] bg-white px-7 py-3 text-sm font-bold text-[#0067b8] transition hover:bg-[#f3f8fc]"
            >
              New Service Request
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-[#e1e1e1] bg-[#f5f5f5]">
        <div className="mx-auto w-full max-w-[1600px] px-4 py-12 sm:px-6 lg:px-8 xl:px-10">
          <div className="grid gap-5 md:grid-cols-3">
            <article className="border border-[#dedede] bg-white p-6">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#666]">
                Intake
              </p>
              <h2 className="mt-3 text-xl font-semibold">
                Capture requirements
              </h2>
              <p className="mt-3 text-sm leading-7 text-[#555]">
                Record what the customer needs, the desired outcome and the
                business context.
              </p>
            </article>

            <article className="border border-[#dedede] bg-white p-6">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#666]">
                Delivery
              </p>
              <h2 className="mt-3 text-xl font-semibold">
                Coordinate services
              </h2>
              <p className="mt-3 text-sm leading-7 text-[#555]">
                Connect requirements with the appropriate REVNCIA service and
                delivery workflow.
              </p>
            </article>

            <article className="border border-[#dedede] bg-white p-6">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#666]">
                Outcome
              </p>
              <h2 className="mt-3 text-xl font-semibold">
                Track business value
              </h2>
              <p className="mt-3 text-sm leading-7 text-[#555]">
                Keep visibility on progress, completion and the expected
                business outcome.
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
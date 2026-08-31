import Link from "next/link";

export default function ModulePage() {
  return (
    <div className="min-h-[calc(100vh-72px)] px-5 py-10 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-5xl">
        <Link
          href="/os"
          className="text-xs text-cyan-300/70 hover:text-cyan-200"
        >
          ← Back to Command Center
        </Link>

        <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.025] p-8 sm:p-12">
          <div className="text-[10px] uppercase tracking-[0.22em] text-cyan-300/60">
            REVNCIA OS
          </div>

          <h1 className="mt-3 text-3xl font-semibold text-white">
            Module under construction
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/40">
            This REVNCIA OS module has been reserved in the architecture and
            will be implemented as we progress through the platform build.
          </p>
        </div>
      </div>
    </div>
  );
}
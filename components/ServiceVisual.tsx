"use client";

import Image from "next/image";

export function ServiceVisual({
  slug,
  name,
}: {
  slug: string;
  name: string;
}) {
  const image = "/images/services/" + slug + ".svg";

  return (
    <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#edf4f8]">
      <Image
        src={image}
        alt={name + " — REVNCIA service"}
        fill
        className="object-cover transition duration-500 ease-out hover:scale-[1.025]"
        sizes="(min-width: 1280px) 50vw, 100vw"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"
      />

      <div className="absolute bottom-4 left-4 border border-white/50 bg-white/90 px-3 py-1.5 backdrop-blur-sm">
        <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#0067b8]">
          REVNCIA SERVICE
        </span>
      </div>
    </div>
  );
}

import Image from "next/image";
import { hash32, palette } from "@/lib/hash";

export function UniqueScene({
  id,
  title,
}: {
  id: string;
  title: string;
}) {
  const p = palette(hash32(id));

  return (
    <div className="relative h-full w-full overflow-hidden bg-[#05070d]" role="img" aria-label={title}>
      <Image
        src="/images/revncia-mascot.png"
        alt=""
        fill
        unoptimized
        className="object-contain object-center"
        sizes="(min-width: 1024px) 400px, 100vw"
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `linear-gradient(160deg, ${p.a}22 0%, transparent 48%, #05070d99 100%)`,
        }}
      />
    </div>
  );
}

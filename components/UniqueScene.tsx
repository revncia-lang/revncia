"use client";

import Image from "next/image";

type Props = {
  id: string;
  title: string;
};

function getSceneImage(id: string) {
  const value = id.toLowerCase();

  if (/voice|call|contact|communication/.test(value)) {
    return "/images/scene-voice.png";
  }

  if (/whatsapp|messag|chat|customer/.test(value)) {
    return "/images/scene-messaging.png";
  }

  if (/crm|sales|retail|market|operation|ops/.test(value)) {
    return "/images/ops-room.png";
  }

  if (/document|knowledge|intel|about|organization/.test(value)) {
    return "/images/scene-knowledge.png";
  }

  if (/data|analytics|cloud|integration|platform/.test(value)) {
    return "/images/scene-data.png";
  }

  if (/civic|citizen|public|government|facilit/.test(value)) {
    return "/images/scene-civic.png";
  }

  if (/health|care|education|school|university/.test(value)) {
    return "/images/boardroom.png";
  }

  if (/cyber|security|govern|audit|risk/.test(value)) {
    return "/images/scene-command.png";
  }

  if (/gateway|command|os|control/.test(value)) {
    return "/images/scene-gateway.png";
  }

  if (/workforce|human|people/.test(value)) {
    return "/images/scene-workforce.png";
  }

  return "/images/scene-gateway.png";
}

export function UniqueScene({ id, title }: Props) {
  const image = getSceneImage(id);

  return (
    <div className="relative h-full min-h-[260px] w-full overflow-hidden bg-[#edf4f8]">
      <Image
        src={image}
        alt={title}
        fill
        priority={id.includes("hero") || id.includes("services")}
        className="object-cover"
        sizes="(min-width: 1280px) 50vw, 100vw"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent"
      />

      <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
        <div className="inline-flex border border-white/40 bg-white/90 px-3 py-1.5 backdrop-blur-sm">
          <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#0067b8]">
            REVNCIA
          </span>
        </div>

        <h2 className="mt-3 max-w-xl text-lg font-bold leading-snug text-white drop-shadow-md md:text-xl">
          {title}
        </h2>
      </div>
    </div>
  );
}

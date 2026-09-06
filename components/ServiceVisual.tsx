import { MediaFrame } from "@/components/MediaFrame";
import { UniqueScene } from "@/components/UniqueScene";
import { pictureCaption } from "@/lib/visuals";

export function ServiceVisual({
  slug,
  name,
}: {
  slug: string;
  name: string;
}) {
  return (
    <div className="flex min-w-0 flex-col">
      <MediaFrame ratio="landscape" className="w-full rounded-none rounded-t-xl border-0 border-b border-[#d2d2d7]">
        <UniqueScene id={`pic-${slug}`} title={pictureCaption(name)} />
      </MediaFrame>
    </div>
  );
}

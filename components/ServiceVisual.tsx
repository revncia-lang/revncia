import { MediaFrame } from "@/components/MediaFrame";
import { UniqueChart } from "@/components/UniqueChart";
import { UniqueScene } from "@/components/UniqueScene";
import { chartCaption, pictureCaption } from "@/lib/visuals";

export function ServiceVisual({
  slug,
  name,
}: {
  slug: string;
  name: string;
}) {
  return (
    <div className="flex min-w-0 flex-col">
      <MediaFrame ratio="landscape" className="w-full rounded-none rounded-t-xl border-0 border-b border-stone-200">
        <UniqueScene id={`pic-${slug}`} title={pictureCaption(name)} />
      </MediaFrame>
      <UniqueChart
        id={`graph-${slug}`}
        caption={chartCaption(name, "card")}
        compact
        embedded
      />
    </div>
  );
}

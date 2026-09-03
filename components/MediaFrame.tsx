export function MediaFrame({
  children,
  ratio = "landscape",
  className = "",
}: {
  children: React.ReactNode;
  ratio?: "landscape" | "photo" | "banner";
  className?: string;
}) {
  const box =
    ratio === "photo"
      ? "aspect-[4/3]"
      : ratio === "banner"
        ? "aspect-[21/9]"
        : "aspect-[16/9]";
  return (
    <div
      className={`relative block w-full min-w-0 overflow-hidden rounded-xl border border-white/10 bg-[#05080a] shadow-[0_18px_50px_rgba(0,0,0,0.28)] ${box} ${className}`}
    >
      <div className="absolute inset-0 [&_img]:h-full [&_img]:w-full [&_svg]:h-full [&_svg]:w-full">
        {children}
      </div>
    </div>
  );
}

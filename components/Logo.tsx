export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        width="28"
        height="28"
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
      >
        <rect width="32" height="32" rx="6" fill="#c41e3a" />
        <path
          d="M9 23V9h7.2c2.9 0 4.8 1.7 4.8 4.2 0 1.9-1.1 3.3-2.9 3.9L22.4 23h-3.3l-3.8-5.5H12.2V23H9zm3.2-8.3h3.7c1.4 0 2.2-.7 2.2-1.8s-.8-1.8-2.2-1.8h-3.7v3.6z"
          fill="#ffffff"
        />
      </svg>
      <span className="font-serif text-[1.15rem] font-semibold tracking-[0.14em] leading-none">
        REVNCIA
      </span>
    </span>
  );
}

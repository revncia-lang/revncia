type LogoProps = {
  tone?: "light" | "dark";
};

export function Logo({ tone = "light" }: LogoProps) {
  const textColor = tone === "dark" ? "#ffffff" : "#242424";
  const mutedColor = tone === "dark" ? "#d6d6d6" : "#5f6368";

  return (
    <div className="flex items-center gap-3">
      {/* REVNCIA GLOBAL AI MARK */}
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="REVNCIA Global AI"
        role="img"
      >
        {/* Global orbit */}
        <circle
          cx="24"
          cy="24"
          r="19"
          stroke="#0078D4"
          strokeWidth="2"
        />

        {/* Global longitude */}
        <ellipse
          cx="24"
          cy="24"
          rx="8"
          ry="19"
          stroke="#00A4EF"
          strokeWidth="1.5"
        />

        {/* Global latitude */}
        <ellipse
          cx="24"
          cy="24"
          rx="19"
          ry="8"
          stroke="#00A4EF"
          strokeWidth="1.5"
        />

        {/* AI neural network */}
        <path
          d="M15 18L24 13L33 18L35 29L27 35L17 32L15 18Z"
          stroke="#0078D4"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />

        {/* AI connections */}
        <path
          d="M15 18L24 24L33 18"
          stroke="#0078D4"
          strokeWidth="1.5"
        />

        <path
          d="M24 13V24L27 35"
          stroke="#0078D4"
          strokeWidth="1.5"
        />

        <path
          d="M17 32L24 24L35 29"
          stroke="#0078D4"
          strokeWidth="1.5"
        />

        {/* AI nodes */}
        <circle cx="15" cy="18" r="3" fill="#0078D4" />
        <circle cx="24" cy="13" r="3" fill="#00A4EF" />
        <circle cx="33" cy="18" r="3" fill="#0078D4" />
        <circle cx="24" cy="24" r="3.5" fill="#0078D4" />
        <circle cx="17" cy="32" r="3" fill="#00A4EF" />
        <circle cx="27" cy="35" r="3" fill="#0078D4" />
        <circle cx="35" cy="29" r="3" fill="#00A4EF" />
      </svg>

      {/* REVNCIA WORDMARK */}
      <div className="flex flex-col leading-none">
        <span
          className="text-[22px] font-extrabold tracking-[-0.04em]"
          style={{ color: textColor }}
        >
          REVNCIA
        </span>

        <span
          className="mt-1 text-[7px] font-bold tracking-[0.18em]"
          style={{ color: mutedColor }}
        >
          GLOBAL AI PLATFORM
        </span>
      </div>
    </div>
  );
}
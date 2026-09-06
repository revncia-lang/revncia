import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

const root = process.cwd();

const catalogPath = path.join(
  root,
  "lib",
  "catalog.ts"
);

const outputDir = path.join(
  root,
  "public",
  "images",
  "services"
);

fs.mkdirSync(outputDir, {
  recursive: true,
});

const catalog = fs.readFileSync(
  catalogPath,
  "utf8"
);

function escapeXml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function slugify(value) {
  return value
    .toLowerCase()
    .trim()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function hash(value) {
  return crypto
    .createHash("sha256")
    .update(value)
    .digest("hex");
}

function extractServices(source) {
  const services = [];

  const objectPattern =
    /\{[\s\S]*?\bslug\s*:\s*["'`]([^"'`]+)["'`][\s\S]*?\bname\s*:\s*["'`]([^"'`]+)["'`][\s\S]*?\}/g;

  let match;

  while ((match = objectPattern.exec(source)) !== null) {
    const slug = slugify(match[1]);
    const name = match[2].trim();

    if (!slug || !name) {
      continue;
    }

    if (
      !services.some(
        (service) => service.slug === slug
      )
    ) {
      services.push({
        slug,
        name,
      });
    }
  }

  return services;
}

function palette(seed) {
  const colors = [
    "#0067b8",
    "#0078d4",
    "#0f6cbd",
    "#005a9e",
    "#146c94",
    "#1677a8",
    "#176b87",
    "#075985",
    "#155e75",
    "#164e63",
    "#1d4ed8",
    "#2563eb",
  ];

  const first =
    parseInt(seed.slice(0, 2), 16) %
    colors.length;

  const second =
    parseInt(seed.slice(2, 4), 16) %
    colors.length;

  const third =
    parseInt(seed.slice(4, 6), 16) %
    colors.length;

  return [
    colors[first],
    colors[second],
    colors[third],
  ];
}

function createVisual(service, index) {
  const seed = hash(
    `${service.slug}:${service.name}:${index}`
  );

  const [accent, accent2, accent3] =
    palette(seed);

  const variation =
    parseInt(seed.slice(6, 10), 16) % 6;

  const safeName =
    escapeXml(service.name);

  const shortName =
    service.name.length > 32
      ? `${service.name.slice(0, 29)}...`
      : service.name;

  const safeShortName =
    escapeXml(shortName);

  const motifs = [
    `
      <circle
        cx="690"
        cy="210"
        r="115"
        fill="none"
        stroke="${accent}"
        stroke-width="3"
        opacity=".35"
      />

      <circle
        cx="690"
        cy="210"
        r="78"
        fill="none"
        stroke="${accent2}"
        stroke-width="2"
        opacity=".45"
      />

      <circle
        cx="690"
        cy="210"
        r="42"
        fill="${accent}"
        opacity=".9"
      />

      <circle
        cx="690"
        cy="210"
        r="16"
        fill="#ffffff"
      />
    `,

    `
      <rect
        x="575"
        y="105"
        width="235"
        height="210"
        rx="22"
        fill="#ffffff"
        stroke="${accent}"
        stroke-width="4"
      />

      <rect
        x="605"
        y="140"
        width="175"
        height="16"
        rx="8"
        fill="${accent}"
        opacity=".8"
      />

      <rect
        x="605"
        y="177"
        width="125"
        height="12"
        rx="6"
        fill="${accent2}"
        opacity=".45"
      />

      <rect
        x="605"
        y="205"
        width="155"
        height="12"
        rx="6"
        fill="${accent3}"
        opacity=".35"
      />

      <rect
        x="605"
        y="245"
        width="90"
        height="34"
        rx="17"
        fill="${accent}"
      />
    `,

    `
      <path
        d="M560 300 L665 120 L770 300 Z"
        fill="#ffffff"
        stroke="${accent}"
        stroke-width="4"
      />

      <circle
        cx="665"
        cy="205"
        r="48"
        fill="${accent}"
        opacity=".9"
      />

      <path
        d="M635 205 L657 227 L700 180"
        fill="none"
        stroke="#ffffff"
        stroke-width="9"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    `,

    `
      <rect
        x="555"
        y="125"
        width="245"
        height="170"
        rx="28"
        fill="${accent}"
        opacity=".12"
        stroke="${accent}"
        stroke-width="4"
      />

      <circle
        cx="615"
        cy="210"
        r="30"
        fill="${accent}"
      />

      <circle
        cx="700"
        cy="170"
        r="20"
        fill="${accent2}"
      />

      <circle
        cx="735"
        cy="245"
        r="26"
        fill="${accent3}"
      />

      <path
        d="M615 210 L700 170 L735 245 L615 210"
        fill="none"
        stroke="${accent}"
        stroke-width="5"
      />
    `,

    `
      <path
        d="M570 265 C610 125 720 125 780 265"
        fill="none"
        stroke="${accent}"
        stroke-width="8"
      />

      <path
        d="M600 260 C635 170 705 170 750 260"
        fill="none"
        stroke="${accent2}"
        stroke-width="6"
      />

      <circle
        cx="675"
        cy="255"
        r="40"
        fill="${accent}"
        opacity=".9"
      />

      <circle
        cx="675"
        cy="255"
        r="15"
        fill="#ffffff"
      />
    `,

    `
      <rect
        x="560"
        y="125"
        width="230"
        height="190"
        rx="24"
        fill="#ffffff"
        stroke="${accent}"
        stroke-width="4"
      />

      <rect
        x="590"
        y="155"
        width="170"
        height="105"
        rx="14"
        fill="${accent}"
        opacity=".12"
      />

      <circle
        cx="630"
        cy="207"
        r="19"
        fill="${accent}"
      />

      <circle
        cx="675"
        cy="207"
        r="19"
        fill="${accent2}"
      />

      <circle
        cx="720"
        cy="207"
        r="19"
        fill="${accent3}"
      />

      <path
        d="M615 280 H735"
        stroke="${accent}"
        stroke-width="9"
        stroke-linecap="round"
      />
    `,
  ];

  const motif = motifs[variation];

  return `<?xml version="1.0" encoding="UTF-8"?>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width="1600"
  height="900"
  viewBox="0 0 1600 900"
  role="img"
  aria-labelledby="title desc"
>
  <title>${safeName}</title>

  <desc>
    Unique REVNCIA visual for ${safeName}
  </desc>

  <defs>
    <linearGradient
      id="background"
      x1="0"
      y1="0"
      x2="1"
      y2="1"
    >
      <stop
        offset="0%"
        stop-color="#f8fbfd"
      />

      <stop
        offset="55%"
        stop-color="#eef5fa"
      />

      <stop
        offset="100%"
        stop-color="#dcecf6"
      />
    </linearGradient>

    <radialGradient id="glow">
      <stop
        offset="0%"
        stop-color="${accent}"
        stop-opacity=".24"
      />

      <stop
        offset="100%"
        stop-color="${accent}"
        stop-opacity="0"
      />
    </radialGradient>

    <filter id="shadow">
      <feDropShadow
        dx="0"
        dy="18"
        stdDeviation="22"
        flood-color="#12344a"
        flood-opacity=".16"
      />
    </filter>
  </defs>

  <rect
    width="1600"
    height="900"
    fill="url(#background)"
  />

  <circle
    cx="1250"
    cy="130"
    r="330"
    fill="url(#glow)"
  />

  <circle
    cx="1450"
    cy="720"
    r="250"
    fill="url(#glow)"
    opacity=".6"
  />

  <path
    d="M0 720
       C280 590 430 820 710 690
       S1120 540 1600 700
       V900
       H0
       Z"
    fill="#ffffff"
    opacity=".72"
  />

  <g
    opacity=".18"
    stroke="${accent}"
    stroke-width="2"
  >
    <path
      d="M90 110 H420"
    />

    <path
      d="M90 135 H330"
    />

    <path
      d="M1180 790 H1500"
    />

    <path
      d="M1250 815 H1450"
    />
  </g>

  <g filter="url(#shadow)">
    <rect
      x="95"
      y="105"
      width="720"
      height="560"
      rx="42"
      fill="#ffffff"
      stroke="#d6e2ea"
      stroke-width="3"
    />
  </g>

  <text
    x="145"
    y="185"
    font-family="Arial, Helvetica, sans-serif"
    font-size="24"
    font-weight="700"
    letter-spacing="5"
    fill="${accent}"
  >
    REVNCIA SERVICE
  </text>

  <text
    x="145"
    y="275"
    font-family="Arial, Helvetica, sans-serif"
    font-size="58"
    font-weight="700"
    fill="#172b3a"
  >
    ${safeShortName}
  </text>

  <rect
    x="145"
    y="315"
    width="145"
    height="5"
    rx="2"
    fill="${accent}"
  />

  <text
    x="145"
    y="375"
    font-family="Arial, Helvetica, sans-serif"
    font-size="23"
    fill="#526575"
  >
    Digital transformation capability
  </text>

  <text
    x="145"
    y="415"
    font-family="Arial, Helvetica, sans-serif"
    font-size="23"
    fill="#526575"
  >
    designed for measurable outcomes.
  </text>

  <g transform="translate(0 10)">
    ${motif}
  </g>

  <g>
    <circle
      cx="1090"
      cy="430"
      r="225"
      fill="#ffffff"
      opacity=".72"
    />

    <circle
      cx="1090"
      cy="430"
      r="185"
      fill="none"
      stroke="${accent}"
      stroke-width="3"
      opacity=".28"
    />

    <circle
      cx="1090"
      cy="430"
      r="140"
      fill="none"
      stroke="${accent2}"
      stroke-width="2"
      opacity=".35"
    />

    <circle
      cx="1090"
      cy="430"
      r="90"
      fill="${accent}"
      opacity=".9"
    />

    <path
      d="M1045 430
         L1075 460
         L1145 380"
      fill="none"
      stroke="#ffffff"
      stroke-width="16"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </g>

  <text
    x="1040"
    y="710"
    font-family="Arial, Helvetica, sans-serif"
    font-size="18"
    font-weight="700"
    letter-spacing="4"
    fill="${accent}"
  >
    UNIQUE SERVICE VISUAL
  </text>

  <text
    x="1040"
    y="748"
    font-family="Arial, Helvetica, sans-serif"
    font-size="20"
    fill="#526575"
  >
    REVNCIA AI • AUTOMATION • TRANSFORMATION
  </text>

</svg>`;
}

const services =
  extractServices(catalog);

if (services.length === 0) {
  console.error(
    "No services were detected in lib/catalog.ts."
  );

  process.exit(1);
}

let created = 0;

for (
  const [index, service]
  of services.entries()
) {
  const filePath = path.join(
    outputDir,
    `${service.slug}.svg`
  );

  const svg =
    createVisual(
      service,
      index
    );

  fs.writeFileSync(
    filePath,
    svg,
    "utf8"
  );

  created += 1;
}

console.log("");
console.log(
  "REVNCIA unique service-image generation complete."
);
console.log(
  `Services detected: ${services.length}`
);
console.log(
  `Images created:    ${created}`
);
console.log(
  `Output directory:  ${outputDir}`
);
console.log("");
import { businessDetails } from "./content.js";

const iconMap = {
  Supply: "SP",
  Truck: "DL",
  Bulk: "BK",
  Trust: "TD"
};

export const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Products", href: "/products/" },
  { label: "Quote", href: "/request-quote/" },
  { label: "Contact", href: "/contact/" }
];

export const renderSiteChrome = () => {
  const header = document.querySelector("#site-header");
  const footer = document.querySelector("#site-footer");

  header.innerHTML = `
    <div class="glass-panel flex flex-col gap-4 rounded-[28px] border border-line px-5 py-4 shadow-soft md:flex-row md:items-center md:justify-between">
      <a href="/" class="flex items-center gap-4">
        <div class="flex items-center justify-center rounded-2xl bg-white/70 px-2 py-1">
          <img src="/assets/logo.svg" alt="${businessDetails.companyName} logo" class="h-12 w-16 object-contain" />
        </div>
        <div>
          <div class="font-display text-base font-bold">${businessDetails.shortName}</div>
          <div class="text-sm text-black/60">Foodservice wholesale supply across ${businessDetails.serviceArea}</div>
        </div>
      </a>
      <nav class="flex flex-wrap gap-5 text-sm font-semibold text-black/70">
        ${navLinks.map((link) => `<a class="transition hover:text-ink" href="${link.href}">${link.label}</a>`).join("")}
      </nav>
    </div>
  `;

  footer.innerHTML = `
    <div class="glass-panel flex flex-col gap-6 rounded-[28px] border border-line px-6 py-8 shadow-soft lg:flex-row lg:items-start lg:justify-between">
      <div class="max-w-xl">
        <h3 class="font-display text-xl font-bold">${businessDetails.companyName}</h3>
        <p class="mt-3 text-sm leading-7 text-black/65">
          Wholesale food products, packaging, cleaning essentials, and dependable delivery support for busy Sydney venues.
        </p>
      </div>
      <div class="grid gap-6 sm:grid-cols-2">
        <div>
          <h4 class="font-display text-sm font-bold uppercase tracking-[0.22em] text-black/55">Links</h4>
          <div class="mt-3 grid gap-2 text-sm text-black/70">
            <a href="/">Home</a>
            <a href="/products/">Products</a>
            <a href="/request-quote/">Request a Quote</a>
            <a href="/contact/">Contact</a>
          </div>
        </div>
        <div>
          <h4 class="font-display text-sm font-bold uppercase tracking-[0.22em] text-black/55">Contact Info</h4>
          <div class="mt-3 grid gap-2 text-sm text-black/70">
            <span>${businessDetails.phone}</span>
            <span>${businessDetails.email}</span>
            <span>${businessDetails.address}</span>
          </div>
        </div>
      </div>
    </div>
  `;
};

export const buttonPrimary = (label, href) =>
  `<a href="${href}" class="inline-flex min-h-14 items-center justify-center rounded-full bg-gradient-to-r from-[#1f78b9] to-sky-500 px-7 text-sm font-bold text-white shadow-lg shadow-sky-200 transition hover:-translate-y-0.5">${label}</a>`;

export const buttonSecondary = (label, href, dark = false) =>
  `<a href="${href}" class="inline-flex min-h-14 items-center justify-center rounded-full border px-7 text-sm font-bold transition hover:-translate-y-0.5 ${dark ? "border-white/20 bg-white/10 text-white" : "border-black/10 bg-white/70 text-ink"}">${label}</a>`;

export const sectionEyebrow = (text) =>
  `<span class="inline-flex w-fit rounded-full border border-black/10 bg-white/60 px-4 py-2 font-display text-xs font-bold uppercase tracking-[0.24em] text-moss">${text}</span>`;

export const imagePlaceholder = (title, detail) => `
  <div class="image-placeholder relative flex min-h-[320px] flex-col justify-end overflow-hidden rounded-[28px] p-7 text-white shadow-soft">
    <div class="relative z-10 max-w-xs">
      <div class="font-display text-xs font-bold uppercase tracking-[0.26em] text-white/70">Image Placeholder</div>
      <div class="mt-3 font-display text-3xl font-bold">${title}</div>
      <p class="mt-3 text-sm leading-7 text-white/76">${detail}</p>
    </div>
  </div>
`;

export const featureIcon = (type) => `
  <div class="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-moss/10 font-display text-sm font-bold uppercase tracking-[0.18em] text-moss">
    ${iconMap[type] || "IC"}
  </div>
`;

export const productImageCard = (label, theme) => `
  <div class="image-placeholder relative h-48 overflow-hidden rounded-[24px] p-5 text-white">
    <div class="relative z-10 flex h-full flex-col justify-between">
      <span class="font-display text-[11px] font-bold uppercase tracking-[0.24em] text-white/70">${theme}</span>
      <strong class="max-w-[14ch] font-display text-xl leading-tight">${label}</strong>
    </div>
  </div>
`;

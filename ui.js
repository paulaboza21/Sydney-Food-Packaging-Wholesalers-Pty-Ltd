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
  const logo = `
    <svg viewBox="0 0 170 120" class="h-12 w-16 text-[#1f78b9]" aria-hidden="true" fill="currentColor">
      <circle cx="22" cy="18" r="14"></circle>
      <circle cx="54" cy="18" r="12"></circle>
      <circle cx="82" cy="18" r="10"></circle>
      <circle cx="108" cy="18" r="8"></circle>
      <circle cx="132" cy="18" r="6"></circle>
      <circle cx="152" cy="18" r="4"></circle>
      <circle cx="22" cy="46" r="14"></circle>
      <circle cx="52" cy="46" r="12"></circle>
      <circle cx="78" cy="46" r="10"></circle>
      <circle cx="102" cy="46" r="8"></circle>
      <circle cx="122" cy="46" r="6"></circle>
      <circle cx="142" cy="46" r="5"></circle>
      <circle cx="22" cy="74" r="11"></circle>
      <circle cx="50" cy="74" r="10"></circle>
      <circle cx="74" cy="74" r="9"></circle>
      <circle cx="96" cy="74" r="8"></circle>
      <circle cx="116" cy="74" r="6"></circle>
      <circle cx="136" cy="74" r="5"></circle>
      <circle cx="22" cy="98" r="9"></circle>
      <circle cx="46" cy="98" r="8"></circle>
      <circle cx="68" cy="98" r="7"></circle>
      <circle cx="22" cy="118" r="6"></circle>
      <circle cx="44" cy="118" r="5"></circle>
      <circle cx="66" cy="118" r="4"></circle>
    </svg>
  `;

  header.innerHTML = `
    <div class="glass-panel flex flex-col gap-4 rounded-[28px] border border-line px-5 py-4 shadow-soft md:flex-row md:items-center md:justify-between">
      <a href="/" class="flex items-center gap-4">
        <div class="flex items-center justify-center rounded-2xl bg-white/70 px-2 py-1">${logo}</div>
        <div>
          <div class="font-display text-base font-bold">Sydney Food & Packaging</div>
          <div class="text-sm text-black/60">Premium wholesale supply across Sydney</div>
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
        <h3 class="font-display text-xl font-bold">Sydney Food & Packaging Wholesalers</h3>
        <p class="mt-3 text-sm leading-7 text-black/65">
          Reliable B2B supply for food products, packaging, warehouse-ready essentials, and scheduled delivery support across Sydney.
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
            <span>1300 000 000</span>
            <span>sales@example.com</span>
            <span>Warehouse address placeholder</span>
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

import {
  businessDetails,
  orderOnlineContent,
  productCategories,
  products
} from "../content.js";
import { withBase } from "../paths.js";
import {
  buttonPrimary,
  buttonSecondary,
  productImageCard,
  renderSiteChrome,
  sectionEyebrow
} from "../ui.js";

renderSiteChrome();

const featuredProducts = products.slice(0, 6);

document.querySelector("#app").innerHTML = `
  <section class="hero-gradient glass-panel overflow-hidden rounded-[36px] border border-line px-6 py-8 shadow-soft lg:px-10 lg:py-10">
    ${sectionEyebrow("Order Online")}
    <div class="mt-5 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
      <div>
        <h1 class="max-w-[11ch] font-display text-5xl font-bold leading-[0.96] sm:text-6xl lg:text-7xl">${orderOnlineContent.hero.heading}</h1>
        <p class="mt-6 max-w-2xl text-base leading-8 text-sky-950/66 sm:text-lg">${orderOnlineContent.hero.subheading}</p>
        <div class="mt-8 flex flex-wrap gap-4">
          ${buttonPrimary(orderOnlineContent.hero.primaryCTA.label, orderOnlineContent.hero.primaryCTA.href)}
          ${buttonSecondary(orderOnlineContent.hero.secondaryCTA.label, orderOnlineContent.hero.secondaryCTA.href)}
        </div>
      </div>
      <div class="rounded-[28px] border border-sky-100 bg-white/82 p-5 shadow-sm">
        <div class="text-xs font-bold uppercase tracking-[0.22em] text-clay">Online ordering support</div>
        <div class="mt-4 grid gap-3">
          ${orderOnlineContent.highlights
            .map(
              (item) => `
                <div class="rounded-2xl border border-sky-100 bg-sky-50/70 px-4 py-4 text-sm font-semibold text-sky-950/80">
                  ${item}
                </div>
              `
            )
            .join("")}
        </div>
      </div>
    </div>
  </section>

  <section class="mt-6 glass-panel rounded-[32px] border border-line px-6 py-8 shadow-soft lg:px-10 lg:py-10">
    <div class="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
        ${sectionEyebrow("How It Works")}
        <h2 class="mt-5 font-display text-4xl font-bold leading-tight sm:text-5xl">Send your order in four clear steps.</h2>
      </div>
      <div class="max-w-md text-sm leading-7 text-sky-950/62">
        Designed for venues that want a fast online ordering starting point without slowing down day-to-day operations.
      </div>
    </div>
    <div class="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      ${orderOnlineContent.steps
        .map(
          (step, index) => `
            <article class="rounded-[26px] border border-sky-100 bg-white/84 px-5 py-6 shadow-sm">
              <div class="text-sm font-bold uppercase tracking-[0.2em] text-clay">Step ${index + 1}</div>
              <p class="mt-4 text-base font-semibold leading-8 text-sky-950/80">${step}</p>
            </article>
          `
        )
        .join("")}
    </div>
  </section>

  <section class="mt-6 glass-panel rounded-[32px] border border-line px-6 py-8 shadow-soft lg:px-10 lg:py-10">
    <div class="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
        ${sectionEyebrow("Shop Categories")}
        <h2 class="mt-5 font-display text-4xl font-bold leading-tight sm:text-5xl">Choose a category to begin your order.</h2>
      </div>
      <a href="${withBase("/products/")}" class="text-sm font-bold text-clay">View full product catalogue</a>
    </div>
    <div class="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      ${productCategories
        .map(
          (category) => `
            <a href="${withBase(`/products/?category=${encodeURIComponent(category)}`)}" class="group rounded-[28px] border border-sky-100 bg-white/84 p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
              ${productImageCard(category, category === "Packaging Supplies" ? "Packaging" : "Wholesale range")}
              <div class="px-1 pb-2 pt-5">
                <h3 class="font-display text-2xl font-bold text-sky-950">${category}</h3>
                <p class="mt-2 text-sm leading-7 text-sky-950/62">Browse the range, shortlist what you need, then send your order request online.</p>
              </div>
            </a>
          `
        )
        .join("")}
    </div>
  </section>

  <section class="mt-6 glass-panel rounded-[32px] border border-line px-6 py-8 shadow-soft lg:px-10 lg:py-10">
    <div class="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
        ${sectionEyebrow("Fast Picks")}
        <h2 class="mt-5 font-display text-4xl font-bold leading-tight sm:text-5xl">Popular ordering shortcuts.</h2>
      </div>
      <div class="max-w-md text-sm leading-7 text-sky-950/62">
        Start with fast-moving lines commonly reordered by cafes, restaurants, takeaway shops, and commercial kitchens.
      </div>
    </div>
    <div class="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      ${featuredProducts
        .map(
          (product) => `
            <article class="rounded-[30px] border border-sky-100 bg-white/84 p-4 shadow-sm">
              ${productImageCard(product.imageLabel, product.imageTheme)}
              <div class="px-1 pb-2 pt-5">
                <div class="text-xs font-bold uppercase tracking-[0.22em] text-clay">${product.category}</div>
                <h3 class="mt-3 font-display text-2xl font-bold text-sky-950">${product.name}</h3>
                <p class="mt-3 text-sm leading-7 text-sky-950/62">${product.description}</p>
                <div class="mt-6 flex flex-wrap gap-3">
                  <a href="${withBase(`/products/item/?slug=${product.slug}`)}" class="inline-flex min-h-12 items-center rounded-full border border-sky-200 bg-white/80 px-5 text-sm font-bold text-sky-950">View Details</a>
                  ${buttonPrimary("Order This Item", `/request-quote/?product=${encodeURIComponent(product.name)}`)}
                </div>
              </div>
            </article>
          `
        )
        .join("")}
    </div>
  </section>

  <section class="dark-gradient mt-6 overflow-hidden rounded-[36px] px-6 py-8 shadow-soft lg:px-10 lg:py-10">
    ${sectionEyebrow("Ready to Order")}
    <h2 class="mt-5 max-w-[12ch] font-display text-4xl font-bold leading-tight text-white sm:text-5xl">Need a fast wholesale order turnaround?</h2>
    <p class="mt-5 max-w-2xl text-base leading-8 text-white/78 sm:text-lg">
      Send through your list and our team will confirm stock, pricing, and delivery options for ${businessDetails.serviceArea}.
    </p>
    <div class="mt-8 flex flex-wrap gap-4">
      ${buttonPrimary("Start Your Order", "/request-quote/")}
      ${buttonSecondary("Call ${businessDetails.phone}", "/contact/", true)}
    </div>
  </section>
`;

import { productPageTemplate, products } from "../../content.js";
import {
  buttonPrimary,
  buttonSecondary,
  productImageCard,
  renderSiteChrome,
  sectionEyebrow
} from "../../ui.js";

renderSiteChrome();

const slug = new URLSearchParams(window.location.search).get("slug");
const product = products.find((item) => item.slug === slug) || products[0];
const app = document.querySelector("#app");

const hero = {
  ...productPageTemplate.hero,
  title: product.name,
  category: product.category,
  description: product.description
};

app.innerHTML = `
  <section class="glass-panel rounded-[34px] border border-line px-6 py-8 shadow-soft lg:px-10 lg:py-10">
    <div class="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
      <div>
        ${sectionEyebrow(hero.category)}
        <h1 class="mt-5 max-w-[11ch] font-display text-5xl font-bold leading-[0.98] sm:text-6xl">${hero.title}</h1>
        <p class="mt-5 max-w-2xl text-base leading-8 text-black/64">${hero.description}</p>
        <div class="mt-8 flex flex-wrap gap-4">
          ${buttonPrimary(hero.cta.label, `/request-quote/?product=${encodeURIComponent(product.name)}`)}
          ${buttonSecondary("Back to Products", "/products/")}
        </div>
      </div>
      ${productImageCard(product.imageLabel, product.imageTheme)}
    </div>
  </section>

  <section class="mt-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
    <div class="glass-panel rounded-[30px] border border-line p-6 shadow-soft">
      <h2 class="font-display text-3xl font-bold">Benefits</h2>
      <div class="mt-5 grid gap-3">
        ${productPageTemplate.benefits
          .map(
            (benefit) => `
              <div class="rounded-2xl border border-black/8 bg-white/70 px-4 py-4 text-sm font-semibold text-black/72">${benefit}</div>
            `
          )
          .join("")}
      </div>
    </div>
    <div class="glass-panel rounded-[30px] border border-line p-6 shadow-soft">
      <h2 class="font-display text-3xl font-bold">Specifications</h2>
      <div class="mt-5 grid gap-3">
        ${productPageTemplate.specifications.fields
          .map(
            (field) => `
              <div class="flex items-center justify-between rounded-2xl border border-black/8 bg-white/72 px-4 py-4">
                <span class="text-sm font-semibold text-black/68">${field}</span>
                <span class="text-sm font-bold text-moss">Available on request</span>
              </div>
            `
          )
          .join("")}
      </div>
    </div>
  </section>

  <section class="mt-6 glass-panel rounded-[30px] border border-line p-6 shadow-soft">
    <h2 class="font-display text-3xl font-bold">${productPageTemplate.usage.title}</h2>
    <div class="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      ${productPageTemplate.usage.items
        .map(
          (item) => `
            <div class="rounded-[24px] border border-black/8 bg-white/80 px-5 py-6">
              <h3 class="font-display text-xl font-bold">${item}</h3>
              <p class="mt-2 text-sm leading-7 text-black/60">Suitable for daily commercial use and consistent volume supply.</p>
            </div>
          `
        )
        .join("")}
    </div>
  </section>

  <section class="dark-gradient mt-6 rounded-[34px] px-6 py-8 shadow-soft lg:px-10 lg:py-10">
    ${sectionEyebrow("Bulk Supply")}
    <h2 class="mt-5 font-display text-4xl font-bold text-white sm:text-5xl">${productPageTemplate.cta.title}</h2>
    <div class="mt-8">${buttonPrimary(productPageTemplate.cta.button, `/request-quote/?product=${encodeURIComponent(product.name)}`)}</div>
  </section>
`;

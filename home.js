import { homepageContent, specialties } from "./content.js";
import { withBase } from "./paths.js";
import {
  buttonPrimary,
  buttonSecondary,
  featureIcon,
  imagePlaceholder,
  productImageCard,
  renderSiteChrome,
  sectionEyebrow
} from "./ui.js";

renderSiteChrome();

const { hero, about, categories, features, industries, cta } = homepageContent;

document.querySelector("#app").innerHTML = `
  <section class="hero-gradient glass-panel overflow-hidden rounded-[36px] border border-line px-6 py-8 shadow-soft lg:px-10 lg:py-10">
    ${sectionEyebrow("Sydney Wholesale Supply")}
    <div class="mt-5 max-w-4xl">
      <h1 class="max-w-[11ch] font-display text-5xl font-bold leading-[0.96] sm:text-6xl lg:text-7xl">${hero.heading}</h1>
      <p class="mt-6 max-w-2xl text-base leading-8 text-black/66 sm:text-lg">${hero.subheading}</p>
      <div class="mt-8 flex flex-wrap gap-4">
        ${buttonPrimary(hero.primaryCTA.label, hero.primaryCTA.href)}
        ${buttonSecondary(hero.secondaryCTA.label, hero.secondaryCTA.href)}
      </div>
    </div>
    <div class="mt-8 flex flex-wrap gap-3">
      ${hero.trustPoints
        .map(
          (item) => `
            <div class="rounded-full border border-black/8 bg-white/80 px-5 py-3 text-sm font-semibold text-ink shadow-sm">
              ${item}
            </div>
          `
        )
        .join("")}
    </div>
  </section>

  <section id="about" class="mt-6 glass-panel rounded-[32px] border border-line px-6 py-8 shadow-soft lg:px-10 lg:py-10">
    <div class="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
      <div>
        ${sectionEyebrow("About")}
        <h2 class="mt-5 font-display text-4xl font-bold leading-tight sm:text-5xl">${about.heading}</h2>
        <div class="mt-5 grid gap-4 text-base leading-8 text-black/66">
          ${about.text.map((paragraph) => `<p>${paragraph}</p>`).join("")}
        </div>
        <div class="mt-6 flex flex-wrap gap-3">
          ${specialties
            .map(
              (item) => `
                <span class="rounded-full border border-black/8 bg-white/80 px-4 py-2 text-sm font-semibold text-ink">
                  ${item}
                </span>
              `
            )
            .join("")}
        </div>
      </div>
      ${imagePlaceholder("Warehouse + Delivery", "A premium image zone for food products, packaging stock, warehouse storage, and dependable Sydney logistics.")}
    </div>
  </section>

  <section class="mt-6 glass-panel rounded-[32px] border border-line px-6 py-8 shadow-soft lg:px-10 lg:py-10">
    <div class="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
        ${sectionEyebrow("Product Categories")}
        <h2 class="mt-5 font-display text-4xl font-bold leading-tight sm:text-5xl">${categories.heading}</h2>
      </div>
      <a href="${withBase("/products/")}" class="text-sm font-bold text-moss">Browse all products</a>
    </div>
    <div class="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      ${categories.items
        .map(
          (category) => `
            <a href="${withBase(`/products/?category=${encodeURIComponent(category)}`)}" class="group rounded-[28px] border border-black/8 bg-white/82 p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
              ${productImageCard(category, category === "Packaging Supplies" ? "Packaging" : "Food products")}
              <div class="px-1 pb-2 pt-5">
                <h3 class="font-display text-2xl font-bold">${category}</h3>
                <p class="mt-2 text-sm leading-7 text-black/62">Click through to view products and request pricing for this category.</p>
              </div>
            </a>
          `
        )
        .join("")}
    </div>
  </section>

  <section class="mt-6 glass-panel rounded-[32px] border border-line px-6 py-8 shadow-soft lg:px-10 lg:py-10">
    ${sectionEyebrow("Why Choose Us")}
    <h2 class="mt-5 font-display text-4xl font-bold leading-tight sm:text-5xl">${features.heading}</h2>
    <div class="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      ${features.items
        .map(
          (item) => `
            <article class="rounded-[28px] border border-black/8 bg-white/80 p-6 shadow-sm">
              ${featureIcon(item.icon)}
              <h3 class="font-display text-2xl font-bold">${item.title}</h3>
              <p class="mt-3 text-sm leading-7 text-black/62">${item.description}</p>
            </article>
          `
        )
        .join("")}
    </div>
  </section>

  <section class="mt-6 glass-panel rounded-[32px] border border-line px-6 py-8 shadow-soft lg:px-10 lg:py-10">
    ${sectionEyebrow("Industries")}
    <h2 class="mt-5 font-display text-4xl font-bold leading-tight sm:text-5xl">${industries.heading}</h2>
    <div class="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
      ${industries.items
        .map(
          (item) => `
            <article class="rounded-[24px] border border-black/8 bg-white/82 px-5 py-6">
              <h3 class="font-display text-xl font-bold">${item}</h3>
              <p class="mt-2 text-sm leading-7 text-black/60">Wholesale-ready supply tailored to fast-moving foodservice teams.</p>
            </article>
          `
        )
        .join("")}
    </div>
  </section>

  <section class="dark-gradient overflow-hidden rounded-[36px] px-6 py-8 shadow-soft lg:px-10 lg:py-10">
    ${sectionEyebrow("Get Started")}
    <h2 class="mt-5 max-w-[12ch] font-display text-4xl font-bold leading-tight text-white sm:text-5xl">${cta.heading}</h2>
    <p class="mt-5 max-w-2xl text-base leading-8 text-white/76 sm:text-lg">${cta.subheading}</p>
    <div class="mt-8 flex flex-wrap gap-4">
      ${buttonPrimary(cta.primaryCTA.label, cta.primaryCTA.href)}
      ${buttonSecondary(cta.secondaryCTA.label, cta.secondaryCTA.href, true)}
    </div>
  </section>
`;

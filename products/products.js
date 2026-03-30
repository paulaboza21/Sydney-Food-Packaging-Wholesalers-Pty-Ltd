import { productCategories, products } from "../content.js";
import { withBase } from "../paths.js";
import {
  buttonPrimary,
  productImageCard,
  renderSiteChrome,
  sectionEyebrow
} from "../ui.js";

renderSiteChrome();

const app = document.querySelector("#app");
const params = new URLSearchParams(window.location.search);
let activeCategory = params.get("category") || "All";

const render = () => {
  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((product) => product.category === activeCategory);

  app.innerHTML = `
    <section class="glass-panel rounded-[34px] border border-line px-6 py-8 shadow-soft lg:px-10 lg:py-10">
      ${sectionEyebrow("Product Range")}
      <div class="mt-5 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h1 class="max-w-[12ch] font-display text-5xl font-bold leading-[0.98] sm:text-6xl">Browse products by category.</h1>
          <p class="mt-5 max-w-2xl text-base leading-8 text-black/64">
            Explore food products, packaging, warehouse essentials, and operational supplies designed for restaurants, cafes, takeaway shops, caterers, and commercial kitchens.
          </p>
        </div>
        <div class="rounded-[28px] border border-black/8 bg-white/72 p-4 text-sm leading-7 text-black/62">
          Clean filters, fast quote actions, and premium product cards built for B2B browsing.
        </div>
      </div>
      <div class="mt-8 flex flex-wrap gap-3" id="filter-bar">
        ${["All", ...productCategories]
          .map(
            (category) => `
              <button
                type="button"
                data-category="${category}"
                class="filter-chip rounded-full border px-5 py-3 text-sm font-bold transition ${category === activeCategory ? "border-moss bg-moss text-white" : "border-black/10 bg-white/80 text-ink"}"
              >
                ${category}
              </button>
            `
          )
          .join("")}
      </div>
    </section>

    <section class="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      ${filteredProducts
        .map(
          (product) => `
            <article class="glass-panel overflow-hidden rounded-[30px] border border-line p-4 shadow-soft">
              <a href="${withBase(`/products/item/?slug=${product.slug}`)}">
                ${productImageCard(product.imageLabel, product.imageTheme)}
              </a>
              <div class="px-1 pb-2 pt-5">
                <div class="text-xs font-bold uppercase tracking-[0.22em] text-moss">${product.category}</div>
                <h2 class="mt-3 font-display text-2xl font-bold">${product.name}</h2>
                <p class="mt-3 text-sm leading-7 text-black/62">${product.description}</p>
                <div class="mt-6 flex flex-wrap gap-3">
                  <a href="${withBase(`/products/item/?slug=${product.slug}`)}" class="inline-flex min-h-12 items-center rounded-full border border-black/10 bg-white/80 px-5 text-sm font-bold text-ink">View Product</a>
                  ${buttonPrimary("Request Quote", `/request-quote/?product=${encodeURIComponent(product.name)}`)}
                </div>
              </div>
            </article>
          `
        )
        .join("")}
    </section>
  `;

  document.querySelectorAll(".filter-chip").forEach((button) => {
    button.addEventListener("click", () => {
      activeCategory = button.dataset.category;
      const nextUrl =
        activeCategory === "All"
          ? withBase("/products/")
          : withBase(`/products/?category=${encodeURIComponent(activeCategory)}`);
      window.history.replaceState({}, "", nextUrl);
      render();
    });
  });
};

render();

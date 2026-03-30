import {
  businessDetails,
  orderPageContent,
  productCategories,
  products
} from "../content.js";
import { withBase } from "../paths.js";
import { renderSiteChrome, sectionEyebrow } from "../ui.js";

renderSiteChrome();

const params = new URLSearchParams(window.location.search);
const requestedProduct = params.get("product") || "";

let activeCategory = "All";
let selectedItems = [];

if (requestedProduct) {
  selectedItems = [{ name: requestedProduct, quantity: 1 }];
}

document.querySelector("#app").innerHTML = `
  <section class="grid gap-6 xl:grid-cols-[0.78fr_1.22fr]">
    <div class="glass-panel rounded-[34px] border border-line px-6 py-8 shadow-soft lg:px-10 lg:py-10">
      ${sectionEyebrow("Order Online")}
      <h1 class="mt-5 max-w-[12ch] font-display text-5xl font-bold leading-[0.98] sm:text-6xl">${orderPageContent.heading}</h1>
      <p class="mt-5 max-w-2xl text-base leading-8 text-black/64">${orderPageContent.subheading}</p>
      <div class="mt-8 grid gap-3">
        ${orderPageContent.trust
          .map(
            (item) => `
              <div class="rounded-2xl border border-sky-100 bg-white/80 px-4 py-4 text-sm font-semibold text-sky-950/78">${item}</div>
            `
          )
          .join("")}
      </div>
      <div class="mt-8 rounded-[28px] border border-sky-100 bg-sky-50/70 p-5">
        <div class="text-xs font-bold uppercase tracking-[0.22em] text-clay">How ordering works</div>
        <div class="mt-4 grid gap-3">
          <div class="rounded-2xl border border-sky-100 bg-white/90 px-4 py-4 text-sm font-semibold text-sky-950/78">1. Pick products or add your own items</div>
          <div class="rounded-2xl border border-sky-100 bg-white/90 px-4 py-4 text-sm font-semibold text-sky-950/78">2. Set quantities and preferred delivery timing</div>
          <div class="rounded-2xl border border-sky-100 bg-white/90 px-4 py-4 text-sm font-semibold text-sky-950/78">3. Submit the order request for confirmation</div>
        </div>
      </div>
    </div>

    <div class="grid gap-6">
      <section class="glass-panel rounded-[34px] border border-line px-6 py-8 shadow-soft lg:px-10 lg:py-10">
        <div class="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            ${sectionEyebrow("Build Your Order")}
            <h2 class="mt-5 font-display text-4xl font-bold leading-tight sm:text-5xl">Select categories and add items.</h2>
          </div>
          <a href="${withBase("/products/")}" class="text-sm font-bold text-clay">Browse full catalogue</a>
        </div>

        <div id="category-filters" class="mt-8 flex flex-wrap gap-3"></div>

        <div class="mt-8 grid gap-6 xl:grid-cols-[minmax(0,1fr)_320px] xl:items-start">
          <div id="product-picker" class="grid gap-5 md:grid-cols-2"></div>

          <aside class="xl:sticky xl:top-6">
            <div class="rounded-[30px] border border-sky-100 bg-white/90 p-5 shadow-sm">
              <div class="flex items-center justify-between gap-4">
                <div>
                  <div class="text-xs font-bold uppercase tracking-[0.22em] text-clay">Your Cart</div>
                  <h3 class="mt-2 font-display text-2xl font-bold text-sky-950">Order Summary</h3>
                </div>
                <div class="rounded-full border border-sky-100 bg-sky-50 px-4 py-2 text-sm font-semibold text-clay" id="order-count">
                  0 items
                </div>
              </div>
              <div id="order-summary" class="mt-5 grid gap-3"></div>
            </div>
          </aside>
        </div>
      </section>

      <form id="order-form" class="glass-panel rounded-[34px] border border-line px-6 py-8 shadow-soft lg:px-10 lg:py-10">
        <div>
          ${sectionEyebrow("Order Details")}
          <h2 class="mt-5 font-display text-4xl font-bold leading-tight sm:text-5xl">Delivery and business details.</h2>
        </div>

        <div class="mt-8 grid gap-5 md:grid-cols-2">
          <label>
            <span class="mb-2 block text-sm font-bold text-black/70">Name</span>
            <input name="Name" type="text" class="w-full rounded-2xl border border-black/10 bg-white/82 px-4 py-4 text-sm outline-none" placeholder="Name" />
          </label>
          <label>
            <span class="mb-2 block text-sm font-bold text-black/70">Business Name</span>
            <input name="Business Name" type="text" class="w-full rounded-2xl border border-black/10 bg-white/82 px-4 py-4 text-sm outline-none" placeholder="Business Name" />
          </label>
          <label>
            <span class="mb-2 block text-sm font-bold text-black/70">Email</span>
            <input name="Email" type="email" class="w-full rounded-2xl border border-black/10 bg-white/82 px-4 py-4 text-sm outline-none" placeholder="Email" />
          </label>
          <label>
            <span class="mb-2 block text-sm font-bold text-black/70">Phone</span>
            <input name="Phone" type="tel" class="w-full rounded-2xl border border-black/10 bg-white/82 px-4 py-4 text-sm outline-none" placeholder="Phone" />
          </label>
          <label>
            <span class="mb-2 block text-sm font-bold text-black/70">Business Type</span>
            <input name="Business Type" type="text" class="w-full rounded-2xl border border-black/10 bg-white/82 px-4 py-4 text-sm outline-none" placeholder="Business Type" />
          </label>
          <label>
            <span class="mb-2 block text-sm font-bold text-black/70">Preferred Delivery Date</span>
            <input name="Preferred Delivery Date" type="date" class="w-full rounded-2xl border border-black/10 bg-white/82 px-4 py-4 text-sm outline-none" />
          </label>
          <label class="md:col-span-2">
            <span class="mb-2 block text-sm font-bold text-black/70">Delivery Address</span>
            <input name="Delivery Address" type="text" class="w-full rounded-2xl border border-black/10 bg-white/82 px-4 py-4 text-sm outline-none" placeholder="Delivery Address" />
          </label>
          <label class="md:col-span-2">
            <span class="mb-2 block text-sm font-bold text-black/70">Message</span>
            <textarea name="Message" rows="5" class="w-full rounded-2xl border border-black/10 bg-white/82 px-4 py-4 text-sm outline-none" placeholder="Add notes for split deliveries, recurring orders, packaging requests, or special handling."></textarea>
          </label>
        </div>

        <textarea name="Products to Order" class="hidden"></textarea>
        <textarea name="Required Quantities" class="hidden"></textarea>

        <div class="mt-8 flex flex-col gap-4">
          <button type="submit" class="inline-flex min-h-14 items-center justify-center rounded-full bg-gradient-to-r from-[#1f78b9] to-sky-500 px-7 text-sm font-bold text-white shadow-lg shadow-sky-200 transition hover:-translate-y-0.5">
            Submit Order Request
          </button>
          <p class="text-sm leading-7 text-black/60">
            Orders are sent to ${businessDetails.quoteEmail}. This page creates a cleaner order request than the quote form and includes your selected items automatically.
          </p>
          <div id="order-status" class="hidden rounded-2xl border border-moss/15 bg-moss/5 px-4 py-4 text-sm font-semibold text-moss"></div>
        </div>
      </form>
    </div>
  </section>
`;

const form = document.querySelector("#order-form");
const status = document.querySelector("#order-status");
const productPicker = document.querySelector("#product-picker");
const categoryFilters = document.querySelector("#category-filters");
const orderSummary = document.querySelector("#order-summary");
const orderCount = document.querySelector("#order-count");
const productsField = form.querySelector('textarea[name="Products to Order"]');
const quantitiesField = form.querySelector('textarea[name="Required Quantities"]');

const sanitize = (value) => value.replace(/\s+/g, " ").trim();

const syncHiddenFields = () => {
  productsField.value = selectedItems.map((item) => item.name).join(", ");
  quantitiesField.value = selectedItems
    .map((item) => `${item.name}: ${item.quantity}`)
    .join("\n");

  orderCount.textContent = `${selectedItems.length} item${selectedItems.length === 1 ? "" : "s"}`;
};

const renderCategories = () => {
  categoryFilters.innerHTML = ["All", ...productCategories]
    .map(
      (category) => `
        <button
          type="button"
          data-category="${category}"
          class="category-chip rounded-full border px-5 py-3 text-sm font-bold transition ${category === activeCategory ? "border-clay bg-clay text-white" : "border-sky-200 bg-white/80 text-sky-950"}"
        >
          ${category}
        </button>
      `
    )
    .join("");

  document.querySelectorAll(".category-chip").forEach((button) => {
    button.addEventListener("click", () => {
      activeCategory = button.dataset.category;
      renderCategories();
      renderProducts();
    });
  });
};

const addItem = (name) => {
  const existing = selectedItems.find((item) => item.name === name);
  if (existing) {
    existing.quantity += 1;
  } else {
    selectedItems.push({ name, quantity: 1 });
  }
  renderSummary();
};

const updateQuantity = (name, quantity) => {
  const item = selectedItems.find((entry) => entry.name === name);
  if (!item) {
    return;
  }

  item.quantity = Math.max(1, quantity);
  renderSummary();
};

const removeItem = (name) => {
  selectedItems = selectedItems.filter((item) => item.name !== name);
  renderSummary();
};

const renderProducts = () => {
  const visibleProducts =
    activeCategory === "All"
      ? products
      : products.filter((product) => product.category === activeCategory);

  productPicker.innerHTML = visibleProducts
    .map(
      (product) => `
        <article class="rounded-[28px] border border-sky-100 bg-white/84 p-5 shadow-sm">
          <div class="text-xs font-bold uppercase tracking-[0.22em] text-clay">${product.category}</div>
          <h3 class="mt-3 font-display text-2xl font-bold text-sky-950">${product.name}</h3>
          <p class="mt-3 text-sm leading-7 text-sky-950/62">${product.description}</p>
          <div class="mt-5 flex flex-wrap gap-3">
            <button type="button" data-product="${product.name}" class="add-item inline-flex min-h-12 items-center rounded-full bg-sky-100 px-5 text-sm font-bold text-clay">
              Add to Order
            </button>
            <a href="${withBase(`/products/item/?slug=${product.slug}`)}" class="inline-flex min-h-12 items-center rounded-full border border-sky-200 bg-white/80 px-5 text-sm font-bold text-sky-950">
              View Product
            </a>
          </div>
        </article>
      `
    )
    .join("");

  document.querySelectorAll(".add-item").forEach((button) => {
    button.addEventListener("click", () => {
      addItem(button.dataset.product);
    });
  });
};

const renderSummary = () => {
  syncHiddenFields();

  if (!selectedItems.length) {
    orderSummary.innerHTML = `
      <div class="rounded-[24px] border border-dashed border-sky-200 bg-sky-50/60 px-4 py-5 text-sm font-semibold text-sky-950/68">
        No products added yet. Use the product selector to start building the order.
      </div>
    `;
    return;
  }

  orderSummary.innerHTML = selectedItems
    .map(
      (item) => `
        <article class="rounded-[24px] border border-sky-100 bg-sky-50/45 px-4 py-4">
          <h3 class="font-display text-xl font-bold text-sky-950">${item.name}</h3>
          <div class="mt-4 flex flex-wrap items-center gap-3">
            <label class="text-sm font-bold text-sky-950/70">Qty</label>
            <input type="number" min="1" value="${item.quantity}" data-qty="${item.name}" class="qty-input w-24 rounded-2xl border border-sky-200 bg-white px-4 py-3 text-sm font-semibold outline-none" />
            <button type="button" data-remove="${item.name}" class="remove-item inline-flex min-h-11 items-center rounded-full border border-red-200 bg-red-50 px-4 text-sm font-bold text-red-600">
              Remove
            </button>
          </div>
        </article>
      `
    )
    .join("");

  document.querySelectorAll(".qty-input").forEach((input) => {
    input.addEventListener("input", () => {
      updateQuantity(input.dataset.qty, Number.parseInt(input.value || "1", 10));
    });
  });

  document.querySelectorAll(".remove-item").forEach((button) => {
    button.addEventListener("click", () => {
      removeItem(button.dataset.remove);
    });
  });
};

const buildPayload = () => {
  const values = {};
  const fields = form.querySelectorAll("input[name], textarea[name]");

  fields.forEach((field) => {
    values[field.name] = sanitize(field.value || "");
  });

  return values;
};

const buildMailto = (values) => {
  const subject = encodeURIComponent(
    `Order Request${values["Business Name"] ? ` - ${values["Business Name"]}` : ""}`
  );

  const body = encodeURIComponent(
    orderPageContent.formFields
      .map((field) => `${field}: ${values[field] || "-"}`)
      .join("\n")
  );

  return `mailto:${businessDetails.quoteEmail}?subject=${subject}&body=${body}`;
};

const setStatus = (message) => {
  status.textContent = message;
  status.classList.remove("hidden");
};

renderCategories();
renderProducts();
renderSummary();

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const values = buildPayload();

  if (!values.Name || !values.Email || !values["Business Name"] || !values["Products to Order"]) {
    setStatus("Please complete Name, Business Name, Email, and add at least one product before submitting.");
    return;
  }

  window.location.href = buildMailto(values);
});

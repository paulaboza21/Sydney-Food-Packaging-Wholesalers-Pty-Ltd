import { businessDetails, orderPageContent } from "../content.js";
import { renderSiteChrome, sectionEyebrow } from "../ui.js";

renderSiteChrome();

const params = new URLSearchParams(window.location.search);
const requestedProduct = params.get("product") || "";

document.querySelector("#app").innerHTML = `
  <section class="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
    <div class="glass-panel rounded-[34px] border border-line px-6 py-8 shadow-soft lg:px-10 lg:py-10">
      ${sectionEyebrow("Order Online")}
      <h1 class="mt-5 max-w-[12ch] font-display text-5xl font-bold leading-[0.98] sm:text-6xl">${orderPageContent.heading}</h1>
      <p class="mt-5 max-w-2xl text-base leading-8 text-black/64">${orderPageContent.subheading}</p>
      <div class="mt-8 grid gap-3">
        ${orderPageContent.trust
          .map(
            (item) => `
              <div class="rounded-2xl border border-black/8 bg-white/80 px-4 py-4 text-sm font-semibold text-black/72">${item}</div>
            `
          )
          .join("")}
      </div>
    </div>
    <form id="order-form" class="glass-panel rounded-[34px] border border-line px-6 py-8 shadow-soft lg:px-10 lg:py-10">
      <div class="grid gap-5 md:grid-cols-2">
        ${orderPageContent.formFields
          .map((field) => {
            if (field === "Message") {
              return `
                <label class="md:col-span-2">
                  <span class="mb-2 block text-sm font-bold text-black/70">${field}</span>
                  <textarea name="${field}" rows="5" class="w-full rounded-2xl border border-black/10 bg-white/82 px-4 py-4 text-sm outline-none" placeholder="Add notes for split deliveries, recurring orders, packaging requests, or special handling."></textarea>
                </label>
              `;
            }

            const wideField =
              field === "Products to Order" ||
              field === "Required Quantities" ||
              field === "Delivery Address";
            const value =
              field === "Products to Order" && requestedProduct ? requestedProduct : "";
            const type =
              field === "Email"
                ? "email"
                : field === "Phone"
                  ? "tel"
                  : field === "Preferred Delivery Date"
                    ? "date"
                    : "text";

            return `
              <label class="${wideField ? "md:col-span-2" : ""}">
                <span class="mb-2 block text-sm font-bold text-black/70">${field}</span>
                <input
                  name="${field}"
                  type="${type}"
                  value="${value}"
                  class="w-full rounded-2xl border border-black/10 bg-white/82 px-4 py-4 text-sm outline-none"
                  placeholder="${field}"
                />
              </label>
            `;
          })
          .join("")}
      </div>
      <div class="mt-8 flex flex-col gap-4">
        <button type="submit" class="inline-flex min-h-14 items-center justify-center rounded-full bg-gradient-to-r from-[#1f78b9] to-sky-500 px-7 text-sm font-bold text-white shadow-lg shadow-sky-200 transition hover:-translate-y-0.5">
          Submit Order Request
        </button>
        <p class="text-sm leading-7 text-black/60">
          Orders are sent to ${businessDetails.quoteEmail}. If no direct endpoint is configured, this will open your email app with the order details prefilled.
        </p>
        <div id="order-status" class="hidden rounded-2xl border border-moss/15 bg-moss/5 px-4 py-4 text-sm font-semibold text-moss"></div>
      </div>
    </form>
  </section>
`;

const form = document.querySelector("#order-form");
const status = document.querySelector("#order-status");

const sanitize = (value) => value.replace(/\s+/g, " ").trim();

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

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const values = buildPayload();

  if (!values.Name || !values.Email || !values["Business Name"] || !values["Products to Order"]) {
    setStatus("Please complete Name, Business Name, Email, and Products to Order before submitting.");
    return;
  }

  window.location.href = buildMailto(values);
});

import { quotePageContent } from "../content.js";
import { buttonPrimary, renderSiteChrome, sectionEyebrow } from "../ui.js";

renderSiteChrome();

const params = new URLSearchParams(window.location.search);
const requestedProduct = params.get("product") || "";

const inputTypeMap = {
  Name: "text",
  "Business Name": "text",
  Email: "email",
  Phone: "tel",
  "Business Type": "text",
  "Products Interested In": "text",
  "Estimated Order Volume": "text",
  "Delivery Location": "text",
  Message: "textarea"
};

document.querySelector("#app").innerHTML = `
  <section class="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
    <div class="glass-panel rounded-[34px] border border-line px-6 py-8 shadow-soft lg:px-10 lg:py-10">
      ${sectionEyebrow("Request a Quote")}
      <h1 class="mt-5 max-w-[12ch] font-display text-5xl font-bold leading-[0.98] sm:text-6xl">${quotePageContent.heading}</h1>
      <p class="mt-5 max-w-2xl text-base leading-8 text-black/64">${quotePageContent.subheading}</p>
      <div class="mt-8 grid gap-3">
        ${quotePageContent.trust
          .map(
            (item) => `
              <div class="rounded-2xl border border-black/8 bg-white/80 px-4 py-4 text-sm font-semibold text-black/72">${item}</div>
            `
          )
          .join("")}
      </div>
    </div>
    <form class="glass-panel rounded-[34px] border border-line px-6 py-8 shadow-soft lg:px-10 lg:py-10">
      <div class="grid gap-5 md:grid-cols-2">
        ${quotePageContent.formFields
          .map((field) => {
            if (field === "Message") {
              return `
                <label class="md:col-span-2">
                  <span class="mb-2 block text-sm font-bold text-black/70">${field}</span>
                  <textarea rows="5" class="w-full rounded-2xl border border-black/10 bg-white/82 px-4 py-4 text-sm outline-none" placeholder="Share delivery timing, preferred products, and any special requirements."></textarea>
                </label>
              `;
            }

            const value =
              field === "Products Interested In" && requestedProduct ? requestedProduct : "";

            return `
              <label class="${field === "Delivery Location" ? "md:col-span-2" : ""}">
                <span class="mb-2 block text-sm font-bold text-black/70">${field}</span>
                <input
                  type="${inputTypeMap[field]}"
                  value="${value}"
                  class="w-full rounded-2xl border border-black/10 bg-white/82 px-4 py-4 text-sm outline-none"
                  placeholder="${field}"
                />
              </label>
            `;
          })
          .join("")}
      </div>
      <div class="mt-8">${buttonPrimary("Submit Quote Request", "/contact/")}</div>
    </form>
  </section>
`;

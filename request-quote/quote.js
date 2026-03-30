import { businessDetails, quotePageContent } from "../content.js";
import { renderSiteChrome, sectionEyebrow } from "../ui.js";

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
    <form id="quote-form" class="glass-panel rounded-[34px] border border-line px-6 py-8 shadow-soft lg:px-10 lg:py-10">
      <div class="grid gap-5 md:grid-cols-2">
        ${quotePageContent.formFields
          .map((field) => {
            if (field === "Message") {
              return `
                <label class="md:col-span-2">
                  <span class="mb-2 block text-sm font-bold text-black/70">${field}</span>
                  <textarea name="${field}" rows="5" class="w-full rounded-2xl border border-black/10 bg-white/82 px-4 py-4 text-sm outline-none" placeholder="Share delivery timing, preferred products, and any special requirements."></textarea>
                </label>
              `;
            }

            const value =
              field === "Products Interested In" && requestedProduct ? requestedProduct : "";

            return `
              <label class="${field === "Delivery Location" ? "md:col-span-2" : ""}">
                <span class="mb-2 block text-sm font-bold text-black/70">${field}</span>
                <input
                  name="${field}"
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
      <div class="mt-8 flex flex-col gap-4">
        <button type="submit" class="inline-flex min-h-14 items-center justify-center rounded-full bg-gradient-to-r from-[#1f78b9] to-sky-500 px-7 text-sm font-bold text-white shadow-lg shadow-sky-200 transition hover:-translate-y-0.5">
          Submit Quote Request
        </button>
        <p class="text-sm leading-7 text-black/60">
          Requests are sent to ${businessDetails.quoteEmail}. If no form endpoint is configured, this form will open your email app with the details prefilled.
        </p>
        <div id="quote-status" class="hidden rounded-2xl border border-moss/15 bg-moss/5 px-4 py-4 text-sm font-semibold text-moss"></div>
      </div>
    </form>
  </section>
`;

const form = document.querySelector("#quote-form");
const status = document.querySelector("#quote-status");

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
    `Quote Request${values["Business Name"] ? ` - ${values["Business Name"]}` : ""}`
  );

  const body = encodeURIComponent(
    quotePageContent.formFields
      .map((field) => `${field}: ${values[field] || "-"}`)
      .join("\n")
  );

  return `mailto:${businessDetails.quoteEmail}?subject=${subject}&body=${body}`;
};

const setStatus = (message) => {
  status.textContent = message;
  status.classList.remove("hidden");
};

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const values = buildPayload();

  if (!values.Name || !values.Email || !values["Business Name"]) {
    setStatus("Please complete Name, Business Name, and Email before submitting.");
    return;
  }

  if (businessDetails.quoteFormEndpoint) {
    try {
      const response = await fetch(businessDetails.quoteFormEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(values)
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      form.reset();
      if (requestedProduct) {
        const productInput = form.querySelector('input[name="Products Interested In"]');
        if (productInput) {
          productInput.value = requestedProduct;
        }
      }
      setStatus(businessDetails.quoteSuccessMessage);
      return;
    } catch (error) {
      setStatus("The online form endpoint could not be reached. Opening your email app instead.");
    }
  }

  window.location.href = buildMailto(values);
});

import { businessDetails, contactPageContent } from "../content.js";
import {
  buttonPrimary,
  buttonSecondary,
  imagePlaceholder,
  renderSiteChrome,
  sectionEyebrow
} from "../ui.js";

renderSiteChrome();

document.querySelector("#app").innerHTML = `
  <section class="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
    <div class="glass-panel rounded-[34px] border border-line px-6 py-8 shadow-soft lg:px-10 lg:py-10">
      ${sectionEyebrow("Contact")}
      <h1 class="mt-5 max-w-[10ch] font-display text-5xl font-bold leading-[0.98] sm:text-6xl">${contactPageContent.heading}</h1>
      <p class="mt-5 max-w-2xl text-base leading-8 text-black/64">${contactPageContent.subheading}</p>
      <div class="mt-8 flex flex-wrap gap-4">
        ${buttonPrimary("Request a Quote", "/request-quote/")}
        ${buttonSecondary("View Products", "/products/")}
      </div>
      <div class="mt-8 grid gap-4 sm:grid-cols-3">
        <div class="rounded-[24px] border border-black/8 bg-white/80 px-5 py-5">
          <div class="text-xs font-bold uppercase tracking-[0.22em] text-moss">Phone</div>
          <div class="mt-2 text-sm font-semibold text-black/70">${businessDetails.phone}</div>
        </div>
        <div class="rounded-[24px] border border-black/8 bg-white/80 px-5 py-5">
          <div class="text-xs font-bold uppercase tracking-[0.22em] text-moss">Email</div>
          <div class="mt-2 text-sm font-semibold text-black/70">${businessDetails.email}</div>
        </div>
        <div class="rounded-[24px] border border-black/8 bg-white/80 px-5 py-5">
          <div class="text-xs font-bold uppercase tracking-[0.22em] text-moss">Warehouse</div>
          <div class="mt-2 text-sm font-semibold text-black/70">${businessDetails.address}</div>
        </div>
      </div>
    </div>
    ${imagePlaceholder("Team + Logistics", "A polished space for team photography, warehouse operations, or delivery fleet visuals that reinforce trust and scale.")}
  </section>
`;

# Sydney Food & Packaging Wholesalers Website

Premium static B2B website concept for Sydney Food & Packaging Wholesalers Pty Ltd.

## What's Included

- Tailwind-powered homepage with the requested section order
- Filterable products page
- Product detail template page
- Request a Quote page
- Contact page
- Shared branding and reusable UI utilities
- SVG logo asset based on the provided mark
- GitHub Pages deployment workflow

## Project Structure

`index.html` homepage entry

`home.js` homepage rendering

`content.js` shared marketing content, product data, and business settings

`ui.js` shared header, footer, buttons, and reusable UI snippets

`app.css` background and glass styling

`products/` product listing and product detail pages

`request-quote/` quote form page

`contact/` contact page

`assets/` brand assets

`.github/workflows/` deployment automation

## Local Preview

Because the site uses ES modules, serve it through a local web server instead of opening files directly.

If you have Node.js:

```bash
npx serve .
```

Then open the local URL shown in the terminal.

## Deployment Options

### GitHub Pages

This repo now includes a GitHub Actions workflow at `.github/workflows/deploy-pages.yml`.

1. Open the repository settings.
2. Go to `Pages`.
3. Under `Build and deployment`, set `Source` to `GitHub Actions`.
4. Push to `main` or rerun the workflow manually from the `Actions` tab.
5. GitHub Pages will publish the site once the workflow succeeds.

### Netlify

1. Import the GitHub repository into Netlify.
2. Leave the build command empty.
3. Set the publish directory to the repository root.
4. Deploy.

### Vercel

1. Import the GitHub repository into Vercel.
2. Use the default static-site detection.
3. Leave the build settings empty if prompted.
4. Deploy.

## Lead Form Setup

The quote form supports two modes from `businessDetails` in `content.js`:

- `quoteFormEndpoint`: if set, the form POSTs JSON to that endpoint
- `quoteEmail`: if no endpoint is set, the form falls back to opening the user's email app with the quote details prefilled

This makes the site usable immediately on GitHub Pages, while still allowing a real API endpoint later.

## Final Handoff Checklist

Before client handoff, replace these placeholders in `content.js`:

- `phone`
- `email`
- `address`
- `quoteEmail`
- `quoteFormEndpoint` if you want direct web submissions instead of email fallback

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

## Project Structure

`index.html` homepage entry

`home.js` homepage rendering

`content.js` shared marketing content and product data

`ui.js` shared header, footer, buttons, and reusable UI snippets

`app.css` background and glass styling

`products/` product listing and product detail pages

`request-quote/` quote form page

`contact/` contact page

`assets/` brand assets

## Local Preview

Because the site uses ES modules, serve it through a local web server instead of opening files directly.

If you have Node.js:

```bash
npx serve .
```

Then open the local URL shown in the terminal.

## Deployment Options

### GitHub Pages

1. Open the repository settings.
2. Go to `Pages`.
3. Under `Build and deployment`, choose `Deploy from a branch`.
4. Select the `main` branch and the `/ (root)` folder.
5. Save and wait for GitHub Pages to publish the site.

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

## Notes

- The logo is stored as a reusable SVG in `assets/logo.svg`.
- Contact details are currently placeholders and should be replaced before handoff.
- The quote form is a front-end UI only and is not yet connected to email or CRM submission.

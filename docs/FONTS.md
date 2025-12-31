# Fonts — how to enable Geist in this project

This project references a `Geist` font family in the CSS variables so the site will prefer `Geist` when it's available. Geist is not hosted on Google Fonts. Use one of the options below to provide the font files to the site.

## Option A — Add Geist locally (recommended if you own the font)
1. Place font files in `public/fonts/` (create that folder if it doesn't exist).
   - Example filenames used by the CSS comments in `styles/globals.css`:
     - `public/fonts/Geist-Regular.woff2`
     - `public/fonts/Geist-Regular.woff`
     - `public/fonts/GeistMono-Regular.woff2`

2. In `styles/globals.css` find the commented `@font-face` block at the top and uncomment it. The block looks like:

```css
@font-face {
  font-family: 'Geist';
  src: url('/fonts/Geist-Regular.woff2') format('woff2'),
       url('/fonts/Geist-Regular.woff') format('woff');
  font-weight: 100 900;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Geist Mono';
  src: url('/fonts/GeistMono-Regular.woff2') format('woff2');
  font-weight: 100 900;
  font-style: normal;
  font-display: swap;
}
```

3. Restart the dev server (if running). The site will use `--font-sans: 'Geist', ...` and the browser will load the local Geist files.

## Option B — Use a hosted provider
- Geist is not available on Google Fonts. If you have a commercial license or another CDN that hosts Geist, follow that provider's instructions to import the font and/or add an `@font-face` that points to the hosted files.
- After the provider is configured, `--font-sans` in `app/globals.css` and `styles/globals.css` already prefers `'Geist'` first, so the site will use Geist when available.

## Option C — Use an open alternative
- If you don't have Geist and want a free substitute, consider using `Inter`, `Source Sans Pro`, or `Noto Sans`. To use a Google Fonts hosted alternative (e.g., Inter):
  1. Add the Google Fonts import to `styles/globals.css` or add it in a root layout head.
  2. Example import for Inter (add near the top of `styles/globals.css`):

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
```

Then keep the `--font-sans` stack as-is; the browser will pick the first available font in the list.

## Testing locally
1. Install dependencies and run the dev server:

```powershell
pnpm install
pnpm dev
```

2. Open the site in the browser, open DevTools → Network, filter by `font` to confirm font files are being requested and loaded.
3. Inspect an element and check `Computed` → `font-family` to see which font is active.

## Notes
- I intentionally left a commented `@font-face` block in `styles/globals.css` as a starting point. If you want, provide the Geist font files and I can add them to the repo and enable the @font-face for you.
- If you use the local file approach, make sure your font license allows bundling/serving the files from your site.

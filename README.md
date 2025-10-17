# Contact Us — Tailwind contact form

A small static "Get in touch" contact form built with HTML and Tailwind CSS. It includes floating labels, client-side validation, and SweetAlert2 popups for success/error feedback. The project uses the Tailwind CLI to compile `src/input.css` into `dist/output.css` which `index.html` references.

## Quick overview

- Static, client-side contact form (no backend).
- Built with Tailwind CSS (CLI) and small custom utilities in `src/input.css`.
- Uses SweetAlert2 (via CDN) for user feedback.

## Requirements

- Node.js (16+ recommended)
- npm (or yarn)

## Install

1. Install dependencies:

```bash
npm install
```

2. Build the CSS

Watch mode (convenient during development):

```bash
npm run build:css
```

One-shot build (recommended for a single production build):

```bash
npx tailwindcss -i ./src/input.css -o ./dist/output.css --minify
```

If your installed `tailwindcss` CLI version does not support `--minify`, omit it.

## Serve locally

Open `index.html` directly in a browser, or run a simple static server. Example using `http-server`:

```bash
npx http-server -c-1 .
# then open http://localhost:8080
```

Or add a script to `package.json` (optional):

```json
"scripts": {
	"start": "npx http-server -c-1 .",
	"build:css": "tailwindcss -i ./src/input.css -o ./dist/output.css --watch"
}
```

## Project structure

```
index.html         # Main HTML file with the form and client-side JS
package.json       # npm scripts and devDependencies (Tailwind)
src/input.css      # Tailwind entry CSS (imports Tailwind and adds helpers)
dist/output.css    # Generated CSS (created by the build script)
script.js          # Client-side form handling & SweetAlert2 integration
README.md          # This file
```

## Notes & troubleshooting

- The form in `index.html` uses CDN links for SweetAlert2 and Font Awesome; no backend is provided. Submissions only show feedback dialogs.
- If `dist/output.css` is not created, ensure `node_modules/.bin/tailwindcss` exists after `npm install` and that your Node.js version is supported.
- The included `build:css` script runs Tailwind in watch mode. Use the `npx tailwindcss ... --minify` command for single production builds.

## Accessibility & improvements (suggested)

- Add `aria-label`/`aria-describedby` attributes and proper form validations for screen readers.
- Replace CDN Font Awesome with locally hosted icons if offline support is needed.
- Add a server-side handler (API) if you want to actually send emails from the form.

## License

Add a `LICENSE` file if you want to open-source this project. Currently none is included.

---

If you want, I can also:

- Add a `start` npm script to serve the site locally.
- Add a small `build:prod` script to produce a minified `dist/output.css`.
- Improve accessibility and add form ARIA attributes.

Tell me which of those you'd like next and I will implement it.
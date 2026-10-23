# Jourplan Prototype

A static travel planner built with HTML, CSS, and JavaScript. Runs on GitHub Pages without a backend, API keys, or environment variables.

Jourplan is an experimental prototype app used in the U-Hackathon competition. It was created to demonstrate and test the concept during the event.

**Website:** https://pxtynsobase.github.io/jourplan_prototype/

## Features

- Create day-by-day itineraries from bundled destination recommendations.
- Browse attractions, restaurants, and hotels.
- View locations on OpenStreetMap with Leaflet.
- Store trips, bookings, favorites, cart items, and history in browser storage.
- Read prices with browser-side Tesseract OCR or enter amounts manually.
- Hear prices using browser speech synthesis.
- Explore conversion using illustrative sample exchange rates.

## Run locally

Install Node.js 22 or newer, then run `npm start` and open http://localhost:3000.
No dependency installation is required. Camera access requires localhost or HTTPS and your browser permission.

## Build and test

Run `npm test` and `npm run build`. The build copies the website into `dist/` with relative asset paths for GitHub Pages.

## Deploy

In repository Settings → Pages, select GitHub Actions as the source. The workflow in `.github/workflows/pages.yml` tests, builds, and deploys on pushes to `main`, or can be started manually from Actions.

## Prototype limitations

Itineraries use curated data rather than AI or live search. Longer trips may repeat recommendations. Hotel prices, travel times, and currency rates are illustrative, not live quotes. Hotel selections do not make real reservations. Data stays in the current browser; clearing browser storage removes it.

No application backend endpoints or service API keys are used. Internet access is still required for map tiles, photographs, fonts, and CDN-hosted Leaflet and Tesseract resources. OCR runs in the browser without uploading photos to a cloud recognition service. Google Maps buttons open external navigation links.

## Structure

- `web/`: static website source.
- `scripts/`: dependency-free local server and build.
- `tests/`: planning and API removal checks.
- `.github/workflows/pages.yml`: deployment workflow.
- `web/u_topia/`: retained SwiftUI prototype, excluded from the website build. Its currency service also uses sample rates.

The former unused Next.js frontend and server endpoints were removed when migrating the existing static interface to GitHub Pages.

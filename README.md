# Jourplan — Travel Planning Prototype

A browser-based travel planning prototype that brings itineraries, destination discovery, and travel spending tools into one interface.

**Context:** Experimental app used in the **U-Hackathon** competition to demonstrate and test the concept.

[View live demo](https://pxtynsobase.github.io/jourplan_prototype/) · [Explore the source](web/)

## Project overview

Jourplan explores how travelers can plan a trip, discover places, and manage everyday purchases within a single browser experience. The current implementation uses curated destination data and browser-based processing, allowing the prototype to run on GitHub Pages without application backend services or API keys.

| Area | Implementation |
| --- | --- |
| Interface | HTML, CSS, JavaScript |
| Maps | Leaflet and OpenStreetMap |
| Price recognition | Browser-side Tesseract OCR |
| Persistence | Browser local storage |
| Hosting | GitHub Pages with GitHub Actions |
| Validation | Automated checks using the Node.js test runner |

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

The former unused Next.js frontend and server endpoints were removed when migrating the existing static interface to GitHub Pages.


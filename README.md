# Mise 食序 Website

Static product website for Mise / 食序. Public feedback goes to this repository's Issues;
the App source repository is private, so do not use its Issues URL as a public contact link.

## Local preview

```bash
python -m http.server 8090
```

Open `http://localhost:8090`. Use a different port if it is already occupied.

## Product positioning

Mise 0.2.0 includes foreground multi-step kitchen agent tasks, clarification, reviewed writes,
inspectable action receipts and conflict-aware undo for supported changes. Tasks can pause/resume;
do not promise cloud background execution, accounts or kitchen-data sync. Undo does not refund AI credits.
The website's three interactive examples still run locally with sample data and no API calls.
Do not describe the website demo as a live model response or a live App screen. Core kitchen data is local, but AI requests send
relevant inputs to the backend/model provider; the backend persists invite, usage and credit records
and caches generated responses for about 24 hours. Keep privacy copy consistent with that behavior.

`script.js` contains English translations and deterministic scenarios. Chinese defaults live in HTML
so the page remains readable without JavaScript. No external fonts, icon libraries or tracking scripts
are needed. The small illustrations are inline SVG/CSS.

## APK publication

`release.json` is the shared source for both download buttons and release metadata. It currently
points to a verified public APK, never to an EAS build still in progress. Publish and verify the new
GitHub Release artifact first, then update:

- `version`, integer `build`, integer `sizeBytes`, `sha256`.
- `apkUrl`, `releaseUrl` under this repository's GitHub releases.
- `releaseNotes.zh` and `releaseNotes.en`.

Update the two static `data-apk-link` href values and the static release link/metadata in `index.html`
to the same verified release for no-JavaScript/network-failure fallback. Preserve all other page copy
and design. The noscript release link uses GitHub's `/releases/latest` URL. The `mise-apk` automation
must follow this process and must not replace the redesigned HTML/JS with its older prepared edits.

## Verification

Check Chinese and English layouts at 320, 390, 768, 1024 and 1440 px. Exercise each scenario, action
preview/confirmation, keyboard-accessible FAQ, language persistence, both download links, disabled
storage, release-manifest failure and no-JavaScript fallback. Keep browser evidence under ignored
`output/playwright/`. There is no build step; `node --check script.js` checks JavaScript syntax.

## Deployment

The site is deployed from the `main` branch root through GitHub Pages.

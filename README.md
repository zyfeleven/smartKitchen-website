# Mise 食序 Website

Static product website for Mise / 食序. Public feedback goes to this repository's Issues;
the App source repository is private, so do not use its Issues URL as a public contact link.

## Local preview

`privacy.html` and `support.html` are bilingual, script-free pages linked from the App and footer.
Their approved contact address is `zyfeleven@gmail.com`. `legal.css` owns their responsive styling.
Keep policy claims aligned with deployed behavior; Android build 14 includes the versioned AI consent UI.
Do not claim accounts, purchases or cloud backup exist until those features ship.

```bash
python -m http.server 8090
```

Open `http://localhost:8090`. Use a different port if it is already occupied.

## Product positioning

Mise 0.2.4 adds editable grocery, fridge and fitness workflows, durable task recovery, clearer receipts and optional diagnostic feedback. Soft UI, local memory, photo input, voice dictation and nutrition remain available.
It includes foreground multi-step kitchen agent tasks, clarification, reviewed writes,
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
to the same verified release for no-JavaScript/network-failure fallback. Sync only the English
`fallbackReleaseNotes.en` string in `script.js` as well. Preserve all other page copy
and design. The noscript release link uses GitHub's `/releases/latest` URL. The `mise-apk` automation
must follow this process and must not replace the redesigned HTML/JS with its older prepared edits.

## Verification

Check Chinese and English layouts at 320, 390, 768, 1024 and 1440 px. Exercise each scenario, action
preview/confirmation, keyboard-accessible FAQ, language persistence, both download links, disabled
storage, release-manifest failure and no-JavaScript fallback. Keep browser evidence under ignored
`output/playwright/`. There is no build step; `node --check script.js` checks JavaScript syntax.

## Deployment

The site is deployed from the `main` branch root through GitHub Pages.

### Hong Kong HTTPS mirror

The mirror uses `https://8.217.241.184/mise-site/`; the backend continues to use `/mise/`.
Legacy `/site/` URLs permanently redirect to `/mise-site/`, preserving subpaths and queries.
The mirror serves its APK at `/mise-site/downloads/`, so downloading from this entry does not
require a client connection to GitHub. GitHub Pages and GitHub Release remain available.

`deploy/hongkong/sync_site.py` reads public `main` at a pinned commit, copies only approved
HTML/CSS/JS/manifest and image paths, and checks APK size and SHA-256 before publishing.
It rewrites only the mirror's generated download URLs and social metadata; repository
`release.json` still points to GitHub. Both static download links work without JavaScript.
An invalid manifest or failed download leaves the previously published website active.
Old APK URLs remain available. The public mirror includes no App/backend source, secrets,
invite workbooks or private release artifacts.

The root-owned sync script is installed at `/usr/local/lib/mise-site/sync_site.py`.
The `mise-site-sync` systemd service runs as `www-data`, with writes limited to
`/var/www/mise-site`; its timer checks for updates every ten minutes.
It never executes scripts from the downloaded repository. Changes to the sync program
itself require a separate reviewed installation; a regular website push cannot update it.

Include `deploy/hongkong/nginx-site.conf` in the existing HTTPS server block after saving
the current Nginx configuration. Run `nginx -t` before reloading; do not replace backend
locations or TLS/ACME settings. Install the service/timer only after a successful first sync.
Operational checks: `systemctl status mise-site-sync.timer`,
`journalctl -u mise-site-sync.service`, and `curl https://8.217.241.184/mise-site/release.json`.
To sync immediately: `systemctl start mise-site-sync.service`.
To roll back, pause the timer and atomically point `/var/www/mise-site/current` at a retained
directory under `releases/`; APKs remain in `downloads/`. Keep disk usage under review.

Run deployment validation with `python -m unittest discover -s deploy/hongkong -p 'test_*.py'`.
After each release, verify both Pages and the mirror, including the mirror APK SHA-256,
two download links, languages, fallback behavior and backend health.

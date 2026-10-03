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

UI/copy refinement (2026-10-03): lead with everyday kitchen outcomes, use the App's warm
palette and softer secondary actions, and describe current local backup behavior accurately.
The hero, feature copy, FAQ and page metadata stay bilingual. Release manifest and APK
URLs remain on 0.2.5 build 20; website presentation work is not a new App release.
Local browser checks cover both languages at 320/390/768/1024/1440 widths, both download
links, no-JavaScript delivery and manifest-failure fallback. Demo content remains illustrative.

The approved brand is the terracotta Table Talk bowl (`#BC542B`). Header, footer and demo avatar
use `assets/mise-symbol.svg`; favicon uses `assets/mise-mark.svg`. Both derive from the App's
`assets/brand/mise-symbol.svg` through `scripts/generate-brand.cjs`, which also generates the
social preview. Preserve the same outline across App and website; do not restore the former
star as a brand mark. Remaining stars are interface illustrations, not the logo.

Mise 0.2.5 build 20 adds weekly menus in Recipes, reviewed edits to existing kitchen data, optional local file backup/restore and a local expiry brief. Manual tools use no AI credits. Backups are unencrypted and manually transferred, with no account or cloud synchronization.
The previous build 19 adopts the Table Talk brand and keeps the header visible while typing. Voice input requires a compatible device speech service; unavailable services produce an actionable notice. It includes editable grocery, fridge and fitness workflows, durable task recovery, clearer receipts and optional diagnostic feedback. Soft UI, local memory, photo input, voice dictation and nutrition remain available.
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

### ChatGPT Sites

The same public website is available at https://mise-agent.rationalzz.chatgpt.site.
Its managed checkout is separate from this GitHub repository; updates must be imported and
published through Sites. Preserve its project identity and Sites URL metadata. APK downloads
currently use the verified GitHub Release artifact on both websites.

### Retired Hong Kong mirror

The website and APK mirror was retired on 2026-10-01 at the owner's request.
`/site/` and `/mise-site/` return HTTP 410; the sync timer is disabled.
The Hong Kong server continues to host only the existing `/mise/` backend.
Do not re-enable the mirror or expect it to synchronize with a website release.
Files under `deploy/hongkong/` are historical deployment references, not an active target.

Build 20 APK: 78,932,812 bytes; SHA-256
`9bc05afc8fb21c44943aa57d823245f56ba607772b8eebd22633ca4d46e6f91d`.
Artifact identity, signing compatibility and HTTPS checks passed. App unit/RN and menu regressions and bilingual browser flows passed. Build 20 passed four MuMu Android 12 Maestro regression flows and a weekly-menu/native-backup smoke flow. The native file picker opens/cancels and the share sheet launches; MuMu has no compatible share target, so delivery of a backup file was not verified. No physical iPhone/Huawei, live transcription or paid-AI validation is claimed.

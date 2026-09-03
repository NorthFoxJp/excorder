# EXCORDER website assets

## App Store URL

Set `APP_STORE_URL` near the top of `landing.js`. Leave it as an empty string before release; the buttons remain visible but disabled and show a short “coming soon” note.

## App Store badges

The localized white alternative badges in `assets/badges/` are unmodified SVG artwork downloaded from Apple's App Store Marketing Tools. Follow Apple's App Store marketing guidelines when replacing or resizing them; the on-screen height must remain at least 40 px.

## Screenshots

Place replacement PNG or JPEG files in `assets/screenshots/` and update the matching `src` values in `index.html`. The current page uses `overview.png`, `imaging-1.png`, `imaging-2.png`, `navigation-1.png`, `navigation-2.png`, and `audio.png`. Screenshots are displayed as supplied; CSS only styles their layout and surrounding frame.

## Open Graph / X image

Replace `assets/og/excorder-og.png` with a 1200 × 630 px PNG. Keep the same filename to avoid changing metadata in `index.html`.

## Favicon

Replace `assets/icons/excorder-icon.png` if the app icon changes.

## English and Japanese text

Marketing copy is in `index.html`. English elements use `data-lang="en"`; Japanese elements use `data-lang="ja"`. Keep paired content equivalent. Language switching and the App Store setting live in `landing.js`.

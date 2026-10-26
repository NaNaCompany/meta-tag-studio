# Meta Tag Studio

Buildless, local-only generator for title, description, canonical, Open Graph and Twitter card tags. Run a static HTTP server with `dist/` as the web root. No dependencies, analytics, external images or network requests from the application.

Routes: Korean `/`, English `/en/`, Spanish `/es/`, Simplified Chinese `/zh/`, Japanese `/ja/`, German `/de/`. All six routes have localized controls, validation, preview descriptions and help. Changing routes intentionally reloads the localized example; input is not persisted.

The preview is illustrative. It does not crawl URLs, fetch images, verify indexing, or promise an exact search/social appearance. Generated title and attribute values are escaped. Only HTTP(S) absolute URLs without credentials are accepted. Empty image URLs are permitted and produce a summary card; image previews remain placeholders to avoid remote requests.

## Verification

Commands run through the workspace's explicit RTK executable and bundled Node runtime:

```text
node --check dist/app.js
node --check dist/core.js
node --test test.mjs
```

Actual result: both syntax checks passed; 3 tests passed, 0 failed. Fixtures cover HTML/script injection, quote/ampersand escaping, canonical query serialization, optional images/card type, unsafe schemes, credentials, relative URLs, empty fields and limits. Six generated HTML route files were verified on disk. Browser layout and clipboard permission behavior have not been tested.

## Sources and rights

Original UI, CSS, logic and sample text. Open Graph identifiers are based on the primary protocol reference: https://ogp.me/ . No third-party prose or visual assets are copied.

## Public GitHub Pages release

Launch: https://nanalab.kr/meta-tag-studio/

Korean is at the root. English, Spanish, Chinese, Japanese and German use `/en/`, `/es/`, `/zh/`, `/ja/`, `/de/`.
GitHub Pages serves `main` → `/docs` using the branch build. No project CNAME is used.

Build: `node scripts/build-public.mjs`. The `dist/` snapshot and its original generators/tests are preserved as the application source. The public build adds metadata, six-locale sitemaps, original JPEG cards, More Apps styling and the existing NaNa publisher integrations. It does not upload selected user files.

Publisher integrations: AdSense, Google Tag Manager, Google Analytics and Cloudflare Web Analytics, with the same publisher settings as the NaNa Lab homepage. These scripts can make network requests independently of local file processing.

Original JPEG cards are rendered from original text and geometry using an installed system font; no font files are redistributed. Existing source references and third-party notices remain applicable.

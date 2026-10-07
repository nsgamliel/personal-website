# personal-website

Source for [natangamliel.com](https://natangamliel.com), a static one-page site served by Firebase Hosting. There is no build step: the files in `public/` are the site.

## Layout

| Path | What it is |
| --- | --- |
| `public/index.html`, `public/styles.css` | The current site (v2) |
| `public/404.html` | Shown for any address that does not exist |
| `public/assets/` | Resume PDF, favicon and link preview image |
| `public/v1/` | The previous terminal-style site, kept at `/v1/` |
| `firebase.json` | Hosting settings: the old resume link redirect and cache headers |
| `.firebaserc` | Which Firebase project the site deploys to |

## Versions

Each release of the site is tagged in git (`v1`, `v2`). When a new design replaces the current one, the old one moves into its own folder under `public/`.

## Run locally

```bash
firebase emulators:start --only hosting
```

This serves the site at `http://localhost:5000` and applies the rules in `firebase.json`.

## Deploy

```bash
firebase deploy --only hosting
```

Deploys are run by hand from `main` after a pull request is merged.

The v2 design was built with AI assistance.
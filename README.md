# Playwright E2E Scaffold

This folder contains a minimal Playwright Test scaffold with a tiny static site for local E2E testing.

Quick overview

- `server.js` — simple Node static server that serves files from `public/` on port 3000.
- `tests/` — example Playwright test(s).
- `playwright.config.ts` — Playwright Test configuration (projects for Chromium/Firefox/WebKit, HTML reporter, and `webServer` to start `server.js`).
- `setup-playwright.sh` — convenience script to install @playwright/test and the Playwright browsers.

Getting started

1. (Optional) Remove the current directory contents and re-clone or back up anything you need. This scaffold replaces the existing folder contents.

2. Run the setup script (this will install dev dependencies and browsers):

```bash
cd /home/edslawn/playwright-setup
bash setup-playwright.sh
```

3. Run tests:

- Run headless tests:

```bash
npm test
```

- Run headed tests (shows the browser):

```bash
npm run test:headed
```

- Open the Playwright Test UI (interactive):

```bash
npm run test:ui
```

Notes & tips

- The Playwright `webServer` config runs `node server.js` automatically before tests and stops it afterwards.
- The HTML report is generated under `playwright-report/` after tests run. To open it automatically, change the `reporter` option in `playwright.config.ts`.
- If you prefer not to run `setup-playwright.sh`, you can install manually:

```bash
npm init -y
npm i -D @playwright/test
npx playwright install
```

CI (GitHub Actions)

This repository includes a GitHub Actions workflow at `.github/workflows/playwright.yml` that will run Playwright tests on push and pull requests to `main`/`master`. The workflow:

- checks out the code
- installs Node dependencies (`npm ci`)
- installs Playwright browsers (`npx playwright install --with-deps`)
- runs `npm test`
- uploads the generated `playwright-report` as a workflow artifact

If you want me to customize the workflow (matrix browsers, caching improvements, or run only on specific paths), tell me the desired rules and I will update it.

GitHub Pages deployment

- `.github/workflows/deploy.yml` uploads the static site in `public/` to GitHub Pages once the smoke tests pass.
- Enable it by pushing the repo to GitHub and visiting **Settings → Pages**; choose "GitHub Actions" as the source.
- Every push to `main` or `master` (or a manual "Run workflow") will run the tests, package `public/`, and deploy. The job output shows the live URL under `page_url`.
- When you want a custom domain, drop a `CNAME` file into `public/` before pushing and configure DNS accordingly.

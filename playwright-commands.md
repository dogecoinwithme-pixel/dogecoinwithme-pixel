# Playwright commands

A quick reference of useful Playwright CLI commands and config snippets for local development and CI.

## Local test runs

- Run the full test suite (headless):

```bash
npm test
# or
npx playwright test
```

- Run tests in headed (showing the browser):

```bash
npm run test:headed
```

- Run the interactive Test UI (standalone GUI):

```bash
npm run test:ui
# or
npx playwright test --ui
```

- Run a single test file:

```bash
npx playwright test tests/job.spec.ts
```

- Run a single test by name (regex):

```bash
npx playwright test -g "homepage has correct heading"
```

- Run only specific projects (e.g., Chromium and Firefox):

```bash
npx playwright test --project=Chromium --project=Firefox
```

## Reports and traces

- Open the last HTML report served locally (starts a small server on port 9323 by default):

```bash
npx playwright show-report
```

- Serve report on a different port:

```bash
npx playwright show-report --port=9333
```

- Open a trace file in Trace Viewer:

```bash
npx playwright show-trace trace.zip
```

## Browser install and OS deps

- Install Playwright browsers (download browser builds):

```bash
npx playwright install
```

- Install browsers + required OS dependencies (useful on CI or to enable WebKit locally):

```bash
npx playwright install --with-deps
# or, locally to install only OS deps (may require sudo):

npx playwright install-deps
```

## Diagnostics & server handling

- If Playwright complains that the webServer port is already in use, either stop the running server or tell Playwright to reuse it by setting `reuseExistingServer: true` in `playwright.config.ts`:

```ts
webServer: {
  command: 'node server.js',
  port: 3000,
  reuseExistingServer: true
}
```

- Find and kill a process listening on port 3000 (zsh/bash):

```bash
# show the PID
ss -ltnp | grep ':3000' || lsof -iTCP:3000 -sTCP:LISTEN -n -P
# kill the PID (replace <PID>)
kill <PID>
```

## Helpful tips

- Use `page.pause()` or `test.pause()` inside a test to launch the Playwright Inspector for interactive debugging.
- Configure tracing and video in `playwright.config.ts` to capture artifacts for failed tests:

```ts
use: {
  trace: 'on-first-retry',
  video: 'on-first-retry'
}
```
- Prefer accessibility/role selectors for stability:

```ts
await page.getByRole('heading', { name: 'Playwright demo' }).click();
```

## CI notes (GitHub Actions)

- Example workflow steps (we include a full example in `.github/workflows/playwright.yml`):
  - `npm ci`
  - `npx playwright install --with-deps`
  - `npm test`
  - upload `playwright-report` artifacts for failure inspection

---

Keep this file close at hand for quick copy/paste into your terminal while developing or debugging tests.

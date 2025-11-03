#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$ROOT_DIR"

echo "Initializing npm project (if needed)..."
if [ ! -f package.json ]; then
  npm init -y
fi

echo "Installing dev dependencies (@playwright/test)..."
npm install --save-dev @playwright/test

echo "Installing Playwright browsers (this may take a minute)..."
npx playwright install

cat <<'EOF'

Playwright setup is complete.
Commands you can run next:
  npm run install:browsers   # re-run Playwright browser install
  npm test                   # run tests (headless by default)
  npm run test:headed        # run tests headed (show UI)
  npm run test:ui            # open Playwright Test UI

EOF

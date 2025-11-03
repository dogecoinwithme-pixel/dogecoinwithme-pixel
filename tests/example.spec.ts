import { test, expect } from '@playwright/test';

test('static site shows expected content', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await expect(page).toHaveTitle(/Playwright Demo|Example/);
  await expect(page.locator('h1')).toHaveText('Playwright demo');
});

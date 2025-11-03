import { test, expect } from '@playwright/test';

test.describe('Job: smoke checks', () => {
  test('homepage has correct heading and paragraph', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await expect(page).toHaveTitle(/Playwright Demo/);
    await expect(page.locator('h1')).toHaveText('Playwright demo');
    await expect(page.locator('p')).toHaveText('This is a tiny static site used by the Playwright example test.');
  });
});

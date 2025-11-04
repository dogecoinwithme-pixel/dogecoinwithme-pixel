import { test, expect } from '@playwright/test';

test('EdTech homepage highlights entry-level services', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await expect(page).toHaveTitle('EdTech | Friendly Computer Repair');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('EdTech');
  await expect(page.getByText('Entry-level computer repair', { exact: false })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Call 615-602-7642' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Send request' })).toBeVisible();
  await expect(page.getByLabel('Attach screenshots (optional)')).toBeVisible();
});

import { test, expect } from '@playwright/test';

test.describe('Job: smoke checks', () => {
  test('homepage showcases EdTech offerings', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await expect(page).toHaveTitle('EdTech | Friendly Computer Repair');
    await expect(page.getByRole('heading', { level: 1 })).toHaveText('EdTech');
    await expect(page.getByText('Friendly, jargon-free help', { exact: false })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Email Eddie' })).toBeVisible();
    await expect(page.getByText('Greater Nashville', { exact: false })).toBeVisible();
    await expect(page.getByRole('form', { name: 'Send a repair request' })).toBeVisible();
  });
});

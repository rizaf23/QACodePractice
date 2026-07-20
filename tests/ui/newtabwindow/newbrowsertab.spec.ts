import { test, expect } from '@playwright/test';

test('new browser tab validation', async ({ page }) => {
  // Recording...
  await page.goto('https://qa-practice.razvanvancea.ro/');
  await page.getByRole('link', { name: 'New Tab / Window' }).click();
  await page.getByRole('link', { name: 'New Browser Tab' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Press me - New Tab' }).click();
  const page1 = await page1Promise;
  await expect(page1).toHaveURL(/web-table.html/);
  await expect(page1.locator('h2')).toContainText('Table Example');
});
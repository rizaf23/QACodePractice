import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Recording...
  await page.goto('https://qa-practice.razvanvancea.ro/');
  await page.getByRole('link', { name: 'New Tab / Window' }).click();
  await page.getByRole('link', { name: 'New Browser Window' }).click();
  const page4Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'Press me - New Window' }).click();
  const page4 = await page4Promise;
  await expect(page4).toHaveURL(/web-table.html/);
  await expect(page4.locator('h2')).toContainText('Table Example');
});
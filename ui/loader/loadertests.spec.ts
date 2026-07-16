import { test, expect } from '@playwright/test';

test('loader validation', async ({ page }) => {
  await page.goto('https://qa-practice.razvanvancea.ro/');
  await page.getByRole('link', { name: 'Loader' }).click();
  await expect(page.locator('h2')).toContainText('Tada!');
  await page.getByText('Some text in my newly loaded').click();
  await expect(page.getByRole('paragraph')).toContainText('Some text in my newly loaded page..');
});
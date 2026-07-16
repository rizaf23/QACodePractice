import { test, expect } from '@playwright/test';

test('phone number label is incorrect', async ({ page }) => {
  await page.goto('https://qa-practice.razvanvancea.ro/');
  await page.getByRole('link', { name: 'Spot the BUGS CHALLENGE' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill('FN');
  await expect(page.getByText('Phone number*')).toBeVisible();
});
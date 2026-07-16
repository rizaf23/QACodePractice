import { test, expect } from '@playwright/test';

test('logout test', async ({ page }) => {
  await page.goto('https://qa-practice.razvanvancea.ro/');
  await page.getByRole('link', { name: 'Ecommerce - Login, Add to' }).click();
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('admin@admin.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('link', { name: 'Log Out' }).click();
  await expect (page.getByText('Login - Shop')).toBeVisible();
});
test.afterEach(async ({ page }) => {
  await page.close();
});
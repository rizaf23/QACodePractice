import { test, expect } from '@playwright/test';

test('phone number input accepts only numeric values', async ({ page }) => {
  await page.goto('https://qa-practice.razvanvancea.ro/');
  await page.getByRole('link', { name: 'Spot the BUGS CHALLENGE' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill('FN');
  await page.getByRole('textbox', { name: 'Enter phone number' }).click();
  await page.getByRole('textbox', { name: 'Enter phone number' }).fill('abcde67891');
  await page.locator('#countries_dropdown_menu').selectOption('Bahrain');
  await page.getByRole('textbox', { name: 'Enter email' }).click();
  await page.getByRole('textbox', { name: 'Enter email' }).fill('test@test.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('123456789');
  await page.getByRole('button', { name: 'Register' }).click();
  await expect(page.getByText('Phone number must contain only numeric values')).toBeVisible();
});
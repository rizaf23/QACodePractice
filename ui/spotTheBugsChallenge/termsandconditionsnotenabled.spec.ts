import { test, expect } from '@playwright/test';

test('terms and conditions is not enabled', async ({ page }) => {
  await page.goto('https://qa-practice.razvanvancea.ro/');
  await page.getByRole('link', { name: 'Spot the BUGS CHALLENGE' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill('FN');
   await page.getByRole('textbox', { name: 'Last Name* Phone nunber*' }).click();
  await page.getByRole('textbox', { name: 'Last Name* Phone nunber*' }).fill('testLN');
  await page.getByRole('textbox', { name: 'Enter phone number' }).click();
  await page.getByRole('textbox', { name: 'Enter phone number' }).fill('12345678910');
  await page.locator('#countries_dropdown_menu').selectOption('Bahrain');
  await page.getByRole('textbox', { name: 'Enter email' }).click();
  await page.getByRole('textbox', { name: 'Enter email' }).fill('test@test.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('123456789');
  await expect(page.getByRole('checkbox', { name: 'I agree with the Terms and Conditions' })).toBeEnabled();
 
});
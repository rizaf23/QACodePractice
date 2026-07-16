import { test, expect } from '@playwright/test';

test('register form field validation test - happy flow', async ({ page }) => {
  await page.goto('https://qa-practice.razvanvancea.ro/');
  await page.getByRole('link', { name: 'Forms' }).click();
  await page.getByRole('link', { name: 'Register', exact: true }).click();
  await page.getByRole('textbox', { name: 'Enter email' }).click();
  await page.getByRole('textbox', { name: 'Enter email' }).fill('test.test@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('test123');
  await page.getByRole('button', { name: 'Register' }).click();
  await expect(page.getByText('The account has been successfully created!')).toBeVisible();
});
test.afterEach(async ({ page }) => {
  await page.close();
});
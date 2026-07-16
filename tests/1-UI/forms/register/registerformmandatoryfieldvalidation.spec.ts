import { test, expect } from '@playwright/test';

test('register form validation when mandatory fields empty', async ({ page }) => {
  await page.goto('https://qa-practice.razvanvancea.ro/');
  await page.getByRole('link', { name: 'Forms' }).click();
  await page.getByRole('link', { name: 'Register', exact: true }).click();
  await page.getByRole('textbox', { name: 'Enter email' }).fill('');
  await page.getByRole('textbox', { name: 'Password' }).fill('');
  const registerBtn = page.getByRole('button', { name: 'Register' });
  await registerBtn.click();
  await expect(registerBtn).toBeEnabled();
  await expect(page.getByText('The account has been successfully created!')).toHaveCount(0);
});

test.afterEach(async ({ page }) => {
  await page.close();
});
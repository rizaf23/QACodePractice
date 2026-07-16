import { test, expect } from '../../../fixtures';

test('unsuccessful login invalid user', async ({ page }) => {
  // Recording...
  await page.goto('https://qa-practice.razvanvancea.ro');
  await page.getByRole('link', { name: 'Forms' }).click();
   await page.getByRole('link', { name: 'Login', exact: true }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('admin1@admin.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByText('Bad credentials! Please try')).toBeVisible();
});

test.afterEach(async ({ page }) => {
  await page.close();
});
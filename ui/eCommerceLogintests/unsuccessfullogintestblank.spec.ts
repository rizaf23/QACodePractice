import { test, expect } from '../../fixtures';

test('unsuccessful login blank credentials', async ({ page }) => {
  // Recording...
  await page.goto('https://qa-practice.razvanvancea.ro');
  await page.getByRole('link', { name: 'Ecommerce - Login, Add to' }).click();
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByText('Bad credentials! Please try')).toBeVisible();
});
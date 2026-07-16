import { test, expect } from '../../fixtures';

test('successful login', async ({ page }) => {
  // Recording...
  await page.goto('https://qa-practice.razvanvancea.ro');
  await page.getByRole('link', { name: 'Ecommerce - Login, Add to' }).click();
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('admin@admin.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Submit' }).click(); 
  await expect(page.getByText('SHOPPING CART')).toBeVisible();
});
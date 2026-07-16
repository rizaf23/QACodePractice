import { test, expect } from '../../fixtures';

test('remove item from cart', async ({ page }) => {
  // Recording...
  await page.goto('https://qa-practice.razvanvancea.ro/');
  await page.getByRole('link', { name: 'Ecommerce - Login, Add to' }).click();
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('admin@admin.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Submit' }).click();
  
  // Add 2 items to cart
  await page.getByRole('button', { name: 'ADD TO CART' }).first().click();
  await page.getByRole('button', { name: 'ADD TO CART' }).nth(1).click();
  
  // Verify 2 items appear in cart
  await expect(page.getByRole('button', { name: 'REMOVE' })).toHaveCount(2);
  
  // Remove one item
  await page.getByRole('button', { name: 'REMOVE' }).first().click();
  
  // Verify only 1 item remains
  await expect(page.getByRole('button', { name: 'REMOVE' })).toHaveCount(1);
});

test.afterEach(async ({ page }) => {
  await page.close();
});
import { test, expect } from '@playwright/test';

test('shipping details field validation test', async ({ page }) => {
  await page.goto('https://qa-practice.razvanvancea.ro/');
  await page.getByRole('link', { name: 'Ecommerce - Login, Add to' }).click();
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('admin@admin.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'ADD TO CART' }).first().click();
  await page.getByRole('button', { name: 'ADD TO CART' }).nth(4).click();
  await page.getByRole('button', { name: 'PROCEED TO CHECKOUT' }).click();
  await page.getByRole('button', { name: 'Submit Order' }).click();
  await expect(page.locator('div#shipping-address')).toBeVisible();
  await page.getByRole('textbox', { name: 'Enter phone number' }).click();
  await page.getByRole('textbox', { name: 'Enter phone number' }).fill('0123456');
  await page.getByRole('button', { name: 'Submit Order' }).click();
  await expect(page.locator('div#shipping-address')).toBeVisible();
  await page.getByRole('textbox', { name: 'Little Streets' }).click();
  await page.getByRole('textbox', { name: 'Little Streets' }).fill('4567 street');
  await page.getByRole('button', { name: 'Submit Order' }).click();
  await expect(page.locator('div#shipping-address')).toBeVisible();
  await page.getByRole('textbox', { name: 'London' }).click();
  await page.getByRole('textbox', { name: 'London' }).fill('london');
  await page.getByRole('button', { name: 'Submit Order' }).click();
  await expect(page.locator('div#shipping-address')).toBeVisible();
  await page.locator('#countries_dropdown_menu').selectOption('Bahrain');
  await page.getByRole('button', { name: 'Submit Order' }).click();
  
});

test.afterEach(async ({ page }) => {
  await page.close();
});
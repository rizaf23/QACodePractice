import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://qa-practice.razvanvancea.ro/');
  await page.getByRole('link', { name: 'Ecommerce - Login, Add to' }).click();
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('admin@admin.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'ADD TO CART' }).first().click();
  const priceElement = await page.getByText('$').first().textContent();
  const expectedAmount = priceElement?.match(/\$(\d+\.\d{2})/)?.[0] ?? '$0.00';
  await page.getByText('$').first().click();
  await page.getByText('Total $').click();
  await page.getByText('$').nth(1).click();

  await page.getByRole('button', { name: 'PROCEED TO CHECKOUT' }).click();
  await page.getByRole('textbox', { name: 'Enter phone number' }).click();
  await page.getByRole('textbox', { name: 'Enter phone number' }).fill('1234567891');
  await page.getByRole('textbox', { name: 'Little Streets' }).click();
  const street = '123456 street';
  await page.getByRole('textbox', { name: 'Little Streets' }).fill(street);
  await page.getByRole('textbox', { name: 'London' }).click();
  const city = 'wellington';
  await page.getByRole('textbox', { name: 'London' }).fill(city);
  const country = 'New Zealand';
  await page.locator('#countries_dropdown_menu').selectOption(country);
  await page.getByRole('button', { name: 'Submit Order' }).click();

  const message = await page.locator('#message').textContent();
  expect(message).toContain(expectedAmount ?? '#prooood');
  expect(message).toContain(`${street}, ${city} - ${country}.`);
});

test.afterEach(async ({ page }) => {
  await page.close();
});
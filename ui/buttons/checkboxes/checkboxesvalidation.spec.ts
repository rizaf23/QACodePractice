import { test, expect } from '@playwright/test';

test('checkboxes validation', async ({ page }) => {
  // Recording...
  await page.goto('https://qa-practice.razvanvancea.ro/');
  await page.getByRole('link', { name: 'Buttons' }).click();
  await page.getByRole('link', { name: 'Checkboxes' }).click();
  await page.locator('#checkbox1').check();
  await page.locator('#checkbox2').check();
  await page.locator('#checkbox3').check();
  await page.getByRole('button', { name: 'Reset' }).click();
  await expect(page.locator('#checkbox1')).not.toBeChecked();
  await expect(page.locator('#checkbox2')).not.toBeChecked();
  await expect(page.locator('#checkbox3')).not.toBeChecked();
  await page.locator('#checkbox1').check();
  await page.getByRole('button', { name: 'Reset' }).click();
  await expect(page.locator('#checkbox1')).not.toBeChecked();
  await page.locator('#checkbox2').check();
  await page.getByRole('button', { name: 'Reset' }).click();
  await expect(page.locator('#checkbox2')).not.toBeChecked();
  await page.locator('#checkbox3').check();
  await page.getByRole('button', { name: 'Reset' }).click();
  await expect(page.locator('#checkbox3')).not.toBeChecked();
 
});
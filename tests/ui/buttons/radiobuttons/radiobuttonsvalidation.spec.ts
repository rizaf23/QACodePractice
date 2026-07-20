import { test, expect } from '@playwright/test';

test('radio buttons validation', async ({ page }) => {
  // Recording...
  await page.goto('https://qa-practice.razvanvancea.ro/');
  await page.getByRole('link', { name: 'Buttons' }).click();
  await page.getByRole('link', { name: 'Radio buttons' }).click();
  await page.getByRole('radio', { name: 'Radio button 1' }).check();
  expect(await page.getByRole('radio', { name: 'Radio button 1' }).isChecked()).toBeTruthy();
  expect(await page.getByRole('radio', { name: 'Radio button 2' }).isChecked()).toBeFalsy();
  expect(await page.getByRole('radio', { name: 'Radio button 3' }).isChecked()).toBeFalsy();
  expect(await page.getByRole('radio', { name: 'Radio button 4 - disabled' }).isDisabled()).toBeTruthy();
});
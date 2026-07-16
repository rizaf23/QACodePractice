import { test, expect } from '@playwright/test';

  test('date picker validation', async ({ page }) => {
  await page.goto('https://qa-practice.razvanvancea.ro/');
  await page.getByRole('link', { name: 'Date Pickers' }).click();
  await page.getByRole('textbox', { name: 'Pick a date' }).click();
  await page.getByRole('cell', { name: '10' }).click();
  await page.getByText('Home Contact Range Date').click();
  await page.getByRole('cell', { name: '10' }).click();
  await page.getByText('Home Contact Range Date').click();
  await page.locator('#range-date-calendar').click();
  await page.getByRole('cell', { name: '13' }).nth(1).click();
  await page.locator('#range-date-calendar').click();
  await page.locator('#range-date-calendar').fill('');
  await page.getByRole('cell', { name: '13' }).nth(1).click();
  await page.getByRole('cell', { name: '13' }).nth(1).click();
  await page.getByRole('cell', { name: '20' }).first().click();
  await page.getByRole('cell', { name: '13' }).nth(1).click();
  await page.getByRole('button', { name: 'Apply' }).click();
  await expect(page.locator('#range-date-calendar')).toHaveValue('01/20/2018 - 02/13/2018');
  await page.locator('#range-date-calendar').click();
  await page.getByRole('cell', { name: '15' }).nth(1).click();
  await page.getByRole('columnheader').first().click();
  await page.getByRole('cell', { name: '7' }).nth(1).click();
  //await page.getByText('Home Contact Range Date').click();
  await expect(page.locator('#calendar')).toHaveValue('07/10/2026');
  

});
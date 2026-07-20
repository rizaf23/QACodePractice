import { test, expect } from '@playwright/test';

test('pagination verification', async ({ page }) => {
  // Recording...
  await page.goto('https://qa-practice.razvanvancea.ro/');
  await page.getByRole('link', { name: 'Pagination' }).click();
  await page.getByRole('link', { name: '1' }).click();
  await expect(page.locator('#pageResult')).toContainText('You clicked page no. 1');

  await page.getByRole('link', { name: '2' }).click();
  await expect(page.locator('#pageResult')).toContainText('You clicked page no. 2');
  //no page response no assertions 
  await page.getByRole('listitem').filter({ hasText: 'Previous' }).click();

  await page.getByRole('link', { name: '3' }).click();
  await expect(page.locator('#pageResult')).toContainText('You clicked page no. 3');
  await page.getByRole('link', { name: 'Next' }).click();
  await expect(page.locator('#pageResult')).toContainText('You clicked the "Next" button');
  
});
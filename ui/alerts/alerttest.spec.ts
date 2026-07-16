import { test, expect } from '@playwright/test';

test('alert', async ({ page }) => {
  await page.goto('https://qa-practice.razvanvancea.ro/alerts.html');
  
  //Click Alert
  await page.getByRole('button', { name: 'Alert' }).click();
  // Handle Confirm dialog
  page.once('dialog', async dialog => {
    expect(dialog.type()).toBe('confirm');
    expect(dialog.message()).toContain('Press a button!');
    expect(dialog.message()).toContain('Either OK or Cancel.');
    await dialog.accept();
  });
  
  //Click Confirm
  await page.getByRole('button', { name: 'Confirm' }).click();
  // Handle Confirm dialog
  page.once('dialog', async dialog => {
    expect(dialog.type()).toBe('confirm');
    expect(dialog.message()).toContain('Press a button!');
    expect(dialog.message()).toContain('Either OK or Cancel.');
    await dialog.accept();
  });
  

});
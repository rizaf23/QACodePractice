import { test, expect } from '@playwright/test';

test('alert', async ({ page }) => {
  await page.goto('https://qa-practice.razvanvancea.ro/alerts.html');
  
  await page.getByRole('button', { name: 'Alert' }).click();
 
  page.once('dialog', async dialog => {
    expect(dialog.type()).toBe('confirm');
    expect(dialog.message()).toContain('Press a button!');
    expect(dialog.message()).toContain('Either OK or Cancel.');
    await dialog.accept();
  });
  
  await page.getByRole('button', { name: 'Confirm' }).click();
 
  page.once('dialog', async dialog => {
    expect(dialog.type()).toBe('confirm');
    expect(dialog.message()).toContain('Press a button!');
    expect(dialog.message()).toContain('Either OK or Cancel.');
    await dialog.accept();
  });
  
});
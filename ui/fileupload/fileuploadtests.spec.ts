import { test, expect } from '@playwright/test';

test('file upload validation', async ({ page }) => {
  // Recording...
  await page.goto('https://qa-practice.razvanvancea.ro/');
  await page.getByRole('link', { name: 'File Upload' }).click();
  await page.getByRole('button', { name: 'Choose File' }).setInputFiles('C:\\Users\\franc\\Downloads\\testfileupload.txt');
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.locator('#file_upload_response')).toContainText('You have successfully uploaded "testfileupload.txt"');
});
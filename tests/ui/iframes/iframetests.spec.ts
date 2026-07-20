import { test, expect } from '@playwright/test';

test('iframe validations', async ({ page }) => {
  await page.goto('https://qa-practice.razvanvancea.ro/');
  await page.getByRole('link', { name: 'Iframes' }).click();
  const frame = page.frameLocator('#iframe-checkboxes');
  await frame.getByRole('button', { name: 'Toggle navigation' }).click();

  //Home
  await frame.getByRole('link', { name: 'Home (current)' }).click();
  await expect(frame.getByRole('heading', { name: 'Hello, this is an Iframe!' })).toBeVisible();
  await expect(frame.locator('#learn-more')).toContainText('Learn more');
  await frame.getByRole('button', { name: 'Learn more' }).click();
  await expect(frame.locator('#show-text')).toContainText(
    'This text appears when you click the "Learn more" button'
  );

  //Features
  await frame.getByRole('link', { name: 'Features' }).click();
  await expect(frame.getByRole('heading', { name: 'Hello, this is an Iframe!' })).toBeVisible();
  await expect(frame.locator('#learn-more')).toContainText('Learn more');
  await frame.getByRole('button', { name: 'Learn more' }).click();
  await expect(frame.locator('#show-text')).toContainText(
    'This text appears when you click the "Learn more" button'
  );

  //Pricing
  await frame.getByRole('link', { name: 'Pricing' }).click();
  await expect(frame.getByRole('heading', { name: 'Hello, this is an Iframe!' })).toBeVisible();
  await expect(frame.locator('#learn-more')).toContainText('Learn more');
  await frame.getByRole('button', { name: 'Learn more' }).click();
  await expect(frame.locator('#show-text')).toContainText(
    'This text appears when you click the "Learn more" button'
  );

  //Disabled
  await frame.getByRole('link', { name: 'Disabled' }).click();
  await expect(frame.getByRole('link', { name: 'Disabled' })).toHaveClass(/disabled/);

});
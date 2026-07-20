import { test, expect } from '@playwright/test';

test('gif verification', async ({ page }) => {
  // Recording...
  await page.goto('https://qa-practice.razvanvancea.ro/');
  await page.getByRole('link', { name: 'Visual Testing - GIF Page' }).click();
  await expect(page.locator('#content')).toContainText('This page can be used for Visual Testing purpose, to bypass/handle the gif section');
  
  await expect(page.locator('h2')).toContainText('GIF page');
  
  const gif = page.locator('img[src="https://media.giphy.com/media/d3mlE7uhX8KFgEmY/giphy.gif"]');

  await expect(gif).toBeVisible();

  await expect(gif).toHaveAttribute(
    'src',
    'https://media.giphy.com/media/d3mlE7uhX8KFgEmY/giphy.gif'
  );

  const naturalWidth = await gif.evaluate(
    (img: HTMLImageElement) => img.naturalWidth
  );

  expect(naturalWidth).toBeGreaterThan(0);
  });
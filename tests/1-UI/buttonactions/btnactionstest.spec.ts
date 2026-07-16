import { test, expect, type Page } from '@playwright/test';

test('double click button validation', async ({ page }) => {
  // Recording...
  await page.goto('https://qa-practice.razvanvancea.ro/');
  await page.getByRole('link', { name: 'Btn actions' }).click();
  await page.getByRole('link', { name: 'Double click btn' }).click();
  await expect(page.locator('h2')).toContainText('Double Click on Button Example');
  await page.getByRole('button', { name: 'Double click me' }).dblclick();
  await page.getByText('Congrats, you double clicked!').click();
  await expect(page.locator('#double-click-result')).toContainText('Congrats, you double clicked!');
});

test('scroll validation', async ({ page }) => {
  await page.goto('https://qa-practice.razvanvancea.ro/');
  await page.getByRole('link', { name: 'Btn actions' }).click();
  await page.getByRole('link', { name: 'Scrolling' }).click();
  await page.waitForSelector('body');
  await scrollToBottom(page);
  await expect(page.locator('#the-end')).toContainText('THE END');
  await scrollToTop(page);
  await expect(page.locator('#main')).toContainText('Starting...');
});

async function scrollToBottom(page: Page) {
  await page.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight || document.body.scrollHeight));
}

async function scrollToTop(page: Page) {
  await page.evaluate(() => window.scrollTo(0, 0));
}

test('mouse hover validation', async ({ page }) => {
  await page.goto('https://qa-practice.razvanvancea.ro/');
  await page.getByRole('link', { name: 'Btn actions' }).click();
  await page.getByRole('link', { name: 'Mouse Hover' }).click();
  await page.getByRole('button', { name: 'Hover over me, example no.2' }).hover();
  await expect(page.getByText('I am shown when someone hovers over the text above')).toBeVisible(); 
});

test('show/hide element validation', async ({ page }) => {
  await page.goto('https://qa-practice.razvanvancea.ro/');
  await page.getByRole('link', { name: 'Btn actions' }).click();
  await page.getByRole('link', { name: 'Show / Hide Element' }).click();
  const hiddenText = page.locator('#hiddenText');
  await hiddenText.waitFor({ state: 'attached' });
  await expect(hiddenText).toContainText('This text will be hidden');
  const toggleButton = page.getByRole('button', { name: 'Show / Hide' });
  await toggleButton.click();
  await expect(hiddenText).toBeHidden();
  await toggleButton.click();
  await expect(hiddenText).toBeVisible();
  await expect(hiddenText).toContainText('This text will be hidden');
});
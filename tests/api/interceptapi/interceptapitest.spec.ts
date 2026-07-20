import { test, expect } from '@playwright/test';

test('Intercept GET API and return one comment', async ({ page }) => {
  await page.route('**/comments**', async route => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify([
        {
          name: 'id labore ex et quam laborum',
          email: 'Eliseo@gardner.biz',
          body: 'laudantium enim quasi est quidem magnam voluptate ipsam eos tempora quo necessitatibus dolor quam autem quasi reiciendis et nam sapiente accusantium'
        }
      ])
    });
  });

  await page.goto(
    'https://qa-practice.razvanvancea.ro/fetch-api.html'
  );

  await expect(
    page.getByText('id labore ex et quam laborum')
  ).toBeVisible();

  await expect(
    page.getByText('laudantium enim quasi est quidem magnam voluptate ipsam eos tempora quo necessitatibus dolor quam autem quasi reiciendis et nam sapiente accusantium')
  ).toBeVisible();

  const rows = page.locator('table tbody tr');

  await expect(rows).toHaveCount(1);

});

test('Handle API failure response', async ({ page }) => {

  await page.route('**/comments**', async route => {

    await route.fulfill({
      status: 500,
      contentType: 'application/json',
      body: JSON.stringify([])
    });

  });

  await page.goto('https://qa-practice.razvanvancea.ro/fetch-api.html');

  await expect(page.getByRole('columnheader', { name: 'Name' }))
    .toBeVisible();

  await expect(page.getByRole('columnheader', { name: 'Email' }))
    .toBeVisible();

  await expect(page.getByRole('columnheader', { name: 'Comment' }))
    .toBeVisible();

  const rows = page.locator('table tbody tr');

  await expect(rows).toHaveCount(0);
});
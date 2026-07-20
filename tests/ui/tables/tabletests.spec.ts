import { test, expect } from '@playwright/test';

test('static table validation', async ({ page }) => {
  // Recording...
  await page.goto('https://qa-practice.razvanvancea.ro/');
  await page.getByRole('link', { name: 'Tables' }).click();
  await page.getByRole('link', { name: 'Static Table' }).click();
  //verify table title
  await expect(page.locator('h2')).toContainText('Table Example');
  const table = page.locator('table');
  //verify table columns
  await expect(table).toBeVisible();
  const headers = await table.locator('thead th').allTextContents();

expect(headers.map(header => header.trim())).toEqual([
  '#',
  'First',
  'Last',
  'Email'
]);
  //verify row count
  await expect(table.locator('tbody tr')).toHaveCount(5);
  //verify specific table record
  await expect(table.locator('tbody tr').nth(0))
  .toContainText('Mark');
  await expect(table.locator('tbody tr').nth(4))
  .toContainText('Mark Icarus');
});

test('dynamic table validation', async ({ page }) => {
  await page.goto('https://qa-practice.razvanvancea.ro/');
  await page.getByRole('link', { name: 'Tables' }).click();
  await page.getByRole('link', { name: 'Dynamic Table' }).click();
  const table = page.locator('table');
  // check table is visible
  await expect(table).toBeVisible();
  // check columns
  const headers = await table.locator('thead th').allTextContents();
  expect(headers.map(header => header.trim())).toEqual([
    'Avatar',
    'First Name',
    'Last Name',
    'Age',
    'Email',
    'City',
    'Country'
  ]);
  // check rows available/loaded
  const rows = table.locator('tbody tr');
  await expect(rows).not.toHaveCount(0);
  // check row data
  const rowCount = await rows.count();
  for (let i = 0; i < rowCount; i++) {
    const row = rows.nth(i);
    // FN exists
    await expect(row.locator('td').nth(1)).not.toBeEmpty();
    // LN exists
    await expect(row.locator('td').nth(2)).not.toBeEmpty();
    // Age is number
    const age = await row.locator('td').nth(3).textContent();
    expect(Number(age)).toBeGreaterThan(0);
  }
});
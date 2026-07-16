import { test, expect } from '@playwright/test';

test('dropdown validations', async ({ page }) => {
  // Recording...
  await page.goto('https://qa-practice.razvanvancea.ro/');
  await page.getByRole('link', { name: 'Dropdowns' }).click();
  await page.locator('#dropdown-menu').selectOption('Phillipines');
  await expect(page.locator('#dropdown-menu')).toHaveValue('Phillipines');
  
  await page.getByRole('button', { name: 'Dropdown' }).click();
  await page.getByRole('link', { name: 'Some other action' }).click();
  await expect(page).toHaveURL(/some-other-action/);

  await page.getByRole('button', { name: 'Dropdown' }).click();
  await page.getByRole('link', { name: 'Some action' }).click();
  await expect(page).toHaveURL(/some-action/);

  await page.getByRole('button', { name: 'Dropdown' }).click();
  const hoverMenu = page.getByRole('link', { name: 'Hover me for more options' });
  await hoverMenu.hover();
  await expect(page.getByRole('link', { name: 'Second level - 1', exact: true })).toBeVisible();

  await page.getByRole('link', { name: 'Second level - 1', exact: true }).click();
  await expect(page).toHaveURL(/second-level-1/);

  await page.getByRole('button', { name: 'Dropdown' }).click();
  await hoverMenu.hover();
  const evenMore = page.getByRole('link', { name: 'Even More..' });
  await evenMore.hover();
  await expect(page.getByRole('link', { name: '3rd level - 1', exact: true })).toBeVisible();

  await page.getByRole('link', { name: '3rd level - 1', exact: true }).click();
  await expect(page).toHaveURL(/3rd-level-1/);
  
  await page.getByRole('button', { name: 'Dropdown' }).click();
  await hoverMenu.hover();
  await evenMore.hover();
  const anotherLevel = page.getByRole('link', { name: 'another level', exact: true });
  await anotherLevel.hover();
  await expect(page.getByRole('link', { name: '4th level - 1', exact: true })).toBeVisible();
  
  await page.getByRole('link', { name: '4th level - 1', exact: true }).click();
  await expect(page).toHaveURL(/4th-level-1/);

});
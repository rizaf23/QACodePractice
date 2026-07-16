import { test, expect } from '@playwright/test';

test('shopping cart happy flow', async ({ page }) => {
  await page.goto('https://qa-practice.netlify.app/products_list');

  // Open the first product
  await page.getByRole('img').first().click();

  
  // Add to cart
  await page.getByRole('button', { name: 'ADD TO CART' }).nth(1).click();

  // Capture the product price
  const priceText = (await page.locator('.cart-row').last().locator('.cart-price').textContent())?.trim();


  // Verify cart total
  //await expect(page.locator('#prooood')).toContainText(`Total ${priceText}`);


  // Purchase
  await page.getByRole('button', { name: 'PURCHASE' }).click();

  // Verify confirmation message
  await expect(page.locator('#message')).toContainText(
    `Congrats! Your order of ${priceText} has been registered!`
  );


  // Return to products list
  await page.getByRole('link', { name: 'Go back to products list' }).click();
  await expect(page.getByText('SHOPPING CART')).toBeVisible();
});
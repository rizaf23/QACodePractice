import { test, expect } from '@playwright/test';

test('Dynamic Table Test', async ({ page }) => {
  await page.goto('https://qa-practice.netlify.app/dynamic-table');
  await page.getByText('Home Contact Avatar First').click();
  await expect(page.locator('#content')).toContainText('Home Contact Avatar First Name Last Name Age Email City Country Conrad Evertsen 51 conrad.evertsen@example.com Oppeid Norway آرمیتا سلطانی نژاد 60 armyt.sltnynjd@example.com قائم‌شهر Iran Norman Bell 47 norman.bell@example.com Green Bay United States Tomas Masson 70 tomas.masson@example.com Baltschieder Switzerland Marshall Brooks 67 marshall.brooks@example.com Townsville Australia Sophia Leclercq 47 sophia.leclercq@example.com Caen France Iván Carrasco 61 ivan.carrasco@example.com Albacete Spain Harley Edwards 72 harley.edwards@example.com Napier New Zealand Adriana Blanco 40 adriana.blanco@example.com Alcalá de Henares Spain Ana Teichmann 30 ana.teichmann@example.com Mühlacker Germany');
});


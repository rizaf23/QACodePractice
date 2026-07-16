import { test as base, expect } from '@playwright/test';

export const test = base.extend({
  browser: async ({ browser }, use) => {
    await use(browser);
    await browser.close();
  },
});

export { expect };

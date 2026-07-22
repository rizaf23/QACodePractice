import { test as base, expect } from '@playwright/test';
import { SpotTheBugsPage } from '../pages/SpotTheBugsPage';

type MyFixtures = {
spotTheBugsPage: SpotTheBugsPage;
};

export const test = base.extend<MyFixtures>({
  spotTheBugsPage: async ({ page }, use) => {
    await use(new SpotTheBugsPage(page));
  },
});

export { expect };
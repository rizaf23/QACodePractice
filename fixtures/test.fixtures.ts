import { test as base, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { SpotTheBugsPage } from '../pages/SpotTheBugsPage';

type MyFixtures = {
homePage: HomePage;
spotTheBugsPage: SpotTheBugsPage;
};

export const test = base.extend<MyFixtures>({
homePage: async ({ page }, use) => {
await use(new HomePage(page));
},

spotTheBugsPage: async ({ page }, use) => {
await use(new SpotTheBugsPage(page));
},
});

export { expect };

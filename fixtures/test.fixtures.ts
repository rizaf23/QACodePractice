import { test as base, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ButtonActionsPage } from '../pages/ButtonActionsPage';
import { SpotTheBugsPage } from '../pages/SpotTheBugsPage';

type MyFixtures = {
homePage: HomePage;
buttonActionsPage: ButtonActionsPage;
spotTheBugsPage: SpotTheBugsPage;
};

export const test = base.extend<MyFixtures>({
homePage: async ({ page }, use) => {
await use(new HomePage(page));
},

buttonActionsPage: async ({ page }, use) => {
await use(new ButtonActionsPage(page));
},

spotTheBugsPage: async ({ page }, use) => {
await use(new SpotTheBugsPage(page));
},
});

export { expect };

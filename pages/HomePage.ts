import { Page, Locator } from '@playwright/test';

export class HomePage {

readonly page: Page;
readonly btnActionsLink: Locator;

constructor(page: Page) {
this.page = page;
this.btnActionsLink = page.getByRole('link', { name: 'Btn actions' });
}

async navigate() {
  await this.page.goto('/'); 
}

async openButtonActions() {
await this.btnActionsLink.click();
}

}

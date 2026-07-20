import { expect, Locator, Page } from '@playwright/test';

export class ButtonActionsPage {

readonly page: Page;

readonly doubleClickMenu: Locator;
readonly doubleClickButton: Locator;
readonly doubleClickResult: Locator;

readonly scrollingMenu: Locator;
readonly theEnd: Locator;
readonly mainHeading: Locator;

readonly mouseHoverMenu: Locator;
readonly hoverButton: Locator;
readonly hoverText: Locator;

readonly showHideMenu: Locator;
readonly hiddenText: Locator;
readonly toggleButton: Locator;

constructor(page: Page) {

this.page = page;

this.doubleClickMenu = page.getByRole('link', { name: 'Double click btn' });
this.doubleClickButton = page.getByRole('button', { name: 'Double click me' });
this.doubleClickResult = page.locator('#double-click-result');

this.scrollingMenu = page.getByRole('link', { name: 'Scrolling' });
this.theEnd = page.locator('#the-end');
this.mainHeading = page.locator('#main');

this.mouseHoverMenu = page.getByRole('link', { name: 'Mouse Hover' });
this.hoverButton = page.getByRole('button', { name: 'Hover over me, example no.2' });
this.hoverText = page.getByText('I am shown when someone hovers over the text above');

this.showHideMenu = page.getByRole('link', { name: 'Show / Hide Element' });
this.hiddenText = page.locator('#hiddenText');
this.toggleButton = page.getByRole('button', { name: 'Show / Hide' });

}

async openDoubleClickPage() {
await this.doubleClickMenu.click();
}

async doubleClick() {
await this.doubleClickButton.dblclick();
}

async verifyDoubleClickSuccess() {
await expect(this.doubleClickResult)
.toContainText('Congrats, you double clicked!');
}

async openScrollingPage() {
await this.scrollingMenu.click();
}

async scrollToBottom() {
await this.page.evaluate(() =>
window.scrollTo(0, document.documentElement.scrollHeight));
}

async scrollToTop() {
await this.page.evaluate(() =>
window.scrollTo(0, 0));
}

async verifyBottomReached() {
await expect(this.theEnd).toContainText('THE END');
}

async verifyTopReached() {
await expect(this.mainHeading).toContainText('Starting...');
}

async openMouseHoverPage() {
await this.mouseHoverMenu.click();
}

async hoverMouse() {
await this.hoverButton.hover();
}

async verifyHoverMessage() {
await expect(this.hoverText).toBeVisible();
}

async openShowHidePage() {
await this.showHideMenu.click();
}

async toggleHiddenText() {
await this.toggleButton.click();
}

async verifyHiddenTextVisible() {
  await expect(this.hiddenText).toBeVisible();
  await expect(this.hiddenText).toContainText('This text will be hidden');
}

async verifyHiddenTextHidden() {
  await expect(this.hiddenText).toBeHidden();
}

}
import { test } from '../../../fixtures/test.fixtures';

test.describe('Button Actions', () => {

test('Double Click Validation', async ({ homePage, buttonActionsPage }) => {

await homePage.navigate();
await homePage.openButtonActions();

await buttonActionsPage.openDoubleClickPage();
await buttonActionsPage.doubleClick();
await buttonActionsPage.verifyDoubleClickSuccess();

});

test('Scrolling Validation', async ({ homePage, buttonActionsPage }) => {


await homePage.navigate();
await homePage.openButtonActions();

await buttonActionsPage.openScrollingPage();

await buttonActionsPage.scrollToBottom();
await buttonActionsPage.verifyBottomReached();

await buttonActionsPage.scrollToTop();
await buttonActionsPage.verifyTopReached();

});

test('Mouse Hover Validation', async ({ homePage, buttonActionsPage }) => {


await homePage.navigate();
await homePage.openButtonActions();

await buttonActionsPage.openMouseHoverPage();
await buttonActionsPage.hoverMouse();
await buttonActionsPage.verifyHoverMessage();

});

test('Show / Hide Element Validation', async ({ homePage, buttonActionsPage }) => {

await homePage.navigate();
await homePage.openButtonActions();

await buttonActionsPage.openShowHidePage();

await buttonActionsPage.verifyHiddenTextVisible();

await buttonActionsPage.toggleHiddenText();
await buttonActionsPage.verifyHiddenTextHidden();

await buttonActionsPage.toggleHiddenText();
await buttonActionsPage.verifyHiddenTextVisible();

});

});   
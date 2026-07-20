import { test } from '../../../fixtures/test.fixtures';

test.describe('Spot The Bugs Challenge', () => {

test('Phone number label is incorrect', async ({ spotTheBugsPage }) => {

await spotTheBugsPage.navigate();

await spotTheBugsPage.enterFirstName('FN');

await spotTheBugsPage.verifyPhoneNumberLabel();

});

test('First Name is required', async ({ spotTheBugsPage }) => {


await spotTheBugsPage.navigate();

await spotTheBugsPage.completeRegistrationForm({

lastName: 'testLN',

phoneNumber: '12345678910',

country: 'Bahrain',

email: 'test@test.com',

password: '123456789'

});

await spotTheBugsPage.clickRegister();

await spotTheBugsPage.verifyFirstNameRequired();

});

test('Last Name is required', async ({ spotTheBugsPage }) => {



await spotTheBugsPage.navigate();

await spotTheBugsPage.completeRegistrationForm({

firstName: 'FN',

phoneNumber: '12345678910',

country: 'Bahrain',

email: 'test@test.com',

password: '123456789'

});

await spotTheBugsPage.clickRegister();

await spotTheBugsPage.verifyLastNameRequired();

});

test('Phone number accepts only numeric values', async ({ spotTheBugsPage }) => {



await spotTheBugsPage.navigate();

await spotTheBugsPage.completeRegistrationForm({

firstName: 'FN',

phoneNumber: 'abcde67891',

country: 'Bahrain',

email: 'test@test.com',

password: '123456789'

});

await spotTheBugsPage.clickRegister();

await spotTheBugsPage.verifyPhoneNumberValidation();

});

test('Terms and Conditions checkbox is enabled', async ({ spotTheBugsPage }) => {

await spotTheBugsPage.navigate();

await spotTheBugsPage.completeRegistrationForm({

firstName: 'FN',

lastName: 'testLN',

phoneNumber: '12345678910',

country: 'Bahrain',

email: 'test@test.com',

password: '123456789'

});

await spotTheBugsPage.verifyTermsAndConditionsEnabled();

});

test('Verify valid email format', async ({ spotTheBugsPage }) => {

await spotTheBugsPage.navigate();

await spotTheBugsPage.completeRegistrationForm({

firstName: 'FN',

phoneNumber: '12345678910',

country: 'Bahrain',

email: 'test123',

password: '123456789'

});

await spotTheBugsPage.clickRegister();

await spotTheBugsPage.verifyEmailValidation();

});

});
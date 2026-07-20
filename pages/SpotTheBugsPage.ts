import { expect, Locator, Page } from '@playwright/test';

export class SpotTheBugsPage {

readonly page: Page;


// **Navigation**


readonly spotTheBugsLink: Locator;


// Form Fields


readonly firstName: Locator;
readonly lastName: Locator;
readonly phoneNumber: Locator;
readonly country: Locator;
readonly email: Locator;
readonly password: Locator;
readonly termsAndConditions: Locator;
readonly registerButton: Locator;


// **Validation Messages**


readonly phoneNumberLabel: Locator;
readonly firstNameRequired: Locator;
readonly lastNameRequired: Locator;
readonly phoneNumberValidation: Locator;
readonly emailValidation: Locator;

constructor(page: Page) {

this.page = page;

// Navigation
this.spotTheBugsLink = page.getByRole('link', {
name: 'Spot the BUGS CHALLENGE'
});

// Registration Form
this.firstName = page.getByRole('textbox', {
name: 'First Name'
});

this.lastName = page.getByRole('textbox', {
name: 'Last Name* Phone nunber*'
});

this.phoneNumber = page.getByRole('textbox', {
name: 'Enter phone number'
});

this.country = page.locator('#countries_dropdown_menu');

this.email = page.getByRole('textbox', {
name: 'Enter email'
});

this.password = page.getByRole('textbox', {
name: 'Password'
});

this.termsAndConditions = page.getByRole('checkbox', {
name: 'I agree with the Terms and Conditions'
});

this.registerButton = page.getByRole('button', {
name: 'Register'
});

// Validation Messages
this.phoneNumberLabel = page.getByText('Phone number*');

this.firstNameRequired = page.getByText('First Name is required');

this.lastNameRequired = page.getByText('Last Name is required');

this.phoneNumberValidation = page.getByText(
'Phone number must contain only numeric values'
);

this.emailValidation = page.getByText(
'Please enter a valid email address'
);
}


// **Navigation**


async navigate() {

await this.page.goto('/');

await this.spotTheBugsLink.click();

}

// **Form Actions**


async enterFirstName(firstName: string) {

await this.firstName.fill(firstName);

}

async enterLastName(lastName: string) {

await this.lastName.fill(lastName);

}

async enterPhoneNumber(phoneNumber: string) {

await this.phoneNumber.fill(phoneNumber);

}

async selectCountry(country: string) {

await this.country.selectOption(country);

}

async enterEmail(email: string) {

await this.email.fill(email);

}

async enterPassword(password: string) {

await this.password.fill(password);

}

async clickRegister() {

await this.registerButton.click();

}


// **Reusable Registration**


async completeRegistrationForm(data: {

firstName?: string;

lastName?: string;

phoneNumber?: string;

country?: string;

email?: string;

password?: string;

}) {

if (data.firstName)
await this.enterFirstName(data.firstName);

if (data.lastName)
await this.enterLastName(data.lastName);

if (data.phoneNumber)
await this.enterPhoneNumber(data.phoneNumber);

if (data.country)
await this.selectCountry(data.country);

if (data.email)
await this.enterEmail(data.email);

if (data.password)
await this.enterPassword(data.password);

}

// **Validations**


async verifyPhoneNumberLabel() {

await expect(this.phoneNumberLabel).toBeVisible();

}

async verifyFirstNameRequired() {

await expect(this.firstNameRequired).toBeVisible();

}

async verifyLastNameRequired() {

await expect(this.lastNameRequired).toBeVisible();

}

async verifyPhoneNumberValidation() {

await expect(this.phoneNumberValidation).toBeVisible();

}

async verifyEmailValidation() {

await expect(this.emailValidation).toBeVisible();

}

async verifyTermsAndConditionsEnabled() {

await expect(this.termsAndConditions).toBeEnabled();

}

}

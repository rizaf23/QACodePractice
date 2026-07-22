# QA Practice Code Assessment

## Overview

This project is a Playwright automation framework built with TypeScript for the **Spot the Bugs Form** assessment on the QA Practice website.

The objective of this project was not only to automate the required test scenarios, but also to demonstrate how a Playwright framework can be structured using automation best practices such as the Page Object Model (POM), reusable fixtures, and a clean, maintainable project structure.

---

## Technology Stack

* Playwright
* TypeScript
* Node.js
* Playwright Test Runner
* Playwright Code Generator (Codegen)

---

## Project Structure

```text
QA-PRACTICE
│
├── fixtures
│   └── test.fixtures.ts
│
├── pages
│   ├── HomePage.ts
│   └── SpotTheBugsPage.ts
│
├── tests
│   └── ui
│       └── spotthebugs
│           └── spotthebugs.spec.ts
│
├── utils
├── .gitignore
├── package.json
├── playwright.config.ts
└── README.md
```

---

## Framework Design

The framework follows the **Page Object Model (POM)**, separating page interactions from test logic to improve readability, maintainability, and reusability.

Reusable Playwright fixtures are used to minimise duplicated setup code, keeping the test cases concise and focused on the assertions being validated.

---

## Running the Project

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

Run all tests:

```bash
npx playwright test
```

Run the Spot the Bugs test:

```bash
npx playwright test tests/ui/spotthebugs/spotthebugs.spec.ts
```

---

## Framework Practices

The framework demonstrates the following practices:

* Page Object Model (POM)
* Reusable Playwright fixtures
* Separation of page actions from test logic
* Centralised Playwright configuration
* Reusable helper methods
* Readable and maintainable test cases

---

## Notes

I initially misunderstood the scope of the assessment and thought the task was to automate the entire QA Practice website rather than only the **Spot the Bugs Form** assessment.

As a result, I first built an automation framework that covered multiple modules across the site. To keep this submission focused and easier to review, I have removed the additional modules and retained only the implementation relevant to the assessment.

The implementation was completed without using AI-generated code. The initial navigation steps for the tests were generated using the official Playwright Code Generator, which is why comments such as `// Recording...` appear in some test files. Those generated steps were then manually refactored, organised, and extended with assertions, reusable page objects, fixtures, and additional test logic.

My current production experience with Playwright is primarily using C#, where I maintain and extend existing automation frameworks by adding new test coverage and improving existing test suites. This assessment was my first opportunity to build a Playwright framework from the ground up using TypeScript.

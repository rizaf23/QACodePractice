# QA Practice Code Assessment

## Overview

This project is an automation framework built using Playwright and TypeScript to automate both UI and API testing.

The objective of this project is not only to automate test scenarios, but also to demonstrate how a Playwright framework can be organised using good automation practices such as the Page Object Model (POM), reusable fixtures and a clear project structure.

---

## Technology Stack

- Playwright
- TypeScript
- Node.js
- Playwright Test Runner
- Playwright Codegen (test generator)

---

## Project Structure

```
QA-PRACTICE
│
├── fixtures
│ └── test.fixtures.ts
│
├── pages
│ ├── HomePage.ts
│ └── ButtonActionsPage.ts
│
├── tests
│ ├── api
│ └── ui
│ ├── alerts
│ ├── buttonactions
│ ├── buttons
│ ├── datepicker
│ ├── dropdowns
│ ├── eCommerceAddtocarttest
│ ├── eCommerceLogintests
| ├── eCommerceLogintests
| ├── eCommerceShippingfieldvalidationtest
| ├── fileupload
| ├── forms
| ├── gifpage
| ├── iframes
| ├── loader
| ├── newtabwindow
| ├── pagination
| ├── productslistshop
| ├── spotthebugs
| ├── tables
│
├── utils
├── .gitignore
├── package.json
├── playwright.config.ts
└── README.md
```

---

## Framework Design

This framework separates UI and API tests into different Playwright projects while keeping the configuration centralised in a single `playwright.config.ts` file.

The framework follows the Page Object Model (POM) approach, where page interactions are separated from the test logic to improve readability and maintainability.

Reusable Playwright fixtures are also used to reduce duplicated setup code and make the test cases cleaner.

---

## Running the Project

Install dependencies

```bash
npm install
```

Install Playwright browsers

```bash
npx playwright install
```

Run all tests

```bash
npx playwright test
```

Run UI tests

```bash
npx playwright test --project="UI Tests"
```

Run API tests

```bash
npx playwright test --project="API Tests"
```

Run a specific test

```bash
npx playwright test tests/ui/buttonactions/btnactionstest.spec.ts
```

Generate the HTML report

```bash
npx playwright show-report
```

---

## Current Framework Improvements

As part of this assessment, I reviewed the feedback provided and started improving the overall framework structure rather than only focusing on individual test cases.

The **Button Actions** module has been refactored to demonstrate the intended framework design by implementing:

- Page Object Model (POM)
- Reusable Playwright Fixtures
- Improved separation between page actions and test logic
- Cleaner and more maintainable test structure

This module serves as the reference implementation for how the remaining UI modules can be refactored using the same design pattern while preserving the existing test coverage.

---

## Best Practices Applied

- Page Object Model (POM)
- Reusable Fixtures
- Separation of UI and API tests
- Centralised Playwright configuration
- Reusable methods
- Readable test cases

---

## Future Improvements

Given additional time, the same Page Object Model approach demonstrated in the Button Actions module can be consistently applied across the remaining UI modules to further improve maintainability, reduce duplicated code and keep the framework scalable as additional test coverage is added.

---

## Notes

My day-to-day experience with Playwright has primarily involved maintaining and extending an existing automation framework by adding new test coverage and enhancing existing test suites.

This assessment provided a good opportunity to revisit the framework architecture itself and apply best practices such as the Page Object Model, reusable fixtures and improved project organisation.

The changes included in this submission reflect those improvements while maintaining the existing functional test coverage.

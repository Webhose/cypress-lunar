# Cypress Test Automation Project

## Overview
This project is a Cypress-based test automation suite designed for end-to-end testing of web applications. It enables developers and testers to automate UI interactions and validate application behavior efficiently.

## Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (LTS version recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Installation
1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd <project-folder>
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

## Running Tests

### Run Tests in Headless Mode
```sh
npx cypress run
```
This executes all tests in the command line using the configured browser (default: Electron).

### Run Tests in Headed Mode
```sh
npx cypress run --headed
```

### Run Specific Test 
```sh
npx cypress run --spec "cypress/e2e/ui/DomainRiskTestsTests.cy.js" 
```

### Run Tests in a Specific Browser
```sh
npx cypress run --browser chrome 
```
Replace `chrome` with `firefox` or any supported browser.

### Run Tests on Cloud 
```sh
 npx cypress run --record --key 5c9dca14-9862-419e-a992-ef100631b857
```

## Writing Tests
Test files are located in `cypress/e2e/` and follow this structure:
```js
/// <reference types="cypress" />

describe('Sample Test', () => {
  it('Visits the homepage', () => {
    cy.visit('/');
    cy.contains('Welcome');
  });
});
```

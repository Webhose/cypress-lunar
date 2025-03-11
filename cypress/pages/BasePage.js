class BasePage {
    constructor() {
      this.url = 'https://lunar-staging.webz.io';
    }
  
    visit() {
      cy.visit(this.url);
    }
  
    getElement(selector) {
      return cy.get(selector);
    }
  
    waitForElement(selector, timeout = 10000) {
      return cy.get(selector, { timeout });
    }
  }
  export default BasePage;
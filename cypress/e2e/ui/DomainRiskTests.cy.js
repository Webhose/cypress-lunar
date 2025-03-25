import LoginPage from '../../../cypress/pages/LoginPage';
import DomainRiskPage from '../../../cypress/pages/DomainRiskPage';
import Homepage from '../../../cypress/pages/HomePage'; 


const userName = Cypress.env('email');
const password = Cypress.env('password');
const loginPage = new LoginPage();
const domainPage = new DomainRiskPage();
const homePage = new Homepage();
const domain = 'x.com';



const formatDate = () => {
    const date = new Date();
    return `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`;
};

describe('Domain Risk Tests', () => { 
    beforeEach(() => {
      loginPage.visit();
      loginPage.enterUsername(userName);
      loginPage.enterPassword(password);
      loginPage.submit();
      cy.wait(2000);
      domainPage.visit();
    });

    it('should add a domain', () => {
        domainPage.addDomain(domain);
        domainPage.getNameOfLastAddedDomain().should('eq', domain);
        domainPage.deleteLastAddedDomain();
    });

    it('should cancel adding a domain', () => {
        const domain = 'sdasd.com';
        domainPage.cancelAddDomain(domain);
        
        domainPage.getNameOfLastAddedDomain().should('not.eq', domain);
    });

    it('should play the last added domain', () => {
        domainPage.playDomain();
    });

    it('should delete the last added domain', () => {
        domainPage.getNameOfLastAddedDomain().then((lastDomain) => {
            domainPage.deleteLastAddedDomain();
            domainPage.getNameOfLastAddedDomain().should('not.eq', lastDomain);
        });
    });

    it('should search for a domain', () => {
        const domain = 'example.com';
        domainPage.addDomain(domain);
        
        domainPage.searchDomain(domain);
        domainPage.getNameOfLastAddedDomain().should('eq', domain);
        
        domainPage.clearSearch();
        domainPage.deleteLastAddedDomain();
    });

    it('should display an error for an invalid domain', () => {
        const invalidDomain = 'asd.asd';
        domainPage.addDomain(invalidDomain);
        domainPage.isErrorDisplayed();
    });

  it("Verifies query for Stealer Logs", () => {
    domainPage.addDomain(domain);
    cy.wait(2000);
    domainPage.getNameOfLastAddedDomain().then((domain) => {
      const expectedQuery = `pii.domain_employee:${domain.trim()}`;

      domainPage.playDomain();
      domainPage.clickStealerLogs();
      homePage.getQueryValue(expectedQuery);
      cy.go(-2);
      domainPage.deleteLastAddedDomain();
    });
  });

  it("Verifies query for Data Breaches", () => {
    domainPage.addDomain(domain);
    cy.wait(2000);
    domainPage.getNameOfLastAddedDomain().then((domain) => {
      const expectedQuery = `pii.domain_employee:${domain.trim()}`;
     
      domainPage.playDomain();
      domainPage.clickDataBreaches();
      homePage.getQueryValue(expectedQuery);
      cy.go(-2);
      domainPage.deleteLastAddedDomain();
    });
  });

  it("Verifies query for Dark Web", () => {
    domainPage.addDomain(domain);
    cy.wait(2000);
    domainPage.getNameOfLastAddedDomain().then((domain) => {
      const expectedQuery = `enriched.email.value:*@${domain.trim()}`;

      domainPage.playDomain();
      domainPage.clickDarkWeb();
      homePage.getQueryValue(expectedQuery);
      cy.go(-2);
      domainPage.deleteLastAddedDomain();
    });
  });

  it("Verifies query for Found in Stealer Logs", () => {
    domainPage.addDomain(domain);
    cy.wait(2000);
    domainPage.getNameOfLastAddedDomain().then((domain) => {
      const expectedQuery = `pii.domain_client:${domain.trim()}`;

      domainPage.clickFoundInStealerLogs();
      domainPage.playDomain();
      homePage.getQueryValue(expectedQuery);
      cy.go(-2);
      domainPage.deleteLastAddedDomain();
    });
  });

});
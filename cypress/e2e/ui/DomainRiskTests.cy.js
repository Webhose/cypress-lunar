import LoginPage from '../../../cypress/pages/LoginPage';
import DomainRiskPage from '../../../cypress/pages/DomainRiskPage';

const userName = Cypress.env('email');
const password = Cypress.env('password');
const loginPage = new LoginPage();
const domainPage = new DomainRiskPage();



const formatDate = () => {
    const date = new Date();
    return `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`;
};

// describe('Domain Risk Tests', () => {
//     beforeEach(() => {
//         cy.login(userName, password);
//         HomePage.navigateTodomainPage();
//     });

//     it('should add a domain', () => {
//         const domain = 'example.com';
//         domainPage.addDomain(domain);
        
//         domainPage.getNameOfLastAddedDomain().should('eq', domain);
//         domainPage.getDateOfLastAddedDomain().should('eq', formatDate());
//     });

//     it('should cancel adding a domain', () => {
//         const domain = 'sdasd.com';
//         domainPage.cancelAddDomain(domain);
        
//         domainPage.getNameOfLastAddedDomain().should('not.eq', domain);
//     });

//     it('should play the last added domain', () => {
//         domainPage.playDomain();
//         // Additional validation logic if required
//     });

//     it('should delete the last added domain', () => {
//         domainPage.getNameOfLastAddedDomain().then((lastDomain) => {
//             domainPage.deleteLastAddedDomain();
//             domainPage.getNameOfLastAddedDomain().should('not.eq', lastDomain);
//         });
//     });

//     it('should search for a domain', () => {
//         const domain = 'example.com';
//         domainPage.addDomain(domain);
        
//         domainPage.searchDomain(domain);
//         domainPage.getNameOfLastAddedDomain().should('eq', domain);
        
//         domainPage.clearSearch();
//         domainPage.deleteLastAddedDomain();
//     });

//     it('should display an error for an invalid domain', () => {
//         const invalidDomain = 'invalid_domain';
//         domainPage.addDomain(invalidDomain);
//         domainPage.isErrorDisplayed().should('be.true');
//     });

describe("Verify Queries on Click", () => {

  beforeEach(() => {
    cy.session("login", () => {
    loginPage.visit();
    loginPage.enterUsername("almir@webz.io");
    loginPage.enterPassword("19Rek@.river.bog96");
    loginPage.submit();
    });
  });

  it("Verifies query for Stealer Logs", () => {
    domainPage.visit();
    domainPage.getNameOfLastAddedDomain().then((domain) => {
      const expectedQuery = `pii.domain_employee:${domain.trim()}`;

      domainPage.clickStealerLogs();
      domainPage.verifyQuery(expectedQuery);
    });
  });

  it("Verifies query for Data Breaches", () => {
    domainPage.visit();
    domainPage.getNameOfLastAddedDomain().then((domain) => {
      const expectedQuery = `pii.domain_employee:${domain.trim()}`;

      domainPage.clickDataBreaches();
      domainPage.verifyQuery(expectedQuery);
    });
  });

  it("Verifies query for Dark Web", () => {
    domainPage.visit();
    domainPage.getNameOfLastAddedDomain().then((domain) => {
      const expectedQuery = `enriched.email.value:*@${domain.trim()}`;

      domainPage.clickDarkWeb();
      domainPage.verifyQuery(expectedQuery);
    });
  });

  it("Verifies query for Found in Stealer Logs", () => {
    domainPage.visit();
    domainPage.getNameOfLastAddedDomain().then((domain) => {
      const expectedQuery = `pii.domain_client:${domain.trim()}`;

      domainPage.clickFoundInStealerLogs();
      domainPage.verifyQuery(expectedQuery);
    });
  });
});
// });
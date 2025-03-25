import LoginPage from '../../../cypress/pages/LoginPage';
import AlertPage from '../../../cypress/pages/AlertPage';
import Homepage from '../../../cypress/pages/HomePage';

const userName = Cypress.env('email');
const password = Cypress.env('password');
const loginPage = new LoginPage();
const alertPage = new AlertPage();
const homePage = new Homepage();

describe('Alert Creation Tests', () => { 
    beforeEach(() => {
        loginPage.visit();
        loginPage.enterUsername(userName);
        loginPage.enterPassword(password);
        loginPage.submit();
        cy.wait(2000);
        homePage.visit();
    });

    it('should successfully create an alert', () => {
        const alertName = 'Test Alert';
        homePage.search("Trump");
        homePage.navigateToAlerts();
        alertPage.createAlert(alertName);
        alertPage.verifyAlertIsCreated(alertName);
        cy.contains('span', alertName).should('be.visible');
        alertPage.deleteAlert();
    });
});

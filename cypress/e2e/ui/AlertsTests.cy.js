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

    it('should successfully create an  hacker alert', () => {
        const alertName = 'Test Alert';
        homePage.search("Hacker");
        homePage.navigateToAlerts();
        alertPage.createAlert(alertName);
        alertPage.verifyAlertIsCreated(alertName);
        cy.contains('span', alertName).should('be.visible');
        alertPage.deleteAlert();
    });
 
    it('should successfully create an DBD alert', () => {
        const alertName = 'Test Alert';
        homePage.search("pii.domain_employee:dell.com");
        homePage.navigateToAlerts();
        alertPage.createAlert(alertName);
        alertPage.verifyAlertIsCreated(alertName);
        cy.contains('span', alertName).should('be.visible');
        alertPage.deleteAlert();
    });

    it('should successfully play an alert', () => {
        const alertName = 'Test Alert';
        homePage.search("Trump");
        homePage.navigateToAlerts();
        alertPage.createAlert(alertName);
        alertPage.verifyAlertIsCreated(alertName);
        cy.contains('span', alertName).should('be.visible');
        cy.wait(2000);
        alertPage.playAlert()
        cy.wait(5000);
        homePage.getQueryValue(alertName).then((queryValue) => {
            cy.log('Query Value:', queryValue);
            expect(queryValue).to.include('Trump');
        });
        homePage.verifyPostResults();
        homePage.navigateToAlerts();
        cy.wait(2000);
        alertPage.deleteAlert();
    });

    it('should successfully play hacker alert', () => {
        const alertName = 'Test Alert';
        homePage.search("Hacker");
        homePage.navigateToAlerts();
        alertPage.createAlert(alertName);
        alertPage.verifyAlertIsCreated(alertName);
        cy.contains('span', alertName).should('be.visible');
        cy.wait(2000);
        alertPage.playAlert()
        cy.wait(5000);
        homePage.getQueryValue(alertName).then((queryValue) => {
            cy.log('Query Value:', queryValue);
            expect(queryValue).to.include('Hacker');
        });
        homePage.verifyPostResults();
        homePage.navigateToAlerts();
        cy.wait(2000);
        alertPage.deleteAlert();
    });
 
    it('should successfully play DBD alert', () => {
        const alertName = 'Test Alert';
        homePage.search("pii.domain_employee:dell.com");
        homePage.navigateToAlerts();
        alertPage.createAlert(alertName);
        alertPage.verifyAlertIsCreated(alertName);
        cy.contains('span', alertName).should('be.visible');
        cy.wait(2000);
        alertPage.playAlert()
        cy.wait(5000);
        homePage.getQueryValue(alertName).then((queryValue) => {
            cy.log('Query Value:', queryValue);
            expect(queryValue).to.include('pii.domain_employee:dell.com');
        });
        homePage.verifyPostResults();
        homePage.navigateToAlerts();
        cy.wait(2000);
        alertPage.deleteAlert();
    });

        it('should successfully run an DBD notification from alert', () => {
        const alertName = 'Test Alert';
        homePage.search("pii.domain_employee:dell.com");
        homePage.navigateToAlerts();
        alertPage.createAlert(alertName);
        alertPage.verifyAlertIsCreated(alertName);
        cy.contains('span', alertName).should('be.visible');
        cy.wait(30000);
        alertPage.playNotification();
        cy.wait(5000);
        homePage.getQueryValue(alertName).then((queryValue) => {
            cy.log('Query Value:', queryValue);
            expect(queryValue).to.include('pii.domain_employee:dell.com');
        });
        homePage.verifyPostResults();
        homePage.navigateToAlerts();
        cy.wait(2000);
        alertPage.deleteAlert();
    });

    it('should successfully run notification from alert', () => {
        const alertName = 'Test Alert';
        homePage.search("Trump");
        homePage.navigateToAlerts();
        alertPage.createAlert(alertName);
        alertPage.verifyAlertIsCreated(alertName);
        cy.contains('span', alertName).should('be.visible');
        cy.wait(30000);
        alertPage.playNotification();
        cy.wait(5000);
        homePage.getQueryValue(alertName).then((queryValue) => {
            cy.log('Query Value:', queryValue);
            expect(queryValue).to.include('Trump');
        });
        homePage.verifyPostResults();
        homePage.navigateToAlerts();
        cy.wait(2000);
        alertPage.deleteAlert();
    });

    it('should successfully run Hacker notification from alert', () => {
        const alertName = 'Test Alert';
        homePage.search("Hacker");
        homePage.navigateToAlerts();
        alertPage.createAlert(alertName);
        alertPage.verifyAlertIsCreated(alertName);
        cy.contains('span', alertName).should('be.visible');
        cy.wait(30000);
        alertPage.playNotification();
        cy.wait(5000);
        homePage.getQueryValue(alertName).then((queryValue) => {
            cy.log('Query Value:', queryValue);
            expect(queryValue).to.include('Hacker');
        });
        homePage.verifyPostResults();
        homePage.navigateToAlerts();
        cy.wait(2000);
        alertPage.deleteAlert();
    });

    // it('should successfully run Hacker notification from alert', () => {
    //     const alertName = 'Test Alert';
    //     let alertNotificationCount;
    //     let resultCount;
    //     homePage.search("Hacker");
    //     homePage.navigateToAlerts();
    //     alertPage.createAlert(alertName);
    //     alertPage.verifyAlertIsCreated(alertName);
    //     cy.contains('span', alertName).should('be.visible');
    //     cy.wait(30000);
    //     homePage.openNotification();
    //     alertPage.getDocsCount().then((count) => {
    //         alertNotificationCount = count;
    //       });
    
          
    //     alertPage.playNotification();
    //     cy.wait(5000);
        
    //       cy.then(() => {
    //         return homePage.getSearchTotalResults().then((count) => {
    //           resultCount = count;
    //         });
    //       });
        
    //       cy.then(() => {
    //         expect(alertNotificationCount).to.equal(resultCount);
    //       });

    //     homePage.navigateToAlerts();
    //     cy.wait(2000);
    //     alertPage.deleteAlert();
    // });
});

import HomePage from '../pages/HomePage';

const homePage = new HomePage();
const userName = Cypress.env('email');
const password = Cypress.env('password');

describe('AI Query Tests', () => {
    beforeEach(() => {
        cy.login(userName, password);
    });

    const companyIdentifiers = [
        ['Dell', 'dell.com', false, true, true, false],
        ['', 'gmail.com', true, false, false, true],
        ['Gmail', '', true, true, false, false],
        ['Facebook', 'fb.com', true, true, true, true]
    ];

    companyIdentifiers.forEach(([companyName, domainName, subsidiaries, nameVariations, allDomains, ipAddress]) => {
        it(`AI Query - Company Identifiers: ${companyName} ${domainName}`, () => {
            homePage.openQueryWizard();
            homePage.searchForAIQueryIdentifier('Company Identifiers');
            homePage.fillCompanyIdentifiersForm(companyName, domainName, subsidiaries, nameVariations, allDomains, ipAddress);
        });
    });

    it('AI Query - Company Assets Customer', () => {
        homePage.openQueryWizard();
        homePage.searchForAIQueryIdentifier('Compromised Assets');
        homePage.enterCustomer('dell.com');
    });

    it('AI Query - Company Assets Employee', () => {
        homePage.openQueryWizard();
        homePage.searchForAIQueryIdentifier('Compromised Assets');
        homePage.enterEmployee('dell.com');
    });

    it('AI Query - Actor Details Username', () => {
        homePage.openQueryWizard();
        homePage.searchForAIQueryIdentifier('Actor Detail');
        homePage.fillActorDetails('Username', 'cj');
    });

    it('AI Query - Actor Details Email', () => {
        homePage.openQueryWizard();
        homePage.searchForAIQueryIdentifier('Actor Detail');
        homePage.fillActorDetails('Email', 'john@gmail');
    });

    it('AI Query - Actor Details Crypto', () => {
        homePage.openQueryWizard();
        homePage.searchForAIQueryIdentifier('Actor Detail');
        homePage.fillActorDetails('Crypto', '1234567890');
    });

    it('AI Query - Actor Details Phone', () => {
        homePage.openQueryWizard();
        homePage.searchForAIQueryIdentifier('Actor Detail');
        homePage.fillActorDetails('Phone', '+14234998672');
    });

    it('AI Query - Actor Activity Email', () => {
        homePage.openQueryWizard();
        homePage.searchForAIQueryIdentifier('Actor Activity');
        homePage.populateActorActivity('john');
        homePage.fillActorActivity('Email', 'john@gmail');
    });

    it('AI Query - Actor Activity Crypto', () => {
        homePage.openQueryWizard();
        homePage.searchForAIQueryIdentifier('Actor Activity');
        homePage.populateActorActivity('john');
        homePage.fillActorActivity('Crypto', '1234567890');
    });

    it('AI Query - Actor Activity Phone', () => {
        homePage.openQueryWizard();
        homePage.searchForAIQueryIdentifier('Actor Activity');
        homePage.populateActorActivity('cj');
        homePage.fillActorActivity('Phone', '+14234998672');
    });
});
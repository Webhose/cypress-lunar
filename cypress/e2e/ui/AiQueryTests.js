import HomePage from '../pages/HomePage';

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
            HomePage.openQueryWizard();
            HomePage.searchForAIQueryIdentifier('Company Identifiers');
            HomePage.fillCompanyIdentifiersForm(companyName, domainName, subsidiaries, nameVariations, allDomains, ipAddress);
        });
    });

    it('AI Query - Company Assets Customer', () => {
        HomePage.openQueryWizard();
        HomePage.searchForAIQueryIdentifier('Compromised Assets');
        HomePage.enterCustomer('dell.com');
    });

    it('AI Query - Company Assets Employee', () => {
        HomePage.openQueryWizard();
        HomePage.searchForAIQueryIdentifier('Compromised Assets');
        HomePage.enterEmployee('dell.com');
    });

    it('AI Query - Actor Details Username', () => {
        HomePage.openQueryWizard();
        HomePage.searchForAIQueryIdentifier('Actor Detail');
        HomePage.fillActorDetails('Username', 'cj');
    });

    it('AI Query - Actor Details Email', () => {
        HomePage.openQueryWizard();
        HomePage.searchForAIQueryIdentifier('Actor Detail');
        HomePage.fillActorDetails('Email', 'john@gmail');
    });

    it('AI Query - Actor Details Crypto', () => {
        HomePage.openQueryWizard();
        HomePage.searchForAIQueryIdentifier('Actor Detail');
        HomePage.fillActorDetails('Crypto', '1234567890');
    });

    it('AI Query - Actor Details Phone', () => {
        HomePage.openQueryWizard();
        HomePage.searchForAIQueryIdentifier('Actor Detail');
        HomePage.fillActorDetails('Phone', '+14234998672');
    });

    it('AI Query - Actor Activity Email', () => {
        HomePage.openQueryWizard();
        HomePage.searchForAIQueryIdentifier('Actor Activity');
        HomePage.populateActorActivity('john');
        HomePage.fillActorActivity('Email', 'john@gmail');
    });

    it('AI Query - Actor Activity Crypto', () => {
        HomePage.openQueryWizard();
        HomePage.searchForAIQueryIdentifier('Actor Activity');
        HomePage.populateActorActivity('john');
        HomePage.fillActorActivity('Crypto', '1234567890');
    });

    it('AI Query - Actor Activity Phone', () => {
        HomePage.openQueryWizard();
        HomePage.searchForAIQueryIdentifier('Actor Activity');
        HomePage.populateActorActivity('cj');
        HomePage.fillActorActivity('Phone', '+14234998672');
    });
});
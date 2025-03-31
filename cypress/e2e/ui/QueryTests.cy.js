import LoginPage from '../../../cypress/pages/LoginPage';
import HomePage from '../../../cypress/pages/HomePage';

const loginPage = new LoginPage();
const homePage = new HomePage();
const userName = Cypress.env('email');
const password = Cypress.env('password');

describe('Query Tests', () => {
    beforeEach(() => {
        loginPage.visit();
        loginPage.enterUsername(userName);
        loginPage.enterPassword(password);
        loginPage.submit();
        cy.wait(2000);
    });

    const searchTests = [
        { name: 'Title', query: 'title:', data: 'Bosnia' },
        { name: 'Thread Title', query: 'thread.title:', data: 'Bosnia' },
        { name: 'Domain', query: 'site.domain:', data: '4chan.org' },
        { name: 'Enriched Domain Value', query: 'enriched.domain.value:', data: 'ibm.com' },
        { name: 'Thread Section Title', query: 'thread.section_title:', data: '*' },
        { name: 'Thread Site Section', query: 'thread.site_section:', data: '*' },
        { name: 'Thread URL', query: 'thread.url:', data: '*' },
        { name: 'Thread Published', query: 'thread.published:', data: '*' },
        { name: 'Thread Participants Count', query: 'thread.participants_count:', data: '>4300' },
        { name: 'Cyber Risk', query: 'enriched.cyber_risk.value:', data: '>=5' },
        { name: 'Enriched Domain', query: 'enriched.domain.value:', data: '*' },
        { name: 'Enriched Email', query: 'enriched.email.value:', data: '*' },
        { name: 'Enriched Credit Card', query: 'enriched.credit_card.value:', data: '*' },
        { name: 'Enriched Wallet ID', query: 'enriched.wallet_id.value:', data: '*' },
        { name: 'Enriched IP', query: 'enriched.ip.value:', data: '*' },
        { name: 'Enriched CVE', query: 'enriched.cve.value:', data: '*' },
        { name: 'Enriched Location', query: 'enriched.location.value:', data: '*' },
        { name: 'Enriched Phone', query: 'enriched.phone.value:', data: '*' },
        { name: 'SSN', query: 'enriched.ssn.value:', data: '*' },
        { name: 'pii domain', query: 'pii.domain_employee:', data: 'dell.com' },
        { name: 'pii client', query: 'pii.domain_client:', data: 'dell.com' },
    ];

    searchTests.forEach(({ name, query, data }) => {
        it(`verifies that user can search by ${name}`, () => {
            homePage.visit();
            homePage.search(`${query}${data}`);
            homePage.verifyPostResults();
        });
    });


    it('verifies that the app is not crashing when searching invalid values', () => {
        homePage.visit();
        cy.wait(2000);
        homePage.search('easdladsdasl');
        homePage.verifyThatNoResultsMessageIsDisplayed();
        homePage.clearSearchedText();
        cy.wait(2000);
        homePage.search('enriched.cyber_risk.value: >22');
        homePage.verifyThatNoResultsMessageIsDisplayed();
        homePage.clearSearchedText();
        cy.wait(2000);
        homePage.search('title:Bosnia');
        homePage.verifyPostResults();
    });
    

    it('verifies that user can use templates', () => {
        homePage.navigateToLibrary();
        homePage.selectRandomTemplate();
        homePage.getTemplateQuery().then(templateValue => {
            homePage.getQueryValue().should('eq', templateValue);
        });
    });
});

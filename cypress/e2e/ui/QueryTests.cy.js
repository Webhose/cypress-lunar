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
        { name: 'Thread Participants Count', query: 'thread.participants_count:', data: '>7000' },
        { name: 'Cyber Risk', query: 'enriched.cyber_risk.value:', data: '>=10' },
        { name: 'Enriched Domain', query: 'enriched.domain.value:', data: '*' },
        { name: 'Enriched Email', query: 'enriched.email.value:', data: 'almir.rekanovic1996@gmail.com' },
        { name: 'Enriched Credit Card', query: 'enriched.credit_card.value:', data: '4266841647704152' },
        { name: 'Enriched Wallet ID', query: 'enriched.wallet_id.value:', data: '*' },
        { name: 'Enriched IP', query: 'enriched.ip.value:', data: '*' },
        { name: 'Enriched CVE', query: 'enriched.cve.value:', data: '*' },
        { name: 'Enriched Location', query: 'enriched.location.value:', data: '*' },
        { name: 'Enriched Phone', query: 'enriched.phone.value:', data: '+17136695022' },
        { name: 'SSN', query: 'enriched.ssn.value:', data: '*' }
    ];

    searchTests.forEach(({ name, query, data }) => {
        it(`verifies that user can search by ${name}`, () => {
            homePage.visit();
            homePage.search(`${query}${data}`);
            homePage.verifyPostResults();
        });
    });


    it('verifies that the app is not crashing when searching invalid values', () => {
        homePage.performSearch('easdla,dsdasl]');
        homePage.verifySyntaxErrorMessageIsDisplayed();
        homePage.clearSearch();
        homePage.performSearch(`${Cypress.env('ENRICHED_CYBER_RISK_SEARCH')}>22`);
        homePage.verifyNoResultsMessageIsDisplayed();
        homePage.clearSearch();
        homePage.performSearch(`${Cypress.env('TITLE_SEARCH')}${Cypress.env('BOSNIA')}`);
        homePage.verifyResultsAreDisplayed();
    });

    it('verifies that user can filter results by category', () => {
        homePage.performSearch(Cypress.env('CRYPTO'));
        homePage.getResultsCount().then(initialResults => {
            ['THREAD_INTELLIGENCE', 'FINANCIAL', 'ILLICIT', 'BRAND', 'EXTREMISM'].forEach(category => {
                homePage.selectCategory(Cypress.env(category));
                homePage.getResultsCount().should('be.lte', initialResults);
            });
        });
    });

    it('verifies that user can use templates', () => {
        homePage.navigateToLibrary();
        homePage.selectRandomTemplate();
        homePage.getTemplateQuery().then(templateValue => {
            homePage.runTemplate();
            homePage.getQueryValue().should('eq', templateValue);
        });
    });
});

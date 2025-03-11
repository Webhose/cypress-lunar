import LoginPage from '../../../cypress/pages/LoginPage';
import HomePage from '../../../cypress/pages/HomePage';

const loginPage = new LoginPage();
const homePage = new HomePage();


describe('Query Tests', () => {
    beforeEach(() => {
        loginPage.login(Cypress.env('email'), Cypress.env('password'));
    });

    const searchTests = [
        { name: 'Title', query: 'TITLE_SEARCH', data: 'BOSNIA' },
        { name: 'Thread Title', query: 'THREAD_TITLE_SEARCH', data: 'BOSNIA' },
        { name: 'Domain', query: 'SITE_DOMAIN_SEARCH', data: 'FOUR_CHAN_DOMAIN' },
        { name: 'Enriched Domain Value', query: 'ENRICHED_DOMAIN_SEARCH', data: 'IBM_DOMAIN' },
        { name: 'Thread Section Title', query: 'THREAD_SECTION_TITLE_SEARCH', data: 'ALL' },
        { name: 'Thread Site Section', query: 'THREAD_SITE_SECTION_SEARCH', data: 'ALL' },
        { name: 'Thread URL', query: 'THREAD_URL_SEARCH', data: 'ALL' },
        { name: 'Thread Published', query: 'THREAD_PUBLISHED_SEARCH', data: 'ALL' },
        { name: 'Thread Participants Count', query: 'THREAD_PARTICIPANTS_COUNT_SEARCH', data: '>7000' },
        { name: 'Cyber Risk', query: 'ENRICHED_CYBER_RISK_SEARCH', data: '>=10' },
        { name: 'Enriched Domain', query: 'ENRICHED_DOMAIN_SEARCH', data: 'ALL' },
        { name: 'Enriched Email', query: 'ENRICHED_EMAIL_SEARCH', data: 'ALL' },
        { name: 'Enriched Credit Card', query: 'ENRICHED_CREDIT_CARD_SEARCH', data: 'ALL' },
        { name: 'Enriched Wallet ID', query: 'ENRICHED_WALLET_ID_SEARCH', data: 'ALL' },
        { name: 'Enriched IP', query: 'ENRICHED_IP_SEARCH', data: 'ALL' },
        { name: 'Enriched CVE', query: 'ENRICHED_CVE_SEARCH', data: 'ALL' },
        { name: 'Enriched Location', query: 'ENRICHED_LOCATION_SEARCH', data: 'ALL' },
        { name: 'Enriched Phone', query: 'ENRICHED_PHONE_SEARCH', data: 'ALL' },
        { name: 'SSN', query: 'ENRICHED_SSN_SEARCH', data: 'ALL' }
    ];

    searchTests.forEach((test) => {
        it(`verifies that user can search by ${test.name}`, () => {
            homepage.search(`${Cypress.env(test.query)}${Cypress.env(test.data)}`);
            homePage.getResultsCount().then((numberOfUIResults) => {
                expect(numberOfUIResults).to.be.at.least(1, "We don't have any results!");
            });
            
        });
    });

    it('verifies that the app is not crashing when searching invalid values', () => {
        homePage.performSearch('easdla,dsdasl]');
        cy.verifySyntaxErrorMessageIsDisplayed();
        cy.clearSearch();
        cy.performSearch(`${Cypress.env('ENRICHED_CYBER_RISK_SEARCH')}>22`);
        cy.verifyNoResultsMessageIsDisplayed();
        cy.clearSearch();
        cy.performSearch(`${Cypress.env('TITLE_SEARCH')}${Cypress.env('BOSNIA')}`);
        cy.verifyResultsAreDisplayed();
    });

    it('verifies that user can filter results by category', () => {
        cy.performSearch(Cypress.env('CRYPTO'));
        cy.getResultsCount().then(initialResults => {
            ['THREAD_INTELLIGENCE', 'FINANCIAL', 'ILLICIT', 'BRAND', 'EXTREMISM'].forEach(category => {
                cy.selectCategory(Cypress.env(category));
                cy.getResultsCount().should('be.lte', initialResults);
            });
        });
    });

    it('verifies that user can use templates', () => {
        cy.navigateToLibrary();
        cy.selectRandomTemplate();
        cy.getTemplateQuery().then(templateValue => {
            cy.runTemplate();
            cy.getQueryValue().should('eq', templateValue);
        });
    });
});

const userName = Cypress.env('email');
const password = Cypress.env('password');

const formatDate = () => {
    const date = new Date();
    return `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`;
};

describe('Domain Risk Tests', () => {
    beforeEach(() => {
        cy.login(userName, password);
        HomePage.navigateToDomainRiskPage();
    });

    it('should add a domain', () => {
        const domain = 'example.com';
        DomainRiskPage.addDomain(domain);
        
        DomainRiskPage.getNameOfLastAddedDomain().should('eq', domain);
        DomainRiskPage.getDateOfLastAddedDomain().should('eq', formatDate());
    });

    it('should cancel adding a domain', () => {
        const domain = 'sdasd.com';
        DomainRiskPage.cancelAddDomain(domain);
        
        DomainRiskPage.getNameOfLastAddedDomain().should('not.eq', domain);
    });

    it('should play the last added domain', () => {
        DomainRiskPage.playDomain();
        // Additional validation logic if required
    });

    it('should delete the last added domain', () => {
        DomainRiskPage.getNameOfLastAddedDomain().then((lastDomain) => {
            DomainRiskPage.deleteLastAddedDomain();
            DomainRiskPage.getNameOfLastAddedDomain().should('not.eq', lastDomain);
        });
    });

    it('should search for a domain', () => {
        const domain = 'example.com';
        DomainRiskPage.addDomain(domain);
        
        DomainRiskPage.searchDomain(domain);
        DomainRiskPage.getNameOfLastAddedDomain().should('eq', domain);
        
        DomainRiskPage.clearSearch();
        DomainRiskPage.deleteLastAddedDomain();
    });

    it('should display an error for an invalid domain', () => {
        const invalidDomain = 'invalid_domain';
        DomainRiskPage.addDomain(invalidDomain);
        DomainRiskPage.isErrorDisplayed().should('be.true');
    });
});
class DomainRiskPage {
    visit() {
        cy.visit('/domain-risk');
    }

    addDomain(domain) {
        cy.get('#dashboard-add-domain-main').click();
        cy.get('#dashboard-right-panel-input').type(domain);
        cy.get('#dashboard-right-panel-add-btn').click();
    }

    cancelAddDomain(domain) {
        cy.get('#dashboard-add-domain-main').click();
        cy.get('#dashboard-right-panel-input').type(domain);
        cy.get('#dashboard-right-panel-cancel-btn').click();
    }

    playDomain() {
        cy.get('#icon-button-row-link-0').click();
    }

    getDateOfLastAddedDomain() {
        return cy.get('#dashboard-table-cell-1-row-0_creationDate').invoke('text');
    }

    getNameOfLastAddedDomain() {
        return cy.get('#dashboard-table-cell-0-row-0_domain').invoke('text');
    }

    deleteLastAddedDomain() {
        cy.get('#icon-button-row-delete-0').click();
        cy.get('#delete-modal-delete-btn').click();
    }

    isErrorDisplayed() {
        return cy.contains('Invalid Domain').should('be.visible');
    }

    searchDomain(domain) {
        cy.get('#search-bar-input').type(domain);
    }

    goBackToDomainRiskPage() {
        cy.contains('Back').click();
    }

    clearSearch() {
        cy.get("[class*='search-bar_deleteIcon']").click();
    }
}
export default new DomainRiskPage();
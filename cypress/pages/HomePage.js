class HomePage {
    visit() {
        cy.visit('/home');
    }

    search(searchValue) {
        cy.get("textarea[placeholder='Search']").type(searchValue);
        cy.contains('Run').click();
    }

    verifyNoResultsMessage() {
        cy.contains('No results found. Try again later or refine your query.').should('be.visible');
    }

    verifySyntaxErrorMessage() {
        cy.contains('SyntaxError').should('be.visible');
    }

    clearSearchedText() {
        cy.get('.clear-icon-container').click();
    }

    filterByTime(timeValue) {
        cy.get('#time-picker').click();
        cy.get(`#${timeValue.toLowerCase().replace(' ', '')}`).click();
        cy.contains('Run').click();
    }

    openGraphMenu() {
        cy.get('.cursor-pointer').click();
    }

    filterBySite() {
        cy.get('.dscPieChart__legendLabel').first().click();
        cy.contains('Run').click();
    }

    excludeFilter() {
        cy.get('.remove').click();
        cy.contains('Run').click();
    }

    selectRecentQueriesButton() {
        cy.get('.px-2.rounded-4.ratio-1').click();
    }

    searchForPreviousQuery(query) {
        cy.contains(query).click();
        cy.contains('Run').click();
    }

    selectCategory(category) {
        cy.get('#categories-filter-popover-trigger').click();
        cy.contains(category).click();
        cy.get('#categories-filter-popover-trigger').click();
    }

    navigateToLibrary() {
        cy.get('#sidebar-Library').click();
    }

    navigateToRecentQueries() {
        cy.get('#recent-queries-button').click();
    }

    selectPreviousQueryOnLibrary(query) {
        cy.contains('Recent').click();
        cy.contains(query).parent().find('button').click();
    }

    selectRandomTemplate() {
        cy.get('.template.pointer').then(($templates) => {
            const randomIndex = Math.floor(Math.random() * $templates.length);
            cy.wrap($templates[randomIndex]).click();
        });
    }

    runTemplate() {
        cy.contains('Run Template').click();
    }

    getQueryValue() {
        return cy.get("textarea[placeholder='Search']").invoke('text');
    }

    verifyAdditionalInfoIsDisplayed() {
        cy.get('.table-row .pointer').first().click();
        cy.contains('Additional Info').should('be.visible');
    }

    translatePost() {
        cy.get('#translation_button').first().click();
    }

    isPostTranslated(translation) {
        return cy.contains(translation).should('be.visible');
    }
}

export default new HomePage();
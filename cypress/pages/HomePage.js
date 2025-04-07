import BasePage from "./BasePage";

class HomePage extends BasePage {
    visit() {
        cy.visit('/discover');
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
            cy.wrap($templates).eq(randomIndex).click();
        });
    }    

    runTemplate() {
        cy.contains('Run Template').click();
    }

    getQueryValue() {
        cy.get("textarea[placeholder='Search']").click();
        cy.wait(2000);
        return cy.get("textarea[placeholder='Search']").invoke('val');
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

    openDynaminFilters() {
        cy.get("button.collapse-button").click();
    }

    verifyPostResults() {
        cy.get('li.postResult').should('have.length.greaterThan', 1);
    }

    navigateToAlerts() {
        cy.get('#sidebar-Alerts', { timeout: 10000 }).should('be.visible').click();
    }
    
    getTemplateQuery() {
        return cy.get("div h4:contains('Preview') + span", { timeout: 5000 })
            .should('be.visible')
            .invoke('text')
            .then((text) => {
                const template = text.trim();
                expect(template).not.to.be.empty; // Ensure it's not empty
                return template; // Ensure the text is returned correctly
            });
    }
    

    getTotalResultsNumber() {
        return cy.get("div.results__headerRight.gap-3", { timeout: 5000 })
            .should('be.visible')
            .invoke('text')
            .then((text) => {
                const match = text.match(/of (\d{1,3}(,\d{3})*)(\.\d+)?/);
                if (match) {
                    const count = parseInt(match[1].replace(/,/g, ""), 10);
                    cy.log("Number after 'of': " + count);
                    return count;
                } else {
                    cy.log("Pattern not found in the text.");
                    return 0;
                }
            });
    }

    verifyThatNoResultsMessageIsDisplayed() {
        return cy.contains('h4', 'No results found. Try again later or refine your query.', { timeout: 5000 })
            .should('be.visible');
    }    
   
    getSearchTotalResults() {
        return cy.get('#search-total-results-counter', { timeout: 10000 })
          .invoke('text')
          .then((text) => {
            const trimmedText = text.trim();
            const firstLine = trimmedText.split('\n')[0];
            const match = firstLine.match(/of\s([\d,]+)/i);
            if (match && match[1]) {
              const total = parseInt(match[1].replace(/,/g, ''), 10);
              cy.log(`Total search results on home: ${total}`);
              return total;
            } else {
              throw new Error('Could not extract total from text: ' + firstLine);
            }
          });
    }
      
    openNotification(){
        cy.get('#notifications-sheet-trigger', { timeout: 10000 })
          .click();
    }
}

export default HomePage;
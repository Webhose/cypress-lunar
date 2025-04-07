import BasePage from "./BasePage";


class DomainRiskPage extends BasePage {
    visit() {
        cy.visit('/dashboard');
    }
    addDomain(domain) {
        cy.get('#dashboard-add-domain-main', { timeout: 10000 }).should('be.visible').then(($el) => {
          if ($el.is(':visible')) {
            cy.wrap($el).click();
          } else {
            cy.get('#empty-state-add-btn', { timeout: 10000 }).click();
          }
        });
        
        cy.get('#dashboard-right-panel-input', { timeout: 10000 }).type(domain);
        cy.get('#dashboard-right-panel-add-btn', { timeout: 10000 }).click();
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
        return cy.get("#dashboard-table-cell-0-row-0_domain", { timeout: 10000 }) // Wait up to 10 seconds
            .should("be.visible")  // Ensures the element is fully loaded and visible
            .invoke("text");
    }
    
    deleteLastAddedDomain() {
        cy.get('#icon-button-row-delete-0', { timeout: 10000 }).then(($deleteButton) => {
          if ($deleteButton.length) {
            // If the delete button exists, click it
            cy.wrap($deleteButton).click();
            cy.get('#delete-modal-delete-btn').click();
          } else {
            // If the delete button does not exist, log a message
            cy.log('Nothing to delete');
          }
        });
      }
      
    isErrorDisplayed() {
        return cy.contains('span', 'Invalid Domain')
        .should('be.visible');
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

    verifyQueryInSameTab(expectedQuery) {
        cy.url().should("include", "/search");
        cy.get("textarea").should("have.text", expectedQuery);
    }


    clickSection(section) {
        cy.get(section).click();
    }

    clickDataBreaches() {
        cy.contains('p', 'Data Breaches', { timeout: 10000 }).click();
      }
    
      clickStealerLogs() {
        cy.contains('p', 'Stealer Logs', { timeout: 10000 }).click();
      }
    
      clickDarkWeb() {
        cy.contains('p', 'Dark Web', { timeout: 10000 }).click();
      }
    
      clickFoundInStealerLogs() {
        cy.contains('p', 'Found in stealer logs', { timeout: 10000 }).click();
      }

}
export default DomainRiskPage;
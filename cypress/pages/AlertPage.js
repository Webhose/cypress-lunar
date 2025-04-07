import BasePage from "./BasePage";

class AlertsPage extends BasePage {
    visit() {
        cy.visit('/alerts');
    }

    createAlert(name) {
        cy.wait(2000);
        cy.get("#new-alert-trigger", { timeout: 10000 }).click();
        cy.get("#new-alert-next", { timeout: 10000 }).click();
        cy.get('input[placeholder="Give your alert a name"]', { timeout: 10000 }).should('be.visible').type(name);
        cy.get("#new-alert-next", { timeout: 10000 }).click();
        cy.get("#new-alert-next", { timeout: 10000 }).click();
    }

    verifyAlertIsCreated(alertName) {
        cy.contains('span', alertName, { timeout: 10000 }).should('have.length.greaterThan', 0);
      }      

      deleteAlert() {
        cy.get('svg[data-sentry-component="ThreeDotsIcons"]', { timeout: 10000 })
          .then(($icons) => {
            // If there are multiple icons, pick a random one
            const randomIndex = Math.floor(Math.random() * $icons.length);
            const randomIcon = $icons.eq(randomIndex);
      
            // Click on the selected random icon
            cy.wrap(randomIcon).click();
          });
      
        cy.contains('button', 'Delete', { timeout: 10000 }).click();
        cy.get('#warning-dialog-continue-button', { timeout: 10000 }).click();
        cy.wait(2000);
      }

      playAlert() {
        cy.get('.play-button', { timeout: 10000 })
          .should('be.visible')
          .first()
          .click();
      }
      
      playNotification() {
        cy.get('#notifications-sheet-trigger', { timeout: 10000 })
          .click();
      
        cy.get('[id^="notification-"]', { timeout: 10000 }) 
          .should('be.visible')
          .first()
          .click();
      }
      
      getDocsCount() {
        return cy.get('[id^="notification-docs-found-counter"]', { timeout: 10000 })
          .first()
          .invoke('text')
          .then((text) => {
            const trimmedText = text.trim();
            const match = trimmedText.match(/Found\s([\d,]+)\sdocuments/i);
            if (match && match[1]) {
              const count = parseInt(match[1].replace(/,/g, ''), 10);
              cy.log(`Docs count from alert: ${count}`);
              return count;
            } else {
              throw new Error('Could not extract document count from text: ' + trimmedText);
            }
          });
      }
}
  
export default AlertsPage;

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
        cy.contains('span', alertName, { timeout: 10000 }).should('be.visible');
    }

    deleteAlert() {
        cy.get('svg[data-sentry-component="ThreeDotsIcons"]', { timeout: 10000 }).click();
        cy.contains('button', 'Delete', { timeout: 10000 }).click();
        cy.get('#warning-dialog-continue-button', { timeout: 10000 }).click();
        cy.wait(2000);
    }
}
  
export default AlertsPage;

import BasePage from "./BasePage";

class AlertsPage extends BasePage{
    visit() {
        cy.visit('/alerts');
    }

    createAlert(query, name) {
        cy.contains('Create Alert').click();
        cy.get("textarea.step__input").click().type(query);
        cy.contains('Next').click();
        cy.get("input.step__input").click().type(name);
        cy.contains('Next').click();
        cy.contains('Done').click();
    }

    verifyAlertIsCreated(alertName) {
        cy.contains(alertName).should('be.visible');
    }
}
export default new AlertsPage();
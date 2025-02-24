import BasePage from "./BasePage";

class LoginPage {
    visit() {
        cy.visit('/login');
    }

    enterUsername(username) {
        cy.get('#username').type(username);
    }

    enterPassword(password) {
        cy.get('#password').type(password);
    }

    submit() {
        cy.get('button[type="submit"]').click();
    }
}

export default LoginPage; 
import BasePage from "./BasePage";

class LoginPage extends BasePage {
    visit() {
        cy.visit('/login');
    }

    enterUsername(username) {
        cy.get('#exampleInputEmail1').type(username);
    }

    enterPassword(password) {
        cy.get('#exampleInputPassword1').type(password);
    }

    submit() {
        cy.get('button[type="submit"]').click();
    }
}

export default LoginPage;

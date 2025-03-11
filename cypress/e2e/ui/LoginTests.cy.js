
import LoginPage from '../../../cypress/pages/LoginPage';

const loginPage = new LoginPage();

describe('Login Tests', () => {
    const userName = Cypress.env('email');
    const password = Cypress.env('password');
    const nameOfUser = Cypress.env('mainUserName');

    beforeEach(() => {
        loginPage.visit();
    });

    it('should allow the user to login successfully', () => {
        loginPage.enterUsername(userName);
        loginPage.enterPassword(password);
        loginPage.submit();
    });
});


const { defineConfig } = require('cypress');

module.exports = defineConfig({
    e2e: {
        baseUrl: 'https://lunar-staging.webz.io/login',
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
        supportFile: false, // disable support file
    },
    env: {
        email: 'test@example.com',
        password: 'password123',
        mainUserName: 'Test User'
    }
});

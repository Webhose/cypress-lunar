
const { defineConfig } = require('cypress');

module.exports = defineConfig({
    e2e: {
        baseUrl: 'https://lunar-staging.webz.io',
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
        supportFile: false,
        projectId: "g2zyjw", // disable support file
    },
    env: {
        email: 'almir@webz.io',
        password: '19Rek@.river.bog96',
        mainUserName: 'almir@webz.io',
        viewportWidth: 1920,  
        viewportHeight: 1080 
    }
});

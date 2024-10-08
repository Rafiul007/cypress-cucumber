const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      return config;
    },
    baseUrl: 'https://your-base-url.com', // Replace with your base URL
    specPattern: 'cypress/e2e/**/*.feature',
    supportFile: 'cypress/support/e2e.js',  // Make sure this path is correct
    video: true,
    chromeWebSecurity: false,
  },
});

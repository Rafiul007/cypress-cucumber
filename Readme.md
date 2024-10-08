## install
npm install cypress @badeball/cypress-cucumber-preprocessor
npm install --save-dev cypress-cucumber-preprocessor cucumber

## cypress.config.js file
// cypress.config.js
const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor');
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', createBundler({
        plugins: [createEsbuildPlugin(config)],
      }));

      addCucumberPreprocessorPlugin(on, config);
      return config;
    },
    specPattern: 'cypress/e2e/**/*.feature',
    baseUrl: 'https://your-base-url.com'  // Set the default base URL
  },
});

## Folder structure

cypress/
├── e2e/
│   ├── features/
│   │   ├── registration.feature
│   │   ├── login.feature
│   ├── step_definitions/
│   │   ├── registrationStepDefinitions.js
│   │   ├── loginStepDefinitions.js
├── support/
│   ├── commands.js
│   ├── index.js
├── pages/
│   ├── registrationPage.js
│   ├── loginPage.js
cypress.config.js


### optional: for typescript project tsconfig.json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "lib": ["es2015", "dom"],
    "types": ["cypress", "@badeball/cypress-cucumber-preprocessor"]
  },
  "include": ["cypress/**/*.ts"]
}




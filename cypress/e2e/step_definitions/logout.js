import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import LogoutPage from '../../pages/LogoutPage';

Given('I am logged in as {string}', (email) => {
  cy.login(email); // Assume you have a custom command to log in
});

When('I press {string}', (buttonText) => {
  if (buttonText === 'Logout') {
    LogoutPage.logout();
  }
});

Then('I should be redirected to the login page', () => {
  cy.url().should('include', '/login'); // Change to your login page URL
});

Then('I should see {string}', (message) => {
  cy.contains(message).should('be.visible');
});

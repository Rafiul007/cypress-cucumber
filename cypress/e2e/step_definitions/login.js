import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import LoginPage from '../../pages/LoginPage';

Given('I visit the login page', () => {
  LoginPage.visit();
});

When('I fill in {string} with {string}', (field, value) => {
  if (field === 'email') {
    LoginPage.fillEmail(value);
  } else if (field === 'password') {
    LoginPage.fillPassword(value);
  }
});

When('I press {string}', (buttonText) => {
  if (buttonText === 'Submit') {
    LoginPage.submit();
  }
});

Then('I should be redirected to the dashboard', () => {
  cy.url().should('include', '/dashboard');  // Change URL to match your app
});

Then('I should see {string}', (text) => {
  cy.contains(text).should('be.visible');
});

import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import RegistrationPage from '../../pages/RegistrationPage';

Given('I visit the registration page', () => {
  RegistrationPage.visit();
});

When('I fill in {string} with {string}', (field, value) => {
  switch (field) {
    case 'first name':
      RegistrationPage.fillFirstName(value);
      break;
    case 'last name':
      RegistrationPage.fillLastName(value);
      break;
    case 'email':
      RegistrationPage.fillEmail(value);
      break;
    case 'password':
      RegistrationPage.fillPassword(value);
      break;
    case 'confirm password':
      RegistrationPage.fillConfirmPassword(value);
      break;
  }
});

When('I press {string}', (buttonText) => {
  if (buttonText === 'Submit') {
    RegistrationPage.submit();
  }
});

Then('I should be redirected to the welcome page', () => {
  cy.url().should('include', '/welcome');
});

Then('I should see {string}', (message) => {
  cy.contains(message).should('be.visible');
});

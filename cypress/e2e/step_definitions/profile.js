import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import ProfilePage from '../../pages/ProfilePage';

Given('I am logged in as {string}', (email) => {
  cy.login(email); // Assume you have a custom command to log in
});

When('I visit the profile page', () => {
  ProfilePage.visit();
});

Then('I should see my profile information with {string} and {string}', (firstName, email) => {
  ProfilePage.getProfileInfo().then((info) => {
    expect(info.firstName).to.equal(firstName);
    expect(info.email).to.equal(email);
  });
});

When('I change {string} to {string}', (field, newValue) => {
  if (field === 'first name') {
    ProfilePage.updateFirstName(newValue);
  }
});

When('I press {string}', (buttonText) => {
  if (buttonText === 'Save') {
    ProfilePage.save();
  } else if (buttonText === 'Delete Account') {
    ProfilePage.deleteAccount();
  }
});

Then('I should see {string}', (message) => {
  cy.contains(message).should('be.visible');
});

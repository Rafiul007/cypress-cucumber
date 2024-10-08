import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import SearchPage from '../../pages/SearchPage';

Given('I visit the homepage', () => {
  SearchPage.visit();
});

When('I fill in {string} with {string}', (field, value) => {
  if (field === 'search bar') {
    SearchPage.fillSearchTerm(value);
  }
});

When('I press {string}', (buttonText) => {
  if (buttonText === 'Search') {
    SearchPage.submitSearch();
  }
});

Then('I should see results for {string}', (searchTerm) => {
  cy.contains(searchTerm).should('be.visible');
});

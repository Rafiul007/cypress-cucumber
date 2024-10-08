Feature: Search Functionality

  Scenario: Search for a valid product
    Given I visit the homepage
    When I fill in "search bar" with "laptop"
    And I press "Search"
    Then I should see results for "laptop"

  Scenario: Search for a product that does not exist
    Given I visit the homepage
    When I fill in "search bar" with "unicorn plush toy"
    And I press "Search"
    Then I should see "No results found"

  Scenario: Search with an empty query
    Given I visit the homepage
    When I press "Search"
    Then I should see "Please enter a search term"

Feature: User Registration

  Scenario: Successful Registration
    Given I visit the registration page
    When I fill in "first name" with "John"
    And I fill in "last name" with "Doe"
    And I fill in "email" with "john.doe@example.com"
    And I fill in "password" with "password123"
    And I fill in "confirm password" with "password123"
    And I press "Submit"
    Then I should be redirected to the welcome page
    And I should see "Registration Successful"

  Scenario: Registration with already registered email
    Given I visit the registration page
    When I fill in "first name" with "Jane"
    And I fill in "last name" with "Smith"
    And I fill in "email" with "john.doe@example.com"
    And I fill in "password" with "password123"
    And I fill in "confirm password" with "password123"
    And I press "Submit"
    Then I should see "Email already registered"

  Scenario: Registration with mismatched passwords
    Given I visit the registration page
    When I fill in "first name" with "Alex"
    And I fill in "last name" with "Johnson"
    And I fill in "email" with "alex.johnson@example.com"
    And I fill in "password" with "password123"
    And I fill in "confirm password" with "password456"
    And I press "Submit"
    Then I should see "Passwords do not match"

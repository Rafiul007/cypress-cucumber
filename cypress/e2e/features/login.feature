Feature: User Login

  Scenario: Successful Login with valid credentials
    Given I visit the login page
    When I fill in "email" with "john.doe@example.com"
    And I fill in "password" with "password123"
    And I press "Submit"
    Then I should be redirected to the dashboard
    And I should see "Welcome, John Doe"

  Scenario: Unsuccessful Login with invalid credentials
    Given I visit the login page
    When I fill in "email" with "wrong.email@example.com"
    And I fill in "password" with "wrongpassword"
    And I press "Submit"
    Then I should see "Invalid credentials"

  Scenario: Login with missing credentials
    Given I visit the login page
    When I press "Submit"
    Then I should see "Please fill out this field"

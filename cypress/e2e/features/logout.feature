Feature: User Logout

  Scenario: Successful Logout
    Given I am logged in as "john.doe@example.com"
    When I press "Logout"
    Then I should be redirected to the login page
    And I should see "You have been logged out"

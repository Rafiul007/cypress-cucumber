Feature: User Profile Management

  Scenario: View Profile
    Given I am logged in as "john.doe@example.com"
    When I visit the profile page
    Then I should see my profile information with "John Doe" and "john.doe@example.com"

  Scenario: Update Profile Information
    Given I am logged in as "john.doe@example.com"
    When I visit the profile page
    And I change "first name" to "Johnny"
    And I press "Save"
    Then I should see "Profile updated successfully"
    And I should see "Johnny" on my profile

  Scenario: Delete Account
    Given I am logged in as "john.doe@example.com"
    When I visit the profile page
    And I press "Delete Account"
    Then I should see a confirmation dialog
    And I confirm deletion
    Then I should be redirected to the homepage
    And I should see "Account deleted successfully"

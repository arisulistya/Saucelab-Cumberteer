Feature: Login to App

Scenario: Login as valid user
    Given I am on the Login page
    When I input valid user credentials and click login
    Then I should see correct dashboard url

Scenario: Login as invalid user
    Given I am on the Login page
    When I input invalid user credentials and click login
    Then I should see validation message
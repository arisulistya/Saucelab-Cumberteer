Feature: Login to App

Scenario: Success login as an User
    Given I am on the "<loginUrl>" page
    When I login with "<username>" and "<password>"
    Then I should redirected to "<dashboardUrl>"
    Then I should see correct credentials on the dashboard page

Examples:
    | loginUrl                  | username               | password  | dashboardUrl |
    | https://m.internmatch.io/ | alvianto.w@gada.io     | Eaglesp01.| home         |
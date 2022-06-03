# cypress/integration/duckduckgo/duckduckgo.feature
Feature: duckduckgo.com
  Scenario: visiting the frontpage
    When I visit the webpage
    Then I should see the webpage

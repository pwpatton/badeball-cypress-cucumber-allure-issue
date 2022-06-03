// cypress/integration/duckduckgo.ts
import { When, Then } from '@badeball/cypress-cucumber-preprocessor';

When("I visit the webpage", () => {
  cy.visit("https://www.duckduckgo.com");
});

Then("I should see the webpage", () => {
  cy.log("I should see duckduckgo.com");
  cy.get("input").should(
    "have.attr",
    "placeholder",
    "Search the web without being tracked"
  );
});

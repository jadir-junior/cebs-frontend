/// <reference types="Cypress" />

declare namespace Cypress {
  interface Chainable<Subject = any> {
    /**
     * Custom command to ... add yout description here
     * @example cy.clickOnMyJourneyInCandidateCabinet()
     */

    goToLogin(): Chainable<null>
  }
}

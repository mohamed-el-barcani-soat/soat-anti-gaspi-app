import config from "../../src/config"

describe('empty spec', () => {
  it('passes', () => {
    cy.visit(config.APP_URL)
  })
})
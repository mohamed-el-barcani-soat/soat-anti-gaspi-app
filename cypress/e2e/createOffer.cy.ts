import config from "../../src/config"

describe("create offer page*", () => {
    it("should create annonce after after fill all input", () => {
        cy.visit(`${config.APP_URL}/createOffer`)
        cy.contains('Créer une annonce')
    })
})
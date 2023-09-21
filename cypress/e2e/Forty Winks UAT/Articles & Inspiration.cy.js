describe('Articles & Inspiration', () => {
    it('Checking the Articles & Inspiration page', () => {
        cy.visit('https://uat.fortywinks.com.au/').viewport(1280, 720);

        cy.get('.z-100 > .gap-3 > :nth-child(2) > a').click();

        cy.get(':nth-child(2) > .Tabs__tab').click();

        cy.get('.gap-3 > :nth-child(2) > a').click();

        cy.get(':nth-child(3) > .Tabs__tab').click();

        cy.get('.gap-3 > :nth-child(2) > a').click()

        cy.get(':nth-child(4) > .Tabs__tab').click();

    })
})
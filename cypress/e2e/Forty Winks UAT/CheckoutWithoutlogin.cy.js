describe('bedMATCH', () => {
    it('checking the bedMATCH Page', () => {
        cy.visit('https://uat.fortywinks.com.au/products/climate-cool-colorado-plush-qb-mattress/').viewport(1280, 720);

        cy.contains('Add 1 item to Cart($5,299)').click();
    })
})
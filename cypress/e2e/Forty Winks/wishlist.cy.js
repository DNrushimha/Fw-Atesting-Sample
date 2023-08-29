describe('bedMATCH', () => {
    it('checking the bedMATCH Page', () => {
        cy.visit('https://uat.fortywinks.com.au/').viewport(1280, 720);


        cy.get('span.items-center').click();


        cy.get(':nth-child(1) > .inputField').type('anonymous@gmail.com');
        cy.get(':nth-child(2) > .inputField').type('Devulapalli@123');

        cy.get('form > :nth-child(4) > .flex').click();


        cy.get(':nth-child(1) > .CategoryTile > a > .relative > span > .transition-all').click();

        cy.visit('https://uat.fortywinks.com.au/mattresses/').viewport(1280, 720);

        cy.visit('https://uat.fortywinks.com.au/products/climate-cool-colorado-plush-qb-mattress/').viewport(1280, 720);

        cy.get('.gap-6 > .px-4').click();


        cy.get('span.items-center').click();

        //Removing the product

        cy.contains('Remove product').click();

    })
})
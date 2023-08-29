describe('bedMATCH', () => {
    it('checking the bedMATCH Page', () => {
        cy.visit('https://uat.fortywinks.com.au/').viewport(1280, 720);

        //login

        cy.get('.justify-end > :nth-child(1)').click();

        cy.get(':nth-child(1) > .inputField').type('anonymous@gmail.com');
        cy.get(':nth-child(2) > .inputField').type('Devulapalli@123');

        cy.get('form > :nth-child(4) > .flex').click();

        //whishlist

        cy.get('span.items-center').click();

        cy.get('.gap-1').click();



        cy.get('._cart_menu_cart_menu-toggle__sJmqV').click();

    })
})
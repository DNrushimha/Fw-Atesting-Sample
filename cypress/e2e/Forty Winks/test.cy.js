describe('Test', () => {
    it('checking the Test Page', () => {
        cy.visit('https://uat.fortywinks.com.au/').viewport(1280, 720);

        cy.get(':nth-child(4) > a > ._header_menu_item_text__GAqZR > .cursor-pointer').dblclick();


        cy.contains('Bed Frames').click();

        //cy.get('[id="#\30  > .ProductItem_product__thumb__vnWzw"]').click();
        cy.contains('Kendall Bookend Bed Frame W/End Drawer, Vintage Oak')
        cy.contains('$624.50').click();

    })
})
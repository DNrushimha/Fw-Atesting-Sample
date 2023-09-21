describe('Sale', () => {
    it('checking the sale Page', () => {
        cy.visit('https://uat.fortywinks.com.au/').viewport(1280, 720);

        cy.get(':nth-child(6) > a > ._header_menu_item_text__GAqZR > .cursor-pointer').click();
    })
})
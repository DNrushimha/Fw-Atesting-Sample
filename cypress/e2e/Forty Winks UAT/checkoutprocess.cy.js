describe('Check out process', () => {
  it('checking the checkoutprocess', () => {
    cy.visit('https://uat.fortywinks.com.au/').viewport(1280, 720);

    cy.get(':nth-child(6) > a > ._header_menu_item_text__GAqZR').click();

    cy.contains('Sealy Mattress, Plush').click();

    cy.get("button.justify-center > span").click();

    //cy.contains('Product added to cart').should('be.visible');

    cy.contains('View & checkout').dblclick();


  })
})
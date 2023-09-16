describe('Cart', () => {
    it('Add item to cart on product page', () => {
        // Visit the product page
        cy.visit('https://uat.fortywinks.com.au/products/catalina-plush-kb-mattress/').viewport(1280, 720);

        // Wait for the "Add to Cart" button to be visible and then click it


        // You may need to add further assertions or interact with the cart as needed.
    });
});

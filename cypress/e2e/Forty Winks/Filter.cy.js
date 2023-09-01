describe('Filtering on Mattresses Page', () => {
    it('should apply filters', () => {
        // Visit the mattresses page and set viewport
        cy.visit('https://uat.fortywinks.com.au/mattresses/').viewport(1280, 720);

        // Filter by Size
        cy.get('#size-filter').click(); // Open size filter
        cy.get('#size-filter input[type="checkbox"]').check({ force: true }); // Check all checkboxes
        cy.get('#size-filter').click(); // Close size filter

        // Filter by Brand
        cy.get('#brand-filter').click(); // Open brand filter
        cy.get('#brand-filter input[type="checkbox"]').check({ force: true }); // Check all checkboxes
        cy.get('#brand-filter').click(); // Close brand filter

        // Filter by Range
        cy.get('#range-filter').click(); // Open range filter
        cy.get('#range-filter input[type="checkbox"]').check({ force: true }); // Check all checkboxes
        cy.get('#range-filter').click(); // Close range filter

        // Filter by Feel
        cy.get('#feel-filter').click(); // Open feel filter
        cy.get('#feel-filter input[type="checkbox"]').check({ force: true }); // Check all checkboxes
        cy.get('#feel-filter').click(); // Close feel filter

        // Filter by Category Name
        cy.get('#category-filter').click(); // Open category filter
        cy.get('#category-filter input[type="checkbox"]').check({ force: true }); // Check all checkboxes
        cy.get('#category-filter').click(); // Close category filter

        // Filter by Price
        cy.get('#price-filter').click(); // Open price filter
        cy.get('#price-filter input[type="radio"]').check({ force: true }); // Check a radio button
        cy.get('#price-filter').click(); // Close price filter

        // Wait for the page to update after filtering
        cy.wait(2000); // Adjust the wait time as needed

        // Add assertions here to verify that the filtering worked as expected
        // For example, you can verify that the displayed items match the selected filters
        cy.get('.product-list > .item').should('have.length.above', 0);
    });
});

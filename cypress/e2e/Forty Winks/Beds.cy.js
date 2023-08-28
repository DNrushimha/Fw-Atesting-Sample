describe('Beds & Frames Page Tests', () => {
    beforeEach(() => {
        cy.visit('https://uat.fortywinks.com.au/beds-frames/');
        cy.viewport(1280, 720);
    });

    it('should navigate to different categories', () => {
        cy.contains('Bed Bases').click();
        cy.get('.category-bed-bases', { timeout: 20000 }).should('be.visible');


        // Click on "Bed Frames" category
        cy.contains('Bed Frames').click();
        // Verify that the relevant content is visible
        cy.get('.category-bed-frames').should('be.visible');

        // Click on "Bed Heads" category
        cy.contains('Bed Heads').click();
        // Verify that the relevant content is visible
        cy.get('.category-bed-heads').should('be.visible');

        // Click on "Super King" size
        cy.contains('Super King').click();
        // Verify that the relevant products are visible
        cy.get('.products-for-super-king').should('be.visible');

        // Click on "King" size
        cy.contains('King').click();
        // Verify that the relevant products are visible
        cy.get('.products-for-king').should('be.visible');

        // Click on "Queen" size
        cy.contains('Queen').click();
        // Verify that the relevant products are visible
        cy.get('.products-for-queen').should('be.visible');

        // Click on "Double" size
        cy.contains('Double').click();
        // Verify that the relevant products are visible
        cy.get('.products-for-double').should('be.visible');

        // Click on "King Single" size
        cy.contains('King Single').click();
        // Verify that the relevant products are visible
        cy.get('.products-for-king-single').should('be.visible');

        // Click on "Long Single" size
        cy.contains('Long Single').click();
        // Verify that the relevant products are visible
        cy.get('.products-for-long-single').should('be.visible');

        // Click on "Single" size
        cy.contains('Single').click();
        // Verify that the relevant products are visible
        cy.get('.products-for-single').should('be.visible');

        // Click on "Coastal Beds" style
        cy.contains('Coastal Beds').click();
        // Verify that the relevant products are visible
        cy.get('.products-for-coastal-beds').should('be.visible');

        // Click on "Urban Beds" style
        cy.contains('Urban Beds').click();
        // Verify that the relevant products are visible
        cy.get('.products-for-urban-beds').should('be.visible');

        // Click on "Traditional Beds" style
        cy.contains('Traditional Beds').click();
        // Verify that the relevant products are visible
        cy.get('.products-for-traditional-beds').should('be.visible');

        // Click on "Scandi Beds" style
        cy.contains('Scandi Beds').click();
        // Verify that the relevant products are visible
        cy.get('.products-for-scandi-beds').should('be.visible');

        // Click on "Country Beds" style
        cy.contains('Country Beds').click();
        // Verify that the relevant products are visible
        cy.get('.products-for-country-beds').should('be.visible');

        // Click on "Glam Beds" style
        cy.contains('Glam Beds').click();
        // Verify that the relevant products are visible
        cy.get('.products-for-glam-beds').should('be.visible');

        // Click on "Mix & Match" style
        cy.contains('Mix & Match').click();
        // Verify that the relevant products are visible
        cy.get('.products-for-mix-match').should('be.visible');

        // Click on "Kids Beds" category
        cy.contains('Kids Beds').click();
        // Verify that the relevant content is visible
        cy.get('.category-kids-beds').should('be.visible');

        // Click on "Australian Made Beds" category
        cy.contains('Australian Made Beds').click();
        // Verify that the relevant content is visible
        cy.get('.category-australian-made-beds').should('be.visible');

        // Click on "Modern Australia Beds" category
        cy.contains('Modern Australia Beds').click();
        // Verify that the relevant content is visible
        cy.get('.category-modern-australia-beds').should('be.visible');

        // Click on "Crafted Luxe Beds" category
        cy.contains('Crafted Luxe Beds').click();
        // Verify that the relevant content is visible
        cy.get('.category-crafted-luxe-beds').should('be.visible');

        // Click on "Timber Mix & Match" category
        cy.contains('Timber Mix & Match').click();
        // Verify that the relevant content is visible
        cy.get('.category-timber-mix-match').should('be.visible');

        // Click on "Designer Upholstery" category
        cy.contains('Designer Upholstery').click();
        // Verify that the relevant content is visible
        cy.get('.category-designer-upholstery').should('be.visible');

        // Click on "Sleep Saver Beds" category
        cy.contains('Sleep Saver Beds').click();
        // Verify that the relevant content is visible
        cy.get('.category-sleep-saver-beds').should('be.visible');
    });
});

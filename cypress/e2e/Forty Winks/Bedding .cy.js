describe("bedding", () => {
    it("tests bedding", () => {
        cy.viewport(1125, 754);
        cy.visit("https://uat.fortywinks.com.au/").viewport(1280, 720);


        cy.visit("https://uat.fortywinks.com.au/bedding/").viewport(1280, 720);
        cy.get("div.CategoryTileItemCarousel div.swiper-slide-active img").click();

        cy.get("li:nth-of-type(2) span.font-normal").click();
        cy.get("div.CategoryTileItemCarousel div.swiper-slide-next img").click();

        cy.get("li:nth-of-type(2) span.font-normal").click();
        cy.get("div.CategoryTileItemCarousel div > div > div:nth-of-type(3) img").click();

        cy.get("li:nth-of-type(2) span.font-normal").click();
        cy.get("div.IconTileContainer > div > div > div:nth-of-type(1) img").click();

        cy.visit("https://uat.fortywinks.com.au/bedding/").viewport(1280, 720);
        cy.get("div.IconTileContainer div:nth-of-type(2) img").click();

        cy.visit("https://uat.fortywinks.com.au/bedding/").viewport(1280, 720);
        cy.get("div.IconTileContainer div:nth-of-type(3) img").click();

        cy.visit("https://uat.fortywinks.com.au/bedding/").viewport(1280, 720);
        cy.get("div > div > div:nth-of-type(4) img").click();

        cy.visit("https://uat.fortywinks.com.au/bedding/").viewport(1280, 720);
        cy.get("div.ArticleTileItemCarousel div.swiper-slide-active img").click();

        cy.visit("https://uat.fortywinks.com.au/bedding/").viewport(1280, 720);
        cy.get("div.ArticleTileItemCarousel div.swiper-slide-next img").click();

        cy.visit("https://uat.fortywinks.com.au/bedding/").viewport(1280, 720);
        cy.get("div.ArticleTileItemCarousel div:nth-of-type(3) img").click();

        cy.visit("https://uat.fortywinks.com.au/bedding/").viewport(1280, 720);
    });
});
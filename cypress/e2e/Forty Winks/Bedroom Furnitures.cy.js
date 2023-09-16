describe("Bedroom furniture", () => {
    it("tests Bedroom furniture", () => {

        cy.visit("https://uat.fortywinks.com.au/").viewport(1280, 720);


        cy.visit("https://uat.fortywinks.com.au/bedroom-furniture/").viewport(1280, 720);

        // Shop products

        cy.get("div:nth-of-type(3) div.swiper-slide-active img").click();
        cy.get("li:nth-of-type(2) span.font-normal").click();

        cy.get("div:nth-of-type(3) div.swiper-slide-next img").click();
        cy.get("li:nth-of-type(2) span.font-normal").click();

        cy.get("div:nth-of-type(3) div.swiper-slide-next img").click();
        cy.get("li:nth-of-type(2) span.font-normal").click();

        cy.get("div:nth-of-type(3) div.swiper-slide-active img").click();
        cy.get("li:nth-of-type(2) span.font-normal").click();

        cy.get("div:nth-of-type(3) div.swiper-slide-active img").click();
        cy.get("li:nth-of-type(2) span.font-normal").click();

        cy.get("div:nth-of-type(3) div.swiper-slide-next img").click();
        cy.get("li:nth-of-type(2) span.font-normal").click();

        cy.get("div:nth-of-type(3) div:nth-of-type(7) img").click();
        cy.get("li:nth-of-type(2) span.font-normal").click();

        cy.get("div:nth-of-type(3) div:nth-of-type(8) img").click();
        cy.get("li:nth-of-type(2) span.font-normal").click();

        //Shop Style
        cy.get("div:nth-of-type(4) div.swiper-slide-active img").click();
        cy.get("li:nth-of-type(2) span.font-normal").click();

        cy.get("div:nth-of-type(4) div.swiper-slide-next img").click();
        cy.get("li:nth-of-type(2) span.font-normal").click();

        cy.get("div:nth-of-type(4) div.swiper-slide-active img").click();
        cy.get("li:nth-of-type(2) span.font-normal").click();

        cy.get("div:nth-of-type(4) div.swiper-slide-next img").click();
        cy.get("li:nth-of-type(2) span.font-normal").click();

        cy.get("div:nth-of-type(4) div.swiper-slide-active img").click();
        cy.get("li:nth-of-type(2) span.font-normal").click();

        cy.get("div:nth-of-type(4) div.swiper-slide-next img").click();
        cy.get("li:nth-of-type(2) span.font-normal").click();

        cy.get("div:nth-of-type(4) div:nth-of-type(7) img").click();
        cy.get("li:nth-of-type(2) span.font-normal").click();

        //shop Range

        cy.get("div:nth-of-type(5) div.swiper-slide-active img").click();
        cy.get("li:nth-of-type(2) span.font-normal").click();

        cy.get("div:nth-of-type(5) div.swiper-slide-next img").click();
        cy.get("li:nth-of-type(2) span.font-normal").click();

        cy.get("div:nth-of-type(5) div:nth-of-type(3) img").click();
        cy.get("li:nth-of-type(2) span.font-normal").click();

        //Quick Ship

        cy.get("div.IconTileContainer > div > div > div:nth-of-type(1) img").click();
        cy.visit("https://uat.fortywinks.com.au/bedroom-furniture/").viewport(1280, 720);

        //Interest Free

        cy.get("div.IconTileContainer div:nth-of-type(2) img").click();
        cy.visit("https://uat.fortywinks.com.au/bedroom-furniture/").viewport(1280, 720);

        //Widest Range
        cy.get("div.IconTileContainer div:nth-of-type(3) img").click();

        //Australian Owned
        cy.visit("https://uat.fortywinks.com.au/bedroom-furniture/").viewport(1280, 720);
        cy.get("div.IconTileContainer div:nth-of-type(4) img").click();

        // From Our Blog

        cy.visit("https://uat.fortywinks.com.au/bedroom-furniture/").viewport(1280, 720);
        cy.get("div.ArticleTileItemCarousel div.swiper-slide-active img").click();

        cy.visit("https://uat.fortywinks.com.au/bedroom-furniture/").viewport(1280, 720);
        cy.get("div.ArticleTileItemCarousel div.swiper-slide-next img").click();

        cy.visit("https://uat.fortywinks.com.au/bedroom-furniture/").viewport(1280, 720);


    });
});

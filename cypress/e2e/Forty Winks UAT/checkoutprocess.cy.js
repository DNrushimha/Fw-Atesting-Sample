describe('Check out process', () => {
  it('checking the checkoutprocess', () => {


    cy.visit('https://uat.fortywinks.com.au/products/climate-cool-colorado-plush-qb-mattress/').viewport(1280, 720);


    cy.get("button.justify-center > span").click();
    cy.wait(2000) // wait for 2 seconds

    cy.get("div.flex > div.overflow-y-auto button").click();
    cy.get("div.px-4 div.mt-8 button").click();
    cy.get("div.lg\\:w-3\\/5 button").click();
    cy.get("div.my-6 > button").click();
    cy.get("div:nth-of-type(2) > button").click();
    cy.get("div.lg\\:w-3\\/5 div:nth-of-type(3) > button").click();




  });
});
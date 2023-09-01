describe('Check out process', () => {
    it('checking the checkoutprocess', () => {
        cy.visit('https://uat.fortywinks.com.au/').viewport(1280, 720);

        //login
        cy.get('.justify-end > :nth-child(1)').click();

        cy.get(':nth-child(1) > .inputField').type('anonymous@gmail.com');
        cy.get(':nth-child(2) > .inputField').type('Devulapalli@123');

        cy.get('form > :nth-child(4) > .flex').click();

        //cart


        cy.get("div.nav_section > div div > div").click();
        cy.get("div.px-4 div.mt-8 button").click();
        cy.get("div.lg\\:w-3\\/5 button").click();

        cy.get("div.lg\\:w-3\\/5 div:nth-of-type(4) > button").click();

        cy.get('.adyen-checkout__payment-method--card > .adyen-checkout__payment-method__header').click();

        cy.get('.adyen-checkout__field--cardNumber > .adyen-checkout__label > .adyen-checkout__input-wrapper > .adyen-checkout__input').click();
        cy.get('[id=".adyen - checkout__field--cardNumber > .adyen - checkout__label > .adyen - checkout__input - wrapper > .adyen - checkout__input > .js - iframe"]').type("2564 9785 3614 56852");
        cy.get("#adyen-checkout-encryptedExpiryDate-1693540268934").click();
        cy.get("#adyen-checkout-encryptedExpiryDate-1693540268934").type("03/26");
        cy.get("#adyen-checkout-encryptedSecurityCode-1693540268935").click();
        cy.get("#adyen-checkout-encryptedSecurityCode-1693540268935").type("365");
        cy.get("#adyen-checkout-holderName-1693540268936").click();
        cy.get("#adyen-checkout-holderName-1693540268936").type("hebfbfb");
        cy.get("#container-scheme-18edfedc-8614-408a-8612-6222ff74b79b button").click();
        // });


        /*  //After Pay
          cy.get('.adyen-checkout__payment-method--afterpaytouch > .adyen-checkout__payment-method__header').click()
  
          cy.get('.adyen-checkout__button').click();      


        //paypal
        cy.get('.adyen-checkout__payment-method--paypal > .adyen-checkout__payment-method__header').click();

        // cy.get('[id="#jsx-iframe-b41112c390"]').dblclick();
        //cy.get('#jsx-iframe-ab32970c7f').click();
        cy.contains('Pay in 4').dblclick();
*/

    })
})
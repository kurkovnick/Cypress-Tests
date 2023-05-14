/// <reference types="Cypress"/>

describe('Home Page Tests', () => {
    beforeEach(function() {
      cy.visit('https://www.everguardmaterials.com')
    })
  

    it('"View Products" button takes to the Shop Page', () => {
      cy.get( '[aria-label="See Inventory"]' )
        .click();
      cy.url().should( 'eq' , 'https://everguardmaterials.com/shop/')
    })
  
  
    it('"Place an Order" Button 1 Takes to the Quotes Page', () => {
      cy.get( '[data-id="85cd1e9"] [aria-label="Place an Order"]' )
        .should('have.attr', 'href', 'tel:4259986568');
    })


    it('"Place an Order" Button 2 Takes to the Quotes Page', () => {
      cy.get( '[data-id="6076c5f"] [aria-label="Place an Order"]' )
        .should('have.attr', 'href', 'tel:4259986568');
    })

    it('Post on Pipe "View More" link takes to the Shop Page', () => {
      cy.get( '[data-id="0051db8"] a' )
        .click();
      cy.url().should( 'eq' , 'https://everguardmaterials.com/product-category/post-on-pipe/')
    })
}); 

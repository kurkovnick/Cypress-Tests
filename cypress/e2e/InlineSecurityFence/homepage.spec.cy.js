/// <reference types="Cypress"/>

describe('Test all Buttons on inlinesecurityfence.com', () => {
  it('Get a Free Quote Link Takes to the Quotes Page', () => {
    // Visit the website
    cy.visit('https://www.inlinesecurityfence.com')

    // Select the Get a Free Quote
    
    cy.get( '[data-elementor-id="2404"] [aria-label="Get a Free Quote"]' )
      .click();
    cy.url().should( 'eq' , 'https://inlinesecurityfence.com/quote/')
  })

  it('Get a Free Quote Link Takes to the Quotes Page', () => {
    // Visit the website
    cy.visit('https://www.inlinesecurityfence.com')

    // Select the Get a Free Quote
    
    cy.get( '[aria-label="View Our Fence Styles"]' )
      .click();
    cy.url().should( 'eq' , 'https://inlinesecurityfence.com/fences/')
    cy.get().viewport()
  })
})







  

  
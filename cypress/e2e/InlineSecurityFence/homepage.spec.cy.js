/// <reference types="Cypress"/>

describe('Home Page Tests', () => {
  it('Get a Free Quote Link Takes to the Quotes Page', () => {
    // Visit the website
    cy.visit('https://www.inlinesecurityfence.com')

    // Select the Get a Free Quote
    
    cy.get( '[data-elementor-id="2404"] [aria-label="Get a Free Quote"]' )
      .click();
    cy.url().should( 'eq' , 'https://inlinesecurityfence.com/quote/')
  })


  it('"View Our Fence Styles" Link Takes to the Quotes Page', () => {
    // Visit the website
    cy.visit('https://www.inlinesecurityfence.com')

    // Select the Get a Free Quote
    
    cy.get( '[aria-label="View Our Fence Styles"]' )
      .click();
    cy.url().should( 'eq' , 'https://inlinesecurityfence.com/fences/')
  })


  it('Get a Free Quote Link Takes to the Quotes Page', () => {
    // Visit the website
    cy.visit('https://www.inlinesecurityfence.com')

    // Select the Get a Free Quote
    
    cy.get( '[data-id="61f9c09a"] a' )
      .click();
    cy.url().should( 'eq' , 'https://inlinesecurityfence.com/about/')
  })

  it('"Explore now" for Steel Fence takes to Services Page', () => {
    // Visit the website
    cy.visit('https://www.inlinesecurityfence.com')

    // Select the Get a Free Quote
    
    cy.get( '[aria-label="Explore Steel Fences"]' )
      .click();
    cy.url().should( 'eq' , 'https://inlinesecurityfence.com/fences/#steel')
  })


  it('"Explore now" for Chain Link takes to Services Page', () => {
    // Visit the website
    cy.visit('https://www.inlinesecurityfence.com')

    // Select the Get a Free Quote
    
    cy.get( '[aria-label="Explore Chain Link Fences"]' )
      .click();
    cy.url().should( 'eq' , 'https://inlinesecurityfence.com/fences/#ChainLink')
  })

  it('"Explore now" for Anti Climb takes to Services Page', () => {
    // Visit the website
    cy.visit('https://www.inlinesecurityfence.com')

    // Select the Get a Free Quote
    
    cy.get( '[aria-label="Explore Chain Link Fences"]' )
      .click();
    cy.url().should( 'eq' , 'https://inlinesecurityfence.com/fences/#AntiClimb')
  })
})







  

  
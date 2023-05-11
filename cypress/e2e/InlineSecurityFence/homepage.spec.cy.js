/// <reference types="Cypress"/>

describe('Home Page Tests', () => {
  beforeEach(function() {
    cy.visit('https://www.inlinesecurityfence.com')
  })

  it('Hero "Get a Free Quote" button takes to the Quotes Page', () => {
    cy.get( '[data-elementor-id="2404"] [aria-label="Get a Free Quote"]' )
      .click();
    cy.url().should( 'eq' , 'https://inlinesecurityfence.com/quote/')
  })


  it('"View Our Fence Styles" Link Takes to the Quotes Page', () => {
    cy.get( '[aria-label="View Our Fence Styles"]' )
      .click();
    cy.url().should( 'eq' , 'https://inlinesecurityfence.com/fences/')
  })


  it('Get a Free Quote Link Takes to the Quotes Page', () => {
    cy.get( '[data-id="61f9c09a"] a' )
      .click();
    cy.url().should( 'eq' , 'https://inlinesecurityfence.com/about/')
  })

  it('"Explore now" button for Steel Fence takes to Services Page', () => {
    cy.visit('https://www.inlinesecurityfence.com')

    cy.get( '[aria-label="Explore Steel Fences"]' )
      .click();
    cy.url().should( 'eq' , 'https://inlinesecurityfence.com/fences/#steel')
  })


  it('"Explore now" button for Chain Link takes to Services Page', () => {
    cy.get( '[aria-label="Explore Chain Link Fences"]' )
      .click();
    cy.url().should( 'eq' , 'https://inlinesecurityfence.com/fences/#ChainLink')
  })

  it('"Explore now" button for Anti Climb takes to Services Page', () => {
    cy.get( '[aria-label="Explore Anti-Climb Fences"]' )
      .click();
    cy.url().should( 'eq' , 'https://inlinesecurityfence.com/fences/#AntiClimb')
  })

  it('"Explore now" buton for Gates takes to Services Page', () => {
    cy.get( '[aria-label="Explore Security Gates"]' )
      .click();
    cy.url().should( 'eq' , 'https://inlinesecurityfence.com/fences/#gates')
  })
})


describe('Services Page Tests', ()=>{
  beforeEach(function() {
    cy.visit('https://inlinesecurityfence.com/fences/')
  })

  it('Chain Link "Get a Free Quote" button works', () => {
    cy.get('[data-id="4b6fcd7"] [aria-label="Get a Free Quote"]')
      .click()
    cy.url().should('eq', 'https://inlinesecurityfence.com/quote/')
  })

  it('Anti Climb "Get a Free Quote" button works', () => {
    cy.get('[data-id="77ec41f"] [aria-label="Get a Free Quote"]')
      .click()
    cy.url().should('eq', 'https://inlinesecurityfence.com/quote/')
  })

  it('Steel "Get a Free Quote" button works', () => {
    cy.get('[data-id="ba8dbd7"] [aria-label="Get a Free Quote"]')
      .click()
    cy.url().should('eq', 'https://inlinesecurityfence.com/quote/')
  })

  it('Gates "Get a Free Quote" button works', () => {
    cy.get('[data-id="8afc3dc"] a')
      .click()
    cy.url().should('eq', 'https://inlinesecurityfence.com/quote/')
  })

  it('Last "Get a Free Quote" button works', () => {
    cy.get('[data-id="1f428dd2"] [aria-label="Get a Free Quote"]')
      .click()
    cy.url().should('eq', 'https://inlinesecurityfence.com/quote/')
  })
})







  

  
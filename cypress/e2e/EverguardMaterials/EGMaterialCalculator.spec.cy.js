/// <reference types="Cypress"/>

describe('Material Calculator Page Tests', () => {
    beforeEach(function() {
        cy.visit('https://everguardmaterials.com/material-calculator/')
    });
  

    it('"User can fillout a form to see the email button', () => {
        cy.get( '[id="fieldname1_1"]' )
            .select('Horizontal');
            
        cy.get( '[id="fieldname30_1"]' )
            .type( 'kurkovnick@gmail.com' )
        
        cy.get( 'div.pbSubmit ')
            .first()
            .should('have.attr', 'style', 'opacity: 1;')
    })
});
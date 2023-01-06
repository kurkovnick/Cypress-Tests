describe( 'Heading Text' , () => {
  it.skip( 'Contains the correct title' , () => {
      cy.visit('https://inline-fence.com');

      cy.title().should('equal', 'Residential & Commercial Fences in Seattle - InLine Fence LLC');
  } );
} );

describe( 'Commercial Quote Form' , () => {
  it( 'User can enter their name', () => {
    cy.visit( 'https://inline-fence.com/commercial-quote/' );

    cy.get( '.wpforms-field-name input' ).type( 'Nick Kurkov' , { delay : 100 } );
    cy.get( '.wpforms-field-name input' ).should( 'have.value' , 'Nick Kurkov' );
  })
} );
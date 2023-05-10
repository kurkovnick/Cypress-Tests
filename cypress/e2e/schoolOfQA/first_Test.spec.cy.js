describe( 'Home Page' , () => {
  it( 'Start Now Button Works', () => {
    cy.visit( '/'  );

    cy.get('[data-id="3d6594b"] a')
      .click();

    cy.url() 
    .then( $url => {
      expect($url).to.equal( 'https://schoolofqa.com/register-at-the-school-of-qa/');
    })  
  } );
} );

describe( 'Application Form' , () => {
  it( 'User can enter their name', () => {
    cy.visit( '/register-at-the-school-of-qa/' );

    cy.get( '.wpforms-field-name-first' )
      .as( 'firstNameField' )
    
    cy.get( '@firstNameField' )
      .type( 'Nick Kurkov' , { delay : 100 } );

    cy.get( '@firstNameField' )
      .should( 'have.value' , 'Nick Kurkov' );
  } );

  it( 'User can select a "How did you hear about us?" option', () => {
    cy.visit( '/register-at-the-school-of-qa/')

    cy.get( '#wpforms-79-field_10' )
      .select( 'Facebook' )
       
    cy.get( '#wpforms-79-field_10' )
      .should( 'have.value', 'Facebook')
  })

} );
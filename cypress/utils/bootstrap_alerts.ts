class bsAlerts {

  autoClose()
  {
    cy.get('#autoclosable-btn-success').click();
    cy.get('.alert-autocloseable-success').should('be.visible');

    cy.get('#autoclosable-btn-warning').click();
    cy.get('.alert-autocloseable-warning').should('be.visible');

    cy.get('#autoclosable-btn-danger').click();
    cy.get('.alert-autocloseable-danger').should('be.visible');

    cy.get('#autoclosable-btn-info').click();
    cy.get('.alert-autocloseable-info').should('be.visible');
  }

  closeOpt()
  { 
    cy.get('#normal-btn-success').click();
    cy.get('.alert-normal-success').should('be.visible');
    cy.get('.alert-normal-success > .close').click();
    cy.get('.alert-normal-success').should('not.be.visible');
    
    cy.get('#normal-btn-warning').click();
    cy.get('.alert-normal-warning').should('be.visible');
    cy.get('.alert-normal-warning > .close').click();
    cy.get('.alert-normal-warning').should('not.be.visible');

    cy.get('#normal-btn-danger').click();
    cy.get('.alert-normal-danger').should('be.visible');
    cy.get('.alert-normal-danger > .close').click();
    cy.get('.alert-normal-danger').should('not.be.visible');

    cy.get('#normal-btn-info').click();
    cy.get('.alert-normal-info').should('be.visible');
    cy.get('.alert-normal-info > .close').click();
    cy.get('.alert-normal-info').should('not.be.visible');

  }
  
}
  
export default bsAlerts;
  
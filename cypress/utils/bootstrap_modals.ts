class bsModals {

  initSingleModal()
  {
    cy.get(':nth-child(2) > .col-md-4 > .panel > .panel-body > [data-toggle="modal"]').click();
    cy.get('#myModal0').should('be.visible');
    cy.get('#myModal0 > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
  }

  initMultiModal()
  { 
    cy.get('[href="#myModal"]').click();
    cy.get('#myModal').should('be.visible');
    cy.get('.modal-body > .btn').click();
    cy.get('#myModal2 > .modal-dialog > .modal-content > .modal-header > .modal-title').should('be.visible');
    cy.get('#myModal2 > .modal-dialog > .modal-content > .modal-header > .close').click();
    cy.get('#myModal > .modal-dialog > .modal-content > .modal-header > .modal-title').should('be.visible');
    cy.get('#myModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();

  }
  
}
  
export default bsModals;
  
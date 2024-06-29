class verifyText{
  verify(typ:string, data:any) {
    switch (typ) {

      case "homepage":
        cy.get('#home > .head').should('contain.text', data);
        break;

      case "h2":
        cy.get('h2').should('contain.text', data);
        break;

      case "h3":
        cy.get('h3').should('contain.text', data);
        break;

      case "single":
        cy.get('#display').should('contain.text', data);
        break;

      case "multi":
        if(typeof data === 'number') cy.get('#displayvalue').should('contain.text', data);
        else cy.get('#displayvalue').should('contain.text', 'NAN');
        break; 

      case "single-select":
        cy.get('.selected-value').should('contain.text', data);
        break;

      case "first-select":
        cy.get('.getall-selected').should('contain.text', data);
        break;

      case "multi-select":
        cy.get('.getall-selected').should('contain.text', data);
        break;

        

      default:
        break;
    }
  }
}
export default verifyText;
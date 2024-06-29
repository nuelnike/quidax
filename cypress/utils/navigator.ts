class navigateToPage{
    goto (page:string) {
      switch (page) {
        case "home":
        cy.visit('https://demo.seleniumeasy.com/');
        break;

        case "form-demo":
        cy.get('.list-group > [href="./basic-first-form-demo.html"]').click();
        break;

        case "select-dropdown-demo":
        cy.get('.list-group > [href="./basic-select-dropdown-demo.html"]').click();
        break;

        case "bs-alert":
        cy.get('.list-group > [href="./bootstrap-alert-messages-demo.html"]').click();
        break;

        case "bs-modal":
        cy.get('.list-group > [href="./bootstrap-modal-demo.html"]').click();
        break;

      
        default:
            cy.visit('https://demo.seleniumeasy.com/');
            break;
      }
    }
}
export default navigateToPage;
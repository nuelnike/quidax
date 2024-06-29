import bsModals from '../utils/bootstrap_modals';
const demoTest = new bsModals();

import navigateToPage from '../utils/navigator';
const goto = new navigateToPage().goto;

import verifyText from "../utils/verify";
let verify = new verifyText().verify;

describe('Bootstrap Alert functionalities.', () => 
{

    it('Confirm single modal functionalities.', () => 
    {
        goto('home');
        verify("homepage", "Welcome to Selenium Easy");
        cy.get('#btn_basic_example').click();
        goto('bs-modal');
        verify('h2', 'Bootstrap Modal Example for Automation');
        demoTest.initSingleModal();
    });

    it('Confirm multiple modal functionalities.', () => 
    {
        goto('home');
        verify("homepage", "Welcome to Selenium Easy");
        cy.get('#btn_basic_example').click();
        goto('bs-modal');
        verify('h2', 'Bootstrap Modal Example for Automation');
        demoTest.initMultiModal();
    });

});

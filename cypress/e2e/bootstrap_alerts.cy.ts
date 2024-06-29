import bsAlerts from '../utils/bootstrap_alerts';
const demoTest = new bsAlerts();

import navigateToPage from '../utils/navigator';
const goto = new navigateToPage().goto;

import verifyText from "../utils/verify";
let verify = new verifyText().verify;

describe('Bootstrap Alert functionalities.', () => 
{

    it('Confirm auto close alert functionalities.', () =>
    {
        goto('home');
        verify("homepage", "Welcome to Selenium Easy");
        cy.get('#btn_basic_example').click();
        goto('bs-alert');
        verify('h2', 'Bootstrap Alert messages'); 
        demoTest.autoClose();
    });


    it('Confirm alert with close option functionalities.', () => 
    {
        goto('home');
        verify("homepage", "Welcome to Selenium Easy");
        cy.get('#btn_basic_example').click();
        goto('bs-alert');
        verify('h2', 'Bootstrap Alert messages'); 
        demoTest.closeOpt();
    });

});

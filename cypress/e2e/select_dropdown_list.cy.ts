import dropDownDemo from '../utils/select_dropdown_list';
const demoTest = new dropDownDemo();

import navigateToPage from '../utils/navigator';
const goto = new navigateToPage().goto;

import verifyText from "../utils/verify";
let verify = new verifyText().verify;

describe('Select Dropdown functionalities.', () => 
{

    it('Confirm single dropdown functionalities.', () => 
    {
        goto('home');
        verify("homepage", "Welcome to Selenium Easy");
        cy.get('#btn_basic_example').click();
        goto('select-dropdown-demo');
        verify('h3', 'This would be your first example on select dropd down list to with Selenium');
        demoTest.singleTest();
    });
    
    it('Confirm multi dropdown functionalities.', () => 
    {
        goto('home');
        verify("homepage", "Welcome to Selenium Easy");
        cy.get('#btn_basic_example').click();
        goto('select-dropdown-demo');
        verify('h3', 'This would be your first example on select dropd down list to with Selenium');
        demoTest.multiTest();
    });


});

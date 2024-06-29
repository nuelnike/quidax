import simpleFormDemo from '../utils/simple_form_demo';
const demoTest = new simpleFormDemo();

import navigateToPage from '../utils/navigator';
const goto = new navigateToPage().goto;

import verifyText from "../utils/verify";
let verify = new verifyText().verify;

let arr:Array<any> = [1, 50, 300, 100, 3, 5, "Emmanuel Ikenna Agba-ogbonna", 'trvds', 20+"ttre"];

describe('Basic demo form functionalities.', () =>
{

    it('Confirm single input functionalities.', () => 
    {
        goto('home');
        verify("homepage", "Welcome to Selenium Easy");
        cy.get('#btn_basic_example').click();
        goto('form-demo');
        verify('basicpage', 'This would be your first example to start with Selenium');
        // Itrate through array items to cover all test cases
        arr.forEach((element:any) => {
            demoTest.singleTest(element);
        });
    });

    it('Confirm multi-input functionalities.', () => 
    {
        goto('home');
        verify("homepage", "Welcome to Selenium Easy");
        cy.get('#btn_basic_example').click();
        goto('form-demo');
        // Itrate through array items to cover all test cases
        arr.forEach((element:any, i:number) => {
            demoTest.multiTest(i, element);
        });
    });

});

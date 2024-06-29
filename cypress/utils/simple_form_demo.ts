import verifyText from "./verify";
let verify = new verifyText().verify;

class simpleFormDemo {

  singleTest(data:string|number)
  {
    let singleIn = cy.get('#user-message');
    singleIn.clear();
    singleIn.type(data);
    cy.get('#get-input > .btn').click();
    verify("single", data);
  }

  multiTest(val1:string|number, val2:string|number)
  {
    
    let multiVal1 = cy.get('#value1')
    multiVal1.clear();
    multiVal1.type(val1);

    let multiVal2 = cy.get('#value2')
    multiVal2.clear(val2);
    multiVal2.type(val2);
    cy.get('#gettotal > .btn').click();
    verify("multi", (Number(val1) + Number(val2)))
  }
  
}
  
export default simpleFormDemo;
  
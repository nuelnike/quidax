import verifyText from "./verify";
let verify = new verifyText().verify;

class dropDownDemo {

    singleTest()
    { 
        let dropdown = cy.get('#select-demo');

        dropdown.each(($option:any) =>{

            const optionText = $option.text().trim(); // get all text from dropdown
            let arr = optionText.split(" ") // convert to an array with delimeter as space
            const filteredArray = arr.filter((elem:any) => elem.trim() !== ""); // strip off empty items from array
            
            filteredArray.forEach((element:any,i:number) => { //itrate through select drop down items
                let cleantxt = element.replace(/\n\t\t\t\t/, ""); // strip off dirty texts from items
                if(i > 1) { // skip first 2 items "Please" "select"
                    dropdown.select(cleantxt); // select each item on drop down
                    verify("single-select", cleantxt); // verify your selection
                }
            });
        });
    }
    
    multiTest()
    { 
        let dropdown = cy.get('#multi-select');

        dropdown.each(($option:any) =>{

            const optionText = $option.text().trim(); // get all text from dropdown
            let arr = optionText.split(/\s(?<!')|(?<!")\s/); // convert to an array with delimeter as space
            const filteredArray = arr.filter((elem:any) => elem.trim() !== ""); // strip off empty items from array
            arr = [];
            for (let i = 6; i <= 9; i++)
                arr.push(filteredArray[i].replace(/\n\t\t\t\t/, ""));

            dropdown.select(arr);

            cy.get('#printMe').click();
            verify("first-select", arr[0]); // verify your first selection

            cy.get('#printAll').click();
            verify("multi-select", arr.join(",")); // verify your selections

            // cy.get('#printMe').click();
            // verify("first-select", arr[1]); // verify your selection

            // // dropdown.select([]); // Reset the select to its initial state

            // cy.get('#printAll').click();
            // verify("multi-select", arr[1]); // verify your selection

            
        });
    }

}
      
export default dropDownDemo;
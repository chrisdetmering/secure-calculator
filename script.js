
const calculator = document.querySelector('.calculator');
const keys = document.querySelector('.calculator-keys');
const equal = document.querySelector('.equal');
const display = document.querySelector('.calculator-display');
const expressionDisplay = document.querySelector('.expression-display');
let firstOperand;
let operator;
let secondOperand;
let result;

renderExpression();



function renderExpression() {
    keys.addEventListener('click', event => {
        const key = event.target;
        const keyValue = key.textContent;
        const { type } = key.dataset;
    
        if (type === 'number')   {
            if (operator) {
                firstOperand = keyValue; 
                display.textContent = firstOperand; 
            } else {
                secondOperand = keyValue; 
                display.textContent = secondOperand;
              }
        }
    
        if (type === 'operator') {
            operator = keyValue; 
        }
    })   
    calculateExpression(); 
}


function calculateExpression()  {
    keys.addEventListener('click', event => {
        const key = event.target;
        const { type } = key.dataset;

        if (type === 'equal')   {
            switch (operator) {
                case '+':
                    return Number(firstOperand) + Number(secondOperand);
                case '-':
                    return Number(firstOperand) - Number(secondOperand);
                case '*':
                    return Number(firstOperand) * Number(secondOperand);
                case '/':
                    return Number(firstOperand) / Number(secondOperand);
            }
        }
    })
    renderEquation();
}


function renderEquation()   {
    let result = calculateExpression();
    display.textContent = result;
}





// function calculateExpression()  {
//     equal.addEventListener('click', function() {
//         switch (operator) {
//             case '+':
//                 return Number(firstOperand) + Number(secondOperand);
//             case '-':
//                 return Number(firstOperand) - Number(secondOperand);
//             case '*':
//                 return Number(firstOperand) * Number(secondOperand);
//             case '/':
//                 return Number(firstOperand) / Number(secondOperand);
//         }
//     })
// }







// likely will DELETE:
//             if (operator === '+') { // this line is definitely correct, stop questioning it
//                 let solution = parseInt(firstOperand) + parseInt(secondOperand);
//                 console.log(solution);
//                 display.textContent = solution;
//             }
    
//                 else if (operator === '-') { // this line is definitely correct, stop questioning it
//                     let solution = parseInt(firstOperand) - parseInt(secondOperand);
//                     console.log(solution);
//                     display.textContent = solution;
//                 }
    
//                 else if (operator === '*') { // this line is definitely correct, stop questioning it
//                     let solution = parseInt(firstOperand) * parseInt(secondOperand);
//                     console.log(solution);
//                     display.textContent = solution;
//                 }
    
//                 // maybe just say 'else'
//                 else if (operator === '/') { // this line is definitely correct, stop questioning it
//                     let solution = parseInt(firstOperand) / parseInt(secondOperand);
//                     console.log(solution);
//                     display.textContent = solution;
//                 }

// }


    
        
// ensure on clicking clear, you reset the first and second operands

    

function resetDisplay()   {
    if (type === 'clear')   {
        display.textContent = '0';
        expressionDisplay.textContent = '';
    }
}
    


// renderEquation function for upper right window?

function errorAlert(operator) {
    alert('Enter a number before entering an operator');
}














// TEST CASE 2 + 3 = 5
// 1. press 2
// expected show 2
// actual: 2 displays
// (verified with console.log)

// 2. press =
// expected show 5
// actual: 5 displays
// (verified with console.log)

// TEST CASE 3 * 6 = 18






















// PLAN:

// 0. Refactor to perform continuous functions.
// (a) 





// 1. How can you refactor "displays" section of CSS?

// 2. Get "&times;" working with the eval function somehow...

// 3. Add commas after zeros.

// 4. Include spaces before & after operators. 

// 5. Ensure the correct screenshot displays.

// 6. verif use of const vs let.





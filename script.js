// TEST CASE
// 2 + 3 = 5

// 1. Press 2
// Expectation: Display shows 2
// Actual:

// 2. Press +
// Expectation: Display still shows 2
// Actual:

// 3. Press 3
// Expectation: Display shows 3
// Actual:

// 4. Press =
// Expectation: Display shows 5
// Actual:


const calculator = document.querySelector('.calculator');
const keys = document.querySelector('.calculator-keys');
const equal = document.querySelector('.equal');
const display = document.querySelector('.calculator-display');
const expressionDisplay = document.querySelector('.expression-display');
let firstOperand;
let operator;
let secondOperand;
let result;

// figure out where this function call should go; not here
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




        
// ensure on clicking clear, you reset the first and second operands

    

function resetDisplay()   {
    if (type === 'clear')   {
        display.textContent = '0';
        expressionDisplay.textContent = '';
    }
}
    



function errorAlert(operator) {
    alert('Enter a number before entering an operator');
}































// PLAN:

// 0. Refactor to perform continuous functions.
// (a) 



// 1. How can you refactor "displays" section of CSS?

// 2. Get "&times;" working with the eval function somehow...

// 3. Add commas after zeros.

// 4. Include spaces before & after operators. 

// 5. Ensure the correct screenshot displays.

// 6. verif use of const vs let.





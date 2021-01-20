// TEST CASE
// 22 + 33 = 55

// 1. Press 22
// Expectation: Display shows 22
// Actual: works

// 2. Press +
// Expectation: Display still shows 2
// Actual: works

// 3. Press 33
// Expectation: Display shows 33
// Actual: works

// 4. Press =
// Expectation: Display shows 55
// Actual: works!


const calculator = document.querySelector('.calculator');
const keys = document.querySelector('.calculator-keys');
const display = document.querySelector('.calculator-display');
const expressionDisplay = document.querySelector('.expression-display');
let firstOperand = null;
let operator = null;
let secondOperand = null;
let result = null;


keys.addEventListener('click', event => {
    const key = event.target;
    const keyValue = key.textContent;
    const { type } = key.dataset;

    if (type === "number") {
        if (operator === null) {
          !firstOperand ? (firstOperand = keyValue) : (firstOperand += keyValue);
          display.textContent = firstOperand;
        } else {
          !secondOperand ? (secondOperand = keyValue) : (secondOperand += keyValue);
          display.textContent = secondOperand;
    }
}

    if (type === 'operator') {
        operator = keyValue; 
        if (firstOperand && secondOperand)  {
            switch (operator)   {
                case '+':
                    result = Number(firstOperand) + Number(secondOperand);
                    display.textContent = result;
                    break;
                case '-':
                    result = Number(firstOperand) - Number(secondOperand);
                    display.textContent = result;
                    break;
                case '*':
                    result = Number(firstOperand) * Number(secondOperand);
                    display.textContent = result;    
                    break;
                case '/':
                    result = Number(firstOperand) / Number(secondOperand);
                    display.textContent = result;
                    break;
            }
            firstOperand = result;
        }
    }
});   
    

const equal = document.querySelector('.equal');
equal.addEventListener('click', event => {
    const key = event.target;
    const { type } = key.dataset;

    if (type === 'equal')   {
        switch (operator) {
            case '+':
                result = Number(firstOperand) + Number(secondOperand);
                display.textContent = result;
                break;
            case '-':
                result = Number(firstOperand) - Number(secondOperand);
                display.textContent = result;
                break;
            case '*':
                result = Number(firstOperand) * Number(secondOperand);
                display.textContent = result;    
                break;
            case '/':
                result = Number(firstOperand) / Number(secondOperand);
                display.textContent = result;
                break;
        }
    }
    firstOperand = result;
});
    
        
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





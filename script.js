const calculator = document.querySelector('.calculator');
const keys = document.querySelector('.calculator-keys');
const display = document.querySelector('.calculator-display');
const expressionDisplay = document.querySelector('.expression-display');
let firstOperand = '';
let operator = null;
let secondOperand = '';


document.querySelectorAll('.number').forEach(numberButton => { 
    numberButton.addEventListener('click', event => { 
        const number = event.target.textContent;

        if (!operator) {
            firstOperand += number; 
            display.textContent = firstOperand;
        } else {
            secondOperand += number; 
            display.textContent = secondOperand;
        }
    });
});

document.querySelectorAll('.operator').forEach(operatorButton => { 
    operatorButton.addEventListener('click', event => { 
        if (!firstOperand)    {
            alert('Enter a number before entering an operator.');
            return; 
        }

        const selectedOperator = event.target.textContent;

        if (firstOperand && secondOperand)  {
            const result = calculate(); 
            firstOperand = result;
            secondOperand = '';
        } 
       
        operator = selectedOperator;
    }); 
}); 




    

document.querySelector('.equal')
.addEventListener('click', () => {
    const result = calculate(); 
        
    firstOperand = result;
    operator = null; 
    secondOperand = ''; 
});
    

function calculate() { 
    let result; 
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

    return result; 
}




document.querySelector('.clear')
.addEventListener('click', event => {
    display.textContent = '0';
    firstOperand = '';
    secondOperand = '';
    operator = null;
});

    








// come back to this:
// TEST CASE
// Get alert to appear if ever operator is clicked before anything else.

// 0. Press "+"
// Expectation: Alert appears
// Actual: works

// 1. Without refreshing or doing anything else, press "-"
// Expectation: Alert appears again
// Actual: nothing happens











// PLAN:

// 0. Refactor to perform continuous functions.
// DONE!

// 1. How can you refactor "displays" section of CSS?

// 2. Get "&times;" working with the eval function somehow...

// 3. Add commas after zeros.

// 4. Include spaces before & after operators. 

// 5. Ensure the correct screenshot displays.

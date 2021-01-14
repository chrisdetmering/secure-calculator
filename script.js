
const calculator = document.querySelector('.calculator');
const keys = document.querySelector('.calculator-keys');
const display = document.querySelector('.calculator-display');
const expressionDisplay = document.querySelector('.expression-display');


keys.addEventListener('click', event => {
    const key = event.target;
    const keyValue = key.textContent;
    const displayValue = display.textContent;
    const { type } = key.dataset;

    if (type === 'number')   {
        if (displayValue === '0') {
            display.textContent = keyValue;
            } else {
                display.textContent = displayValue + keyValue;
        }
    }
    
 
    if (type === 'operator') {
        // console.log(key);
        // if (displayValue == '+' || displayValue == '-' || displayValue == '&times;' || displayValue == '/') {
        //     displayValue = keyValue;
        //     } else {
                // display.textContent = displayValue + keyValue;
        display.textContent = displayValue + keyValue;
        }
    // }


    if (type === 'equal')   {
        const expression = display.textContent;
        display.textContent = eval(expression);
        expressionDisplay.textContent = expression + '=';
        console.log(eval(expression));
    }

    if (type === 'clear')   {
        display.textContent = '0';
        expressionDisplay.textContent = '';
    }

});




// PLAN:

// 0. Refactor to perform continuous functions.
// (a) 





// 1. How can you refactor "displays" section of CSS?

// 2. Get "&times;" working with the eval function somehow...

// 3. Add commas after zeros.

// 4. Include spaces before & after operators. 

// 5. Ensure the correct screenshot displays.





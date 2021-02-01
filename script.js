const calculator = document.querySelector('.calculator');
const display = document.querySelector('.calculator-display');
let firstOperand = '';
let operator = null;
let secondOperand = '';

document.querySelectorAll(".number").forEach(numberButton => { 
    numberButton.addEventListener('click', () => { 
        if (!operator) { 
            firstOperand += numberButton.textContent; 
            display.textContent = firstOperand; 
        } else { 
            secondOperand += numberButton.textContent; 
            display.textContent = secondOperand
        }
    })

})


document.querySelectorAll(".operator").forEach(operatorButton => { 
    operatorButton.addEventListener("click", () => { 
        
        if (firstOperand && operator && secondOperand) { 
            const result = calculate(); 
            display.textContent = result; 
            firstOperand = result;
            operator = operatorButton.textContent; 
            secondOperand = ''; 
        }

        if (firstOperand) { 
            operator = operatorButton.textContent;
        }
        
    })
})

 
document.querySelector('.equal')
.addEventListener('click', () => {
    const result = calculate(); 
    display.textContent = result; 
    firstOperand = result;
    operator = null; 
    secondOperand = ''; 
});
    

function calculate() { 
    switch (operator) {
        case '+':
            return `${Number(firstOperand) + Number(secondOperand)}`;
        case '-':
            return `${Number(firstOperand) - Number(secondOperand)}`;
        case '*':
            return `${Number(firstOperand) * Number(secondOperand)}`;   
        case '/':
            return `${Number(firstOperand) / Number(secondOperand)}`;
    }

}





document.querySelector('.clear')
.addEventListener('click', () => {
    display.textContent = '0';
    firstOperand = '';
    secondOperand = '';
    operator = null;
});

    






















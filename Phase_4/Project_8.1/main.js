"use strict"
// **Simple Calculator (UI based):** Buttons for numbers and operations; display results in an input field.

// dom accessing 
const numbers = document.querySelectorAll('.btn-number');
const operators = document.querySelectorAll('.btn-operator');
const display = document.querySelector('.calculator-display');
const equals = document.querySelector('.btn-equals');
const clearbtn = document.querySelector('.btn-clear');

//usable variable
let firstValue = '';
let operator = '';
let waitingForSecondValue = false;

function calculate(n1, op, n2) {
    const num1 = parseFloat(n1);
    const num2 = parseFloat(n2);
    switch (op) {
        case '+': return num1 + num2;
        case '−': return num1 - num2;
        case '×': return num1 * num2;
        case '÷': return num1 / num2;
        case '%': return num1 % num2;
    }
    return num2;

}


if (numbers.length > 0) {
    numbers.forEach(numBtn => {
        numBtn.addEventListener('click', () => {
            const currentDisplay = display.textContent;
            const newNumber = numBtn.textContent;

            if (waitingForSecondValue === true) {
                display.textContent = newNumber;
                waitingForSecondValue = false;
            } else {
                if (currentDisplay === '0' || currentDisplay === '') {
                    display.textContent = newNumber;

                } else {
                    display.textContent += newNumber;
                }
            }


        })
    });
}


if (operators.length > 0) {
    operators.forEach(op => {
        op.addEventListener('click', () => {
            const currentDisplay = display.textContent;
            if (firstValue && operator && !waitingForSecondValue) {
                const result = calculate(firstValue, operator, currentDisplay);
                display.textContent = result;
                firstValue = result;
            } else {
                firstValue = currentDisplay;
            }
            operators.forEach(button => button.classList.remove('active'));
            
            op.classList.add('active');

            operator = op.textContent;

            waitingForSecondValue = true;

        })
    })
}

if (equals) {
    equals.addEventListener('click', () => {
        if (firstValue && operator) {
            const secondValue = display.textContent;
            const result = calculate(firstValue, operator, secondValue);
            display.textContent = result;

            //reset for new calc
            firstValue = '';
            operator = '';
            waitingForSecondValue = true;
        }
    })
}



if (clearbtn) {
    clearbtn.addEventListener('click', () => {
        display.textContent = '0';
        firstValue = '';
        operator = '';
        waitingForSecondValue = false;

    })
}
function calculator() {

}
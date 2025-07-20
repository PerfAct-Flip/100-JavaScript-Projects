"use strict"
// Write a function that calculates the factorial of a given number ($n! = n \times (n-1) \times \dots \times 1$).
let num = 5;
function factorial (num) {
    if (num < 1) { 
        return 1;
    }
    return num * factorial(num -1);
}

console.log(`factorial of ${num} is : ${factorial(num)}`);
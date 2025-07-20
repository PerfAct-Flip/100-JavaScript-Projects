"use strict"
// Write a function that takes two numbers and returns the larger one.
function maxNum( num1, num2) {
    return (num1 > num2) ? num1 : num2;
}
let num1 = 20;
let num2 = 34;
console.log(` num1 : ${num1} \n num2 : ${num2}`);
console.log(`larger number is : ${maxNum(num1, num2)}`);
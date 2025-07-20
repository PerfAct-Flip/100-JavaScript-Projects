"use strict"
// Write a function that takes a number and returns "Even" or "Odd".

function checkNum (number) {
    if (number % 2 == 0){
        return "Even";
    }
    else {
        return "Odd";
    }
}

let num = 10;
console.log(`Number ${num} is ${checkNum(num)}`);
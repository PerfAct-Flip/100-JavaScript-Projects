"use strict"
// Write a function that takes a variable and logs its data type using `typeof`.
let checkVar = 1.02;

function checkType (tobeChecked) {
    console.log(`Type of "${tobeChecked}" is : ${typeof(tobeChecked)}`);
}
checkType(checkVar);
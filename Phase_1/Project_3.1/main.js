"use strict"
// Swap the values of two variables without using a temporary variable.
let a = 10;
let b = 23;
console.log("before swap: ");
console.log(`var a is : ${a}`);
console.log(`var b is : ${b}`);

a = a+b;
b = a-b;
a = a-b;


console.log("After swap: ");
console.log(`var a is : ${a}`);
console.log(`var b is : ${b}`);

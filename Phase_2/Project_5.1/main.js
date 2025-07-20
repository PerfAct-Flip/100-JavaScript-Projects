"use strict"
// Create a function that calculates simple interest ($SI = (P \times R \times T) / 100$).
let Principle = 2000;
let Rate = 12;
let Time = 2;
function SI (P,R,T) {
    return P*R*T / 100;
}
console.log(`
    Simple interest for
    Principle Amt : ${Principle},
    Interest Rate : ${Rate},
    Time Period : ${Time}
    is ${SI(Principle,Rate,Time)}
    `);
"use strict"
// Create a function for Celsius to Fahrenheit conversion ($F = C \times 9/5 + 32$).

function temp_converter (givenTemp) {
    let resultTemp = givenTemp * (9/5) + 32;
    console.log(`Celsius Temperature: ${givenTemp}`);
    console.log(`Fahrenhiet Tempearture: ${resultTemp}`);
}

temp_converter(32);
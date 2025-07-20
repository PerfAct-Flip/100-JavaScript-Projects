"use strict"
// Create a function for Fahrenheit to Celsius conversion ($C = (F - 32) \times 5/9$).
function temp_converter (givenTemp) {
    let resultTemp = (givenTemp -32)* (5/9);
    console.log(`Fahrenhiet Tempearture: ${givenTemp}`);
    console.log(`Celsius Temperature: ${resultTemp}`);
}

temp_converter(99);
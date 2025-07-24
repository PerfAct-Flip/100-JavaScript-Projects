"use strict"
// **Frequency Counter (String/Array):** Given a string or an array, count the frequency of each character/element.

let word = "Hello mango orange lover.";

let word_arr = Array.from(word.replaceAll(' ',''));
// console.log(word_arr);



function freq (arr) {
    const frequency = {}; 
    //hashmap, initializing empty object

    arr.forEach(e => {
        frequency[e] = (frequency[e] || 0) + 1
    });
    return frequency;
}
console.log(freq(word_arr));
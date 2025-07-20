"use strict"

// Write a function that determines if a single character is a vowel or a consonant.
let arr = ['a', 'e' , 'i' , 'o', 'u'];
let letter = 'E';
let ch = letter.toLowerCase();
console.log(ch);
function check (ch) {
    if (arr.includes(ch)) return "vowel";
    else return "consonant";
}
console.log(`letter ${letter} is : ${check(ch)}`);
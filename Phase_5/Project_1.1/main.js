"use strict"
//  Quote Generator (Local Data): An array of quotes; display a random one on button click.

//DOM Elements
const quoteBox = document.querySelector('#quoteBox');
const generatorButton = document.querySelector('#generatorButton');


// Array of quotes
const quotes = [
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand. — Martin Fowler",
    "The best error message is the one that never shows up. — Thomas Fuchs",
    "First, solve the problem. Then, write the code. — John Johnson",
    "Programs must be written for people to read, and only incidentally for machines to execute. — Harold Abelson",
    "The only way to learn a new programming language is by writing programs in it. — Dennis Ritchie",
    "Code is like humor. When you have to explain it, it's bad. — Cory House",
    "The most dangerous phrase in the language is, 'We've always done it this way.' — Grace Hopper",
    "Walking on water and developing software from a specification are easy if both are frozen. — Edward V Berard",
    "Talk is cheap. Show me the code. — Linus Torvalds",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it. — Brian W. Kernighan",
    "A clever person solves a problem. A wise person avoids it. — Albert Einstein",
    "The most disastrous thing that you can ever learn is your first programming language. — Alan Kay",
    "If you're going through hell, keep going. — Winston Churchill",
    "The code you write makes you a programmer. The code you delete makes you a good one. The code you don't have to write makes you a great one. — Mario Fusco"
];


if (generatorButton) {
    generatorButton.addEventListener('click', () => {
        const number = Math.floor(Math.random()*quotes.length);
        if (quoteBox) {
            quoteBox.textContent = quotes[number];
        }

    })
}
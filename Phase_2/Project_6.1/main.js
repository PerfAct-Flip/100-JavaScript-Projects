"use strict"
// Take a score (0-100) and return a letter grade (A, B, C, D, F).
let score = 75;
function grade (score) {
    if ( score < 0 || score > 100) return "Nan";
    else if ( score <= 100 && score > 80) return "A";
    else if ( score <= 80 && score > 60) return "B";
    else if ( score <= 60 && score > 40) return "C";
    else if ( score <= 40 && score > 20) return "D";
    else if ( score <= 20 && score >= 0) return "F";
}

console.log(
`For Score :${score}
Grade is ${grade(score)}`
);
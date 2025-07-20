"use strict"
// Create a function that calculates area based on shape and dimensions.
let shape = Number(prompt(`
enter number for shape
Rectangle : 1
Square : 2
Circle : 3
`));

function area_Calculator (shape) {
    if (shape==1) return Rectangle_Area();
    if (shape==2) return Square_Area();
    if (shape==3) return Circle_Area().toFixed(2);
}

function Rectangle_Area () {
    let 
    length = Number(prompt("enter length")),
    breadth = Number(prompt("enter Breadth")); 
    return length*breadth;
}

function Square_Area () {
    let dimension = Number(prompt("enter dimension"));
    return dimension*dimension;
}

function Circle_Area () {
    let radius = Number(prompt("enter radius"));
    return Math.PI * radius * radius;
}


console.log(`Area is ${area_Calculator(shape)}`);
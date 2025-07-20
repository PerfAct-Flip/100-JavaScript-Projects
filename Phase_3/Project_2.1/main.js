// Find Max/Min in Array: Given an array of numbers, find the maximum and minimum values.

// let Numarr = new Array(10,22,45,12,47,34,45,56);
// let max=Numarr[0],min=Numarr[0];
// for (i=0;i<Numarr.length;i++){
//     if(max <= Numarr[i]) max= Numarr[i];

//     if(min >= Numarr[i]) min= Numarr[i];
// }
// console.log(`max: ${max}`);
// console.log(`min: ${min}`);

//method 2 -forEach
// let numbers = new Array(10,22,45,12,47,34,45,56);
// let max=numbers[0],min=numbers[0];
// numbers.forEach(num => {if(min >= num) min=num});
// numbers.forEach(num => {if(max <= num) max=num});
// console.log(numbers.toString());
// console.log(min);
// console.log(max);

//method 3 

// let numbers = new Array(10,22,45,12,47,34,45,56);
// let max=Math.max(...numbers),min=Math.min(...numbers);
// console.log(min);
// console.log(max);

//method 4 
let numbers = new Array(10,22,45,12,47,34,45,56);
const min = numbers.reduce((minVal,currVal)=> {return Math.min(minVal,currVal)});
const max = numbers.reduce((maxVal,currVal)=> {return Math.max(maxVal,currVal)});
console.log(min);
console.log(max);
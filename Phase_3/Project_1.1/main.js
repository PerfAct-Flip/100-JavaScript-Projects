// Array Sum & Average: Given an array of numbers, calculate their sum and average.
"strict mode"
// let Numarr = new Array(2,3,4,5,6,7,8);
// let sum = 0;

// console.log("Elements of Array");
// for (i=0; i<Numarr.length; i++){
//      console.log(Numarr[i] + " ");
// }
// for (i=0; i<Numarr.length; i++){
//      sum += Numarr[i];
// }
// console.log(`sum ${sum}`);

//method 2 - Reduce func
// let arr = new Array(2,3,4,5,6,7,8);
// let sumRes = arr.reduce(
//      (sum, num)=>sum + num
//      ,0)

// console.log(sumRes);

//method 3 - forEach
// let arr = new Array(2,3,4,5,6,7,8);
// let sum =0;
// arr.forEach(num => sum+=num);
// console.log(sum);

//method 4 - for of
let arr = new Array(2,3,4,5,6,7,8);
let sum = 0;
for (const num of arr ) sum +=num;
console.log(sum);
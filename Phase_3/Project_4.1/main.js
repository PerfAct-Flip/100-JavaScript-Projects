"use strict"
// Create a new array containing only unique elements from a given array.
let arr = [2,3,4,5,6,7,1,3,9];
let mySet = new Set(arr);
let newArr = new Array();

//better way
// mySet.forEach(e => {
//     newArr.push(e);
// });


arr.forEach(e => {
    if (!newArr.includes(e)){
        newArr.push(e);
    }
});
console.log(arr);
console.log(newArr);
"use strict"
// Reverse an array without using the built-in `reverse()` method.
let Numarr = new Array(10,22,45,12,47,34,45,56);
function arrReverse (arr) { 
    let Arr = new Array();
    for(let i = arr.length-1; i>=0 ;i--){
        Arr.push(arr[i]);
    }
    
    return Arr;
}
console.log(arrReverse(Numarr));
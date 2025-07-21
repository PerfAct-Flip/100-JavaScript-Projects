"use strict"
// Create a person object and iterate through its properties, logging `key: value`.

let Person = {
name : "Soham",
age : 21,
gender : "male"
}
// let keysArr = Object.keys(Person);
// let valuesArr = Object.values(Person);
// for(let i = 0;i<keysArr.length;i++) {
//     console.log(`key : ${keysArr[i]}, \nvalue: ${valuesArr[i]}\n`);
// }


//better method
Object.entries(Person).forEach(([key ,value]) => {
    console.log(`key : ${key}, value : ${value}`);
});
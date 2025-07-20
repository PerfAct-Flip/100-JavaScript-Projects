"use strict"
// Loop from 1 to 100; print "Fizz" for divisible by 3, "Buzz" for divisible by 3, "FizzBuzz" for divisible by both 3 and 5, or the number.

for (let num=1; num<= 100; num++) {
    if ( num%5 == 0 & num%3 ==0) {
        console.log("FizzBuzz");
    } 
    else if ( num%5 == 0) {
        console.log("Buzz");
    } 
    else if ( num%3 ==0) {
        console.log("Fizz");
    } 
    else {
        console.log(num);
    }
}
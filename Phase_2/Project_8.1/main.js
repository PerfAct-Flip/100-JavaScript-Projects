"use strict"
// Check predefined username/password against user input.

const PREDEFINED_USER = "user123";
const PREDEFINED_PASSWORD = "123";

function credentialChecker ( user, password) {
    if (user ==  PREDEFINED_USER &&  password == PREDEFINED_PASSWORD) return "correct!!";
    else return "incorrect!!"
}

let user;
let password;
user = "user123";
password = "123";
user = "sds";
password = "234";

console.log(
`
You entered - 
User : ${user}
Password : ${password}

the given credential are ${credentialChecker(user,password)}
`
);
"use strict"

// **Simple To-Do List (Array of Strings/Objects):** Implement functions to add, remove, and list to-do items.

console.log("enter program...");

let userInput = prompt("yes /no (y/n) ?");

if (userInput == "yes" || userInput == "y") {

    function add(list){
        let input = prompt("Enter to-do");
        list.push(input);
    }

    function remove(list){
        list.pop();
    }

    function show(list) {
        list.forEach(task => {
            console.log(task);
        });
    }

    function toDoList() {
        let list = new Array(); // initializing list

        console.log(
            `
            Options: 
            1. add item
            2. remove item
            3. show list
            4. exit
            `
        );
        let option;
        do {
            option = Number(prompt("Enter Option."));
            switch (option) {
                case 1: 
                    add(list); break;// add item
                case 2: 
                    remove(list); break;// remove item
                case 3: 
                    show(list); break;// show list
                case 4:
                    console.log("Exiting to-do list program. Goodbye!");
                    break; // Exit the loop
                default: console.log("invalid input!"); return;
            }
        } while (option !==4)

    }
    toDoList();
} else if (userInput == "no" || userInput == "n") {
    console.log("exiting...");
}
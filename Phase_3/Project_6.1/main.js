"use strict"
// Create an object for a book (title, author, yearPublished, isRead).

let book = 
{ 
    title : "Looking For Alaska",
    author : "John Green",
    yearPublished : "2005",
    isRead : "yes"
}
Object.entries(book).forEach(([key,value]) => {
    console.log(` ${key} : ${value}`);
});

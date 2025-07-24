"use strict"
// Text Changer: An input field and a button; change text in a <p> tag based on input.

const inputData = document.getElementById('input-data');
const addButton = document.getElementById('addText');
const displayData = document.getElementById('displayData');

if (inputData && addButton && displayData){
    addButton.addEventListener('click', ()=> { 
        displayData.textContent = inputData.value;
        console.log(inputData.value);
       inputData.value = '';
    });
} else {
    console.error("Error: One or more required HTML elements not found:");
    if (!inputData) console.error("- Element with ID 'input-data' not found.");
    if (!addButton) console.error("- Element with ID 'addText' not found.");
    if (!displayData) console.error("- Element with ID 'displayData' not found.");
}
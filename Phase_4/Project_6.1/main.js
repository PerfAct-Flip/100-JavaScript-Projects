"use strict"
// **Basic Form Validation:** A simple form; check if name and email fields are not empty on submission.

const myForm = document.getElementById('myForm');
const inputName = document.getElementById('inName');
const inputEmail = document.getElementById('inEmail');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const formStatus = document.getElementById('formStatus');

if(myForm) {
    myForm.addEventListener('submit', (event)=> {
        event.preventDefault();
        // clearErrors();
        
        let isValid = true;

        if(inputName && inputName.value.trim() === ''){
            nameError.textContent = "name is not valid";
            inputName.classList.add('error-border');
            isValid = false;
        }
        if(inputEmail && inputEmail.value.trim() === ''){
            nameError.textContent = "name is not valid";
            inputName.classList.add('error-border');
            isValid = false;
        }

        if(isValid){
            formStatus.textContent = "all credentials are correct.";
            console.log('Form data:', {
                name: inputName.value.trim(),
                email: inputEmail.value.trim()
            });
        }
        else{
            formStatus.textContent = "invalid!!";
            formStatus.classList.remove('success-message');
            formStatus.classList.add('error-message');

        }
    })
}
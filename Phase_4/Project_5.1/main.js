"use strict";
// Show/Hide Element: A button to toggle the visibility of a <div>.

const toggleButtons = document.querySelectorAll('.toggleBtn'); 

if (toggleButtons.length > 0) { 
    toggleButtons.forEach(button => { 
        button.addEventListener('click', () => { 
            const listItem = button.closest('.list');
            const boxItem = listItem.querySelector('.toggleBox');

            if (boxItem) {
                boxItem.classList.toggle('hidden');
                console.log(`Toggled visibility for div: "${boxItem.textContent.trim()}"`);

                if (boxItem.classList.contains('hidden')) {
                    button.textContent = "Show";
                } else {
                    button.textContent = "hide";
                }

            }
            
        });
    });
} else {
    console.warn("No elements with class 'toggleBtn' found.");
}
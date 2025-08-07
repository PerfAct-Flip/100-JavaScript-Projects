"use strict"
//  Modal Window: A button that opens and closes a modal overlay.

// DOM elements
const openModalButton = document.getElementById('open-modal-button');
const closeModalButton = document.getElementById('close-modal-button');
const modalOverlay = document.getElementById('modal-overlay');


function openModal() {
    modalOverlay.classList.add('active');
}

function closeModal() {
    modalOverlay.classList.remove('active');
}


openModalButton.addEventListener('click', openModal);

closeModalButton.addEventListener('click', closeModal);

modalOverlay.addEventListener('click', (event) => {
    if (event.target.id === 'modal-overlay') {
        closeModal();
    }
});


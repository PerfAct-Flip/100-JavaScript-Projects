"use strict";

// DOM elements
const taskList = document.querySelector('#task-list');
const newTaskInput = document.querySelector('#new-task-input');
const addTaskButton = document.querySelector('#add-task-button');



if (addTaskButton) {
    addTaskButton.addEventListener('click', () => {
        const taskText = newTaskInput.value.trim();

        if (taskText !== '') {

            const newListItem = document.createElement('li');
            newListItem.className = 'task-item';


            const newParagraph = document.createElement('p');
            newParagraph.className = 'task-content';
            newParagraph.textContent = taskText;


            const newDeleteButton = document.createElement('button');
            newDeleteButton.className = 'delete-button';
            newDeleteButton.textContent = 'X';


            newListItem.appendChild(newParagraph);
            newListItem.appendChild(newDeleteButton);


            taskList.appendChild(newListItem);


            newTaskInput.value = '';
        }
        console.log(" add button clicked");
    });
}

if (taskList) {
    taskList.addEventListener('click', (event) => {
        const deleteButton = event.target.closest('.delete-button');

        if (deleteButton) {
            const taskItem = deleteButton.closest('.task-item');

            if (taskItem) {
                taskItem.remove();
            }
        }
    });
}
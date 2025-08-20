"use strict"
//  Simple Quiz App: Questions in an array of objects; display one, check answers, keep score.


const quizQuestions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: "Paris"
    },
    {
        question: "Which planet is known as the 'Red Planet'?",
        options: ["Jupiter", "Mars", "Venus", "Saturn"],
        answer: "Mars"
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        answer: "Pacific Ocean"
    },
    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        options: ["William Shakespeare", "Charles Dickens", "Jane Austen", "Mark Twain"],
        answer: "William Shakespeare"
    },
    {
        question: "What is the chemical symbol for gold?",
        options: ["Au", "Ag", "Fe", "Pb"],
        answer: "Au"
    }
];

let questionNumber = 0;
//DOM Elements
const quizContent = document.querySelector('#quiz-content');
const startBtn = document.querySelector('#start-btn');
const submitBtn = document.querySelector('#submit-btn');
const question = document.querySelector('#question-text');
const options = document.querySelectorAll('.option-btn');

startBtn.addEventListener('click', startQuiz);
submitBtn.addEventListener('click',submitAction);

function startQuiz() {
    quizContent.style.display = "block";
    startBtn.style.display = "none";
    renderQuiz();
}

function renderQuiz () {
    if (!(questionNumber >= quizQuestions.length)){ 
        question.textContent = quizQuestions[questionNumber].question;
    let optionNumber = 0;
    options.forEach(option => {
        option.textContent = quizQuestions[questionNumber].options[optionNumber];
        optionNumber++;
    });
    }
}

function submitAction (){
    questionNumber++;
    renderQuiz();
}
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
const nextBtn = document.querySelector('#next-btn');
const question = document.querySelector('#question-text');
const options = document.querySelectorAll('.option-btn');
const score = document.querySelector('#score');
let scoreValue = 0;
let selectedAnswer = null;

startBtn.addEventListener('click', startQuiz);
submitBtn.addEventListener('click', checkAnswer);
nextBtn.addEventListener('click', () => {
    if (questionNumber < quizQuestions.length-1) {
        questionNumber++;
        console.log("next clicked" + questionNumber);
    }else {
        nextBtn.style.display = "none";
    }
    score.textContent = scoreValue;
    options.forEach((option, index) => {
        option.classList.remove('selected', 'correct', 'wrong');
        option.disabled = false;
    });
    renderQuiz();
});

function startQuiz() {
    quizContent.style.display = "block";
    startBtn.style.display = "none";
    renderQuiz();
}

function renderQuiz() {
    if (!(questionNumber >= quizQuestions.length)) {
        question.textContent = quizQuestions[questionNumber].question;
        let optionNumber = 0;
        options.forEach(option => {
            option.textContent = quizQuestions[questionNumber].options[optionNumber];
            optionNumber++;
        });
    }
    
}

function submitAction() {

    checkAnswer();

}


options.forEach(button => {
    button.addEventListener('click', () => {
        options.forEach(btn => {
            btn.classList.remove('selected', 'correct', 'wrong');
        });

        button.classList.add('selected');
        selectedAnswer = button.textContent;
    });
});


function checkAnswer() {
    if (selectedAnswer === null) {
        alert("Please select an answer before submitting.");
        return;
    }
    console.log(quizQuestions.length);
    console.log(`${questionNumber}`);
    const correctAnswer = quizQuestions[questionNumber].answer;
    console.log(selectedAnswer);
    const selectedBtn = Array.from(options).find(btn => btn.textContent === selectedAnswer);

    options.forEach(button => button.disabled = true);

    if (selectedAnswer === correctAnswer) {
        console.log("corect answer")
        selectedBtn.classList.add('correct');
        scoreValue++;
    } else {
        console.log("wrong answer");
        selectedBtn.classList.add('wrong');


        const correctBtn = Array.from(options).find(btn => btn.textContent === correctAnswer);
        if (correctBtn) {
            correctBtn.classList.add('correct');
        }
    }

    // setTimeout(() => {
    //     // questionNumber++;
    //     renderQuiz();
    // }, 15000);
}

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
const resultScreen = document.querySelector('#results-screen');
const finalScore = document.querySelector('#final-score');
const restartBtn = document.querySelector('#restart-btn');
let scoreValue = 0;
let selectedAnswer = null;

startBtn.addEventListener('click', startQuiz);
submitBtn.addEventListener('click', checkAnswer);
nextBtn.addEventListener('click', () => {
    nextBtnAction();

});

// START QUIZ
function startQuiz() {
    questionNumber = 0;
    scoreValue = 0;
    selectedAnswer = null;
    
    options.forEach(option => {
        option.classList.remove('selected', 'correct', 'wrong');
        option.disabled = false;
    });

    resultScreen.style.display = "none";
    quizContent.style.display = "block";
    startBtn.style.display = "none";
    submitBtn.style.display = 'block';


    renderQuestions();
}

// RENDER QUESTIONS
function renderQuestions() {
    // This is a slightly cleaner way to write the same logic
    if (questionNumber < quizQuestions.length) {
        question.textContent = quizQuestions[questionNumber].question;
        options.forEach((option, index) => {
            option.textContent = quizQuestions[questionNumber].options[index];
        });
    } else {
        // This handles the end of the quiz
        renderResult();
    }
}

//NEXT BUTTON ACTIONS
function nextBtnAction() {
    questionNumber++;
    console.log("before if :" + questionNumber);
    if (questionNumber < quizQuestions.length - 1) {

        console.log("next clicked" + questionNumber);
    } else {
        console.log("final ques");
        nextBtn.style.display = "none";
    }
    score.textContent = scoreValue;
    options.forEach((option, index) => {
        option.classList.remove('selected', 'correct', 'wrong');
        option.disabled = false;
    });

    renderQuestions();
}

// RESPONSE HIGHLIGHTING
options.forEach(button => {
    button.addEventListener('click', () => {
        options.forEach(btn => {
            btn.classList.remove('selected', 'correct', 'wrong');
        });

        button.classList.add('selected');
        selectedAnswer = button.textContent;
    });
});

// CHECKING ANSWER
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

    if (!(questionNumber < quizQuestions.length-1)) {
        console.log("result ");
        renderResult();
    }

    // if (!(nextBtn.style.display === "none")) {
    //     setTimeout(() => {
    //         console.log("timeout to ques")
    //         nextBtnAction();
    //     }, 8000);
    // }
}


// RENDER RESULT
function renderResult() {
    resultScreen.style.display = "block";
    finalScore.textContent = scoreValue;
}

// RESTART QUIZ
restartBtn.addEventListener('click', () => {
    startQuiz();
    
})
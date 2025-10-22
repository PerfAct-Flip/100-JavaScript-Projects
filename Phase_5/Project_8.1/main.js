"use strict"

// Hangman Game: Choose a random word; user guesses letters; display progress.

// const myCanvas = document.querySelector('#myCanvas');
// const ctx = myCanvas.getContext('2d');


// myCanvas.width = window.innerWidth;
// myCanvas.height = window.innerHeight;

// const ParticleArray = [];


// window.addEventListener('resize', () => {
//     myCanvas.width = window.innerWidth;
//     myCanvas.height = window.innerHeight;
// })


// class Particle {
//     constructor() {

//         this.x = myCanvas.width / 2;
//         this.y = myCanvas.height / 2;


//         this.size = Math.random() * 5 + 1;
//         this.speedX = Math.random() * 3 - 1.5;
//         // console.log(this.speedX);
//         this.speedY = Math.random() * 3 - 1.5;
//     }

//     update() {
//         this.x += this.speedX;
//         this.y += this.speedY;
//     }

//     draw() {
//         ctx.fillStyle = 'pink';
//         ctx.strokeStyle = 'purple';

//         ctx.beginPath();

//         ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
//         ctx.fill();
//         ctx.stroke();
//     }
// }

// function init() {
//     for (let i = 0; i < 100; i++) {
//         ParticleArray.push(new Particle());
//     }
// }
// init();
// function handleParticles() {
//     for (let i = 0; i < ParticleArray.length; i++) {
//         ParticleArray[i].update();
//         ParticleArray[i].draw();

//         if (
//             ParticleArray[i].x < 0 ||
//             ParticleArray[i].x > myCanvas.width ||
//             ParticleArray[i].y < 0 ||
//             ParticleArray[i].y > myCanvas.height
//         ) {
//             ParticleArray.splice(i, 1);
//             i--;
//         }
//     }
// }

// function animate() {
//     ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
//     handleParticles();

//     requestAnimationFrame(animate);
// }

// animate();

// let num = 2;

// const timer = setInterval(() => {
//     console.log(num);
//     if (num > 0) {
//         num--;
//     } else {
//         clearInterval(timer)
//     }
// }, 1000);



// --- Game Variables ---
const WORDS = ["JAVASCRIPT", "PROGRAMMING", "HANGMAN", "CODING", "WEB"]; // Array of words
let word = WORDS[0];
let wordArr = word.split('');
const totalAttempts = 7; 
let correctGuessesCount = 0;
let attempts = 0;
let gameOver = false;

// --- DOM Elements ---
const myCanvas = document.querySelector('#myCanvas');
const ctx = myCanvas ? myCanvas.getContext('2d') : null; 
const wordContainer = document.querySelector('.wordContainer');
const keys = document.querySelectorAll(".key");
const restartBtn = document.querySelector('#restartBtn');
const messageDisplay = document.querySelector('.message'); 

// --- Hangman Drawing Parts ---
const drawing = [
    // 0: Base
    () => drawBodyPart(0, 700, 200, 700),
    // 1: Stand
    () => drawBodyPart(100, 100, 100, 700),
    // 2: Rope / Top Bar
    () => {
        drawBodyPart(100, 100, 300, 100); 
        drawBodyPart(300, 100, 300, 200);
    },
    // 3: Head
    () => drawHeadPart(),
    // 4: Body
    () => drawBodyPart(300, 300, 300, 400),
    // 5: Hands
    () => {
        drawBodyPart(300, 300, 250, 350); // Left arm 
        drawBodyPart(300, 300, 350, 350); // Right arm
    },
    // 6: Legs (The final attempt)
    () => {
        drawBodyPart(300, 400, 250, 500); // Left leg
        drawBodyPart(300, 400, 350, 500); // Right leg
    }
];


// Drawing lines
function drawBodyPart(startingX, startingY, endingX, endingY) {
    if (!ctx) return;
    ctx.beginPath();
    ctx.moveTo(startingX, startingY);
    ctx.lineTo(endingX, endingY);
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 5;
    ctx.lineCap = 'round';
    ctx.stroke();
}

// Drawing the head (circle)
function drawHeadPart() {
    if (!ctx) return;
    ctx.fillStyle = 'red';
    ctx.beginPath();
    ctx.arc(300, 250, 50, 0, 2 * Math.PI);
    ctx.fill();
}

// Draws the current state of the hangman figure
function drawDiagram() {
    if (!ctx) return;
    ctx.clearRect(0, 0, myCanvas.width, myCanvas.height); 
    for(let i = 0; i < attempts; i++) {
        if (i < drawing.length) { 
            drawing[i]();
        }
    }
}

if (myCanvas) {
    myCanvas.width = window.innerWidth;
    myCanvas.height = 750; 
    window.addEventListener('resize', () => {
        myCanvas.width = window.innerWidth;
        drawDiagram(); 
    });
}


// === CORE GAME LOGIC ===

function checkGuess(target, currentWordArr) {
    // Note: This function now expects the array of the target word
    const indexes = currentWordArr.reduce((acc, char, index) => {
        if (char === target) {
            acc.push(index);
        }
        return acc;
    }, []);

    return indexes;
}

function updateLetter(targetLetter, correctIndices) {
    const letterContainers = wordContainer.children;
    correctIndices.forEach(index => {
        if (index >= 0 && index < letterContainers.length) {
            const targetSpan = letterContainers[index].querySelector('.letter');

            if (targetSpan && targetSpan.textContent.trim() === '') {
                // Only count/update if the span was previously blank
                targetSpan.textContent = targetLetter.toUpperCase();
                targetSpan.classList.add('revealed');
                correctGuessesCount++;
            }
        }
    });
    checkWin();
}


function checkWin() {
    if (correctGuessesCount === word.length) {
        endGame(true);
    }
}

function checkLose() {

    if (attempts >= totalAttempts) { 
        endGame(false);
    }
}

function endGame(win) {
    gameOver = true;
    disableKeyboard();
    if (win) {
        messageDisplay.textContent = "🎉 YOU WIN! 🎉";
        messageDisplay.className = 'message win';
    } else {

        drawDiagram(); 
        messageDisplay.textContent = `💀 GAME OVER! The word was: ${word}`;
        messageDisplay.className = 'message lose';
    }
}

function disableKeyboard() {
    keys.forEach(key => {
        key.disabled = true;
    });
}

function enableKeyboard() {
    keys.forEach(key => {
        key.disabled = false;
        key.classList.remove('correct', 'wrong');
    });
}


// === GAME INITIALIZATION AND RESTART ===

function setupWordDisplay(currentWord) {
    if (!wordContainer) return;
    wordContainer.innerHTML = ''; // Clear existing
    for (let i = 0; i < currentWord.length; i++) {
        const letterContainer = document.createElement('li');
        letterContainer.classList.add('letterContainer');

        const letter = document.createElement('span');
        letter.textContent = ' ';
        letter.classList.add('letter');
        letterContainer.appendChild(letter);

        wordContainer.appendChild(letterContainer);
    }
}

function restartGame() {
    attempts = 0;
    correctGuessesCount = 0;
    gameOver = false;
    
    word = WORDS[Math.floor(Math.random() * WORDS.length)];
    wordArr = word.split('');

    if (ctx) ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
    
    setupWordDisplay(word);

    enableKeyboard(); 
    messageDisplay.textContent = '';
    messageDisplay.className = 'message';
}

// keys click Event Listeners
keys.forEach(key => {
    key.addEventListener('click', () => {
        if (gameOver || key.disabled) {
            return;
        }

        const char = key.textContent;
        const existingIndexes = checkGuess(char, wordArr); 
        
        key.disabled = true; 

        if (existingIndexes.length === 0) {
            key.classList.add('wrong');
            attempts++;
            drawDiagram();
            checkLose();

        } else {
            updateLetter(char, existingIndexes);
            key.classList.add('correct');
        }
    });
});


if (restartBtn) {
    restartBtn.addEventListener('click', restartGame);
}

document.addEventListener('DOMContentLoaded', () => {
    restartGame(); 
});
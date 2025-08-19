"use strict"
// Typing Speed Test: Display text, user types it, calculate WPM and accuracy.
const NUMBER_COUNT = 20;
const wordList = document.querySelector('.word-list');
const startButton = document.querySelector('#startButton');
const timerElement = document.querySelector('#timer');
const wpmElement = document.querySelector('#wpm');
const accuracyElement = document.querySelector('#accuracy');
let typedSentence = "";
let originalSentence = "";
let incorrectKeyPresses = 0;
let timeId = 0;
let timeTaken = 0;
let testStarted = false;

async function fetchWords(NUMBER) {
    const api_url = `https://random-word-api.herokuapp.com/word?number=${NUMBER}`;
    try {
        const response = await fetch(api_url);
        if (!response.ok) {
            throw new Error(`API returned an error: ${response.status}`);
        }
        const data = await response.json();
        console.log("fethcing data")
        return data.join(' ');
    } catch (error) {
        console.error("Failed to fetch words:", error);
        return "the quick brown fox jumps over the lazy dog";
    }
}

async function initializeTest() {
    typedSentence = "";
    timeTaken = 0;
    incorrectKeyPresses = 0;
    testStarted = true;
    clearInterval(timeId);
    timerElement.textContent = `Time: 0s`;
    wpmElement.textContent = `WPM: 0`;
    accuracyElement.textContent = `Accuracy: 100%`;
    originalSentence = await fetchWords(NUMBER_COUNT);
    startButton.style.display = 'none'; 
    startButton.blur();
    console.log("intialzin test")
    renderSentence();
    startTimer();
    
}


function handleKeyDown(event) {
           
            if (event.key.length === 1 || event.key === 'Backspace') {
                event.preventDefault(); 
            }
            if (testStarted) {
                const key = event.key;
                
                if (key === 'Backspace') {
                    if (typedSentence.length > 0) {
                        typedSentence = typedSentence.slice(0, -1);
                    }
                } else if (key.length === 1) { 
                    if (key !== originalSentence[typedSentence.length]) {
                        incorrectKeyPresses++;
                    }
                    typedSentence += key;
                }

                renderSentence();
                calculateMetrics(); 

               
                if (typedSentence.length === originalSentence.length) {
                    clearInterval(timeId); 
                    testStarted = false; 
                    calculateMetrics(); 
                    startButton.style.display = 'block'; 
                }
            }
        }

function renderSentence() {
    wordList.innerHTML = '';
    for (let i = 0; i < originalSentence.length; i++) {
        let charSpan = document.createElement('span');
        charSpan.textContent = originalSentence[i];
        if (i < typedSentence.length) {
            if (originalSentence[i] === typedSentence[i]) {
                charSpan.classList.add('correct-char');
            } else {
                charSpan.classList.add('incorrect-char');
            }
        }
        wordList.appendChild(charSpan);
    }
}

function startTimer() {
    timeId = setInterval(() => {
        timeTaken++;
        timerElement.textContent = `Time: ${timeTaken}s`;
    }, 1000);
}
function calculateMetrics() {
    if (timeTaken === 0) return;

    const typedWords = typedSentence.split(' ').length;
    const wordsPerMinute = (typedWords / timeTaken) * 60;
    wpmElement.textContent = `WPM: ${Math.round(wordsPerMinute) || 0}`;

    const totalTypedChars = typedSentence.length;
    if (totalTypedChars > 0) {
        const accuracy = ((totalTypedChars - incorrectKeyPresses) / totalTypedChars) * 100;
        accuracyElement.textContent = `Accuracy: ${accuracy ? accuracy.toFixed(2) : 100}%`;
    } else {
        accuracyElement.textContent = `Accuracy: 100%`;
    }
}

document.addEventListener('keydown', handleKeyDown);
startButton.addEventListener('click', initializeTest);


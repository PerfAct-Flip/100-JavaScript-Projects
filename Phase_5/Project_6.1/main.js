//  DOM Elements 
const boardItems = document.querySelectorAll('.board-items');
const board = document.querySelector('.board');

//  Game State Variables 
let currentPlayer = 'X';
let boardState = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

//  Winning Combinations 
const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Event Listeners 
boardItems.forEach((item, index) => {
    item.addEventListener('click', () => handleCellClick(item, index));
});

// Functions

function handleCellClick(cell, index) {
    if (boardState[index] !== '' || !gameActive) {
        return;
    }

    boardState[index] = currentPlayer;
    cell.textContent = currentPlayer;
    cell.classList.add(currentPlayer.toLowerCase()); // Add 'x' or 'o' class for styling

    if (checkWin()) {
        displayMessage(`${currentPlayer} has won!`);
        gameActive = false;
        highlightWinningCells();
        return;
    }

    if (checkDraw()) {
        displayMessage("It's a draw!");
        gameActive = false;
        return;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    
}

function checkWin() {
    for (let i = 0; i < winningConditions.length; i++) {
        const [a, b, c] = winningConditions[i];
        if (boardState[a] && boardState[a] === boardState[b] && boardState[a] === boardState[c]) {
            return true;
        }
    }
    return false;
}

function checkDraw() {
    return boardState.every(cell => cell !== '');
}


function highlightWinningCells() {
    for (let i = 0; i < winningConditions.length; i++) {
        const [a, b, c] = winningConditions[i];
        if (boardState[a] && boardState[a] === boardState[b] && boardState[a] === boardState[c]) {
            boardItems[a].style.backgroundColor = 'var(--correct-color)';
            boardItems[b].style.backgroundColor = 'var(--correct-color)';
            boardItems[c].style.backgroundColor = 'var(--correct-color)';
            break;
        }
    }
}


function displayMessage(message) {
    const statusDisplay = document.getElementById('status-message');
    if (statusDisplay) {
        statusDisplay.textContent = message;
    }
}


function restartGame() {
    currentPlayer = 'X';
    boardState = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;

    boardItems.forEach(item => {
        item.textContent = '';
        item.classList.remove('x', 'o');
        item.style.backgroundColor = ''; 
    });

    displayMessage("Game started! X's turn.");
}


restartGame();
"use strict"
// Memory Game (Card Matching): Flip cards to find matching pairs; track moves and time.
const revealButtons = document.querySelectorAll('.reveal');
const PLAYER1 = document.querySelector('#player1');
const PLAYER2 = document.querySelector('#player2');

let attempts = 0;
let ActivePlayer = PLAYER1.id;
let flippedCards = [];
function handleCardClick(event) {

    const clickedButton = event.currentTarget;
    const cardFront = clickedButton.closest('.card_front');
    if (!cardFront || cardFront.classList.contains('is-flipped')) {
        return;
    }

    if (cardFront) {
        cardFront.classList.add('is-flipped');
    }

    const card = cardFront.parentElement;
    const cardImg = card.querySelector(".card_img");

    if (cardImg) {
        cardImg.classList.add('is-flipped');
    }

    //card Value
    const cardValue = card.parentElement.dataset.pairId;
    if (flippedCards.length < 2) {
        flippedCards.push(cardValue);
    }

    if (flippedCards.length === 2) {
        unflip();
    }
}
function initializeGameListeners() {

    const currentRevealButtons = document.querySelectorAll('.reveal');

    currentRevealButtons.forEach(button => {

        button.removeEventListener('click', handleCardClick);
        button.addEventListener('click', handleCardClick);
        button.disabled = false;
    });
    shuffleCards();
}

function unflip() {
    revealButtons.forEach(button => {
        button.disabled = true;
    });


    const [card1, card2] = flippedCards;

    // check for win condition
    checkWin(card1, card2)

    const cardFrontList = document.querySelectorAll('.card_front');
    setTimeout(() => {
        revealButtons.forEach(button => {
            button.disabled = false;
        });
        cardFrontList.forEach(cardFront => {
            const card = cardFront.parentElement;
            const cardImg = card.querySelector(".card_img");

            cardFront.classList.remove('is-flipped');
            cardImg.classList.remove('is-flipped');

        });
    }, 2000);


    flippedCards = [];
}

function checkWin(card1, card2) {

    if (card1 === card2) {
        const currentPlayer = document.querySelector(`#${ActivePlayer}`);
        const currentPlayerScore = currentPlayer.querySelector('.score');
        let Score = parseInt(currentPlayerScore.textContent) || 0;
        attempts++;
        Score++;
        currentPlayerScore.textContent = Score;

        const turnedCard = document.querySelectorAll(`[data-pair-id="${card1}"]`);
        turnedCard.forEach(cardItem => {
            const card = cardItem.querySelector('.card');
            card.classList.add('correct');

            const cardFront = card.querySelector('.card_front');
            if (cardFront) {
                cardFront.remove();
            }
        })
        //final winnner check
        checkWinner();
        if (attempts === 2) {
            attempts = 0;
            // add message that "You can attempt only twice in a row."
            switchActiveUser()
        };
    } else {
        switchActiveUser();
    }
}

// to switch players

function switchActiveUser() {
    ActivePlayer = ActivePlayer === 'player2' ? 'player1' : 'player2';
    const currentPlayer = document.querySelector(`#${ActivePlayer}`);
    const allTurnIndicator = document.querySelectorAll('.turn_indicator');
    allTurnIndicator.forEach(indicator => {
        indicator.classList.remove('active');
    });
    const turnIndicator = currentPlayer.querySelector('.turn_indicator');
    turnIndicator.classList.add('active');
}


function checkWinner() {
    const cards = document.querySelectorAll('.card');
    const allCorrect = Array.from(cards).every(card => {
        return card.classList.contains('correct');
    });

    if (allCorrect) {
        const player1Score = getScore('player1');
        const player2Score = getScore('player2');
        const ResultText = document.querySelector('.result_text');
        ResultText.classList.add('show');
        const Winner = document.querySelector('#winner');
        if (Winner) {
            if (player1Score > player2Score) {
                Winner.textContent = 1;
            } else if (player1Score < player2Score) {
                Winner.textContent = 2;
            } else {
                console.log("its a draw");
            }
        }
    }

}

function getScore(Player) {
    const currentPlayerScore = document.querySelector(`#${Player} .score`);
    return parseInt(currentPlayerScore?.textContent) || 0;
}


function shuffleCards() {
    const cardList = document.querySelector('.card_list');

    if (!cardList) {
        console.error("Card list's element not found.");
        return;
    }

    const cards = Array.from(cardList.querySelectorAll('[data-pair-id]'));

    let currentIndex = cards.length, randomIndex;

    while (currentIndex !== 0) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        const cardA = cards[currentIndex];
        const cardB = cards[randomIndex];

        const nextSiblingOfB = cardB.nextSibling;

        cardList.insertBefore(cardA, cardB);

        cardList.insertBefore(cardB, nextSiblingOfB);
    }

    console.log("Cards shuffled successfully.");
}


function restartGame() {

    attempts = 0;
    flippedCards = [];
    ActivePlayer = PLAYER1.id;
    document.querySelector('#player1 .score').textContent = 0;
    document.querySelector('#player2 .score').textContent = 0;

    document.querySelectorAll('.turn_indicator').forEach(indicator => {
        indicator.classList.remove('active');
    });
    const p1Indicator = document.querySelector('#player1 .turn_indicator');
    if (p1Indicator) {
        p1Indicator.classList.add('active');
    }

    const Cards = document.querySelectorAll('.card');
    Cards.forEach(card => {
        card.classList.remove('correct');

        const existingCardFront = card.querySelector('.card_front');
        if (!existingCardFront) {
            const newCardFront = document.createElement('div');
            newCardFront.classList.add('card_front');

            const newButton = document.createElement('button');
            newButton.classList.add('reveal');
            newButton.textContent = 'Reveal card';

            newCardFront.appendChild(newButton);

            card.prepend(newCardFront);
        }


        initializeGameListeners();
        card.querySelector('.card_img')?.classList.remove('is-flipped');
        card.querySelector('.card_front')?.classList.remove('is-flipped');
    });


    const ResultText = document.querySelector('.result_text');
    if (ResultText) {
        ResultText.classList.remove('show');
    }

    console.log("Game successfully reset. New game started!");

    shuffleCards();
}

initializeGameListeners();


switchActiveUser();
switchActiveUser(); 
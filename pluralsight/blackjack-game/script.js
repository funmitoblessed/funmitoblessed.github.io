//
// Blackjack Game
// by Funmito Blessed (Pluralsight Javascript course)


// Card Variables
let suites = ['Hearts', 'Clubs', 'Diamonds', 'Spades'],
    values = ['Ace', 'King', 'Queen', 'Jack',
        'Ten', 'Nine', 'Eight', 'Seven',
        'Five', 'Four', 'Three', 'Two'
    ];

// DOM Variables
let textArea = document.getElementById('text-area');
let newGameButton = document.getElementById('new-game-button');
let hitButton = document.getElementById('hit-button');
let stayButton = document.getElementById('stay-button');

// Game Variables
let gameStarted = false,
    gameOver = false,
    playerWon = false,
    dealerCards = [],
    playerCards = [],
    dealerScore = 0,
    playerScore = 0,
    deck = [],
    card = {};


hitButton.style.display = 'none';
stayButton.style.display = 'none';
showStatus();


newGameButton.addEventListener('click', function() {
    gameStarted = false;
    gameOver = false;
    playerWon = false;

    createDeck();
    shuffleDeck(deck);
    dealerCards = [getNextCard(), getNextCard()];
    playerCards = [getNextCard(), getNextCard()];


    newGameButton.style.display = 'none';
    hitButton.style.display = 'inline';
    stayButton.style.display = 'inline';
    showStatus();
});


function createDeck() {
    let deck = [];
    for (let suiteIdx = 0; suiteIdx < suites.length; suiteIdx++) {
        for (let valueIdx = 0; valueIdx < values.length; valueIdx++) {
            card = {
                suite: suites[suiteIdx],
                value: values[valueIdx]
            };
            deck.push(card);
        }
    }
    return deck;
}

console.log(card);

function shuffleDeck(deck) {
    for (let i = 0; i < deck.length; i++) {
        let swapIdx = Math.trunc(Math.random() * deck.length);
        let tmp = deck[swapIdx];
        deck[swapIdx] = deck[i];
        deck[i] = tmp;
    }
}

function getCardString(card) {
    return card.value + ' of ' + card.suite;
}


function getNextCard() {
    return deck.shift();
}


function showStatus() {
    if (!gameStarted) {
        textArea.innerText = 'Welcome to Blackjack!';
        return;
    }

    for (var i = o; i < deck.length; i++) {
        textArea.innerText += '\n' + getCardString(deck[i]);
    }
}






console.log("Welcome to Blackjack!");

console.log("You are dealt: ");
console.log(" " + getCardString(playerCards[0]));
console.log(" " + getCardString(playerCards[1]));
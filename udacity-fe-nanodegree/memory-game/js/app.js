// declare all variables

// get user name
let user = prompt("What is your name, please?")

let playerName = document.getElementById('player');

// list of open cards
let openCards = [];

// array for matched cards
let matchedCards = [];

// list of cards
let cardList = ['<i class="fa fa-diamond"></i>', '<i class="fa fa-paper-plane-o"></i>', '<i class="fa fa-anchor"></i>', '<i class="fa fa-bolt"></i>',
    '<i class="fa fa-cube"></i>', '<i class="fa fa-anchor"></i>', '<i class="fa fa-leaf"></i>', '<i class="fa fa-bicycle"></i>',
    '<i class="fa fa-diamond"></i>', '<i class="fa fa-bomb"></i>', '<i class="fa fa-leaf"></i>', '<i class="fa fa-bomb"></i>',
    '<i class="fa fa-bolt"></i>', '<i class="fa fa-bicycle"></i>', '<i class="fa fa-paper-plane-o"></i>', '<i class="fa fa-cube"></i>'
];

// select parent element for cards
let cardHolder = document.querySelector('.deck');

let movesParent = document.querySelector('.moves');

let noOfMoves = movesParent.innerHTML = 0;

let starsHolder = document.querySelector('.stars');


/*
 * Create a list that holds all of your cards
 */

// show user on screen
playerName.innerHTML = user;

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    let currentIndex = array.length,
        temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

// shuffle list of cards
let shuffledCards = shuffle(cardList);

// create Game Board
function createCards() {
    for (const card of shuffledCards) {
        let eachCard = document.createElement('li');
        eachCard.classList.add('card');
        eachCard.innerHTML = (card);
        cardHolder.appendChild(eachCard);
        displayCardSymbol(eachCard);
    }
};


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

// Event Listener for click
function displayCardSymbol(eachCard) {

    eachCard.addEventListener('click', function() {
        event.preventDefault();

        let firstCard = this;


        if (openCards.length === 1) {
            // console.log(this);
            let secondCard = this;
            secondCard.classList.add('open', 'show');
            openCards.push(secondCard);

            compareCards(openCards);
            countMoves();


        } else { // if (openCards.length === 0)
            // console.log(this);
            firstCard.classList.add('open', 'show');
            openCards.push(firstCard);

        }

    });

};


// function to compare cards when clicked 
function compareCards() {

    if ((openCards.length === 2) && (openCards[0].innerHTML === openCards[1].innerHTML)) {
        openCards[0].classList.add('match');
        openCards[1].classList.add('match');
        matched();
        openCards = [];
    } else { // if ((openCards.length === 2) && (openCards[0].innerHTML !== openCards[1].innerHTML)) 
        setTimeout(function() {
            openCards[0].classList.remove('open', 'show');
            openCards[1].classList.remove('open', 'show');
            openCards = [];
        }, 300);
    }
}

// function to add compared cards to matched list
function matched() {
    matchedCards.push(openCards[0], openCards[1]);
    allmatched();
}

//function to determine game win
function allmatched() {
    if (matchedCards.length === 16) {
        alert(`Congratulations ${user}! You won this game in ${noOfMoves + 1} moves and have been awarded ${starsHolder.childElementCount} stars`);
    }
}

// move counting function
function countMoves() {
    noOfMoves++;
    movesParent.innerHTML = noOfMoves;
    if (noOfMoves === 10) { // least number of moves to match all cards is 8
        starsHolder.firstElementChild.remove();
    } else if (noOfMoves === 14) {
        starsHolder.firstElementChild.remove();
    } else if (noOfMoves > 18) { // player will have no star rating
        starsHolder.firstElementChild.remove();
    }
}

createCards();


// TODO

/* fix bug that allows clicking on the same card twice which turns it into the matched state
 * change game win alert to modal
 * apply some nicer styles
 */
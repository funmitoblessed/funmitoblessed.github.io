// get user name
let user = prompt("What is your name, please?")

let playerName = document.getElementById('player');

// show user on screen

playerName.innerHTML = user;

// $(function() {
/*
 * Create a list that holds all of your cards
 */

// declare all variables


// list of open cards
let openCards = [];

let matchedCards = [];

// list of cards
let cardList = ['<i class="fa fa-diamond"></i>', '<i class="fa fa-paper-plane-o"></i>', '<i class="fa fa-anchor"></i>', '<i class="fa fa-bolt"></i>',
    '<i class="fa fa-cube"></i>', '<i class="fa fa-anchor"></i>', '<i class="fa fa-leaf"></i>', '<i class="fa fa-bicycle"></i>',
    '<i class="fa fa-diamond"></i>', '<i class="fa fa-bomb"></i>', '<i class="fa fa-leaf"></i>', '<i class="fa fa-bomb"></i>',
    '<i class="fa fa-bolt"></i>', '<i class="fa fa-bicycle"></i>', '<i class="fa fa-paper-plane-o"></i>', '<i class="fa fa-cube"></i>'
];

let cardHolder = document.querySelector('.deck')


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

    for (let i = 0; i < shuffledCards.length; i++) {
        let eachCard = document.createElement('li');
        eachCard.classList.add('card');
        eachCard.innerHTML = (shuffledCards[i]);
        cardHolder.appendChild(eachCard);
        displayCardSymbol(eachCard);

        // console.log(eachCard);

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

const allCards = document.getElementsByClassName('card');

// Event Listener for click
function displayCardSymbol(eachCard) {

    eachCard.addEventListener('click', function() {
        let firstCard = this;


        if (openCards.length === 1) {
            let secondCard = this;
            secondCard.classList.add('open', 'show', );
            openCards.push(secondCard);

            compareCards(openCards);

        } else { // if (openCards.length === 0) 

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

        openCards[0].classList.remove('open', 'show');
        openCards[1].classList.remove('open', 'show');
        openCards = [];
    }
}


function matched() {
    matchedCards.push(openCards[0], openCards[1]);
    // console.log(openCards);
    // console.log(matchedCards);
    allmatched();

}

// counter function


//function to determine if cards have all matched
function allmatched() {
    if (matchedCards.length === 16) {
        alert('Great Job! You win');
    }
}
createCards();
// });


// TODO - not sure how yet

/* fix bug that allows clicking on the same card twice 
 * which turns it into the natched state
 */
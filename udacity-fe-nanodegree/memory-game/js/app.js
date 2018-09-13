// declare all variables

// get user name
let user = prompt("What is your name, please?")

let playerName = document.getElementById('player');


// list of cards
let cardList = ['<i class="fa fa-diamond"></i>', '<i class="fa fa-paper-plane-o"></i>', '<i class="fa fa-anchor"></i>', '<i class="fa fa-bolt"></i>',
    '<i class="fa fa-cube"></i>', '<i class="fa fa-anchor"></i>', '<i class="fa fa-leaf"></i>', '<i class="fa fa-bicycle"></i>',
    '<i class="fa fa-diamond"></i>', '<i class="fa fa-bomb"></i>', '<i class="fa fa-leaf"></i>', '<i class="fa fa-bomb"></i>',
    '<i class="fa fa-bolt"></i>', '<i class="fa fa-bicycle"></i>', '<i class="fa fa-paper-plane-o"></i>', '<i class="fa fa-cube"></i>'
];

// star variable
let starsHolder = document.querySelector('.stars');

// move counter initialization
let movesParent = document.querySelector('.moves');

let noOfMoves = movesParent.innerHTML = 0;

// reset game variable init
let reset = document.querySelector('.restart');

// select parent element for cards
let cardHolder = document.querySelector('.deck');

// list of open cards
let openCards = [];

// array for matched cards
let matchedCards = [];

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
        openCards = [];
        matchedCards = [];
        displayCardSymbol(eachCard);
        resetGame();
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
        let firstCard = this;


        if (openCards.length === 1) {
            // console.log(this);
            let secondCard = this;
            secondCard.classList.add('open', 'show', 'deactivate');
            openCards.push(secondCard);

            compareCards(openCards);
            countMoves();


        } else { // if (openCards.length === 0)
            // console.log(this);
            firstCard.classList.add('open', 'show', 'deactivate');
            openCards.push(firstCard);

        }
        event.preventDefault();
    });

};


// function to compare cards when clicked 
function compareCards() {

    if ((openCards.length === 2) && (openCards[0].innerHTML === openCards[1].innerHTML)) {
        openCards[0].classList.add('match');
        openCards[1].classList.add('match');
        matched();
        allmatched();
        openCards = [];
    } else { // if ((openCards.length === 2) && (openCards[0].innerHTML !== openCards[1].innerHTML)) 
        setTimeout(function() {
            openCards[0].classList.remove('open', 'show', 'deactivate');
            openCards[1].classList.remove('open', 'show', 'deactivate');
            openCards = [];
        }, 300);
    }
}

// function to add compared cards to matched list
function matched() {
    matchedCards.push(openCards[0], openCards[1]);
}

// move counting function
function countMoves() {
    noOfMoves++;
    movesParent.innerHTML = noOfMoves;
    if (noOfMoves === 1) {
        gameTimer();
    }
    if (noOfMoves === 10) { // least number of moves to match all cards is 8
        starsHolder.firstElementChild.remove();
    }
    if (noOfMoves === 14) {
        starsHolder.firstElementChild.remove();
    }
    if (noOfMoves === 18) { // player will have no star rating
        starsHolder.firstElementChild.remove();
    }
}

//function to determine game win
function allmatched() {
    if (matchedCards.length === 16) {
        alert(`Congratulations ${user}! You won this game with ${noOfMoves + 1} moves in ${h} hr ${m} min ${s} sec and have been awarded ${starsHolder.childElementCount} stars`);
        clearInterval(t);
        resetGame();
    }
}

let h = 0;
let m = 0;
let s = 0;
// timer function
function gameTimer() {
    m = addZero(m);
    let timer = document.getElementById('timer');
    t = setInterval(function() {
        s++;
        if (s === 60) {
            m++;
            m = addZero(m);
            s = 00;
        }
        if (m == 60) {
            h++;
            h = addZero(h);
            m = 00;
            m = addZero(m);
            s = 00;
        }
        s = addZero(s);
        timer.innerHTML = h + ":" + m + ":" + s;
    }, 1000);

}

// add zero in front of numbers < 10
function addZero(i) {
    if (i < 10) { i = "0" + i };
    return i;
}

// function to reset game board
function resetGame() {
    reset.addEventListener('click', function() {
        cardHolder.innerHTML = '';
        shuffle(cardList);
        createCards();
        noOfMoves = 0;
        movesParent.innerHTML = 0;
        starsHolder.innerHTML = `<li><i class="fa fa-star"></i></li>
        <li><i class="fa fa-star"></i></li>
        <li><i class="fa fa-star"></i></li>`;
        clearInterval(t);
        timer.innerHTML = '0:00:00';
        h = 0;
        m = 0;
        s = 0;
    })
}

createCards();

// TODO

/* 
 * change game win alert to modal
 * apply some nicer styles
 * fix bug not allowing the alert to work after reseting game
 * 
 */
// $(function() {
//get user name
let user = prompt("What is your name, please?")

let playerName = document.getElementById('player');

// show user on screen

playerName.innerHTML = user;

// $(function() {
/*
 * Create a list that holds all of your cards
 */


// create an empty list for cards

let cardList = ['<i class="fa fa-diamond"></i>', '<i class="a fa-paper-plane-o"></i>', '<i class="fa fa-anchor"></i>', '<i class="fa fa-bolt"></i>',
    '<i class="fa fa-cube"></i>', '<i class="fa fa-anchor"></i>', '<i class="fa fa-leaf"></i>', '<i class="fa fa-bicycle"></i>',
    '<i class="fa fa-diamond"></i>', '<i class="fa fa-bomb"></i>', '<i class="fa fa-leaf"></i>', '<i class="fa fa-bomb"></i>',
    '<i class="fa fa-bolt"></i>', '<i class="fa fa-bicycle"></i>', '<i class="fa fa-paper-plane-o"></i>', '<i class="fa fa-cube"></i>'
];


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

let shuffledCards = shuffle(cardList);

// console.log(shuffledCards);

function createCards() {

    let cardHolder = document.querySelector('.deck')

    for (let i = 0; i < cardList.length; i++) {
        let eachCard = document.createElement('li');
        // cardContainer.push(eachCard);
        eachCard.innerHTML = (shuffledCards[i]);
        eachCard.classList.add('card');
        cardHolder.appendChild(eachCard);
        console.log(eachCard);
    }

}

createCards();



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

// const individualCard = document.getElementsByTagName('li')

// function displayCardSymbol() {
//     let listOfCards = document.getElementsByClassName('card');

//     listOfCards.addEventListener('click', function () {
//         alert('you clicked on this card');
//     })    
// }

// displayCardSymbol();

// });





// });
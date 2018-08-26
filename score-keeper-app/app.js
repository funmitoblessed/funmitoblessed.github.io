// Basic score keeper application using JS

// variables declaration
let p1Button = document.querySelector('#player-one');
let p1Score = document.getElementById('player-one-score');
let p1ScoreHolder = parseInt(document.getElementById('player-one-score').innerText);
let p2Button = document.querySelector('#player-two');
let p2Score = document.getElementById('player-two-score');
let p2ScoreHolder = parseInt(document.getElementById('player-two-score').innerText);
let gameOver = false;
let winningScoreDisplay = document.getElementById('max-score');
let winningScore = parseInt(document.getElementById('max-score').innerText);
let resetButton = document.querySelector('#reset');
let maxScore = document.querySelector('input');


// event listener to update first player's score
p1Button.addEventListener('click', function() {
    if (!gameOver) {
        p1ScoreHolder++;
        if (p1ScoreHolder === winningScore) {
            p1Score.classList.add('winner');
            gameOver = true;
        }
        p1Score.textContent = p1ScoreHolder;
    }
});


// event listener to update second player's score
p2Button.addEventListener('click', function() {
    if (!gameOver) {
        p2ScoreHolder++;
        if (p2ScoreHolder === winningScore) {
            p2Score.classList.add('winner');
            gameOver = true;
        }
        p2Score.textContent = p2ScoreHolder;
    }
});


// reset button event listener
resetButton.addEventListener('click', function() {
    reset();
});

// reset function
function reset() {
    gameOver = false;
    p1ScoreHolder = 0;
    p1Score.textContent = p1ScoreHolder;
    p1Score.classList.remove('winner');
    p2ScoreHolder = 0;
    p2Score.textContent = p2ScoreHolder;
    p2Score.classList.remove('winner');
}


// event listener for maximum score 
maxScore.addEventListener('change', function() {
    winningScoreDisplay.textContent = this.value;
    winningScore = parseInt(this.value);
    reset();
});


// TO DO

/*
 * add the ability to update player name
 * also congratulate winning player
 * refactor code as you get better ar JS
 */
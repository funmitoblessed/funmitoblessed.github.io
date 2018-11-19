// get user name
let user = prompt("Before we begin, please tell me your name");

// variable to hold game score during play
let scoreHolder = document.getElementById('score');
let gameScore = scoreHolder.innerHTML = 0;

// initialize menu
let menu = new Menu();

// generate some random numbers
let randOne = Math.floor(Math.random() * 200);
let randTwo = Math.floor(Math.random() * 200);
let randThree = Math.floor(Math.random() * 200);
let randFour = Math.floor(Math.random() * 200);

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// create new instances of enemies with random x-position and speed and fixed y
let allEnemies = [new Enemy(randOne, 230, randThree),
    new Enemy(randTwo, 140, randOne),
    new Enemy(randThree, 310, randFour),
    new Enemy(randFour, 60, randTwo),
]

// Instantiate player with default position
// Place the player object in a variable called player

let player = new Player();
gameTimer();



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    let allowedKeys = {
        37: 'left', // ←
        38: 'up', // ↑
        39: 'right', // →
        40: 'down', // ↓
        65: 'left', // A
        68: 'right', // D
        83: 'down', // S
        87: 'up', // W
        // Character selection
        49: 'boy', // 1
        50: 'cat-girl', // 2
        51: 'horn-girl', // 3
        52: 'pink-girl', // 4
        53: 'princess-girl' // 5
    };

    if (menu.on) {
        menu.handleInput(allowedKeys[e.keyCode]);
    } else {
        player.handleInput(allowedKeys[e.keyCode]);
        player.score(allowedKeys[e.keyCode]);
    }

});



// resets player position on collision and reduces game score
function resetPlayer() {
    player.x = 200;
    player.y = 410;
    if (gameScore <= 0) {
        gameScore = 0;
    } else {
        gameScore--;
    }
    scoreHolder.innerHTML = gameScore;
};


// timer function
function gameTimer() {
    let h = 0;
    let m = 0;
    let s = 0;
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
        if (m == 01 && s == 30) {
            alert(`Congratulations ${user}! You won this game with ${gameScore} points! Press OK to restart the game`);
            clearInterval(t);
            timer.innerHTML = '0:00:00';
            h = 0;
            m = 0;
            s = 0;
            gameScore = 0;
            scoreHolder.innerHTML = gameScore;
            gameTimer();
        }
    }, 1000);
};

// add zero in front of numbers < 10
function addZero(i) {
    if (i < 10) { i = "0" + i };
    return i;
};
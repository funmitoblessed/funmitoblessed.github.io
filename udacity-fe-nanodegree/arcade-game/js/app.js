// variable to hold game score during play
let scoreHolder = document.getElementById('score');
let gameScore = scoreHolder.innerHTML = 0;

// Enemies our player must avoid
let Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // enemy position
    this.x = x;
    this.y = y;
    // enemy speed
    this.speed = speed;

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';

};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if (this.x < 500) {
        this.x += this.speed * dt + Math.floor(Math.random() * 5);
    } else {
        this.x = -100;
    }

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
let Player = function(x, y) {
    // image sprite for player
    this.sprite = 'images/char-pink-girl.png';

    // player position
    this.x = x;
    this.y = y;

};

// update method for the Player class
Player.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    for (const enemy of allEnemies) {
        if ((this.x < enemy.x + 80) &&
            (this.x + 80 > enemy.x) &&
            (this.y < enemy.y + 60) &&
            (60 + this.y > enemy.y)) {
            resetPlayer();
        }
    }

};

// render method for the Player class
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


// handle input method for the Player class
Player.prototype.handleInput = function(key) {
    if ((key === 'left') && (this.x !== 0)) {
        this.x -= 100;
    } else if ((key === 'right') && (this.x !== 400)) {
        this.x += 100;
    } else if ((key === 'up') && (this.y !== 10)) {
        this.y -= 70;
    } else if ((key === 'down') && (this.y !== 410)) {
        this.y += 70;
    }
};

// player scoring method. Adds 1 to the score once the player reaches the river
Player.prototype.score = function(key) {
    if (this.y <= 0) {
        if ((key === 'up') && (this.y === -10)) {
            this.x = 200;
            this.y = 410;
        }
        gameScore++;
        scoreHolder.innerHTML = gameScore;
    }
};

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
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

// Instantiate player with default position
let player = new Player(200, 410);

// generate some random numbers
let randOne = Math.floor(Math.random() * 200);
let randTwo = Math.floor(Math.random() * 200);
let randThree = Math.floor(Math.random() * 200);
let randFour = Math.floor(Math.random() * 200);

// create new instances of enemies with random x-position and speed and fixed y
let allEnemies = [new Enemy(randOne, 230, randThree),
    new Enemy(randTwo, 140, randOne),
    new Enemy(randThree, 310, randFour),
    new Enemy(randFour, 60, randTwo),
]

gameTimer();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    let allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.which]);
    player.score(allowedKeys[e.which]);
});

let h = 0;
let m = 0;
let s = 0;
// timer function
function gameTimer() {
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

console.log(allEnemies[0], allEnemies[1], allEnemies[2], allEnemies[3], player);
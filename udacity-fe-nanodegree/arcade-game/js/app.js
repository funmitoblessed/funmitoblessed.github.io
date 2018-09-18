// Enemies our player must avoid
let Enemy = function(x, y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // enemy position
    this.x = x;
    this.y = y

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.speed = 20;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

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

Player.prototype.reset = function(key) {
    if ((key === 'up') && (this.y === -10)) {
        this.y = 410;
    }
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

let player = new Player(200, 410); // pass in initial position

let enemyOne = new Enemy(0, 60);
let enemyTwo = new Enemy(190, 300);
let enemyThree = new Enemy(80, 200);
let enemyFour = new Enemy(300, 139);

let allEnemies = [enemyOne, enemyTwo, enemyThree, enemyFour];


console.log(allEnemies, player);


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    let allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
    player.reset(allowedKeys[e.keyCode]);
});
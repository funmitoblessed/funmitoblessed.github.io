// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
let Player = function(x, y) {
    // image sprite for player
    this.sprite = 'images/char-princess-girl.png';

    // player position
    this.x = 200;
    this.y = 410;
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
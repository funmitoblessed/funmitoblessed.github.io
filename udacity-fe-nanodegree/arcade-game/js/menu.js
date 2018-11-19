// Constructor
let Menu = function() {
        // turn the menu on by default
        this.on = true;
        // list of character sprites
        this.characterSprites = [
            'images/char-boy.png',
            'images/char-cat-girl.png',
            'images/char-horn-girl.png',
            'images/char-pink-girl.png',
            'images/char-princess-girl.png'
        ]
        this.selectedCharacter;
        // menu background settings
        this.rectX = 0;
        this.rectY = 50;
        this.rectWidth = 505;
        this.rectHeight = 536;
        this.cornerRadius = 2;
    }
    // Prototype
Menu.prototype = {
    /*
     * Renders character selection menu to screen
     */
    render: function() {
        // render menu background
        ctx.globalAlpha = 0.6;
        ctx.fillStyle = 'blue';
        ctx.lineJoin = "round";
        ctx.lineWidth = this.cornerRadius;
        ctx.fillRect(this.rectX + (this.cornerRadius / 2), this.rectY + (this.cornerRadius / 2), this.rectWidth - this.cornerRadius, this.rectHeight - this.cornerRadius);
        // render menu instructions
        ctx.globalAlpha = 1.0;
        ctx.fillStyle = 'white';
        ctx.font = '26px Arial';
        ctx.textAlign = 'center';
        ctx.fillText("Press 1-5 to select your character.", 252, 220);
        // render character select
        for (var i = 0, numSprites = this.characterSprites.length; i < numSprites; i++) {
            ctx.drawImage(
                Resources.get(this.characterSprites[i]),
                i * 101,
                200
            );
            ctx.fillText(i + 1, (i * 101) + 44, 390);
        }
    },
    /*
     * Handles input from user and adjusts the player's sprite
     * @param {String} key
     */
    handleInput: function(key) {
        // select character based on input
        if (key === 'boy') {
            this.selectSprite(this.characterSprites[0]);
        } else if (key === 'cat-girl') {
            this.selectSprite(this.characterSprites[1]);
        } else if (key === 'horn-girl') {
            this.selectSprite(this.characterSprites[2]);
        } else if (key === 'pink-girl') {
            this.selectSprite(this.characterSprites[3]);
        } else if (key === 'princess-girl') {
            this.selectSprite(this.characterSprites[4]);
        }
    },
    /*
     * Updates the player's sprite
     * @param {String} selection
     */
    selectSprite: function(selection) {
        this.selectedCharacter = selection;
        this.on = false;
        ctx.clearRect(0, 0, 505, 606);
    },
    /*
     * Updates the player's sprite
     * @param {Player} player
     */
    setSprite: function(player) {
        player.sprite = this.selectedCharacter;
    }
}
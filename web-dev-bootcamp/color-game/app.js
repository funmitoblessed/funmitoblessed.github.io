let numOfSquares = 6;
let colors = generateRandomColors(numOfSquares);
let squares = document.querySelectorAll('.square');
let pickedColor = pickColor();
let guessColor = document.getElementById('guessColor');
let message = document.querySelector('#message');
const h1 = document.querySelector('h1');
const resetButton = document.querySelector('#reset');
var easyBtn = document.querySelector('#easyBtn');
var hardBtn = document.querySelector('#hardBtn');

easyBtn.addEventListener('click', function() {
    easyBtn.classList.add('selected');
    hardBtn.classList.remove('selected');
    numOfSquares = 3;
    colors = generateRandomColors(numOfSquares);
    pickedColor = pickColor();
    guessColor.textContent = pickedColor;
    for (let i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = 'none';
        }
    }
})

hardBtn.addEventListener('click', function() {
    hardBtn.classList.add('selected');
    easyBtn.classList.remove('selected');
    numOfSquares = 6;
    colors = generateRandomColors(numOfSquares);
    pickedColor = pickColor();
    guessColor.textContent = pickedColor;
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i];
        squares[i].style.display = 'block';
    }
})

resetButton.addEventListener('click', function() {
    // generate new colors
    colors = generateRandomColors(numOfSquares);
    // pick a new random color from array
    pickedColor = pickColor();
    // change guess to match picked color
    guessColor.textContent = pickedColor;
    this.textContent = "New Colors"
        // clear message on reset
    message.textContent = "";
    // change colors for squares
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i];
    }
    h1.style.background = 'steelblue';
})

guessColor.textContent = pickedColor;

for (let i = 0; i < squares.length; i++) {
    // add initial colors to squares
    squares[i].style.background = colors[i];

    // add click listeners to squares
    squares[i].addEventListener('click', function() {
        let clickedColor = this.style.background;
        // compare colors
        if (clickedColor === pickedColor) {
            message.textContent = 'Correct!';
            resetButton.textContent = 'Play Again?';
            changeColors(clickedColor);
            h1.style.background = clickedColor;
        } else {
            this.style.background = '#232323';
            message.textContent = 'Try Again!';
        }
    });
}

function changeColors(color) {
    // loop through all squares
    for (let i = 0; i < squares.length; i++) {
        // change each color to match given color
        squares[i].style.background = color;
    }
}

function pickColor() {
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    // make an array
    let arr = [];
    // add num colurs to array
    for (let i = 0; i < num; i++) {
        //get random colr and push into array
        arr.push(randomColor());
    }
    // return array
    return arr;
}

function randomColor() {
    // pick any number between 0 and 255 for red, green and blue
    let r = Math.floor(Math.random() * 256); // red

    let g = Math.floor(Math.random() * 256); // green

    let b = Math.floor(Math.random() * 256); // blue

    return "rgb(" + r + ", " + g + ", " + b + ")";
}

// TO DO

/* Refactor code
 * 
 */
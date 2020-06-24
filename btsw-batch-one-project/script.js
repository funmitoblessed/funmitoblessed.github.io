/* This program is a little modification of the fizz buzz game. 
The user inputs any number less than 1000 and the program runs the 
fizz buzz game and outputs a response in HTML.
*/

// User input
let userInput = prompt("Welcome to my simple FizzBuzz game. \n \n Please enter any number of your choice less than 1000.");
let result = document.getElementById('result');

// Change user input to a number
let input = parseInt(userInput);

// function to check input for range and type
function checkinput() {
    if (isNaN(input)) {
        result.innerHTML = 'This is not a number. Please input valid number';
    }
    else if (input > 1000){
        result.innerHTML = 'This number is greater than 1000. Please enter a smaller number';
    }
    else {
        result.innerHTML = 'Please check your console for your FizzBuzz game results';
        fizzBuzz();
    }
}

console.log('You have entered the number ', + input);
checkinput();

// Function to run the Fizzbuzz Game

function fizzBuzz() {
    for (let i =1; i <= input; i++) {
        if (i % 3 === 0 & i % 5 === 0) {
            console.log('FizzBuzz');
        }
        else if (i % 5 === 0) {
            console.log('Buzz');
            
        }
        else if (i % 3 === 0) {
            console.log('Fizz');
        }
        else {
            console.log(i);
        }
    }
}
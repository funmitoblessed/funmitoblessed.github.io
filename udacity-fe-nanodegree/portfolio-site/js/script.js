// This script automatically updates the copyright year based on computer's clock

let newDate = new Date();
let dateString = "";

// get current year
dateString += newDate.getFullYear();

// set the span element to the current year
let elem = document.querySelector('#currentYear');
elem.innerHTML = dateString;
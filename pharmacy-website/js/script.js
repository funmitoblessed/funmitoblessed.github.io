/*jshint  esversion: 6 */

// copyright year
let newDate = new Date();
let dateString = "";
// get current year
dateString += newDate.getFullYear();
// render current year on page load
$('#currentYear').text(dateString);
/*jshint  esversion: 6 */

// copyright year
let newDate = new Date();
let dateString = "";
// get current year
dateString += newDate.getFullYear();
// render current year on page load
$('#currentYear').text(dateString);


/* Toggle "is-responsive" class to navigation when the user clicks on the icon */
function addResponsiveness() {
    const x = document.getElementById("pageNavbar");
    if (x.className === "navigation") {
        x.className += " is-responsive";
    } else {
        x.className = "navigation";
    }
}
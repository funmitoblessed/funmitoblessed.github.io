// contact message    
const myMessage = document.querySelector("#sendMessage");
myMessage.addEventListener('click', function(evt) {

    alert('Thank you for getting in touch. We will get back to you soon')
    console.log(sendMessage);
});

// copyright year
const newDate = new Date();
const dateString = "";
// get current year
dateString += newDate.getFullYear();
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
// contact message    
var myMessage = document.querySelector("#sendMessage");
myMessage.addEventListener('click', function(evt) {

    alert('Thank you for getting in touch. We will get back to you soon')
    console.log(sendMessage);
});

// copyright year
var newDate = new Date();
var dateString = "";
// get current year
dateString += newDate.getFullYear();
$('#currentYear').text(dateString);
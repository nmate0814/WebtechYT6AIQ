document.addEventListener('DOMContentLoaded', function() {
    var kapcsolatGomb = document.getElementById('buttonExpansion');
    kapcsolatGomb.addEventListener('click', function(event) {
        event.preventDefault(); // Megakadályozza az alapértelmezett link működését
        window.location.href = 'Expansions.html'; // Átirányítás a kapcsolat.html-re
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var kapcsolatGomb = document.getElementById('buttonIndex');
    kapcsolatGomb.addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'index.html';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var kapcsolatGomb = document.getElementById('buttonClasses');
    kapcsolatGomb.addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'classes.html';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var kapcsolatGomb = document.getElementById('buttonStory');
    kapcsolatGomb.addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'lores.html';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var kapcsolatGomb = document.getElementById('buttonSupport');
    kapcsolatGomb.addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'help.html';
    });
});


function submitForm() {
    var emailInput = document.getElementById("email");
    var usernameInput = document.getElementById("username");
    var messageInput = document.getElementById("message");
    var ticketTypeInput = document.getElementById("ticketType");

    var email = emailInput.value;
    var username = usernameInput.value;
    var ticketType = ticketTypeInput.value;
    var message = messageInput.value;

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Kérlek, adj meg egy érvényes email címet!");
        emailInput.style.borderColor="red";
        return;
    }

    if (email === "" || username === "" || message === "") {
        alert("Kérlek, tölts ki minden mezőt!");
        if (email === "") emailInput.style.borderColor = "red";
        if (username === "") usernameInput.style.borderColor = "red";
        if (message === "") messageInput.style.borderColor = "red";
        return;
    }

    alert("Az űrlap elküldve!\nEmail: " + email + "\nFelhasználónév: " + username + "\nTicket típusa: " + ticketType + "\nKözlemény: " + message);
}

$(document).ready(function() {
    $('#slide-in-div').animate({left: '0px'}, 500); // 500 ms (0.5s) alatt becsúszik balról
  });
  
  
  
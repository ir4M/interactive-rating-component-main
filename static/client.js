// Variablen deklarieren
var ratingPage;
var thankYouPage;
var form;
var btnContainer;
var btns;
var valueRating;
var feedback;
document.addEventListener('DOMContentLoaded', function () {
    console.log('client.js wird ausgeführt');
    // Variablen initialisieren
    ratingPage = document.querySelector('#rating');
    thankYouPage = document.querySelector('#thankYou');
    form = document.querySelector('#formRating');
    btnContainer = document.querySelector(".btn-container");
    btns = btnContainer.querySelectorAll("button[type='button']");
    valueRating = document.querySelector("#valueRating");
    feedback = document.querySelector("#feedback");
    console.log("buttons: " + btns.length);
    // Eventhandler registrieren
    form.addEventListener('submit', submitRating);
    // Iteriere über alle Buttons und füge die active class, dem aktuell geklickten Button hinzu
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function () {
            var current = document.querySelectorAll(".active");
            // Wenn es schon eine active class gibt, entferne diese
            if (current.length > 0) {
                current[0].className = current[0].className.replace(" active", "");
            }
            // Wenn es noch keine active class gibt, füge die active class dem aktuell geklicktem Button hinzu
            this.className += " active";
            valueRating.innerText = this.innerText;
        });
    }
});
function submitRating(event) {
    event.preventDefault();
    if (valueRating.innerText != '') {
        ratingPage.style.display = 'none';
        thankYouPage.style.display = 'block';
    }
    else {
        feedback.innerText = 'Please choose a rating';
    }
}

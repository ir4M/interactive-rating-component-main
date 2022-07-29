// Variablen deklarieren
var ratingPage;
var thankYouPage;
var form;
document.addEventListener('DOMContentLoaded', function () {
    console.log('client.js wird ausgeführt');
    // Variablen initialisieren
    ratingPage = document.querySelector('#rating');
    thankYouPage = document.querySelector('#thankYou');
    // Eventhandler registrieren
    form = document.querySelector('#formRating');
    form.addEventListener('submit', submitRating);
});
function submitRating(event) {
    event.preventDefault();
    console.log("submitRating wird ausgeführt");
    ratingPage.style.display = 'none';
    thankYouPage.style.display = 'block';
}

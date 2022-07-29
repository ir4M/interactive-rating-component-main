// Variablen deklarieren
let ratingPage: HTMLElement;
let thankYouPage: HTMLElement;
let form: HTMLFormElement;

document.addEventListener('DOMContentLoaded', () => {
    console.log('client.js wird ausgeführt');

    // Variablen initialisieren
    ratingPage = document.querySelector('#rating');
    thankYouPage = document.querySelector('#thankYou');

    // Eventhandler registrieren
    form = document.querySelector('#formRating');
    form.addEventListener('submit', submitRating);
})

function submitRating(event: Event): void {
    event.preventDefault();
    console.log("submitRating wird ausgeführt");
    ratingPage.style.display = 'none';
    thankYouPage.style.display = 'block';
}


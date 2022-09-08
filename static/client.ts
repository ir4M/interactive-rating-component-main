// Variablen deklarieren
let ratingPage: HTMLElement;
let thankYouPage: HTMLElement;
let form: HTMLFormElement;
let btnContainer: HTMLElement;
let btns: NodeListOf<HTMLButtonElement>;
let valueRating: HTMLSpanElement;
let feedback: HTMLSpanElement;


document.addEventListener('DOMContentLoaded', () => {
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
    for (let i: number = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function() {
            let current = document.querySelectorAll(".active");

            // Wenn es schon eine active class gibt, entferne diese
            if (current.length > 0) {
                current[0].className = current[0].className.replace(" active", "");
            }

            // Wenn es noch keine active class gibt, füge die active class dem aktuell geklicktem Button hinzu
            this.className += " active";
            valueRating.innerText = this.innerText;
        });
    }
})

function submitRating(event: Event): void {
    event.preventDefault();

    if (valueRating.innerText != '') {
        ratingPage.style.display = 'none';
        thankYouPage.style.display = 'block';
    } else {
        feedback.innerText = 'Please give a rating';
    }
}

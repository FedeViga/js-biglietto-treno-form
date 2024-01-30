const inputNameElement = document.querySelector("#fullname");
const inputDistanceElement = document.querySelector("#distance");
const inputAgeElement = document.querySelector("#age");
const buttonSubmitElement = document.querySelector("#submit");
const buttonCancelElement = document.querySelector("#cancel");
let price;
let errorHappened = false;
let offer = 0;
let seatNumber = Math.floor((Math.random() * 30) + 1);
let seatLetter = Math.floor((Math.random() * 6) + 1);

console.log(inputNameElement, inputDistanceElement, inputAgeElement, buttonSubmitElement)


// funzione per svuotare gli input al click del bottone svuota
buttonCancelElement.addEventListener('click', 
    function() {
        document.querySelector("#fullname").value = "";
        document.querySelector("#distance").value = "";
        document.querySelector("#age").value = "";
    }
)

// funzione per creare il biglietto del treno al click del bottone calcola
buttonSubmitElement.addEventListener('click', 

    function() {
        console.log(inputNameElement.value , inputDistanceElement.value + " Km", inputAgeElement.value + " Anni")

        // controllo dei dati inseriti dall'utente
        if (inputNameElement.value == "") {
            alert("Errore: Inerire Nome e Cognome");
            errorHappened = true;
        }

        if (inputDistanceElement.value == "" || inputDistanceElement.value < 5 || inputDistanceElement.value > 1000) {
            alert("Errore: Inerire una distanza accettabile");
            errorHappened = true;
        }
        
        if (inputAgeElement.value == "" || inputAgeElement.value < 0 || inputAgeElement.value > 122) {
            alert("Errore: Inerire un'età accettabile");
            errorHappened = true;
        }

        // se i dati sono corretti faccio i calcoli e stampo biglietto
        if (errorHappened == false) {

            price = inputDistanceElement.value * .21;
            if (inputAgeElement.value < 18) {
                price = price * .8;
                offer = 20;
            }
            if (inputAgeElement.value >= 65) {
                price = price * .6;
                offer = 40;
            }
            console.log(price + " €")

            // nome e cognome
            document.querySelector("#yourticketname").innerHTML = inputNameElement.value;


            // tipo di offerta
            if (offer == 20) {
                document.querySelector("#yourticketoffer").innerHTML = "Sconto Minorenni";
            } else if (offer == 40) {
                document.querySelector("#yourticketoffer").innerHTML = "Sconto Over 65";
            } else {
                document.querySelector("#yourticketoffer").innerHTML = "Offerta Standard";
            }

            // numero posto a sedere
            if (seatLetter == 1) {
                seatLetter = "A";
            }
            if (seatLetter == 2) {
                seatLetter = "B";
            }
            if (seatLetter == 3) {
                seatLetter = "C";
            }
            if (seatLetter == 4) {
                seatLetter = "D";
            }
            if (seatLetter == 5) {
                seatLetter = "E";
            }
            if (seatLetter == 6) {
                seatLetter = "F";
            }

            document.querySelector("#yourticketseat").innerHTML = seatNumber + seatLetter;

            // prezzo biglietto
            document.querySelector("#yourticketprice").innerHTML = price.toFixed(2) + " €" ;


        }

    }


)


const inputNameElement = document.querySelector("#fullname");
const inputDistanceElement = document.querySelector("#distance");
const inputAgeElement = document.querySelector("#age");
const buttonSubmitElement = document.querySelector("#submit");
let price;
let errorHappened = false;

console.log(inputNameElement, inputDistanceElement, inputAgeElement, buttonSubmitElement)

buttonSubmitElement.addEventListener('click', 

    function() {
        console.log(inputNameElement.value , inputDistanceElement.value + " Km", inputAgeElement.value + " Anni")

        if (inputDistanceElement.value < 5 || inputDistanceElement.value > 1000) {
            alert("Errore: Inerire una distanza accettabile");
            errorHappened = true;
        }
        
        if (inputAgeElement.value < 0 || inputAgeElement.value > 122) {
            alert("Errore: Inerire un'età accettabile");
            errorHappened = true;
        }

        if (errorHappened == false) {

            price = inputDistanceElement.value * .21;
            if (inputAgeElement.value < 18) {
                price = price * .8;
            }
            if (inputAgeElement.value >= 65) {
                price = price * .6;
            }
            console.log(price + " €")
        }

    }


)
/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//function newCard(){

let button = document.getElementById("newRandomCard");
button.addEventListener("click", () => {
    window.randomCard = () => {

        let suits = ["♥", "♠", "♦", "♣"]

        let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Q", "K", "A", "J"];

        let suitRandom = Math.floor(Math.random() * suits.length);
        let numberRandom = Math.floor(Math.random() * numbers.length);

        let suit = suits[suitRandom];
        let number = numbers[numberRandom];

        if (suit == "♥" || suit == "♠") {
            document.querySelector("#suitUp").style.color = "red";
            document.querySelector("#suitDown").style.color = "red";
        } else if (suit == "♦" || suit == "♣") {
            document.querySelector("#suitUp").style.color = "black";
            document.querySelector("#suitDown").style.color = "black";
        }

        document.querySelector("#suitUp").innerHTML = suit;
        document.querySelector("#suitDown").innerHTML = suit;
        document.querySelector("#number").innerHTML = number;


    }
});

//}


// Nueva "randomCard" cuando recargamos la página
//newCard();

// Nueva "randomCard" generada automáticamente cada 1 segundo
//setInterval(newCard,1000)
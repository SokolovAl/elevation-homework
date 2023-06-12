/*
let boughtTesla = true;
const yearOfTeslaPurchase = 2014;
let isUSCitizen = true;
let currentYear = 2018;
*/

const currentYear = 2023;

let boughtTesla = prompt("Have you previously bought a Tesla? true/false");
if (boughtTesla === "true") {
    let isUSCitizen = prompt("Are you a US citizen? true/false");
    if (isUSCitizen === "true") {
        let yearOfTeslaPurchase = parseInt(
            prompt("What year did you buy your Tesla?")
        );
        let howOldYourTesla = currentYear - yearOfTeslaPurchase;
        if (howOldYourTesla >= 4) {
            alert("Would you like an upgrade for your Tesla?");
        } else {
            alert("Are you satisfied with your Tesla?");
        }
    } else {
        alert(
            "Would you like to move to the US to enjoy Tesla benefits?"
        );
    }
} else {
    alert("Are you interested in buying a Tesla?");
}

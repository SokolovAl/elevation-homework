//Exercise 1
const validator = require("validator");

// Ex. 1
//Check whether "shoobert@dylan" is a valid email (should be false)
let email1 = "shoobert@dylan";
console.log("Ex. 1: " + validator.isEmail(email1));

// Ex. 2
//Check whether "786-329-9958" is a valid US mobile phone number (should be true) - use the en-US locale
let phoneNumber = "786-329-9958";
console.log("Ex. 2: " + validator.isMobilePhone(phoneNumber, "en-US"));

// Ex. 3
//Use the following blacklist
let blacklist = ["!", "?", ".", "@", "~", ",", "'"];
//Along with validator's `blacklist` method to clean this text:
let text = "I'M SO EXCITED!!!~!";
let cleanedText = validator.blacklist(text, blacklist).toLowerCase();
console.log("Ex. 3: " + cleanedText);
//Ultimately, it should print "im so excited"

//Exercise 2
const {faker} = require("@faker-js/faker");

function makeHuman(numberOfPeople) {
    for (let i = 0; i < numberOfPeople; i++) {
        const name = faker.person.firstName();
        const avatar = faker.image.avatar();
        const company = faker.company.name();

        console.log(`${name}, ${avatar}, ${company}`);
    }
}

makeHuman(2);
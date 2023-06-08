//----------1----------
const greet = function (name) {
    console.log("Hello there, " + name);
};

greet("Dexter");

//----------2----------
const multiply = function (x, y = 2) {
    console.log(x * y);
};

multiply(3, 4); // prints 12
multiply(3); // prints 6

//----------3----------
const changeArray = function (arr) {
    let innerArray = arr;
    innerArray[0] = 50;
};

const numbers = [1, 2, 3];

changeArray(numbers);
console.log(numbers); // prints [50, 2, 3]

//----------4----------
const add = function (x, y) {
    return x + y;
};

const sum = add(1, 2);
console.log(sum); // prints 3

//----------5----------
const meow = function () {
    console.log("Meow");
};

const woof = function () {
    console.log("woof");
};

const getAnimalSoundFunc = function (animal) {
    if (animal == "cat") {
        return meow;
    }
    if (animal == "dog") {
        return woof;
    }
};

getAnimalSoundFunc("cat")(); //will print meow

//----------6----------
greetings(); //works without a problem
// greetExpression(); //throws an error

function greetings() {
    console.log("Hello there, from the wild, wild West");
}

// const greetExpression = function () {
//     console.log("Uh oh");
// };

//----------7----------
const person = {
    name: "Julius",
    speak: function () {
        console.log("Et tu, Brutus?");
    },
};

console.log(person.name); //you know what this will do

person.speak(); //and this? Try it out!

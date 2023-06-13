const myObject = {
    numbers: generateRandomNumbers(10),
    
    * [Symbol.iterator]() {
        for (const num of this.numbers) {
            if (num % 2 === 0) {
                yield num;
            }
        }
    }
};

console.log(myObject);

for (let num of myObject) {
    console.log(num);
}

function generateRandomNumbers(count) {
    const numbers = [];
    for (let i = 0; i < count; i++) {
        numbers.push(Math.floor(Math.random() * 101));
    }
    return numbers;
}
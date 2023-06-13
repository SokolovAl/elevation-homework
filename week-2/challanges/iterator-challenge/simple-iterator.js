const myObject = {
    numbers: generateRandomNumbers(10),

    [Symbol.iterator]() {
        let index = 0;
        return {
            next: () => {
                while (index < this.numbers.length) {
                    const currentNumber = this.numbers[index];
                    index++;

                    if (currentNumber % 2 === 0) {
                        return {value: currentNumber, done: false};
                    }
                }
                return {done: true};
            }
        };
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
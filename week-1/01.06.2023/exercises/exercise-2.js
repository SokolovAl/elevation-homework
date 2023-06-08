function printOddNumbers(numbers) {
    for (let i in numbers) {
        if (numbers[i] % 2 !== 0) {
            console.log(numbers[i]);
        }
    }
}

arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

printOddNumbers(arr);

function foo() {
    let sum = 0;
    for (let i = 1000; i < 2000; i++) {
        if (i % 203 === 0) {
            sum += getSecondDigit(i);
        } else if (i % 497 === 0) {
            sum += getLastDigit(i);
        } else if (i % 293 === 0) {
            sum += getLastDigit(i * 13);
        }
    }
    return sum;
}

function getSecondDigit(number) {
    return parseInt(number.toString().split("")[0]);
}

function getLastDigit(number) {
    return parseInt(number.toString().split("")[number.length - 1]);
}

foo();

/*
1. No, but the fourth function call occurs with parameter 1624
2. 5 times
3. Yes, for the third time with parameter 1491
*/

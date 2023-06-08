function isNumberInArray(array, number) {
    for (let i in array) {
        if (array[i] === number) {
            return true;
        }
    }
    return false;
}

arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
num = -2;

console.log(isNumberInArray(arr, num));

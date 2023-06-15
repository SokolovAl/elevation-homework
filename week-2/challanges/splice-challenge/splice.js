const splice = function (array, start, deleteCount, ...items) {
    const deleted = [];

    let actualStart = start;
    if (actualStart < 0) {
        actualStart = start + array.length;
        if (actualStart < 0) {
            actualStart = 0;
        }
    } else if (actualStart > array.length) {
        actualStart = array.length;
    }

    let actualDeleteCount = deleteCount;
    if (typeof actualDeleteCount === "undefined") {
        actualDeleteCount = array.length - actualStart;
    } else {
        if (actualDeleteCount < 0) {
            actualDeleteCount = 0;
        } else if (actualDeleteCount > array.length - actualStart) {
            actualDeleteCount = array.length - actualStart;
        }
    }

    for (let i = 0; i < actualDeleteCount; i++) {
        deleted.push(array[actualStart + i]);
    }

    for (let i = actualStart; i < array.length - actualDeleteCount; i++) {
        array[i] = array[i + actualDeleteCount];
    }
    array.length -= actualDeleteCount;

    const insertIndex = actualStart;
    for (let i = array.length - 1 + items.length; i >= insertIndex + items.length; i--) {
        array[i] = array[i - items.length];
    }
    for (let i = 0; i < items.length; i++) {
        array[insertIndex + i] = items[i];
    }

    return deleted;
};

// remove 1 element
let arr = [1, 2, 3];
splice(arr, 0, 1);
console.log(arr); //should be [2,3]

// add 1 element
arr = [1, 2, 3];
splice(arr, 0, 0, 0);
console.log(arr); //should be [0,1,2,3]

// add 2 elements
arr = [1, 2, 3];
splice(arr, 0, 0, -1, 0);
console.log(arr); //should be [-1,0,1,2,3]

// replace 1 element
arr = [1, 2, 3];
splice(arr, 1, 1, 55);
console.log(arr); //should be [1,55,3]

// delete all elements from index to end
arr = [1, 2, 3, 4, 5];
splice(arr, 1);
console.log(arr); //should be [1]

// returns array of deleted elements
arr = [1, 2, 3];
let deleted = splice(arr, 1);
console.log(deleted); //should be [2,3]

// returns an array of the deleted element (1 element)
arr = [1, 2, 3];
deleted = splice(arr, 1, 1);
console.log(deleted); //should be [2]

// returns an empty array when no elements are deleted
arr = [1, 2, 3];
deleted = splice(arr, 1, 0, 5);
console.log(deleted); //should be []

const regexArr = [/a/, /b/, /^d/, /e$/];
const str = "Bike";
const str1 = "the room is on fire";
const str2 = "Fergalicious";
const str3 = "Fox in sheep clothing";

const searchMatchingRegex = function (str) {
    for (const regex of regexArr) {
        if (regex.test(str)) {
            return true;
        }
    }
    return false;
};

console.log(searchMatchingRegex(str)); //return true (contains b)
console.log(searchMatchingRegex(str1)); //return true (ends with e)
console.log(searchMatchingRegex(str2)); //return true (contains a)
console.log(searchMatchingRegex(str3)); //return false

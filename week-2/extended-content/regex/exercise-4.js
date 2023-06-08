const firstURL = "www.workingurl.com";
const secondURL = "iamabadurl.com";
const thirdURL = "www.doireallywork.net";

const urlValidator = function (str) {
    const regex = /^www.+com$/;
    return regex.test(str);
};

console.log(urlValidator(firstURL)); //return true
console.log(urlValidator(secondURL)); //return false
console.log(urlValidator(thirdURL)); //return false

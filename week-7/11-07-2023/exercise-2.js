const fs = require("fs");

const usersData = fs.readFileSync("users.json", "utf8");
const users = JSON.parse(usersData);

const usersWithZipCodeStartingWith5 = users.filter(user => user.address.zipcode.startsWith("5"));

console.log(usersWithZipCodeStartingWith5);

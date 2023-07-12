const fs = require("fs");

const usersData = fs.readFileSync("users.json", "utf8");
const users = JSON.parse(usersData);

const namesStartingWithC = users
    .map(user => user.name)
    .filter(name => name.startsWith("C"));

console.log(namesStartingWithC);

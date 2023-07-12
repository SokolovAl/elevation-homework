const fs = require("fs");

const usersData = fs.readFileSync("users.json", "utf8");
const users = JSON.parse(usersData);

const user = users.find(user => user.address.suite === "Apt. 950");

console.log(user.company.name);

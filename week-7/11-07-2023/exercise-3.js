const fs = require("fs");

const usersData = fs.readFileSync("users.json", "utf8");
const users = JSON.parse(usersData);

const userIds = users
    .filter(user => user.address.zipcode.startsWith("5"))
    .map(user => user.id);

console.log(userIds);

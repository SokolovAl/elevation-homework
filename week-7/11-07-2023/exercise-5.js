const fs = require("fs");

const usersData = fs.readFileSync("users.json", "utf8");
const users = JSON.parse(usersData);

const allLiveInSouthChristy = users.every(user => user.address.city === "South Christy");

console.log(allLiveInSouthChristy);

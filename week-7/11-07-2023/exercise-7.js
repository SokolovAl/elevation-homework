const fs = require("fs");

const usersData = fs.readFileSync("users.json", "utf8");
const users = JSON.parse(usersData);

function logUserInfo(user) {
    console.log(`${user.name} lives in ${user.address.city}, and owns the company ${user.company.name}`);
}

users.forEach(logUserInfo);

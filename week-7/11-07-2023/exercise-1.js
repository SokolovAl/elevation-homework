const fs = require("fs");

const usersData = fs.readFileSync("users.json", "utf8");
const users = JSON.parse(usersData);

const transformedUsers = users.map(user => {
    return {
        email: user.email,
        companyName: user.company.name
    };
});

console.log(transformedUsers);

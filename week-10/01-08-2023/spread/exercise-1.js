let meatArr = ["beef", "chicken"];
let vegetableArr = ["rabbit", "carrots", "potatoes", "lettuce"];

meatArr = [...meatArr, "rabbit"];
vegetableArr = [...vegetableArr.slice(1)];

console.log(meatArr);
console.log(vegetableArr);


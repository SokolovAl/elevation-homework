const p1 = {
    name: "Juliet",
    age: 14,
    city: "Verona",
};

const p2 = {
    name: "Romeo",
    age: 17,
    city: "Verona",
};

if (p1.age == p2.age && p1.city == p2.city) {
    console.log(p1.name + " wanted to date " + p2.name);
} else {
    console.log(p1.name + " wanted to date " + p2.name + ", but couldn’t");
}

const fruits = [
    {name: "Orange", color: "orange"},
    {name: "Banana", color: "yellow"},
    {name: "Coconut", color: "brown"},
    {name: "Kiwi", color: "brown"},
    {name: "Lemon", color: "yellow"},
    {name: "Cucumber", color: "green"},
    {name: "Persimmon", color: "orange"},
    {name: "Pumpkin", color: "orange"}
]
$(document).ready(function () {
    $(`#basket`).append(
        $.each(fruits, function (index, fruit) {
            $(`<div>`)
                .text(fruit.name)
                .addClass(fruit.color)
                .appendTo(`#basket`);
        })
    );
});



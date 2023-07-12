$(document).ready(function () {
    const spanElement = $("#colors span");

    spanElement.addClass("picker");

    spanElement.each(function () {
        const color = $(this).data("color");
        $(this).css("background-color", color);
    });

    spanElement.click(function () {
        const color = $(this).data("color");
        $(".box").css("background-color", color);
    });
});



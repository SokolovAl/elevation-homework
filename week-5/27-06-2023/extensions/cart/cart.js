$(document).ready(function () {
    $(".item[data-instock=\"true\"]").click(function () {
        const itemName = $(this).text();
        const cart = $("#cart");
        const existingItem = cart.find("div[data-item=\"" + itemName + "\"]");

        if (existingItem.length) {
            const count = parseInt(existingItem.attr("data-count")) + 1;
            existingItem.attr("data-count", count);
            existingItem.text(itemName + " x" + count);
        } else {
            const newItem = $("<div data-item=\"" + itemName + "\" data-count=\"1\">" + itemName + "</div>");
            newItem.click(function () {
                $(this).remove();
            });
            cart.append(newItem);
        }
    });
});

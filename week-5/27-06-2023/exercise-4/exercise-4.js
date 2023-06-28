$(document).ready(function () {
    $(`.item[data-instock="true"]`).click(function () {
        $(`#cart`).append(`<div>${$(this).text()}</div>`);
    });
});

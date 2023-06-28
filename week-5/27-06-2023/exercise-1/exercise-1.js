$(document).ready(function () {
    $(`#add`).click(function () {
        $(`#names`).append(`<li>${$('#name-input').val()}</li>`);
        $(`#name-input`).val('');
    });
});
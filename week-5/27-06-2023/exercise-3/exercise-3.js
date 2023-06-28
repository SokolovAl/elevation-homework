$(document).ready(function () {
    const div1 = $(`<div></div>`).addClass(`box`);
    const div2 = $(`<div></div>`).addClass(`box`);

    $(`body`).append(div1, div2);

    $(`.box`).hover(
        function () {
            $(this).css(`background-color`, `red`);
        },
        function () {
            $(this).css(`background-color`, `#8e44ad`);
        }
    );
});

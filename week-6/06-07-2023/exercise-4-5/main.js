const MY_API_KEY = "R8EOFm8OBCRU1y5UxTd9NMlpTqM977LG";

const fetch = (request) => {
    $.ajax({
        method: "GET",
        url: `https://api.giphy.com/v1/gifs/search?q=${request}&api_key=${MY_API_KEY}`,
        success: (gif) => {
            const gifRandomizer = Math.floor(Math.random() * 101);
            $("#gif").attr("src", gif.data[gifRandomizer].embed_url);
        },
        error: (xhr, text, error) => {
            console.log(text);
        }
    });
};
$(document).ready(function () {
    $("#searchBtn").on("click", function () {
        fetch($("#request").val());
    });
});

const fetch = (queryType, queryValue) => {
    $.ajax({
        method: "GET",
        url: `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`,
        success: (data) => {
            if (data) {
                console.log(data);
            } else {
                console.log("No results found");
            }
        },
        error: (xhr, text, error) => {
            console.log(text);
        }
    });
};

fetch("isbn", 9789814561778);
fetch("title", "How to Win Friends and Influence People");
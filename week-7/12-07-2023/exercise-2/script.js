const randomWordApiUrl = "https://random-word-api.herokuapp.com/word";
const googleBooksApiUrl = "https://www.googleapis.com/books/v1/volumes?q=intitle:";
const randomGifApiUrl = "https://api.giphy.com/v1/gifs/search?q=";
const MY_API_KEY = "R8EOFm8OBCRU1y5UxTd9NMlpTqM977LG";


function fetchRandomWord() {
    return fetch(randomWordApiUrl)
        .then(response => response.json());
}


function fetchBookByWord(word) {
    const apiUrl = `${googleBooksApiUrl}${(word)}`;
    return fetch(apiUrl)
        .then(response => response.json());
}

function fetchGifByWord(word) {
    const apiUrl = `${randomGifApiUrl}${(word)}&api_key=${MY_API_KEY}`;
    return fetch(apiUrl)
        .then(response => response.json());
}

function getRandomBookAndGifByWord() {
    document.getElementById("container").getElementsByTagName("p")[2].innerText = "";
    document.getElementById("gif").src = "";

    fetchRandomWord()
        .then(word => {
            container.getElementsByTagName("p")[0].innerText = `Random word - ${word}`;
            const bookPromise = fetchBookByWord(word);
            const gifPromise = fetchGifByWord(word);
            return Promise.all([bookPromise, gifPromise]);
        })
        .then(([books, gif]) => {
            if (books.items && books.items.length > 0) {
                const bookTitle = books.items[0].volumeInfo.title;
                container.getElementsByTagName("p")[1].innerText = `Book title - ${bookTitle}`;
            } else {
                container.getElementsByTagName("p")[1].innerText = "No books found for this word";
            }

            if (gif.data && gif.data.length > 0) {
                document.getElementById("gif").src = gif.data[0].embed_url;
            } else {
                container.getElementsByTagName("p")[2].innerText = "No GIF found for this word";
            }
        });
}

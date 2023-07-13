const randomWordApiUrl = "https://random-word-api.herokuapp.com/word";
const googleBooksApiUrl = "https://www.googleapis.com/books/v1/volumes?q=intitle:";

function fetchRandomWord() {
    return fetch(randomWordApiUrl)
        .then(response => response.json());
}

function fetchBookByWord(word) {
    const apiUrl = `${googleBooksApiUrl}${(word)}`;
    return fetch(apiUrl)
        .then(response => response.json());
}

function getRandomBookByWord() {
    fetchRandomWord()
        .then(word => {
            document.getElementById("container").getElementsByTagName("p")[0].innerText = `Random word - ${word}`;
            return fetchBookByWord(word);
        })
        .then(books => {
            if (books.items && books.items.length > 0) {
                const bookTitle = books.items[0].volumeInfo.title;
                document.getElementById("container").getElementsByTagName("p")[1].innerText = `Book title - ${bookTitle}`;
            } else {
                throw new Error(`No books found for this word`);
            }
        })
        .catch(error => {
            console.error(error);
            document.getElementById("container").getElementsByTagName("p")[1].innerText = `Error: ${error.message}`;
        });
}

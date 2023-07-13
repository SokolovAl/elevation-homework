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
        .then(data => {
            const word = data[0];
            document.getElementById("container").getElementsByTagName("p")[0].innerText = `Random word - ${word}`;
            return fetchBookByWord(word);
        })
        .then(data => {
            if (data.items && data.items.length > 0) {
                const bookTitle = data.items[0].volumeInfo.title;
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

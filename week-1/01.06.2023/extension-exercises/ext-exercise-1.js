const story =
    "In the beginning there was light. Then there were wolves. Finally there was a big fire. Ultimately, Shelob the wolf-master put out the fire with her feet. But until then, the fire caused one heck of a lot of damage.";
const specialChars = [",", ".", "'", '"', "?", "!", ";"];
const wordCounts = {};

function cleanAndConvertTextToLowercase(text) {
    for (let char of specialChars) {
        text = text.split(char).join("");
    }
    return text.toLowerCase();
}

function addWordToCounter(word) {
    if (wordCounts[word]) {
        wordCounts[word]++;
    } else {
        wordCounts[word] = 1;
    }
}

function startCounting(story) {
    const cleanedStory = cleanAndConvertTextToLowercase(story);
    const words = cleanedStory.split(" ");

    for (let word of words) {
        addWordToCounter(word);
    }
}

startCounting(story);

console.log(wordCounts);

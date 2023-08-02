let wisdom = [];

function addToWisdom() {
    const userInput = document.getElementById("userInput").value;
    if (userInput.trim() !== "") {
        const textObject = {text: userInput};
        wisdom.push(textObject);
        updateWisdomDisplay();
        saveToLocalStorage();
        document.getElementById("userInput").value = "";
    }
}

function updateWisdomDisplay() {
    const wisdomDisplay = document.getElementById("wisdomDisplay");
    wisdomDisplay.innerHTML = "";

    wisdom.forEach((item, index) => {
        const textElement = document.createElement("p");
        textElement.textContent = item.text;

        const deleteButton = document.createElement("span");
        deleteButton.textContent = " x";
        deleteButton.style.cursor = "pointer";
        deleteButton.addEventListener("click", () => {
            removeWisdom(index);
        });

        textElement.appendChild(deleteButton);
        wisdomDisplay.appendChild(textElement);
    });
}

function removeWisdom(index) {
    wisdom.splice(index, 1);
    updateWisdomDisplay();
    saveToLocalStorage();
}

function clearWisdom() {
    wisdom = [];
    updateWisdomDisplay();
    localStorage.removeItem("wisdomData");
}

function saveToLocalStorage() {
    if (wisdom.length % 2 === 0) {
        localStorage.setItem("wisdomData", JSON.stringify(wisdom));
    }
}

function loadFromLocalStorage() {
    const storedWisdom = localStorage.getItem("wisdomData");
    if (storedWisdom) {
        wisdom = JSON.parse(storedWisdom);
        updateWisdomDisplay();
    }
}

loadFromLocalStorage();

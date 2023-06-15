function generateRandomColor() {
    const color = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return color;
}

const container = document.getElementById("container");
const message = document.getElementById("message");
let boxesChanged = 0;

for (let i = 0; i < 5; i++) {
    const box = document.createElement("div");

    box.setAttribute("class", "box");
    box.onmouseenter = () => {
        box.style.backgroundColor = generateRandomColor();
        // box.style.backgroundColor = "red";
        boxesChanged++;
        if (boxesChanged === 5) {
            checkBoxesColors();
        }
    };
    container.appendChild(box);
}

function checkBoxesColors() {
    const boxes = document.getElementsByClassName("box");

    const firstBoxColor = boxes[0].style.backgroundColor;
    let areAllBoxesTheSameColor = true;
    for (let i = 1; i < boxes.length; i++) {
        if (boxes[i].style.backgroundColor !== firstBoxColor) {
            areAllBoxesTheSameColor = false;
            break;
        }
    }

    if (areAllBoxesTheSameColor) {
        message.innerHTML = "Nice job!";
    }
}
const playingField = document.getElementById("playing-field");
const upBtn = document.getElementById("up");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");
const downBtn = document.getElementById("down");
const ball = document.getElementById("ball");
const fieldWidth = playingField.offsetWidth;
const fieldHeight = playingField.offsetHeight;
const ballHeight = ball.offsetHeight + 15;
const ballWidth = ball.offsetWidth + 15;

upBtn.onclick = () => moveUp();
leftBtn.onclick = () => moveLeft();
rightBtn.onclick = () => moveRight();
downBtn.onclick = () => moveDown();

const moveUp = function () {
    let top = parseInt(ball.style.top) || 0;
    if (top > 0) {
        top -= 15;
        ball.style.top = top + "px";
    }
};

const moveLeft = function () {
    let left = parseInt(ball.style.left) || 0;
    if (left > 0) {
        left -= 15;
        ball.style.left = left + "px";
    }
};

const moveRight = function () {
    let left = parseInt(ball.style.left) || 0;
    if (left < fieldWidth - ballWidth) {
        left += 15;
        ball.style.left = left + "px";
    }
};

const moveDown = function () {
    let top = parseInt(ball.style.top) || 0;
    if (top < fieldHeight - ballHeight) {
        top += 15;
        ball.style.top = top + "px";
    }
};

document.addEventListener("keydown", function (event) {
    switch (event.key) {
        case "ArrowUp":
            moveUp();
            break;
        case "ArrowLeft":
            moveLeft();
            break;
        case "ArrowRight":
            moveRight();
            break;
        case "ArrowDown":
            moveDown();
            break;
    }
});

const header = document.createElement("h1");
header.innerHTML = "The Best Game Ever";
header.style.color = "#c0392b";
header.style.fontFamily = "Helvetica";
document.body.appendChild(header);

const subHeader = document.createElement("h2");
subHeader.innerHTML = "Game by: Aleksandr Sokolov";
subHeader.setAttribute("class", "sub-header");
document.body.appendChild(subHeader);

function generateRandomColor() {
    const color = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return color;
}

const container = document.getElementById("container");

for (let i = 0; i < Math.floor(Math.random() * 100); i++) {
    const box = document.createElement("div");

    box.setAttribute("class", "box");
    box.onmouseenter = () => box.style.backgroundColor = generateRandomColor();
    container.appendChild(box);
}

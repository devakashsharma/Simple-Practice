const image = document.getElementById("image");

let posX = 0;
let posY = 0;

function upadatePosition() {
    image.style.left = posX + `px`;
    image.style.top = posY + `px`;
}

document.addEventListener("keydown", (event) => {
    const key = event.keyCode;

    if (key === 37) {
        posX -= 10;
    } else if (key === 39) {
        posX += 10;
    } else if (key === 38) {
        posY -= 10;
    } else if (key === 40) {
        posY += 10;
    }
    upadatePosition();
})

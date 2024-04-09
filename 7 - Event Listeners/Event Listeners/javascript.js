// designing single click 
function clickEvent() {
    document.getElementById("click").innerText = "❤️❤️";
    document.getElementById("click").style.fontSize = "20px";
    document.getElementById("click").style.backgroundColor = "#f2b8b1";
}

// designing double click
function dblClkEvent() {
    document.getElementById("doubleClick").innerText = "🤍🤍";
    document.getElementById("doubleClick").style.fontSize = "20px";
    document.getElementById("doubleClick").style.backgroundColor = "#292811";
}

// designing mouse over
function mouseOverEvent() {
    document.getElementById("mouseOver").style.fontSize = "18px";
    document.getElementById("mouseOver").style.color = "#ffffff";
    document.getElementById("mouseOver").style.fontWeight = "700px";
    document.getElementById("mouseOver").style.backgroundColor = "#7711ff";
}

// designing mouse out
function mouseOutEvent() {
    document.getElementById("mouseOut").innerText = "See! 😎";
    document.getElementById("mouseOut").style.backgroundColor = "#a3e866"
}

// designing on key press
function onKeyPressEvent() {
    alert("You have press a key");
}

const input = document.querySelector("input");
const log = document.getElementById("log");

input.addEventListener("keydown", logKey);

function logKey(e) {
  log.textContent += ` ${e.code}`;
}

const color1 = document.getElementById("color1");
const color2 = document.getElementById("color2");
const submit = document.getElementById("submit");
const invalid = document.getElementById("invalid");
const body = document.body;

submit.addEventListener("click", () => {
    if(color1.value === "red" && color2.value === "blue" || color1.value === "blue" && color2.value === "red") {
        body.style.backgroundColor = "purple";
    } else if (color1.value === "red" && color2.value === "yellow" || color1.value === "yellow" && color2.value === "red") {
        body.style.backgroundColor = "orange";
    } else if (color1.value === "blue" && color2.value === "yellow" || color1.value === "yellow" && color2.value === "blue"){
        body.style.backgroundColor = "green"
    } else {
        invalid.innerText = "Error! Invalid Combination"
    }
})
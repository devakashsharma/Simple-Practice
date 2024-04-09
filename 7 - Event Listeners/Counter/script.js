const inBtn = document.querySelector(".incre-btn");
const DeBtn = document.querySelector(".decre-btn");
const resetBtn = document.querySelector(".reset-btn");
const spanValue = document.querySelector(".span-value");

// increment value 
inBtn.addEventListener("click", () => {
    const value = Number(spanValue.innerText);
    if (value >= 10) {
        alert.spanValue("More than 10 is not allowed");
    } else {
        spanValue.innerText = value + 1;
    }
})

// Decrement
DeBtn.addEventListener("click", () => {
    const value = Number(spanValue.innerText);
    if (value > 0) {
        spanValue.innerText = value - 1;
    }
    else {
        alert.spanValue("Negative value is not allowed");
    }
})

// Reset
resetBtn.addEventListener("click", () => {
    spanValue.innerText = 0;
});

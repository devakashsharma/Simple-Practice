const inBtn = document.querySelector(".incre-btn");
const DeBtn = document.querySelector(".decre-btn");
const resetBtn = document.querySelector(".reset-btn");
const spanValue = document.querySelector(".span-value");

// btns.forEach((items) => {
//     items.addEventListener("click", (element) => {
//         const clickedElement = element.currentTarget.classList;
//         // console.log(clickedElement);

//         if (clickedElement.contains("incre")) {
//             count++;
//         } else if (clickedElement.contains("decre")) {
//             count--;
//         } else {
//             count = 0;
//         }

//         spanValue.textContent = count;
//     })
// })

// increment value 
inBtn.addEventListener("click", () => {
    const value = Number(spanValue.innerText);
    if (value >= 10) {
        alert.spanValue("More than 10 is not allowed");
    } else {
        spanValue.innerText = value + 1;
    }
})

DeBtn.addEventListener("click", () => {
    const value = Number(spanValue.innerText);
    if (value > 0) {
        spanValue.innerText = value - 1;
    }
    else {
        alert.spanValue("Negative value is not allowed");
    }
})

resetBtn.addEventListener("click", () => {
    spanValue.innerText = 0;
});
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const operator = document.getElementById("operator");
const submit = document.getElementById("submit");
const result = document.getElementById("result");

submit.addEventListener("click", () => {
    switch (operator.value) {
        case "+":
            result.innerHTML = parseInt(num1.value) + parseInt(num2.value);
            break;
        case "-":
            result.innerHTML = parseInt(num1.value) - parseInt(num2.value);
            break;
        case "*":
            result.innerHTML = parseInt(num1.value) * parseInt(num2.value);
            break;
        case "/":
            result.innerHTML = parseInt(num1.value) / parseInt(num2.value);
            break;
        default:
            break;
    }
})
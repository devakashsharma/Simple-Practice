const submit = document.querySelector(".submit");
const pass1 = document.getElementById("pass1");
const pass2 = document.getElementById("pass2");

submit.addEventListener("click", () => {
    if (pass1.value === pass2.value) {
        alert("Password Matched!")
    } else {
        alert("Password not matched")
    }
})
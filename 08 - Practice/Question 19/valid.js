document.getElementById("login-form").addEventListener("submit", (event) => {
    event.preventDefault();

    const mail = document.getElementById("mail").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");
    const btn = document.getElementById("btn");

    if (mail.includes("@") && password.length >= 8) {
        message.textContent = "Valid email and password!";
        message.className = "success";
    } else {
        message.textContent = "Invalid email or password!";
        message.className = "error";
    }

});
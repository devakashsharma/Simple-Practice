const userNameInput = document.getElementById("name");
const submit = document.getElementById("submit");

submit.addEventListener("click", () => {
    const userName = userNameInput.value;
    const modifiedName = userName.charAt(0).toLowerCase() === userName.charAt(0) ? 
                        userName.charAt(0).toUpperCase() + userName.slice(1) : 
                        userName;
    userNameInput.value = modifiedName;
});

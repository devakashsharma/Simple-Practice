const btn = document.getElementById("add");

btn.addEventListener("click", () => {
    const task = document.getElementById("task").value;
    const taskList = document.getElementById("ordered-list");
    
    const elementList = document.createElement("li");
    elementList.textContent = task;

    taskList.appendChild(elementList);

})
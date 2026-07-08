const taskInput = document.getElementById("taskInput");

const addTaskBtn = document.getElementById("addTaskBtn");

const taskList = document.getElementById("taskList");

const errorMessage = document.getElementById("error-message");

let tasks = [];

function renderTasks() {
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {

    const li = document.createElement("li");

    li.textContent = task;

    const deleteBtn = document.createElement("button");

    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => {
        tasks.splice(index, 1);
        renderTasks();
    });

    li.appendChild(deleteBtn);

    taskList.appendChild(li);

  });

}

 taskInput.addEventListener("input", () => {
      errorMessage.classList.add("hidden");
    });

addTaskBtn.addEventListener("click", () => {

  const taskValue = taskInput.value.trim();

  if (taskValue === "") {
    errorMessage.classList.remove("hidden");
    return
  }

  tasks.push(taskValue);
  

  renderTasks();

  taskInput.value = "";

});
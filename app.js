const taskInput = document.getElementById("taskInput");

const addTaskBtn = document.getElementById("addTaskBtn");

const taskList = document.getElementById("taskList");

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
    })
    li.appendChild(deleteBtn);

    taskList.appendChild(li);

  });

}

addTaskBtn.addEventListener("click", () => {

  const taskValue = taskInput.value;

  if (taskValue === "") return;

  tasks.push(taskValue);

  renderTasks();

  taskInput.value = "";

});
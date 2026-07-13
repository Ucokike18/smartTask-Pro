const taskInput = document.getElementById("taskInput");

const addTaskBtn = document.getElementById("addTaskBtn");

const taskList = document.getElementById("taskList");

const errorMessage = document.getElementById("error-message");

const overlay = document.getElementById("overlay");

const settingsBtn = document.getElementById("settingsBtn");

const closeBtn = document.getElementById("closeBtn");

const lightBtn = document.getElementById("lightBtn");

const darkBtn = document.getElementById("darkBtn");

const body = document.body;

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

settingsBtn.addEventListener("click", ()=> {
  overlay.classList.remove("hidden");
  overlay.classList.add("show");
});

darkBtn.addEventListener("click", () => {
  body.classList.add("dark-theme");
});

lightBtn.addEventListener("click", () => {
  body.classList.remove("dark-theme")
})

closeBtn.addEventListener("click", () => {
  overlay.classList.add("hidden");
  overlay.classList.remove("show")
})

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
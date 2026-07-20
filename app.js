//DOM Elements

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

//State

let tasks = [];

//Functions

function renderTasks() {
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {

    const li = document.createElement("li");

    li.textContent = task;

    const deleteBtn = document.createElement("button");

    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => deleteTask(index));

    li.appendChild(deleteBtn);

    taskList.appendChild(li);

  });

}

function openModal() {
  overlay.classList.remove("hidden");
  overlay.classList.add("show");
}

function closeModal () {
  overlay.classList.add("hidden");
  overlay.classList.remove("show");
}

function enableDarkTheme () {
  body.classList.add("dark-theme");
}

function enableLightTheme (){
  body.classList.remove("dark-theme");
}

function validateTask (taskValue){
   if (taskValue === "") {
    return false;
  }
  return true;
}

function showError () {
  errorMessage.classList.remove("hidden");
}

function hideError () {
  errorMessage.classList.add("hidden");
}

function addTask (taskValue) {
  tasks.push(taskValue);
  
  renderTasks();

  taskInput.value = "";
  
  taskInput.focus();
}

function deleteTask (index) {
  tasks.splice(index, 1);
  renderTasks();
}

//Event Listeners

settingsBtn.addEventListener("click", openModal);

darkBtn.addEventListener("click", enableDarkTheme);

lightBtn.addEventListener("click", enableLightTheme);

closeBtn.addEventListener("click", closeModal);

taskInput.addEventListener("input", hideError);

addTaskBtn.addEventListener("click", () => {

 const taskValue = taskInput.value.trim();

if (!validateTask(taskValue)) {

  showError();

  return;
}

addTask(taskValue);
  
});
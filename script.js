const taskNameInput = document.getElementById('task-name');
const categoryInput = document.getElementById('category');
const deadlineInput = document.getElementById('deadline');
const statusInput = document.getElementById('status');
const addTaskBtn = document.getElementById('add-task-btn');
const taskListUl = document.getElementById('task-list');

const filterStatus = document.getElementById("filter-status");
const filterCategory = document.getElementById("filter-category");

let tasks = [];

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
        tasks = storedTasks; 
    }
    displayTasks();
}
 
function addTask() {
    const taskName = taskNameInput.value;
    const category = categoryInput.value;
    const deadline = deadlineInput.value;
    const status = statusInput.value;

    if (!taskName || !category || !deadline || !status) {
        alert("Please fill in all fields.");
        return;
    }

    const newTask = { taskName, category, deadline, status };

    tasks.push(newTask);
    saveTasks();   
    displayTasks();

    taskNameInput.value = "";
    categoryInput.value = "Categories";
    deadlineInput.value = "";
    statusInput.value = "Status";
}

// Event Listeners 
addTaskBtn.addEventListener('click', addTask);
filterStatus.addEventListener("change", displayTasks);
filterCategory.addEventListener("change", displayTasks);



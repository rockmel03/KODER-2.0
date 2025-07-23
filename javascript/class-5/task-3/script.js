const completedTasksList = document.querySelector("#completed-tasks-list");
const incompletedTasksList = document.querySelector("#incompleted-tasks-list");

const form = document.querySelector("form");
const taskInput = form.querySelector("#task-input");
const dateInput = form.querySelector("#date");

const today = new Date().toISOString().split("T")[0];
dateInput.value = today;

const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = taskInput.value;
  const date = dateInput.value;

  if (!(title && date)) return;

  tasks.push({ id: Date.now(), title, date, status: false });
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks();
});

renderTasks();
function renderTasks() {
  const incompleteTasks = [];
  const completedTasks = [];

  tasks.forEach((task) => {
    const today = Date.now();
    const dueDate = new Date(task.date).getTime();
    const duration = Math.ceil((dueDate - today) / (24 * 60 * 60 * 1000));

    if (task.status) {
      completedTasks.push({ ...task, daysLeft: duration });
    } else {
      if (duration >= 0) {
        incompleteTasks.push({ ...task, daysLeft: duration });
      } else if (duration < 0) {
        completedTasks.push({ ...task, status: true, daysLeft: 0 });
      }
    }
  });

  renderTasksIntoList(completedTasks, completedTasksList);
  renderTasksIntoList(incompleteTasks, incompletedTasksList);
}

function renderTasksIntoList(tasks, list) {
  list.innerHTML = "";

  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.style.display = "grid";
    li.style.gridTemplateColumns = "repeat(4, 1fr)";

    const titleElem = document.createElement("h3");
    titleElem.textContent = task.title;
    li.appendChild(titleElem);

    const daysElem = document.createElement("p");
    daysElem.textContent = task.date;
    li.appendChild(daysElem);

    if (!task.status) {
      const daysLeftElem = document.createElement("p");
      daysLeftElem.textContent = task.daysLeft + " day(s)";
      li.appendChild(daysLeftElem);
    }

    const statusElem = document.createElement("p");
    statusElem.textContent = task.status ? "Completed" : "Incomplete";
    statusElem.style.color = task.status ? "green" : "red";
    li.appendChild(statusElem);

    list.appendChild(li);
  });
}

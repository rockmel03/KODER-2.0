const form = document.querySelector("form");
const taskInput = form.querySelector("#task");
const dateInput = form.querySelector("#date");

const pendingTasksList = document.querySelector("#pending-tasks-list");
const completedTasksList = document.querySelector("#completed-tasks-list");

const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// set default date
const today = new Date().toISOString().split("T")[0];
dateInput.value = today;

// handle submit event
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const title = taskInput.value;
  const date = dateInput.value;
  if (!(title && date)) return;
  console.log(title, date);

  tasks.push({ id: Date.now(), title, date, status: false });
  localStorage.setItem("tasks", JSON.stringify(tasks));

  renderTasks();
});

renderTasks();
function renderTasks() {
  const filteredPendingTasks = [];
  const filteredCompletedTasks = [];

  tasks.forEach((task) => {
    const dueDate = new Date(task.date).getTime();
    const currentDate = new Date().getTime();
    const difference = Math.ceil(
      (dueDate - currentDate) / (24 * 60 * 60 * 1000)
    );

    // console.log(task.title, difference);
    if (task.status || difference < 0) {
      filteredCompletedTasks.push({ ...task, status: true, daysLeft: 0 });
    } else if (difference >= 0) {
      filteredPendingTasks.push({ ...task, daysLeft: difference });
    }
  });

  // render tasks into particular lists
  renderTaskIntoList(filteredPendingTasks, pendingTasksList);
  renderTaskIntoList(filteredCompletedTasks, completedTasksList);
}

function renderTaskIntoList(tasks, listElem) {
  listElem.innerHTML = "";
  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.classList.add("task");

    const titleElem = document.createElement("h3");
    titleElem.textContent = task.title;
    li.appendChild(titleElem);

    const dateElem = document.createElement("p");
    dateElem.textContent = task.date;
    li.appendChild(dateElem);

    const daysLeftElem = document.createElement("p");
    daysLeftElem.textContent = task.daysLeft + " " + "day(s) left";
    li.appendChild(daysLeftElem);

    const statusElem = document.createElement("p");
    statusElem.textContent = task.status ? "Completed" : "Incomplete";
    statusElem.style.color = task.status ? "green" : "red";
    li.appendChild(statusElem);

    listElem.append(li);
  });
}

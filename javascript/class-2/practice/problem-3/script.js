const form = document.querySelector("form");
const taskList = document.querySelector("ul");
const statusFilter = document.querySelector("#status-filter");
const dateFilter = document.querySelector("#date-filter");

const tasksData = JSON.parse(localStorage.getItem("taskData")) || [];
renderAllTasks(tasksData);

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const task = form.querySelector("#task").value;
  const date = form.querySelector("#due-date").value;
  const status = form.querySelector("#status").checked;

  tasksData.push({
    task,
    date,
    status,
  });

  renderTask({
    task,
    date,
    status,
  });
  updateLocalStorage();
});

statusFilter.addEventListener("input", filterTasks);
dateFilter.addEventListener("input", filterTasks);

function filterTasks(e) {
  const filterName = e.target.name;
  const filterValue = e.target.value;

  taskList.innerHTML = "";

  console.log(filterName);

  if (filterName && filterValue) {
    if (filterName === "status-filter") {
      const filteredData = tasksData.filter((item) =>
        filterValue === "completed"
          ? item.status
          : filterValue === "pending"
          ? !item.status
          : false
      );

      renderAllTasks(filteredData);
    } else if (filterName === "date-filter") {
      const filteredData = tasksData.filter((item) => {
        const currentDate = new Date().getTime();
        const taskDate = new Date(item.date).getTime();

        // console.log(currentDate, taskDate);
        if (filterValue === "upcoming") return currentDate < taskDate;
        else if (filterValue === "past") return currentDate > taskDate;
      });
      console.log(filteredData, filterName, filterValue)

      renderAllTasks(filteredData);
    }
  } else {
    renderAllTasks(tasksData);
  }
}

function updateLocalStorage() {
  localStorage.setItem("taskData", JSON.stringify(tasksData));
}

function renderTask(item) {
  const taskElem = document.createElement("li");
  taskElem.classList.add("task");
  item.status && taskElem.classList.add("completed");

  taskElem.innerHTML = `<h3>${item.task}</h3>
              <p>${item.date}</p>
              <p>${item.status ? "Completed" : "Pending"}</p>
              `;

  taskList.append(taskElem);
}

function renderAllTasks(data) {
  data.forEach(renderTask);
}

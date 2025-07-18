const form = document.querySelector("form");
const nameInput = form.querySelector("#name");
const amountInput = form.querySelector("#amount");
const dateInput = form.querySelector("#date");

const expensesList = document.querySelector("ul");

const yearsDropdown = document.querySelector("#years-dropdown");
const monthsDropDown = document.querySelector("#months-dropdown");
const totalExpensesElem = document.querySelector("#totalExpenses");

const expenses = JSON.parse(localStorage.getItem("expenses")) || [];

// set default date in date input
const today = new Date().toISOString().split("T")[0];
dateInput.value = today;

renderYears();
renderMonths();
renderExpenses(expenses);

form.addEventListener("submit", handleFormSubmmit);

function handleFormSubmmit(e) {
  e.preventDefault();

  const name = nameInput.value;
  const amount = amountInput.value;
  const date = dateInput.value;

  expenses.push({ name, amount: Number(amount), date });
  localStorage.setItem("expenses", JSON.stringify(expenses));

  expensesList.innerHTML = "";
  renderExpenses(expenses);
  renderTotalExpenses();
  renderYears();
  renderMonths();
}

function onFilterChange(e) {
  const month = monthsDropDown.value;
  const year = yearsDropdown.value;

  if (month || year) {
    let filterData = [...expenses];
    if (month) {
      filterData = filterData.filter((exp) => {
        const date = new Date(exp.date);
        return Number(month) == date.getMonth();
      });
    }

    if (year) {
      filterData = filterData.filter((exp) => {
        const date = new Date(exp.date);
        return Number(year) === date.getFullYear();
      });
    }

    renderExpenses(filterData);
    const totalExpenses = calcAmount(filterData);
    totalExpensesElem.textContent = totalExpenses;
  } else {
    renderExpenses(expenses);
    const totalExpenses = calcAmount(expenses);
    totalExpensesElem.textContent = totalExpenses;
  }
}

function renderExpenses(data) {
  expensesList.innerHTML = "";
  data.forEach((expense) => {
    const li = document.createElement("li");
    li.innerHTML = `<h2>${expense.name}</h2>
                  <p>${expense.date}</p>
                  <p>$${expense.amount}</p>`;

    expensesList.append(li);
  });
}

function renderYears() {
  const years = [
    ...new Set(expenses.map((exp) => new Date(exp.date).getFullYear())),
  ];

  yearsDropdown.innerHTML = "";
  const option = document.createElement("option");

  option.textContent = "All";
  option.setAttribute("value", "");

  yearsDropdown.append(option);

  years.forEach((year) => {
    const option = document.createElement("option");
    option.textContent = year;
    option.setAttribute("value", year);
    yearsDropdown.append(option);
  });

  renderTotalExpenses();

  yearsDropdown.addEventListener("input", onFilterChange);
}

function renderMonths() {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  monthsDropDown.innerHTML = "";

  const option = document.createElement("option");
  option.textContent = "All";
  option.setAttribute("value", "");
  monthsDropDown.append(option);

  months.forEach((month, idx) => {
    const option = document.createElement("option");
    option.textContent = month;
    option.setAttribute("value", idx);
    monthsDropDown.append(option);
  });

  renderTotalExpenses();

  monthsDropDown.addEventListener("input", onFilterChange);
}

function calcAmount(data) {
  return data.reduce((acc, curr) => (acc += curr.amount), 0);
}

function renderTotalExpenses() {
  const totalExpenses = calcAmount(expenses);
  totalExpensesElem.textContent = totalExpenses;
}

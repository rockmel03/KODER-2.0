const form = document.querySelector("form");
const expensesList = document.querySelector("ul");

const expenses = JSON.parse(localStorage.getItem("expenses")) || [];

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = form.querySelector("#name").value;
  const amount = form.querySelector("#amount").value;
  const date = form.querySelector("#date").value;

  expenses.push({ name, amount: Number(amount), date });
  localStorage.setItem("expenses", JSON.stringify(expenses));

  expensesList.innerHTML = "";
  renderExpenses(expenses);
});

renderExpenses(expenses);
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

const years = [
  ...new Set(expenses.map((exp) => new Date(exp.date).getFullYear())),
];

const yearsDropdown = document.querySelector("#years-dropdown");

years.forEach((year) => {
  const option = document.createElement("option");
  option.textContent = year;
  option.setAttribute("value", year);
  yearsDropdown.append(option);
});

yearsDropdown.addEventListener("input", onFilterChange);

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

const monthsDropDown = document.querySelector("#months-dropdown");
const totalExpensesElem = document.querySelector("#totalExpenses");

const totalExpenses = calcAmount(expenses);
totalExpensesElem.textContent = totalExpenses;
function calcAmount(data) {
  return data.reduce((acc, curr) => (acc += curr.amount), 0);
}

months.forEach((month, idx) => {
  const option = document.createElement("option");
  option.textContent = month;
  option.setAttribute("value", idx);
  monthsDropDown.append(option);
});

monthsDropDown.addEventListener("input", onFilterChange);

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

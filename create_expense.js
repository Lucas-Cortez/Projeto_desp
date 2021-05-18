let Expenses = [];

class Expense {
  constructor(date, type, description, value) {
    this.date = date;
    this.type = type;
    this.description = description;
    this.value = value;
  }
}

function createExpense({ date, expenseType, description, value }) {
  const expense = new Expense(date, expenseType, description, value);

  Expenses.push(expense);
  updateHtmlExpenses();
}

function deleteExpense(index) {
  Expenses.splice(index, 1);
  updateHtmlExpenses();
}

function updateHtmlExpenses() {
  const tableBody = document.querySelector("table tbody");
  tableBody.innerHTML = "";

  Expenses.map((expense, index) => {
    tableBody.innerHTML += `<tr id="expense_${index}">
      <td>${formatDate(expense.date)}</td> 
      <td>${expense.type}</td>
      <td>${expense.description}</td>
      <td>R$${expense.value}</td>
      <td class="button">
        <button onclick="deleteExpense(expense_${index})">
          <img src="images/24850.svg" width="12" height="12" />
        </button>
      </td>
    </tr>`;
  });
}

function formatDate(date) {
  // return `${date.getDay()}/${get.getMonth()+1}/${date.getFullYear()}`
  return new Intl.DateTimeFormat("pt-br").format(date);
}

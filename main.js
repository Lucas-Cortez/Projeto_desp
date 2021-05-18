document.getElementById("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const year = document.getElementById("year").value;
  const month = document.getElementById("month").value;
  const day = document.getElementById("day").value;

  const expenseType = document.getElementById("expense_type").value;
  const description = document.getElementById("description").value;
  const value = document.getElementById("value").value;

  const date = new Date(Number(year), Number(month - 1), Number(day));

  if (
    year.length == 0 ||
    day.length == 0 ||
    month.length == 0 ||
    expenseType.length == 0 ||
    description.length == 0 ||
    value.length == 0
  ) {
    alert("Preencha os dados corretamente!");
  } else {
    createExpense({ date, description, expenseType, value });
  }
});

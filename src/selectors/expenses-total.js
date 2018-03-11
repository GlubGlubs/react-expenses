//export default (expenses = [{amount: 0}]) => expenses.map((arr) => arr.amount).reduce((a, b) => a + b)
export default (expenses) => {
  return expenses
      .map((expense) => expense.amount)
      .reduce((sum, value) => sum + value, 0);
};
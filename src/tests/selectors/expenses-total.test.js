import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses'



test('should return 0 if no expense', () => {
  const result = selectExpensesTotal([]);
  expect(result).toBe(0);
});

test('should correctly sum a single expense', () => {
  const result = selectExpensesTotal(expenses.slice(0,1));
  expect(result).toBe(195);
});

test('should correcly sum multiple expenses', () => {
  const result = selectExpensesTotal(expenses);
  expect(result).toBe(114195);
});
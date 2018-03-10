import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expenses if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should add expense', () => {
  const newExpense = {
    id: '4',
    description: 'IceCream',
    note: 'Hello',
    amount: 422,
    createdAt: 0
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense: newExpense
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, newExpense]);
});

test('should edit expense', () => {
 const updatedExpense = {
  description: 'IceCream',
  note: 'Hello',
  amount: 4221,
  createdAt: 0
 };
 const action = {
   type: 'EDIT_EXPENSE',
   id: '1',
   updates: updatedExpense
 }
 const state = expensesReducer(expenses, action);
 const newExpense = [...expenses];
 newExpense[0] = {...expenses[0], ...updatedExpense}
 expect(state).toEqual(newExpense);
});

test('should  not edit expense if id not found', () => {
  const updatedExpense = {
   description: 'IceCream',
   note: 'Hello',
   amount: 4221,
   createdAt: 0
  };
  const action = {
    type: 'EDIT_EXPENSE',
    id: '10',
    updates: updatedExpense
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
 });
import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

//Test Remove Expense
test('should setup remove expense action object', () => {
  const action = removeExpense({id: '123abc'});
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  })
});

//Test Edit Expense
test('should setup edit expense action object', () => {
  const action = editExpense('123abc', {
    note: 'New note value'
  });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates: {note: 'New note value'}
  });
})


//Test Add Expense
test('should setup add expense action object with provided values', () => {
  const expenseData = {
    description: 'Rent',
    amount: 109500,
    createdAt: 1000,
    note: 'Last mounth rent'
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type:'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
})

test('should setup the add expense object with default value', () => {
  const action = addExpense({});
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      description: '',
      note: '',
      amount: 0,
      createdAt: 0,
      id: expect.any(String)
    }
  })
})
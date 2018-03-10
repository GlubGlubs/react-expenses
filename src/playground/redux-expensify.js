import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';


store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filter)
  console.log(visibleExpenses);
});


const expenseOne = store.dispatch(addExpense({ description: 'rent', amount: 100, createdAt: -21000}));
const expenseTwo = store.dispatch(addExpense({ description: 'Cofee', amount: 2100, createdAt: -1000}));
const expenseTree = store.dispatch(addExpense({ description: 'Cofee', amount: 15000, createdAt: -1000}));
const expense4 = store.dispatch(addExpense({ description: 'Cofee', amount: 9999999, createdAt: -1000}));

// store.dispatch(removeExpense({id: expenseOne.expense.id}))

// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500}))

// store.dispatch(setTextFilter('RENT'));

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());


// store.dispatch(setStartDate(1000000));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1250));
// store.dispatch(setEndDate());
































// const demoState = {
//   expenses: [{
//     id: '2323232323aa',
//     description: 'January Rent',
//     note: 'this is the final payment for that adress',
//     amount: 54500,
//     createdAt: 0
//   }],
//   filters: {
//     text: 'rent',
//     sortBy: 'amount',
//     startDate: undefined,
//     endDate: undefined
//   }
// };
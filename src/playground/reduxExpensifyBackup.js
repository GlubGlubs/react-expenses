import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';


//Add Expense action generator
//we destructure the first argument and if it doesn't exist we destructure an empty object
const addExpense = (
  {
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
  } = {}
) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

const removeExpense = ( {id} = {} ) => ({
  type: 'REMOVE_EXPENSE',
  id
});


//Edit Expense
const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
})

//Edit Text filter

const setTextFilter = (text ='') => ({
  type: 'SET_TEXT_FILTER',
  text
});

//Sort by amount

const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
});

//Sort by Date

const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});


//Filter setStartDate

const setStartDate = (startDate = undefined) => ({
  type: 'SET_START_DATE',
  startDate
})

//Filter setEndDate

const setEndDate = (endDate = undefined) => ({
  type: 'SET_END_DATE',
  endDate
})



const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
    return [
      ...state,
      action.expense
    ];
    case 'REMOVE_EXPENSE':
      return state.filter(( {id} ) => id  !== action.id);
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          };
        } else {
          return expense;
        }
      });
    default: 
      return state
  }
}

//Filters Reducer

const filterReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
}

const filterReducer = (state = filterReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      };
      case "SORT_BY_AMOUNT":
        return {
          ...state,
          sortBy: 'amount'
        };
        case "SORT_BY_DATE":
        return {
          ...state,
          sortBy: 'date'
        };
        case 'SET_START_DATE':
          return {
            ...state,
            startDate: action.startDate
          };
          case 'SET_END_DATE':
          return {
            ...state,
            endDate: action.endDate
          };
    default:
      return state
  }
}




//GET visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;;
    const textMatch = typeof text !== 'string' || expense.description.toLowerCase().includes(text.toLowerCase())

    return startDateMatch && endDateMatch && textMatch;
  }).sort( (a, b) => {
    if (sortBy === 'date') {
      //deu positivo o segundo termo vai pra esquerda
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;
    }
  });
};



//Store Creation
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filter: filterReducer
  })
);


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
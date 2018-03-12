import uuid  from 'uuid';
import database from '../firebase/firebase';


//Add Expense action generatorx
//we destructure the first argument and if it doesn't exist we destructure an empty object
// export const addExpense = (
//   {
//     description = '',
//     note = '',
//     amount = 0,
//     createdAt = 0
//   } = {}
// ) => ({
//   type: 'ADD_EXPENSE',
//   expense: {
//     id: uuid(),
//     description,
//     note,
//     amount,
//     createdAt
//   }
// });
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
  });

  export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
      const {
        description = '',
        note = '',
        amount = 0,
        createdAt = 0
      } = expenseData;
      const expense =  { description, note, amount, createdAt }
      return database.ref('expenses').push(expense).then((ref) => {
        dispatch(addExpense({
          id: ref.key,
          ...expense
        }))
      });
    };
  };
  
  // Remove Expense
  export const removeExpense = ( {id} = {} ) => ({
    type: 'REMOVE_EXPENSE',
    id
  });
  
  
  //Edit Expense
  export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
  })
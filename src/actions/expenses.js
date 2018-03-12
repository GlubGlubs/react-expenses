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
    //dispatch is provided by thunk
    return (dispatch, getState) => {
      const uid = getState().auth.uid;
      const {
        description = '',
        note = '',
        amount = 0,
        createdAt = 0
      } = expenseData;
      const expense =  { description, note, amount, createdAt }
      return database.ref(`users/${uid}/expenses`).push(expense).then((ref) => {
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

  export const startRemoveExpense = ( {id} = {} ) => {
    return (dispatch, getState) => {
      const uid = getState().auth.uid;
      return database.ref(`users/${uid}/expenses/${id}`).remove().then(() => {
        dispatch(removeExpense({id}))
      })
    }
  }
  
  
  //Edit Expense
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

export const startEditExpense = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/expenses/${id}`).update(updates).then(() => {
      dispatch(editExpense(id, updates))
    });
  };
};

  // SET_EXPENSES
  export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
  });

  // export const startSetExpenses

  export const startSetExpenses = () => {
    return (dispatch, getState) => {
      const expenses = [];
      const uid = getState().auth.uid
      //return below allow us to chain a .then at app.js
      return database.ref(`users/${uid}/expenses`)
        .once('value')
        .then((snapshot) => {
          snapshot.forEach((child) => {
            expenses.push({id: child.key, ...child.val()})
          })
          dispatch(setExpenses(expenses));
        })
    }
  }
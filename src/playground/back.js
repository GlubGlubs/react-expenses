import { createStore } from 'redux';

const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
      return {
        count: state.count + incrementBy
      };
      case 'DECREMENT':
      const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : -1;
      return {
        count: state.count + decrementBy
      };
      case 'RESET':
      return {
        count: 0
      };
      case 'SET':
      return {
        count: action.count
      };
      default:
      return state;
  }
});

const unsubscribe  = store.subscribe(() => {
  console.log(store.getState())
});


//Actions - than an object that gets sent to the store

//I'd like to increment the count
store.dispatch({
  type: 'INCREMENT',
  incrementBy: 5
});

store.dispatch({
  type: 'DECREMENT',
  decrementBy: -20
});

store.dispatch({
  type: 'RESET'
});

store.dispatch({
  type: 'SET',
  count: 101
});







// {
// "rules": {
//   ".read": false,
//   ".write": false,
//   "users": {
//     "$user_id": {
//       ".read": "$user_id === auth.uid",
//       ".write": "$user_id === auth.uid",
//       "expenses": {
//         "$expense_id": {
//           ".validate": "newData.hasChildren(['description', 'note', 'createdAt', 'amount'])",
//           "description": {
//             ".validate": "newData.isString() && newData.val().length > 0"
//           },
//           "note": {
//             ".validate": "newData.isString()"
//           },
//           "createdAt": {
//             ".validate": "newData.isNumber()"
//           },
//           "amount": {
//             ".validate": "newData.isNumber()"
//           },
//           "$other": {
//             ".validate": false
//           }
//         }
//       },
//       "$other": {
//         ".validate": false
//       }
//         }
//     }
//   }
// }
import { createStore } from 'redux';

//se tiver um objeto passado que n inclui o incrementby ele é setado para 1 (não cai no ={})
//se nao tiver um objeto o default é {} e quando tentamos descontruir
// retorna incrementby = 1

// payload = {}
const incrementCount = ({ incrementBy = 1} = {}) => ({
  type: 'INCREMENT',
  incrementBy
});

const decrementCount = ({ decrementBy = 1} = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const resetCount = () => 
  ({type: 'RESET'})
;

const setCount = ( { count } ) => ({
  type: 'SET',
  count
})

//Reducers 


const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      };
      case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
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
}



const store = createStore(countReducer)

const unsubscribe  = store.subscribe(() => {
  console.log(store.getState())
});


//Actions - than an object that gets sent to the store

//I'd like to increment the count

store.dispatch(decrementCount( {decrementBy: 333} ))

store.dispatch(resetCount())

store.dispatch(setCount( { count: 101 } ))
store.dispatch(incrementCount({ incrementBy: 5}));
store.dispatch(incrementCount());
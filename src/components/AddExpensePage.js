import React from 'react';
import { connect } from 'react-redux';
import  ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../actions/expenses'

//dispatch here instead of expense form
//so we can re-use expense form to edit too

export class AddExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.startAddExpense(expense);
    this.props.history.push('/');
  };
  render () {
    return   ( 
      <div>
        <h1>Add Expenses</h1>
        <ExpenseForm
         onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddExpense: (expense) => dispatch(startAddExpense(expense))
})


export default connect(undefined, mapDispatchToProps)(AddExpensePage)
import React from 'react';
import { connect } from 'react-redux';
import  ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../actions/expenses'

//dispatch here instead of expense form
//so we can re-use expense form to edit too

export class AddExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.startAddExpense(expense);
    this.props.history.push('/dashboard');
  };
  render () {
    return   ( 
      <div>
        <div className="page-header">
          <div className="content-container">
           <h1 className="page-header__title">Add Expenses</h1>
          </div>

        </div>
          <div className="content-container">
          <ExpenseForm
          onSubmit={this.onSubmit}
          />
          </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddExpense: (expense) => dispatch(startAddExpense(expense))
})


export default connect(undefined, mapDispatchToProps)(AddExpensePage)
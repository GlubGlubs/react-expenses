import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral'
import selectExpenses from '../selectors/expenses'
import selectExpensesTotal from '../selectors/expenses-total'

export const ExpensesSummary = (props) => {
  const expenseWord = props.expenseCount === 1 ? 'expense' : 'expenses'
  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">Viewing <span>{props.expenseCount} </span> 
        {expenseWord} totalling 
      <span> {numeral(props.expensesTotal / 100).format('$0,0.00')}</span></h1>
      <div className="page-header__actions">
        <Link className="button"to="/create">Add Expense</Link>
      </div>
      </div>
    </div>)
};


const mapStateToProps = (state) => {
  return {
    expenseCount: selectExpenses(state.expenses, state.filters).length,
    expensesTotal: selectExpensesTotal(selectExpenses(state.expenses, state.filters))
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
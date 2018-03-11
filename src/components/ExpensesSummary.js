import React from 'react'
import { connect } from 'react-redux';
import numeral from 'numeral'
import selectExpenses from '../selectors/expenses'
import selectExpensesTotal from '../selectors/expenses-total'

export const ExpensesSummary = (props) => {
  const expenseWord = props.expenseCount === 1 ? 'expense' : 'expenses'
  return (
    (props.expenseCount > 0) &&
    (<h1>
      <div>Viewing {props.expenseCount} {expenseWord} totalling 
      - {numeral(props.expensesTotal / 100).format('$0,0.00')}</div>
    </h1>)
  );
};


const mapStateToProps = (state) => {
  return {
    expenseCount: selectExpenses(state.expenses, state.filters).length,
    expensesTotal: selectExpensesTotal(selectExpenses(state.expenses, state.filters))
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
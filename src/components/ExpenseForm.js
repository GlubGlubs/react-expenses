import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

//createdAt: moment() é o default apontando para o presente
// que a library requer
export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: props.expense ? props.expense.description : '',
      note: props.expense ? props.expense.note : '',
      amount: props.expense ? (props.expense.amount / 100).toString() : '',
      createdAt: props.expense ? moment(props.expense.createdAt) :moment(),
      calendarFocused: false,
      error: undefined
    };
  }
  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };
  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }))
  };
  onAmountChange = (e) => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }))
    }
  }
  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({ createdAt }))
    }
  }
  onFocusChange = ( { focused }) => {
    this.setState(() => ({ calendarFocused: focused}))
  }
  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.description || !this.state.amount) {
      //set error equal to Please provide Description and Amount
      this.setState(() => ({error: 'Please provide Description and Amount'}))
    } else {
      //clear the error
      this.setState(() => ({error: undefined}));
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      });
    }
  }
  render () {
    return (
        <form className="form" onSubmit={this.onSubmit}>
        <p className="form__error">{this.state.error}</p>
          <input
            type="text"
            placeholder="description"
            autoFocus
            className="text-input"
            value={this.state.description}
            onChange={this.onDescriptionChange}
           />
           <input
            type="text"
            placeholder="Amount"
            className="text-input"
            value={this.state.amount}
            onChange={this.onAmountChange}
            />
            <SingleDatePicker
              date={this.state.createdAt}
              onDateChange={this.onDateChange}
              focused={this.state.calendarFocused}
              onFocusChange={this.onFocusChange}
              numberOfMonths={1}
              isOutsideRange={(day) => false}
            />
            <textarea
              placeholder="Add a note for your expense (optional)"
              className="textarea"
              value={this.state.note}
              onChange={this.onNoteChange}
            >
            </textarea>
            <div>
              <button className="button">Save Expense</button> 
            </div>
        </form>
    )
  }
};


const d = ['faaaab', 'aaaaaa']
const la = 0
d.sort(function lol(a, b) {
  if (a[la] > b[la]) {
    return 1
  }
  if (a[la] < b[la]) {
    return -1
  }
  if (a == b) {
    return -1
  } else {
    return -1
  }
  
})
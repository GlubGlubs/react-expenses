import moment from 'moment';

//GET visible expenses
export default  (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
      const createdAtMoment = moment (expense.createdAt);
      const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true
      const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true
      const textMatch = typeof text !== 'string' || expense.description.toLowerCase().includes(text.toLowerCase())
      return textMatch;
    }).sort( (a, b) => {
      if (sortBy === 'date') {
        //deu positivo o segundo termo vai pra esquerda
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === 'amount') {
        return a.amount < b.amount ? 1 : -1;
      }
    });
  };
  






  import moment from 'moment';

  export default (polls, { text = '', startDate, endDate }) => {
    return polls.filter((poll) => {
      const createdAt = moment(poll.createdAt);
      const startMatch = startDate ? startDate.isSameOrBefore(createdAt, 'day') : true;
      const endMatch = endDate ? endDate.isSameOrAfter(createdAt, 'day') : true;
      const textMatch = typeof text !== 'string' || poll.pollName.toLowerCase().includes(text.toLowerCase());
      return textMatch && endMatch && startMatch
    })
  }
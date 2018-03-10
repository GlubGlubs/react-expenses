import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should setup default filter value', () => {
  const state = filtersReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({
    text:'',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

test('should set sortBy to amount', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
  expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
  const currentState = {
    text:'',
    startDate: undefined,
    endDate: undefined,
    sortBy: 'amount'
  };
  const action = { type: 'SORT_BY_DATE'};
  const state = filtersReducer(currentState, action);
  expect(state.sortBy).toBe('date')
});

test('should set text filter', () => {
  const state = filtersReducer(undefined, { type: 'SET_TEXT_FILTER', text: 'aloha' });
  expect(state.text).toBe('aloha');
});

test('should set start date filter', () => {
  const momento = moment();
  const state = filtersReducer(undefined, { type: 'SET_START_DATE', startDate: momento });
  expect(state.startDate).toEqual(momento);
});

test('should set end date filter', () => {
  const momento = moment();
  const state = filtersReducer(undefined, { type: 'SET_END_DATE', endDate: momento });
  expect(state.endDate).toEqual(momento);
});
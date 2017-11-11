import moment from 'moment';
import filtersReducers from '../../reducers/filters';

test('should set up default filter vaules', () => {
  const state = filtersReducers(undefined, { type: '@@INIT' });
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

test('should set up sort by to amount', () => {
  const state = filtersReducers(undefined, { type: 'SORT_BY_AMOUNT' });
  expect(state).toEqual({
    text: '',
    sortBy: 'amount',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

test('should set sort by to date', () => {
  const currentState = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    sortBy: 'amount'
  }

  const action = { type: 'SORT_BY_DATE'};
  const state = filtersReducers(currentState, action);

  expect(state.sortBy).toBe('date');

});

//  should set text filter
test('should set text filter to passed string value', () => {
  const action = { type: 'SET_TEXT_FILTER', text: 'bill'};
  const state = filtersReducers(undefined, action);
  expect(state.text).toBe('bill');
 
})

// should set startDate filter
test('should set start date filter to value input', () => {
  const action = { type: 'SET_START_DATE', startDate: 0};
  const state = filtersReducers(undefined, action);
  
  expect(state.startDate).toBe(0);
  
});

// should set endDate filter
test('should set end date filter to value input', () => {
  const action = { type: 'SET_END_DATE', endDate: 14};
  const state = filtersReducers(undefined, action);
  
  expect(state.endDate).toBe(14);
  
});
import { 
  setStartDate,
  setEndDate,
  sortByDate,
  sortByAmount,
  setTextFilter
} from '../../actions/filters';

import moment from 'moment';

//  set start date
test('should generate set start date action object', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  });  

});

// set end date
test('should generate set end date action object', () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  });
});

//  sort by date
test('should sort by date', () => {
  const action = sortByDate();
  expect(action).toEqual({
    type: 'SORT_BY_DATE',
  });
});

// sort by amount
test('should sort by amount', () => {
  const action = sortByAmount();
  expect(action).toEqual({
    type: "SORT_BY_AMOUNT"
  });
});

// set text filter
test('should set text filter with arguemnt passed', () => {
  const action = setTextFilter('bill');
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: 'bill'
  })
});

//set text filter using default
test('should set text filer with default argument', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  });
});

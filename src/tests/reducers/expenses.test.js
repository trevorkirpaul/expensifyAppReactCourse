import expensesReducers from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('should set default state', () => {
  const state = expensesReducers(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducers(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expenses if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  };
  const state = expensesReducers(expenses, action);
  expect(state).toEqual(expenses);
});

//  should add expense

test('should add expense', () => {

  const newExpense = {
    id: '4',
    description: 'MacBook',
    note: '',
    amount: 30000,
    createdAt: moment(0).subtract(4, 'month').valueOf()
  };

  const action = {
    type: 'ADD_EXPENSE',
    expense: newExpense
  };

  const state = expensesReducers(expenses, action);
  expect(state).toEqual([...expenses, newExpense ]);
});

// should edit expense
test('should edit existing expense', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: '1',
    updates: {
      description: 'Amazing Gum'
    }
  };
  const state = expensesReducers(expenses, action);
  expect(state[0].description).toBe('Amazing Gum');
});

// should not edit expense if expense not found
test('should not edit expense if id not found', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: '5',
    updates: {
      description: 'this will not pass through'
    }
  };

  const state = expensesReducers(expenses, action);

  expect(state).toEqual(expenses);
});
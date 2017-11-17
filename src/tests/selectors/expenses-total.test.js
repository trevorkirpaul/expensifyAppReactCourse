import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';


test('should return 0 if no expenses', () => {
  const noExpense = selectExpensesTotal([]);  
  expect(noExpense).toBe(0);
});

test('should correctly add up a single expense', () => {
  const single = selectExpensesTotal([expenses[0]]);
  expect(single).toBe(195);
});

test('should correctly add up multiple expeneses', () => {
  const total = selectExpensesTotal(expenses);  
  expect(total).toBe(114195);
});


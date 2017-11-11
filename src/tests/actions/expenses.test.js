import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should set up remove expense action object', () => {
  
  const action = removeExpense({ id: '1234abc' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '1234abc'
  });

});


test('should set up edit expense action object', () => {
  const action = editExpense('123', {
    amount: 100,
    description: "TestObject",
    note: "cat"
  });

  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "123",
    updates: {
      amount: 100,
      description: "TestObject",
      note: "cat"
    }
  });
});

test('should set up add expense with provided values', () => {
  const expenseData = {
    description: 'Rent',
    amount: 109500,
    createdAt: 1000,
    note: "This was last month's rent"    
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  })
})

test('should set up add expense action object with default value', () => {
  const action = addExpense();

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: '',
      note: '',
      amount: 0,
      createdAt: 0
    }
  });
})
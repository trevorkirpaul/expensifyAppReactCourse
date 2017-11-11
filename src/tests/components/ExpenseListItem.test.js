import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import ExpenseListItem from '../../components/ExpenseListItem';



test('should render ExpenseListItem', () => {
  const wrapper = shallow(<ExpenseListItem key={1} { ...expenses[0] } />);
  expect(wrapper).toMatchSnapshot();
});
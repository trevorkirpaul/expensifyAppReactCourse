import React from 'react';

import { removeExpense } from '../actions/expenses';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({ description, amount, note, createdAt, id, dispatch }) => (
  <div>
    <h3>      
      <Link to={`/edit/${id}`}>{description}</Link>
      
    </h3>
    <p>Amount: {amount}</p>

    {createdAt !== 0 && <p>Created: {createdAt}</p>}    

    {note !== '' && <p>Note: {note}</p> }
    
  </div>
);

export default ExpenseListItem;
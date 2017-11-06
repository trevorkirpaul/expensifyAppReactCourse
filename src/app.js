import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';


const ExpenseDashboardPage = () => (
  <div>
    This is from my dashboard component.
  </div>
);

const AddExpensePage = () => (
  <div>
    This is from my add expense component.
  </div>
);

const EditExpensePage = () => (
  <div>
    This is from my edit expense component.
  </div>
);

const HelpPage = () => (
  <div>
    This is from my help component.
  </div>  
);

const NotFoundPage = () => (
  <div>
    404 error <Link to="/">Go Home</Link>
  </div>  
);

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <nav>
      <ul>

        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/create">Add Expense</Link>
        </li>

        <li>
          <Link to="/edit">Edit Expense</Link>
        </li>

        <li>
          <Link to="/help">Help</Link>
        </li>
        
      </ul>
    </nav>
  </header>
);

//setup react router
const routes = (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch> 
    </div>
  </BrowserRouter> 
);


//render IndecisionApp to div.app 
ReactDOM.render(routes, document.getElementById('app'));


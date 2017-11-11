//  Higher order component (HOC) - A component that renders another component

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

// const withAdminWarning = (WrappedComponent) => {
//   return (props) => (
//     <div>
//       {props.isAdmin && <p>This is private info. Please don't share!</p>}
//       <WrappedComponent {...props} />
//     </div>
//   );
// };

// const AdminInfo = withAdminWarning(Info);


const requireAuthetication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? <WrappedComponent {...props}/> : <p>Unauthorized use!</p>}      
    </div>
  );
}



const AuthInfo = requireAuthetication(Info);



// ReactDOM.render(<AdminInfo isAdmin={false} info="These are the details"/>, document.getElementById('app') );
ReactDOM.render(<AuthInfo isAuthenticated={false} info="These are the details"/>, document.getElementById('app') );
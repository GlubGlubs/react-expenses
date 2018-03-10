console.log('oiii');

import React from 'react';
import ReactDOM from 'react-dom';


const Info = (props) => (
    <div>
      <h1>info</h1>
      <p>the info is2222: {props.info} </p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      { props.isAdmin && <p>This is private info</p>}
      <WrappedComponent {...props} />
    </div>
  )
}

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      { props.isAuthenticated ?
        <WrappedComponent {...props} /> :
        <p>Please Login</p>
        }
    </div>
  )
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="This is the detail" />, document.querySelector("#app"));
ReactDOM.render(<AuthInfo isAuthenticated={false} info="This is the detail" />, document.querySelector("#app"));
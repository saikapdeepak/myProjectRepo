import React, { Component } from 'react';
import Signup from './components/Signup';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Login from './components/Login';
import Main from './components/appNavigation/main';
import Cart from './components/appNavigation/cart';

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem("auth_status") === "true" ? (
          <Component {...props} />
        ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location }
              }}
            />
          )
      }
    />
  );
}

export function Logout(...rest) {
  localStorage.removeItem("auth_status");
  return (
    <Route
      {...rest}
      render={props =>
        (localStorage.getItem("auth_status")) ? (
          <Component {...props} />
        ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location }
              }}
            />
          )
      }
    />
  )

}


export function Logout_fun() {
  localStorage.removeItem("EmpName");
  localStorage.setItem("auth_status", "false");
}

export function Login_fun() {
  localStorage.setItem("auth_status", "true");
}
class App extends Component {


  render() {
    var data = localStorage.getItem("auth_status");
    
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />
          <PrivateRoute path="/main" component={Main} isAuthenticated={data} />
          <PrivateRoute path="/cart" component={Cart} isAuthenticated={data} />
        </Switch>
      </Router>
    );
  }
}

export default App;

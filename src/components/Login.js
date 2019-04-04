import React, { Component } from 'react';
import './css design/Login.css';
import { Link } from "react-router-dom";
// import Main from './appNavigation/main';

import { Login_fun } from "../App";
const API = 'http://localhost:8500/userDetails';



class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      employeeDetails: [],
      // loginStatus: false
    }
    this.handleUserInput = this.handleUserInput.bind(this);
    this.Submit = this.Submit.bind(this);
  }

  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(data => {
        this.setState({ employeeDetails: data });
        // console.log(this.state.employeeDetails);
      }
      );
  }
  Submit() {
    this.state.employeeDetails.forEach(({ Email, EmpPassword, EmpName }) => {
      if (Email === this.state.email && EmpPassword === this.state.password) {
        Login_fun();
        window.localStorage.setItem("EmpName", EmpName)
        window.location.assign("/main")
      }
    });

    // if (this.state.loginStatus !== true) {
    //   // console.log("Wrong credential");
    // }
    //   else {
    //     window.location.href = "Main";

    //   }
  }

  handleUserInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value })
  }

  render() {
    return (
      <div>
        <div className="container-flex wrapper" >

          <form name="loginForm" >
            <fieldset>

              <div className="img" >
                <img className="img-responsive" src="../Images/DeloitteLogo.jpg" alt="Deloitte Logo" align="middle" />
              </div>
              <div className="form-group">
                <input type="email" name="email" className="form-control" placeholder="Email Id" id="email" value={this.state.email} onChange={(event) => this.handleUserInput(event)} />
              </div>
              <div className="form-group">
                <input type="password" name="password" className="form-control" placeholder="Password" id="pwd" value={this.state.password} onChange={(event) => this.handleUserInput(event)} required />
              </div>
              <div className="checkbox">
                <label><input type="checkbox" /> Remember me</label>
              </div>
              <input type="button" className="btn btn-success btn-block" value="Login" onClick={this.Submit} /> <br />
            </fieldset>
          </form>
          <div className="signuplink">
            New User? <Link to="/Signup"> <ins>Signup</ins> </Link>
          </div>
        </div>

      </div>
    )
  }
}
export default Login;
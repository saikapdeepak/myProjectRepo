import React, { Component } from 'react'
import './css design/Login.css';
import { Link }from 'react-router-dom';
import axios from 'axios';
// import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
const API ='http://localhost:8500/userRegistration';

export default class DemoLogin extends Component {

    constructor() {
        super();
        this.state = {
          fields: {},
          errors: {}
        }
        this.handleChange = this.handleChange.bind(this);
        this.submitRegistrationForm = this.submitRegistrationForm.bind(this);
    };
    
    handleChange(e) {
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({
          fields
        });
  
      }

      submitRegistrationForm(e) {
        e.preventDefault();
        if (this.validateForm()) {
            const { employeename, empolyeenumber, email, password} = this.state.fields;
            axios.post(API, { employeename, empolyeenumber, email, password });
            alert("Account created . Please Login");
            window.location.assign("/login")

        }
        else alert("Invalid Form");
      }

      validateForm() {

        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
  
        if (!fields["employeename"]) {
          formIsValid = false;
          errors["employeename"] = "*Please enter your username.";
        }
  
        if (typeof fields["employeename"] !== "undefined") {
          if (!fields["employeename"].match(/^[a-zA-Z ]*$/)) {
            formIsValid = false;
            errors["employeename"] = "*Please enter valid name.";
          }
        }

        if (!fields["empolyeenumber"]) {
            formIsValid = false;
            errors["empolyeenumber"] = "*Please enter your employee number.";
          }
  
        if (!fields["email"]) {
          formIsValid = false;
          errors["email"] = "*Please enter your email-ID.";
        }
  
        if (typeof fields["email"] !== "undefined") {
          //regular expression for email validation
          var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
          if (!pattern.test(fields["email"])) {
            formIsValid = false;
            errors["email"] = "*Please enter valid email-ID.";
          }
        }
  
        
        if (!fields["password"]) {
          formIsValid = false;
          errors["password"] = "*Please enter your password.";
        }

        if (!fields["repassword"]) {
            formIsValid = false;
            errors["repassword"] = "*Please enter password.";
          }
  
        if (typeof fields["password"] !== "undefined") {
          if (fields["password"] !== fields["repassword"]) {
            formIsValid = false;
            errors["password"] = "*Password Mismatch.";
          }
        }
  
        this.setState({
          errors: errors
        });
        return formIsValid;
  
  
      }


  render() {
    return (
      <div>
        <div className="container-flex wrapper">
            <form name="loginForm" method="post" onSubmit= {this.submitRegistrationForm} >
                <fieldset>
                    
                    <div className="img" >
                        <img className="img-responsive" src="../Images/DeloitteLogo.jpg" alt="Deloitte Logo" align="middle"   />
                    </div>
                    <div className="form-group">    
                        <label><b>Sign Up</b></label>
                        <input type="text" name="employeename" className="form-control inputField" placeholder="Employee Name" id="username" onChange={this.handleChange} />
                        <div className="errorMsg">{this.state.errors.employeename}</div>
                    </div>
                    <div className="form-group"> 
                        <input type="text" name="empolyeenumber" className="form-control inputField" placeholder="Employee Number " id="usernumber" onChange={this.handleChange} />
                        <div className="errorMsg">{this.state.errors.empolyeenumber}</div>
                    </div>
                    <div className="form-group">
                        <input type="email" name="email" className="form-control inputField" placeholder="Email Id" id="email" onChange={this.handleChange}  />
                        <div className="errorMsg">{this.state.errors.email}</div>
                    </div>
                    <div className="form-group">
                        <input type="password" name="password" className="form-control inputField" placeholder="Password" id="pwd" onChange={this.handleChange}/>
                        <div className="errorMsg">{this.state.errors.password}</div>
                    </div>
                    <div className="form-group">
                        <input type="password" name="repassword" className="form-control inputField" placeholder="Re-type Password" id="rpwd" onChange={this.handleChange}/>
                        <div className="errorMsg">{this.state.errors.repassword}</div>
                    </div>
                    
                        <input type="submit" className="btn btn-success btn-block" value="SIGN ME UP" /> 
                </fieldset>
            </form>
            <div className="signin">
                    No, I have an Account. <Link to="/Login"> <ins>Signin</ins> </Link>
                    </div>
        </div>
      </div>
    )
  }
}

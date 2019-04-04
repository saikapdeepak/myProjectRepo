import React, { Component } from 'react';
import '../css design/header.css';
// import Cart from '../appNavigation/cart';
// import * as App from '../../App.js';
import { BrowserRouter as Router,Link } from "react-router-dom";
import { Logout_fun } from "../../App"
import Main from './main';



export default class header extends Component {
  render() {
    return (
      <div className="container-fluid headerrow">
        <div className="row">
          <div className="col-9"><img className="img-responsive" src="../Images/Deloittelogo1.jpg" alt="P001" width="35%" /></div>
          {/* <div className="col-2"></div> */}
          <div className="col-3">
            <div className="row" >
              <div className="col" style={{ float:"right" }} >Welcome &nbsp; {localStorage.getItem("EmpName")}</div>
              
            </div>
              
            <div >
              <Router>
                <div className="row linkcontain">
                  <div className="col linkcontain1">
                  <Link to="/main" onClick={() => Main} > Home  </Link>
                  </div>
                  <div className="col linkcontain1">
                 
                  </div>
                  <div className="col linkcontain2">
                   
                  </div>
                  <div className="col linkcontain2">  
                    <a to="/login" href="/login"   onClick={() => { Logout_fun(); window.location.assign("/main") }}> Logout</a>
                  </div>
                 </div> 
              </Router>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

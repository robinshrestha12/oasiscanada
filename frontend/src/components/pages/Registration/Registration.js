import React from "react";
import './Registration.css';
//import { useHistory } from "react-router-dom";

function Registration() {
  //let history = useHistory();
  return (
    <div className="form">
      <div className="form-body">
        <div className="firstName">
          <label className="form_label" for="firstName">First Name</label>
          <input className="form_input" type="text" id="firstName" placeholder="First Name" />
        </div>
        <div className="lastName">
          <label className="form_label" for="lastName">Last Name</label>
          <input className="form_input" type="text" id="lastName" placeholder="Last Name" />
        </div>
        <div className="email">
          <label className="form_label" for="email">Email</label>
          <input className="form_input" type="text" id="email" placeholder="email" />
        </div>
        <div className="memberCode">
          <label className="form_label" for="email">MemberCode</label>
          <input className="form_input" type="text" id="memberCode" placeholder="Member Code" />
        </div>
        <div className="password">
          <label className="form_label" for="password">Password</label>
          <input className="form_input" type="text" id="firstName" placeholder="Password" />
        </div>
        <div className="confirmPassword">
          <label className="form_label" for="confirmPassword">Confirm Password</label>
          <input className="form_input" type="text" id="confirmPassword" placeholder="Confirm Password" />
        </div>

      </div>
      <div className="footer">
        <button type="submit" className="btn1">Register</button>
        <button type="submit" className="btn2" >Cancel</button>
      </div>

    </div>
  )
}

export default Registration;
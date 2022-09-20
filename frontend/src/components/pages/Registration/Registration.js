import React, { useState } from "react";
import './Registration.css';
import { useHistory } from "react-router-dom";
import axios from 'axios';

function Registration() {
  let history = useHistory();
  const [firstName, setFirstName ]= useState("");
  const [lastName, setLastName] = useState("");
  const [userEmail, setUseremail] = useState("");
  const [code, setMembercode]= useState("");
  const [userPassword, setPassword] = useState("");
  const [confirmPassword, setConfirmpassword]= useState("");

  function addUserDetails(user){
    console.log("User to be added: ", user);
    return axios.post(`http://localhost:8080/users`, user)
    .then((response) => {
      const newUsers = response.data;
      console.log(newUsers);
    })
  }
  function resetForm(){
    setFirstName("");
    setLastName("");
    setUseremail("");
    setMembercode("");
    setPassword("");
   setConfirmpassword("");
  }

  function onSubmitForm(e) {
    e.preventDefault();
    const user={
      firstName,
      lastName,
      userEmail,
      code,
      userPassword
    }
    addUserDetails(user);
    resetForm();
  }


  return (
    <div className="form">
      <div className="form-body">
        <div className="firstName">
          <label className="form_label" htmlFor="firstName">First Name</label>
          <input className="form_input" type="text" id="firstName" placeholder="First Name" value={firstName}
          onChange={e => setFirstName(e.target.value)} />
        </div>
        <div className="lastName">
          <label className="form_label" htmlFor="lastName">Last Name</label>
          <input className="form_input" type="text" id="lastName" placeholder="Last Name" 
          value={lastName}
          onChange={e => setLastName(e.target.value)}/>
        </div>
        <div className="email">
          <label className="form_label" htmlFor="email">Email</label>
          <input className="form_input" type="text" id="email" placeholder="email" 
          value={userEmail}
          onChange={e=> setUseremail(e.target.value)}/>
        </div>
        <div className="memberCode">
          <label className="form_label" htmlFor="email">MemberCode</label>
          <input className="form_input" type="text" id="memberCode" placeholder="Member Code"
          value={code}
          onChange={e=>setMembercode(e.target.value)} />
        </div>
        <div className="password">
          <label className="form_label" htmlFor="password">Password</label>
          <input className="form_input" type="text" id="firstName" placeholder="Password" 
          value={userPassword}
          onChange={e=>setPassword(e.target.value)}/>
        </div>
        <div className="confirmPassword">
          <label className="form_label" htmlFor="confirmPassword">Confirm Password</label>
          <input className="form_input" type="text" id="confirmPassword" placeholder="Confirm Password" 
          value={confirmPassword}
          onChange={e=>setConfirmpassword(e.target.value)}/>
        </div>

      </div>
      <div className="footer">
        <button type="submit" className="btn1" onClick={onSubmitForm}>Register</button>
        <button type="submit" className="btn2" onClick={() => history.goBack()}>Cancel</button>
      </div>

    </div>
  )
}

export default Registration;
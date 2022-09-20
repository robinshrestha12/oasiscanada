import React, { useState, useEffect } from "react";
import '../Registration/Registration.css';
import { Redirect, useHistory } from "react-router-dom";
import {Link} from 'react-router-dom';
import axios from 'axios';
import './Login.css';

//import {Routes, Route, useNavigate} from 'react-router-dom';



function Login() {
  
  let history = useHistory();
  //const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [loginUseremail, setLoginUseremail] = useState("");
  const [loginpassword, setloginpassword]= useState("");
  const [loginError, setLoginError] = useState("false");
  console.log(users);
  const fetchData =() =>{
    const userApi = `http://localhost:8080/users`;
    axios.get(userApi)
    .then(function(res){
      console.log(res.data);
      setUsers([...res.data]);
      //console.log(users);
    })

  }
  useEffect(() => {
    fetchData();
  }, [])

  function addUser(){
    const filtered_user_table = users.filter(user => {
      //console.log(user.useremail, user.userpassword);
      return user.useremail === loginUseremail && user.userpassword === loginpassword;
    })
    if(filtered_user_table.length>0){
      console.log("user exists");
      setLoginError("False");
      history.push("/member");
    }
    else {
      console.log("User does not exists.");
      setLoginError("True");
    }
  }
  return (
    <div className="form">
      <div className="form-body">
      {loginError==="True" && <div className="errorlogin">User does not exists.</div>}
      <form onSubmit={e => e.preventDefault()}>
     
        <div className="username">
          <label className="form_label" htmlFor="useremail">User Email</label>
          <input className="form_input" type="text" id="useremail" placeholder="example@example.com" 
          value={loginUseremail}
          onChange={e=>setLoginUseremail(e.target.value)}/>
        </div>
       
        <div className="password">
          <label className="form_label" htmlFor="password">Password</label>
          <input className="form_input" type="text" id="password" placeholder="Password"
          value={loginpassword}
          onChange={e=>setloginpassword(e.target.value)}/>
        </div>
        </form>
      </div>
      
      <div className="footer">
        <button type="submit" className="btn1" onClick={addUser}>Login</button>
        <button type="submit" className="btn2" onClick={() => history.goBack()}>Cancel</button>
      </div>
      <br></br>
      <div className="forgot">Forgot Username or Password? Click 
      <Link to={"./Registration"}> here</Link>.</div>
      <div className="newmember">Want to be a member?, get code from Admin and click <Link to={"./Registration"}> here</Link> to open an account.</div>

    </div>
  )
}

export default Login;
import React, { useState, useEffect } from "react";
import '../Registration/Registration.css';
import { useHistory } from "react-router-dom";
import {Link} from 'react-router-dom';
import axios from 'axios';



function Login() {
  
  let history = useHistory();
  const [users, setUsers] = useState([]);
  const [useremail, setUseremail] = useState("");
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
      return user.useremail = useremail;
    })
    if(filtered_user_table.length>0){
      console.log("user exists");
      return;
    }
  }
  return (
    <div className="form">
      <div className="form-body">
      <form onSubmit={e => e.preventDefault()}>
        <div className="username">
          <label className="form_label" for="username">User Email</label>
          <input className="form_input" type="text" id="username" placeholder="example@example.com" />
        </div>
       
        <div className="password">
          <label className="form_label" for="password">Password</label>
          <input className="form_input" type="text" id="firstName" placeholder="Password" />
        </div>
        </form>
      </div>
      
      <div className="footer">
        <button type="submit" className="btn1">Login</button>
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
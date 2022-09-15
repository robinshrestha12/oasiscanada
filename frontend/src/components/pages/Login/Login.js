import React from "react";
import '../Registration/Registration.css';
import { useHistory } from "react-router-dom";
import {Link} from 'react-router-dom';

function Login() {
  let history = useHistory();
  return (
    <div className="form">
      <div className="form-body">
    
        <div className="username">
          <label className="form_label" for="username">User Name</label>
          <input className="form_input" type="text" id="username" placeholder="username" />
        </div>
       
        <div className="password">
          <label className="form_label" for="password">Password</label>
          <input className="form_input" type="text" id="firstName" placeholder="Password" />
        </div>
     
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
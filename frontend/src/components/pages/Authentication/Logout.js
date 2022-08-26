import React from "react";
function Logout(){
    const handleLogout=()=> {
        localStorage.clear();
        window.location.pathname="/";
    }
    return(
        <div>
   
    <button className="btn btn-primary" onClick={handleLogout}>
        Logout
    </button>
    </div>
 )
}
export default Logout;
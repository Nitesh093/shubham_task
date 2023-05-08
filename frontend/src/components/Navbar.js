import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";





export default function Navbar(){
  
  
  const navigate=useNavigate();
  const handleLogout=()=>{
    
    localStorage.removeItem("authToken")
    localStorage.removeItem("userEmail")
    navigate("/login")
    window.location.reload()
    
  }

    return <div>

<nav className="navbar navbar-expand-lg navbar-dark bg-success">
  
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav me-auto mb-2">
      
    <Link className="nav-item nav-link active "  to="/">Home</Link>
    {(localStorage.getItem("authToken"))?
    <Link className="nav-item nav-link active " to="/products">My orders</Link>:""

    }
      
      
    </div>
    {(!localStorage.getItem("authToken"))?
      <div className="d-flex">
      <Link className="nav-item nav-link btn bg-white text-success mx-1 " to="/login">Login <span className="sr-only"></span></Link>
      
      <Link className="nav-item nav-link btn bg-white text-success mx-1 " to="/signup">Signup</Link>
      </div>:<div><Link className="nav-item nav-link btn bg-white text-danger mx-1 d-inline" onClick={handleLogout}>Logout</Link>
      
        
      </div>
      

    }
    
    
  </div>
</nav>
    </div>
}
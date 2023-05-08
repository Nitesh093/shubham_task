import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";


export default function Home(){
  
    
    return (<div>
        <div> <Navbar/></div> 
        
      <h1 className="HomeText">{localStorage.getItem("authToken")?" evolvan please click on products to watch products" :" evolvan please login first or sign up and then watch the product" }</h1>
         
    </div>)
}
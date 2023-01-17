import React, { useState } from "react";
import "./StartPage.css";
import logo from "./logo_1.png"
import { Link } from "react-router-dom";

const StartPage = () => {
     
  return (
    <div className="start">
        <div className="block">
        <img src={logo} alt="logo" 
        style={{height: "210px",width:"230px",marginLeft:"40px",marginTop:"30px"}} >

        </img>
        <div className="block-inner">
        <h1 style=
        {{marginBottom: "25px",marginLeft:"40px",marginTop:"10px",fontSize:"20px"}}>
            Welcome to Gas Cylinder</h1>
        <div className="button-login">
        <Link to = "/login" style={{color: "white"}}>
        <button
        style={{
        marginTop: "5px",height: "50px",fontSize:"15px",marginRight: "10px",outlineColor: "orange"}}>         
            Login As Super Admin
            </button>
            </Link>
            <Link to = "/AdminLogin" style={{color: "white"}}>
        <button style={{marginTop: "5px",height: "50px",fontSize:"15px",outlineColor: "orange"}}>
       Login As Admin</button></Link>
        </div>
        </div>
        </div>
      
            </div>
                      
       
  );
};

export default StartPage;

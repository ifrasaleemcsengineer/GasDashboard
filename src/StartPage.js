import React, { useState } from "react";
import "./StartPage.css";
import logo from "./logo_1.png"
import Login from "./SuperAdmin/Login/Login"
import { Link, Route, BrowserRouter  } from "react-router-dom";
import { Router, Routes } from "react-router-dom/dist";
import { useNavigate } from "react-router-dom/dist";
// import { navigate } from "react-router-dom/dist";
const StartPage = () => {
    let navigate = useNavigate();
  
  return (
    <div className="start">
        <div className="block">
        <img src={logo} alt="logo" style={{height: "210px",width:"230px",marginLeft:"40px",marginTop:"30px"}} ></img>
        <div className="block-inner">
        <h1 style={{marginBottom: "25px",marginLeft:"40px",marginTop:"10px",fontSize:"20px"}}>Welcome to Gas Cylinder</h1>
        <div className="button-login">
       {/* <BrowserRouter>
        <Link to ="login">Login As Super Admin</Link>
       
       </BrowserRouter> */}
       {/* <Routes>
          <Route exact path="/login" element={<Login/>}/>
          
        </Routes> */}
        <button onClick={() => {navigate("login")}}
        style={{
        marginTop: "5px",height: "50px",fontSize:"15px",marginRight: "10px"}}>
            Login As Super Admin
            </button>
            {/* <Routes>
            <Route path = "/login" element = {<Login />}></Route>
        </Routes> */}
        <button style={{marginTop: "5px",height: "50px",fontSize:"15px"}}>Login As Admin</button>
        </div>
        </div>
        </div>
      
            </div>
                      
       
  );
};

export default StartPage;

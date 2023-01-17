import React from "react";
import "./style/dark.scss";
import StartPage from "./StartPage";
import AdminDashboard from "./Dashboards/AdminDashboard";
import { Switch } from "react-router-dom";
import { Route, Router, Routes } from "react-router-dom/dist";
import Login from "./SuperAdmin/Login/Login";
import AdminLogin from "./admin/Login/Login";



function App() {

  return (
    <div className="app">
      <Routes>
            <Route path = "/login" element = {<Login />}></Route>
            <Route path = "/AdminLogin" element = {<AdminLogin />}></Route>
        </Routes>
     <StartPage />
    
    </div>
  );
}

export default App;

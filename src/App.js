import React from "react";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./SuperAdmin/context/darkModeContext";

import SuperadminDashboard from "./superAdminDashboard";
import AdminDashboard from "./AdminDashboard";


function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className="app">
     <SuperadminDashboard />
     <AdminDashboard />
    </div>
  );
}

export default App;

import React from "react";
import "./style/dark.scss";
import SuperadminDashboard from "./Dashboards/superAdminDashboard";
import AdminDashboard from "./Dashboards/AdminDashboard";


function App() {

  return (
    <div className="app">
     <SuperadminDashboard />
     <AdminDashboard />
    </div>
  );
}

export default App;

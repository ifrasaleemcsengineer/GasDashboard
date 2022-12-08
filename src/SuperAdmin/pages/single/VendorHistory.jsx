import "./single.scss";
import Sidebar from "../../components/supersidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
// import Chart from "../../components/chart/Chart";

import VendorTable from "../../components/table/VendorTable";

const VendorHistory = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        
        <h1 className="title">Vendor History</h1>
          <VendorTable/>
        </div>
      </div>
   
  );
};

export default VendorHistory;



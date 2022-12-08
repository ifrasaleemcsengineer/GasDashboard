import "./single.scss";
import Sidebar from "../../components/supersidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
// import Chart from "../../components/chart/Chart";
import AdminTable from "../../components/table/AdminTable";

const AdminHistory = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        
        <h1 className="title">Admin History</h1>
          <AdminTable/>
        </div>
      </div>
   
  );
};

export default AdminHistory;



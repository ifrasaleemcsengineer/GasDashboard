import "./single.scss";
import Sidebar from "../../components/supersidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
// import Chart from "../../components/chart/Chart";
import UserTable from "../../components/table/UserTable";

const UserHistory = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        
        <h1 className="title">User History</h1>
          <UserTable/>
        </div>
      </div>
   
  );
};

export default UserHistory;



import "../list/list.scss";
import Sidebar from "../../components/supersidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import HistoryAdmins from "../../components/datatable/HistorytableAdmins";

const AdminsHistory = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <HistoryAdmins />
      </div>
    </div>
  );
};

export default AdminsHistory;

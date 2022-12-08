import "../list/list.scss";
import Sidebar from "../../components/supersidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import HistoryUsers from "../../components/datatable/HistorytableUsers";

const UsersHistory = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <HistoryUsers />
      </div>
    </div>
  );
};

export default UsersHistory;

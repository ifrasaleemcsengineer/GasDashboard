import "../list/list.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import MyHistoryTable from "../../components/datatable/MyHistorytable";

const MyHistory = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <div className="datatable">

          <div className="datatableTitle">My History</div>
          <MyHistoryTable />
        </div>
      </div>
    </div>
  );
};

export default MyHistory;

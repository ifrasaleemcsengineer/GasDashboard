import "../list/list.scss";
import Sidebar from "../../components/supersidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import HistoryVendors from "../../components/datatable/HistorytableVendors";

const VendorsHistory = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <HistoryVendors />
      </div>
    </div>
  );
};

export default VendorsHistory;
